import Header from './Header'
import {useState} from 'react';

function AddProduct()
{
    const [name,setName]=useState("");
    const [file,setFile]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");

    async function addProduct()
    {
        //console.warn(name,file,price,description);
        const formData=new FormData();
        formData.append("file",file)
        formData.append("name",name)
        formData.append("price",price)
        formData.append("description",description)

        let result = await fetch("http://digitalabhi.co.in/ecomm-backend/api/addproduct",{
            method: 'POST',
            body: formData
        });

        alert("Data has been saved.");
    }

    return(
        <>
        <Header />
        <div>
            <h1>Add Product Page</h1>
            <input type="text" className="form-control" placeholder="Product Name" onChange={(e)=>setName(e.target.value)} /> <br /> 
            <input type="file" className="form-control" placeholder="file" onChange={(e)=>setFile(e.target.files[0])} /> <br />
            <input type="text" className="form-control" placeholder="Price" onChange={(e)=>setPrice(e.target.value)} /> <br />
            <textarea className="form-control" placeholder="Description" onChange={(e)=>setDescription(e.target.value)} /> <br />
            <button className="btn btn-primary" onClick={addProduct}>Add Product</button>                      
        </div>
        </>
    )
}

export default AddProduct
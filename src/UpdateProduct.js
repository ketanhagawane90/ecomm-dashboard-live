import Header from './Header';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateProduct()
{
    const navigate=useNavigate();
    const { id } = useParams();
    //console.warn(id)
    const [product, setProduct] = useState([]);

    const [name,setName]=useState("");
    const [file,setFile]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");

    useEffect(() => {
        // Fetch existing product data based on the provided productId
        axios.get('http://digitalabhi.co.in/ecomm-backend/api/product/'+id)
          .then(response => {
            setProduct(response.data);
            //console.warn(response.data);
            setName(response.data.name);
            setPrice(response.data.price);
            setDescription(response.data.description);
            setFile(response.data.file);
          })
          .catch(error => {
            console.error('Error fetching product data:', error);
          });
      }, [id]);

    async function editProduct(id)
    {
      //alert(id);
      const formData=new FormData();
      formData.append("file",file)
      formData.append("name",name)
      formData.append("price",price)
      formData.append("description",description)

      let result = await fetch("http://digitalabhi.co.in/ecomm-backend/api/updateproduct/"+id+"?_method=PUT",{
          method: 'POST',
          body: formData
      });

      alert("Data has been updated.");
      navigate("/"); 
    }

    return(
        <>
        <Header />
        <div className="col-sm-6 offset-sm-3">            
            <h1>Update Product Page</h1>
            <input type="text" className="form-control" defaultValue={product.name} onChange={(e)=>setName(e.target.value)} /> <br />
            <input type="text" className="form-control" defaultValue={product.price} onChange={(e)=>setPrice(e.target.value)} /> <br />
            <input type="text" className="form-control" defaultValue={product.description} onChange={(e)=>setDescription(e.target.value)} /> <br />            
            <input type="file" className="form-control" defaultValue={product.file_path} onChange={(e)=>setFile(e.target.files[0])} /> <br />
            <img style={{width:100}} src={"http://digitalabhi.co.in/ecomm-backend/storage/app/"+product.file_path} /> <br />
            <button onClick={()=>editProduct(product.id)}>Update</button>           
        </div>
        </>
    )
}

export default UpdateProduct
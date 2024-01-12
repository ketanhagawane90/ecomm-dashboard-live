import Header from './Header'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { Form, Row, Col, Button, Container } from "react-bootstrap";

function AddProduct()
{
    const [name,setName]=useState("");
    const [file,setFile]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");
    const navigate=useNavigate();

    async function addProduct()
    {
        console.warn(name,file,price,description);
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
        navigate("/");
    }

    return(
        <>
        <Header />

        <Container className='pt-5 pb-5'>
        <Row>
        <Col md={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className='d-flex'>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Product Name" onChange={(e)=>setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className='d-flex'>Description</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e)=>setDescription(e.target.value)} />
            </Form.Group>            
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label className='d-flex'>Price</Form.Label>
                <Form.Control type="text" placeholder="Price" onChange={(e)=>setPrice(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label className='d-flex'>Product Image</Form.Label>
                <Form.Control type="file" onChange={(e)=>setFile(e.target.files[0])} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={addProduct}>
                Submit
            </Button>
        </Col>
        </Row>
        </Container>

        {/* <div>
            <h1>Add Product Page</h1>
            <input type="text" className="form-control" placeholder="Product Name" onChange={(e)=>setName(e.target.value)} /> <br /> 
            <input type="file" className="form-control" placeholder="file" onChange={(e)=>setFile(e.target.files[0])} /> <br />
            <input type="text" className="form-control" placeholder="Price" onChange={(e)=>setPrice(e.target.value)} /> <br />
            <textarea className="form-control" placeholder="Description" onChange={(e)=>setDescription(e.target.value)} /> <br />
            <button className="btn btn-primary" onClick={addProduct}>Add Product</button>                      
        </div> */}
        </>
    )
}

export default AddProduct
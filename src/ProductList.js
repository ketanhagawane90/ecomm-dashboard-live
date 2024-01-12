import Header from "./Header";
import React,{useState,useEffect} from "react";
import axios from 'axios';
import { Table,Container, Row } from "react-bootstrap";
import {Link} from 'react-router-dom';

function ProductList()
{
    const [products, setProducts] = useState([]);

    useEffect(() => {
      // Fetch data from API using axios
      getData()
    }, []);

    async function deleteOperation(id)
    {
      //alert(id);
      let result = await fetch("http://digitalabhi.co.in/ecomm-backend/api/delete/"+id,{
        method: 'DELETE'
      });
      result = await result.json();
      console.warn(result);
      getData()
    } 

    async function getData()
    {
      axios.get('http://digitalabhi.co.in/ecomm-backend/api/list')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }

    return(
        <>
        <Header />
        <Container className="pt-5 pb-5">
        <Row>           
            {/* <h1>Product List</h1> */}
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Image</th>
                <th>Description</th>
                <th>Price</th>
                <th>Operations</th>
                </tr>
            </thead>
            <tbody>
            {products.map(product => (
                    <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td><img src={"http://digitalabhi.co.in/ecomm-backend/storage/app/"+product.file_path} style={{width:100}} /></td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td><span className="deleteBtn" onClick={()=>{deleteOperation(product.id)}}>Delete</span></td>
                    <td><Link to={"/update/"+product.id}><span className="updateBtn">Update</span></Link></td>
                    </tr>
            ))}
            </tbody>
            </Table>
        </Row>                       
        </Container>
        </>
    )
}

export default ProductList;
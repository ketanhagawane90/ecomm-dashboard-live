import Header from "./Header";
import React,{useState,useEffect} from "react";
import axios from 'axios';
import { Table } from "react-bootstrap";

function ProductList()
{
    const [products, setProducts] = useState([]);

    useEffect(() => {
      // Fetch data from API using axios
      axios.get('http://digitalabhi.co.in/ecomm-backend/api/list')
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

    async function deleteOperation(id)
    {
      //alert(id);
      let result = await fetch("http://digitalabhi.co.in/ecomm-backend/api/delete/"+id,{
        method: 'DELETE'
      });
      result = await result.json();
      console.warn(result);
    }

    return(
        <>
        <Header />
        <div className="col-sm-8 offset-sm-2">            
            <h1>Product List</h1>
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
                    <td><img src={"http://digitalabhi.co.in/ecomm-backend/"+product.file_path} style={{width:100}} /></td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td><span className="deleteBtn" onClick={()=>{deleteOperation(product.id)}}>Delete</span></td>
                    </tr>
            ))}
            </tbody>
            </Table>          
        </div>
        </>
    )
}

export default ProductList;
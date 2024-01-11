import Header from './Header'
import {useState} from 'react';
import { Table } from "react-bootstrap";
import axios from 'axios';

function SearchProduct()
{
    const [products, setProducts] = useState([]);

    async function search(key)
    {
        if(key.length>1)
        {
            axios.get('http://digitalabhi.co.in/ecomm-backend/api/search/'+key)
            .then(response => {
              setProducts(response.data);
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });
        }      
    }

    return(
        <>
        <Header />
        <div className="col-sm-6 offset-sm-3">
            <h1>Search Product Page</h1>
            <br /><br />
            <input type="text" className="form-control" placeholder="Search Product" onChange={(e)=>search(e.target.value)} />
            {
            products.length>0?                    
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Image</th>
                <th>Description</th>
                <th>Price</th>
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
                    </tr>
            ))}
            </tbody>
            </Table>
            : <h2>Search Product</h2>
            }                              
        </div>
        </>
    )
}

export default SearchProduct 
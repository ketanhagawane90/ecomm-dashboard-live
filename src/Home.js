import Header from "./Header";
import CarouselHome from "./components/CarouselHome";
import React,{useState,useEffect} from "react";
import axios from 'axios';
import { Table } from "react-bootstrap";
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home()
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
        <CarouselHome />

        <Container>
        <h1>Product List</h1>
        <Row xs={1} md={3} lg={3}>
            {products.map(product => (
                    <Col className="mt-5">                        
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"http://digitalabhi.co.in/ecomm-backend/storage/app/"+product.file_path} className="d-block m-auto" style={{ width: '200px', height: '200px' }} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {product.description}
                                <p>Price: {product.price}</p>
                            </Card.Text>
                            <Button variant="primary">Add to Cart</Button>
                        </Card.Body>
                        </Card>                        
                    </Col>
            ))}            
        </Row>
        </Container>        
        {/* <div className="col-sm-8 offset-sm-2">            
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
                    <td><img src={"http://digitalabhi.co.in/ecomm-backend/storage/app/"+product.file_path} style={{width:100}} /></td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td><span className="deleteBtn" onClick={()=>{deleteOperation(product.id)}}>Delete</span></td>
                    <td><Link to={"/update/"+product.id}><span className="updateBtn">Update</span></Link></td>
                    </tr>
            ))}
            </tbody>
            </Table>          
        </div> */}
        </>
    )
}

export default Home;
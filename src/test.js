import Header from "./Header";
import React,{useState,useEffect} from "react";
import axios from 'axios';

function ProductList()
{
    const [products, setProducts] = useState([]);

    useEffect(() => {
      // Fetch data from API using axios
      axios.get('http://localhost:8000/api/list')
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

    return(
        <div>
            <Header />
            <h1>Product List</h1>
            <ul>
            {products.map(product => (
            <li key={product.id}>
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
            </li>
            ))}
      </ul>            
        </div>
    )
}

export default ProductList;
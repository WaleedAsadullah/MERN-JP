import Product from "../component/Product"
import axios from "axios"
import { useState } from "react";
import { Button } from "@mui/material"
import { Link, useNavigate } from "react-router-dom";

export default function ShopPage(){
    const [product,updateProduct]:any = useState([]);
    const Navigation = useNavigate()
    const getProducts = () => {
        axios.get('https://fakestoreapi.com/products')
        .then((response)=>{
            updateProduct(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    
    return (
        <>
        <Link to='/api' >ApiHandling</Link>
        <Button variant="contained" className="m-3" onClick={()=>Navigation('/api')} >Navigation</Button>
        <Button variant="contained" className="m-3" onClick={getProducts} >Get Api</Button>
        <div className="row" >
        {
            product.map((item:any)=>{
                return <Product title={item.title} image={item.image} price={item.price} description={item.description} category={item.category} rating={item.rating} />
            })  
        }
        </div>
        </>
    )

}
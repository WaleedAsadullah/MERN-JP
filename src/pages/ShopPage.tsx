import Product from "../component/Product"
import axios from "axios"
import { useState, useEffect } from "react";
import { Button } from "@mui/material"

export default function ShopPage(){
    const [product,updateProduct]:any = useState([]);
    const getProducts = () => {
        axios.get('https://fakestoreapi.com/products')
        .then((response)=>{
            updateProduct(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    
    useEffect(() => {
        getProducts();
      }, []);
    return (
        <>
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
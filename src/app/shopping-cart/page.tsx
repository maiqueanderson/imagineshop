'use client';
import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../contexts/ShoppingCart";

const ShoppingCart = () =>{
    //aqui esta pegando os produtos do context ShoppingCart e trazendo para a página de carrinho
    const {getProducts} = useContext(ShoppingCartContext);
    useEffect(() => {
        const products = getProducts();
        console.log(products);
    })

    return(
        <>
            <p>Shopping Cart Works</p>
        </>
    )
}

export default ShoppingCart;
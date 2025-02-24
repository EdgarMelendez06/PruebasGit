"use client"
import { useState } from 'react';
import React from 'react';

export const Headers = ({
    allProducts,
    setAllProducts,
    total,
    setTotal,
    countProducts,
    setCountProducts,
}) =>{
    const [active, setActive] = useState(false);

    const onDeleteProduct = product => {
        const results = allProducts.filter(
            item => item.id !== product.id
        );

        setTotal(total - product.price * product.quantity);
        setCountProducts(countProducts - product.quantity);
        setAllProducts(results);
    };

    const onCleanCart = () => {
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
    }   

    return (
        <header>
            <h1>Tienda de Libros</h1>
            
            <div className="container-icon">
                <div className="container-cart-icon" onClick={() => setActive(!active)}>
                    <img src="https://w7.pngwing.com/pngs/275/763/png-transparent-cart-shopping-supermarket-shoppingcart-ecommerce-e-commerce-shopping-trolley-caddy.png" alt="carrito" className="icon-cart" />
                    <div className="count-products">
                        <span id="contador-productos">{countProducts}</span>
                    </div>
                </div>

                <div 
                    className={`container-cart ${active ? '' : 'hidden-cart'}`}>
                        {allProducts.length ? (
                            <>
                                <div className='row-product'>
                                    {allProducts.map(product => (
                                        <div className='cart-product' key={product.id}></div>
                                    )}
                                </div>
                            </>
                        )
                    }
                    <div className="row-product">
                        <div className="cart-product" key={product.id}>
                            <div className="info-cart-product">
                                <span className='cantidad-producto-carrito'>{product.quantity}</span>
                                <p className='titulo-producto-carrito'>{product.title}</p>
                                <span className='precio-producto-carrito'>${product.price}</span>
                            </div>
                            <img src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-iconpng.png" alt="cerrar" className="icon-close" />
                        </div>
                    </div>
                    
                    <div className="cant-total hidden">
                        <h3>Total</h3>
                        <span className='total-pagar'>$200</span>
                    </div>
                    <p className='cart-empty'>El carrito esta vacio</p>
                </div>
            </div>
        </header>
    )
}
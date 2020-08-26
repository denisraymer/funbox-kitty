import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data.json';

const HomePage = () => {
    return (
        <div className='card-block'>
            <div className="card-block__title">Ты сегодня покормил кота?</div>
            <div className="card-block__stroke">
                {products.products.map(productData => {
                    return <ProductCard productData={productData} key={productData._id}/>
                })}
            </div>
        </div>
    )
}

export default HomePage;

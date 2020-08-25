import React from 'react';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
    return (
        <div className='card-block'>
            <div className="card-block__title">Ты сегодня покормил кота?</div>
            <div className="card-block__stroke">
                <ProductCard />
            </div>
        </div>
    )
}

export default HomePage;

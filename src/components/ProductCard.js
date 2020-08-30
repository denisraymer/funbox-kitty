import React from 'react';
import useActive from '../hooks/useActive';

const ProductCard = (props) => {
    const {productData} = props;
    const [{productStatus, productMessage}, addProduct] = useActive(productData);

    return (
        <div className={`product-card ${productStatus}`} onClick={addProduct}>
            <div className='product-card__content'>
                <div className='product-card__description'>{productData.description}</div>
                <div className='product-card__title'>{productData.name}</div>
                <div className='product-card__category'>c {productData.category}</div>
                <ul className='product-card__characteristics'>
                    {productData.characteristics.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <img src={require('../assets/images/content/product-kitty.png')} alt='Kitty'
                     className='product-card__image'/>
                <div className="product-card__price">{productData.price} <span className='unit'>кг</span></div>
            </div>
            <div className='product-card__footer'>
                {productMessage}
                {!productStatus ? <button className='button button_default' onClick={addProduct}> купи</button> : ''}
            </div>
        </div>
    )
}

export default ProductCard;

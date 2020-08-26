import React from 'react';

const ProductCard = () => {
    return (
        <div className='product-card product-card_selected'>
            <div className='product-card__content'>
                <div className='product-card__description'>Сказочное заморское яство</div>
                <div className='product-card__title'>Нямушка</div>
                <div className='product-card__category'>с фуа-гра</div>
                <ul className='product-card__characteristics'>
                    <li>10 порций</li>
                    <li>мышь в подарок</li>
                </ul>
                <img src={require('../assets/images/content/product-kitty.png')} alt='Kitty'
                     className='product-card__image'/>
                <div className="product-card__price">0,5 <span className='unit'>кг</span></div>
            </div>
            <div className='product-card__footer'>Чего сидишь? Порадуй котэ, купи.</div>
        </div>
    )
}

export default ProductCard;

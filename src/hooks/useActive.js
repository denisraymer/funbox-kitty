import {useEffect, useState} from 'react';

export default ({isActive: disabled, category}) => {
    const [isActiveProduct, setIsActiveProduct] = useState(false);
    const [productMessage, setProductMessage] = useState('Чего сидишь? Порадуй котэ, ');
    const [productStatus, setProductStatus] = useState('');

    useEffect(() => {
        if (!disabled) {
            setProductMessage(`Печалька, с ${category} закончился.`);
            setProductStatus('product-card_disabled');
        }
    }, []);

    const addProduct = () => {
        if (!disabled) {
            return null
        } else if (!isActiveProduct) {
            setProductStatus('product-card_selected');
            setProductMessage('Головы щучьи с чесноком да свежайшая сёмгушка.');
            setIsActiveProduct(!isActiveProduct)
        } else {
            setProductStatus('');
            setProductMessage('Чего сидишь? Порадуй котэ, ');
            setIsActiveProduct(!isActiveProduct)
        }
    };

    return [{productStatus, productMessage}, addProduct]
}

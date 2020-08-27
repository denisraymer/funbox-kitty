import {useEffect, useState} from 'react';

export default ({isActive: disabled, category}) => {
    const [isActiveProduct, setIsActiveProduct] = useState(false);
    const [productMessage, setProductMessage] = useState('Чего сидишь? Порадуй котэ, ');
    const [productStatus, setProductStatus] = useState('');

    const addProduct = () => {
        if (!isActiveProduct) {
            setProductStatus('product-card_selected');
            setProductMessage('Головы щучьи с чесноком да свежайшая сёмгушка.');
            setIsActiveProduct(!isActiveProduct)
        } else {
            setProductStatus('');
            setProductMessage('Чего сидишь? Порадуй котэ, ');
            setIsActiveProduct(!isActiveProduct)
        }
    };

    useEffect(() => {
        if (!disabled) {
            setProductMessage(`Печалька, с ${category} закончился.`);
            setProductStatus('product-card_disabled');
        }
    }, [])

    return [{productStatus, productMessage}, addProduct]
}

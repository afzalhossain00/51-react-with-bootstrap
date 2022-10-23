import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        { id: 1, name: 'Mac Book Pro', price: 170000 },
        { id: 2, name: 'Mac Book Air', price: 180000 },
        { id: 3, name: 'Mac Book thinkpad', price: 195000 },
    ]
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                products.map(product => <Card key={product.id} product={product}></Card>)
            }
        </div>
    );
};

export default CardGroup;
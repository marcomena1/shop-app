import React from 'react';
import { Button, Card } from 'react-bootstrap';
import FormatCurrency from './FormatCurrency'
import { useShoppingCart } from '../context/ShoppingCartContext';

const StoreItem = ({ id, price, name, imageUrl }) => {
    const { getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart();
    const quantity = getItemQuantity(id);
    return (
        <Card className='h-100'>
            <Card.Img
                variant="top"
                src={imageUrl}
                style={{ height: "600px", objectFit: "cover" }}
            />
            <Card.Body>
                <Card.Title className='d-flex justify-content-between align-items-baseline'>
                    <span className='fs-2'>{name}</span>
                    <span className='text-muted me-2'>{FormatCurrency(price)}</span>
                </Card.Title>
                <div className='mt-auto' >
                    {quantity === 0 ? (<Button onClick={() => increaseCartQuantity(id)} className='w-100'>Add to cart</Button>) : (
                        <div className='d-flex align-items-center flex-column'
                            style={{ gap: '0.5rem' }}>
                            <div className='d-flex align-items-center justify-content-center'
                                style={{ gap: '0.5rem' }}>
                                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <span className='fs-3'>{quantity}in cart</span>
                                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button onClick={() => removeFromCart(id)} variant='danger' size='sm' >Remove</Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}

export default StoreItem;


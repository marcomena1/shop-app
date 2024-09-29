import React from 'react';
import { Row, Col } from 'react-bootstrap';
import storeItems from '../Data/items.json';
import ItemsStore from './ItemsStore';

const Store = () => {

    return (
        <>
            <h1>Shop</h1>
            <Row md={2} xs={1} lg={3} className="g-5">
                {storeItems.map((item) => (
                    <Col key={item.id}>
                        <ItemsStore {...item} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Store;


import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://warm-bayou-50078.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="py-5">
            <Container>
                <div className="w-100 mx-auto pb-5">
                    <h3 className="text-center">LATEST DEVICES</h3>
                    <p className="text-center">technology headlines, gadget and smartphone trends and insights from tech industry leaders. Tech News - Get all the latest Technology news & updates on Mobile Phones, Gadgets Review.</p>
                </div>
                {
                    products.length ? <Row xs={1} md={3} className="g-4">
                        {
                            products.slice(0, 6).map(product => <Col key={product?._id}>
                                <Card className="p-3 rounded-3 bg-secondary">
                                    <Card.Img className="" style={{ height: '300px' }} variant="top" src={product?.img} />
                                    <div className="p-3">
                                        <div className="d-flex align-items-center justify-content-between my-3">
                                            <Card.Title>{product?.productName}</Card.Title>
                                        </div>
                                        <p className="p-0 my-2">{product?.des}</p>
                                        <div>
                                            <h2 className="my-3">{product?.price}</h2>
                                            <Link to={`/purchase/${product._id}`}><Button >Order now</Button></Link>
                                        </div>
                                    </div>
                                </Card>
                            </Col>)
                        }
                    </Row> : <h2>Loading...</h2>
                }
            </Container>
        </div>
    );
};

export default Products;
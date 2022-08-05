import React from 'react';
import { Carousel } from 'react-bootstrap';

const TopBanner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    style={{ height: '80vh', objectFit: 'cover' }}
                    className="d-block w-100"
                    src="https://fdn.gsmarena.com/imgroot/reviews/21/poco-m4-pro-5g/lifestyle/-1200w5/gsmarena_003.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className="text-warning">Poco M4 Pro 5G</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '80vh', objectFit: 'cover' }}
                    className="d-block w-100"
                    src="https://fdn.gsmarena.com/imgroot/reviews/20/apple-ios-14-review/lifestyle/-727w2/gsmarena_006.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 className="text-warning">Apple iOS 14</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '80vh', objectFit: 'cover' }}
                    className="d-block w-100"
                    src="https://fdn.gsmarena.com/imgroot/reviews/20/samsung-galaxy-note20-ultra/review18/lifestyle/-727w2/gsmarena_002.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className="text-warning">Samsung Galaxy Note20 Ultra 5G</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default TopBanner;
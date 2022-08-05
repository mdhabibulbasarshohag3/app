import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div style={{ height: '50vh' }} className="pt-5 mt-5 bg-dark text-light">
            <Container>
                <div className="pt-5">
                    <div className="row text-white">
                        <div className="col-6 col-lg-3 ">
                            <h5>Rola</h5>
                            <h6>
                                Location: 35 West Dental Street
                            </h6>
                            <h6>
                                Phone: +088 123 654 987
                            </h6>
                            <h6>
                                Email: info@rola.com
                            </h6>
                        </div>
                        <div className="col-6 col-lg-3">
                            <h5>
                                Useful Links
                            </h5>
                            <h6>
                                About Us
                            </h6>
                            <h6>
                                Our Services
                            </h6>
                            <h6>
                                Appointment
                            </h6>
                            <h6>
                                Privacy Policy
                            </h6>
                            <h6>
                                Contact Us
                            </h6>
                        </div>
                        <div className="col-6 col-lg-3">
                            <h5>
                                <h5>
                                    Our Services
                                </h5>
                                <h6>
                                    Cosmetic Dentistry
                                </h6>
                                <h6>
                                    General Dentistry
                                </h6>
                                <h6>
                                    Certified Dentist
                                </h6>
                                <h6>
                                    New Technology
                                </h6>
                                <h6>
                                    Accept Insurance
                                </h6>
                            </h5>
                        </div>
                        <div className="col-6 col-lg-3">
                            <h5>
                                Support
                            </h5>
                            <h6>
                                Our Dentist
                            </h6>
                            <h6>
                                Terms of Services
                            </h6>
                            <h6>
                                Privacy Policy
                            </h6>
                            <h6>
                                Our Pricing
                            </h6>
                            <h6>
                                Testimonials
                            </h6>
                        </div>
                    </div>
                    <div>
                        <p className="text-center text-light py-3 m-0">
                            Copyright © 2021 Rola is Proudly Created by IT-Travel
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
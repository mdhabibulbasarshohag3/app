import React from 'react';
import { Button, Container } from 'react-bootstrap';
import ManegeOrder from './ManegeOrder/ManegeOrder';
import {
    Switch,
    Route,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import MakeAdmin from './MakeAdmin/MakeAdmin';
import Pay from './Pay/Pay';
import MyOrder from './MyOrder/MyOrder';
import Review from './Review/Review';
import AddProduct from './AddProduct/AddProduct';
import ManageProduct from './ManageProduct/ManageProduct';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer'
import AdminRoute from './AdminRoute/AdminRoute';
const DashBord = () => {
    let { path, url } = useRouteMatch();
    const { logOut, admin } = useAuth()
    return (
        <div className="bg-info">
            <div className="text-light w-100 py-3 border-bottom ">
                <h3 className="p-0 m-0 text-center">Admin</h3>
            </div>
            <div className="pb-5 pt-2 bg-warning">
                <Container>
                    <div className="row ">
                        <div className="col-12 col-md-3 d-flex flex-column">
                            <NavLink style={{ textDecoration: 'none' }} className="py-2 bg-info my-1 text-dark text-center" to='/home'>Home</NavLink>
                            <NavLink style={{ textDecoration: 'none' }} className="py-2 bg-info my-1 text-dark text-center" to={`${url}`}>My Order</NavLink>
                            <NavLink style={{ textDecoration: 'none' }} className="py-2 bg-info my-1 text-dark text-center" to={`${url}/pay`}>Pay bill</NavLink>
                            <NavLink style={{ textDecoration: 'none' }} className="py-2 bg-info my-1 text-dark text-center" to={`${url}/review`}>Review</NavLink>
                            {
                                admin && <NavLink style={{ textDecoration: 'none' }} className="py-2 bg-info my-1 text-dark text-center" to={`${url}/manageAllOrder`}>Manage Order</NavLink>
                            }
                            {
                                admin && <NavLink style={{ textDecoration: 'none' }} className="py-2 bg-info my-1 text-dark text-center" to={`${url}/addProduct`}>Add Product</NavLink>
                            }
                            {
                                admin && <NavLink style={{ textDecoration: 'none' }} className="py-2 bg-info my-1 text-dark text-center" to={`${url}/makeAdmin`}>Make Admin</NavLink>
                            }
                            {
                                admin && <NavLink style={{ textDecoration: 'none' }} className="py-2 bg-info my-1 text-dark text-center" to={`${url}/manageProduct`}>Manage Products</NavLink>
                            }
                            <Button onClick={logOut}>Log Out</Button>
                        </div>
                        <div className="col-12 col-md-9">
                            <Switch>
                                <Route exact path={path}>
                                    <MyOrder />
                                </Route>

                                <AdminRoute exact path={`${path}/makeAdmin`}>
                                    <MakeAdmin />
                                </AdminRoute>

                                <Route exact path={`${path}/pay`}>
                                    <Pay />
                                </Route>

                                <AdminRoute exact path={`${path}/manageAllOrder`}>
                                    <ManegeOrder />
                                </AdminRoute>

                                <Route exact path={`${path}/review`}>
                                    <Review />
                                </Route>

                                <AdminRoute exact path={`${path}/manageProduct`}>
                                    <ManageProduct />
                                </AdminRoute>

                                <AdminRoute exact path={`${path}/addProduct`}>
                                    <AddProduct />
                                </AdminRoute>
                            </Switch>
                        </div>

                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default DashBord;
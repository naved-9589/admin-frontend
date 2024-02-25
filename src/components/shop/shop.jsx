import React, { useEffect, useState } from 'react'
import Addproduct from './addproduct'
import { useDispatch, useSelector } from 'react-redux';
import { changetoggle, fetchproduct } from '../../redux/slices/productslice';


const Shop = () => {

    const [catogary, setcatogary] = useState("");
    const [price, setprice] = useState("");

    const dispatch = useDispatch();

    const windowstate = useSelector((state) => state.product.showwindow)
    const productlist = useSelector((state) => state.product.data);


    const change = (e) => {
        setcatogary(e);
        dispatch(fetchproduct(e, price));
    }

    const changeprice = (e) => {
        setprice(e);
        dispatch(fetchproduct(catogary, e));
    }

    useEffect(()=>{
        dispatch(fetchproduct());
    },[])

    return (
        <div className="shop">
            <div className="shopinner p-4">
                <div className="shopmain">
                    <div className="shopmaininner row">
                        <div className="col-lg-4 shopleft">
                            <div className="shoplefttop">
                                <h5 className="mb-2 mt-4">Catogary</h5>
                                <div className="catogarygroup">
                                    <div className="radios">
                                        <label htmlFor="radio1">
                                            <input onChange={() => change("icecream")} name='radio1' type="radio" />icecream
                                        </label>
                                    </div>
                                    <div className="radios">
                                        <label htmlFor="radio1">
                                            <input onChange={() => change("vagitable")} name='radio1' type="radio" />vagitable
                                        </label>
                                    </div>
                                    <div className="radios">
                                        <label htmlFor="radio1">
                                            <input onChange={() => change("toy")} name='radio1' type="radio" />toy
                                        </label>
                                    </div>
                                    <div className="radios">
                                        <label htmlFor="radio1">
                                            <input onChange={() => change("all")} name='radio1' type="radio" />all
                                        </label>
                                    </div>
                                </div>
                                <div className="catogarygroup">
                                    <h5 className="mt-4 mb-4">Sort By</h5>
                                    <div className="radios">
                                        <label htmlFor="radio2">
                                            <input onChange={() => changeprice("lowtohigh")} name='radio2' type="radio" />lowtohigh
                                        </label>
                                    </div>
                                    <div className="radios">
                                        <label htmlFor="radio2">
                                            <input onChange={() => changeprice("hightolow")} name='radio2' type="radio" />hightolow
                                        </label>
                                    </div>
                                </div>
                                <div className="productbutton my-4">
                                    <button onClick={() => { dispatch(changetoggle(true)) }} className="addproduct">Add Product</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="productlists p-4">
                                <div className="row">
                                    {
                                        productlist.map((curr) => {
                                            return (
                                                <div className="col-lg-4">
                                                    <div className="productcard">
                                                        <div>
                                                            <img className="productimages" src={`https://admin-dashboard-iiwz.onrender.com/${curr.image}`} />
                                                        </div>
                                                        <div>
                                                            <p className="mt-2 mb-0 fw-lighter">{curr.catogary} shop</p>
                                                            <h5 className="fw-normal">{curr.name}</h5>
                                                            <h5 className="fw-normal">${curr.price}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                windowstate == true ?
                    <Addproduct /> : ""
            }

        </div>
    )
}

export default Shop

import React from 'react'
import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import "./product.css"
import { productData } from "../../dummyData"

export default function Product() {

    return (

        <div className="product">
           
            <div className="productTitleContainer">

                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                <button className="productAddButton">Create</button>
                </Link>

            </div>

            <div className="productTop">

                <div className="productTopLeft">
                    <Chart data={ productData } dataKey="Sales" title="Sales Performance"/>
                </div>

                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="" alt="" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">Id:</span>
                            <span className="productInfoValue">123</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales:</span>
                            <span className="productInfoValue">4123</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">Active:</span>
                            <span className="productInfoValue">Yes</span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">In Stock</span>
                            <span className="productInfoValue">No</span>
                        </div>
                    </div>
                </div>

            </div>


            <div className="productBottom">

            </div>

        </div>
    )
}

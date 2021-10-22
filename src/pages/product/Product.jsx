import React from 'react'
import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import "./product.css"
import { productData } from "../../dummyData"
import { Publish } from '@mui/icons-material'

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
                        <img src="./images/image1.jpg" alt="" className="productInfoImg" />
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
                            <span className="productInfoKey">In Stock:</span>
                            <span className="productInfoValue">No</span>
                        </div>
                    </div>
                </div>

            </div>


            <div className="productBottom">

                <form action="" className="productForm">

                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple Airpod"/>

                        <label>In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>

                        </select>

                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>

                        </select>

                    </div>

                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="./images.image5.jpg" alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}}/> 
                        </div>
                        <button className="productButton">Update</button>
                    </div>

                </form>

            </div>

        </div>
    )
}

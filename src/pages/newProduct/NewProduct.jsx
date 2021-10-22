import React from 'react'
import "./newProduct.css"
import { Publish } from '@mui/icons-material'

export default function NewProduct() {
    return (
        <div className="newProduct">
            
                    <form action="" className="productForm">

                    <div className="productFormLeft">
                        <h1>New Product</h1>

                        <div className="productUpload">
                            <img src="./images.image5.jpg" alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}}/> 
                        </div>
                        
                        <div className="newProductMiddle">

                            <label>Name</label>
                            <input type="text" placeholder="Apple Airpods"/>

                            <label>Stock</label>
                            <input type="text" placeholder="123"/>

                            <label>Active</label>
                            <select name="active" id="active">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>

                            </select>

                        </div>

                        <button className="productButton">Create</button>

                    </div>

                   

                </form>


        </div>
    )
}

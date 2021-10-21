import React from 'react'
import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { productRows } from "../../dummyData.js"
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {

    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter( item => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 160 },

        { field: 'product', headerName: 'Product', width: 200, renderCell:(params)=>{
            return(
                <div className="productListItem">
                    <img src={params.row.avatar} alt="" className="productListImg" />
                    {params.row.name}

                </div>
                )} 
        },

        { field: 'stock', headerName: 'Stock', width: 200 },

        {field: 'status', headerName: 'Status',width: 200,},

        {field: 'price',headerName: 'Price',sortable: false, width: 250,},

        {field: 'action',headerName: 'Action', width: 200, renderCell : (params) => {
            return (
                <>
                <Link to={"/product/" + params.row.id}>
                <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutline className="productListDelete" onClick = { ()=>handleDelete(params.row.id) }/>
                </>
                )}
        }

      ];



    return (
        <div className="productList ">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} rowsPerPageOptions={[5]} checkboxSelection/>
        </div>
    )
}

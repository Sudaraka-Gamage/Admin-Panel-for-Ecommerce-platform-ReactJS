import React from 'react'
import "./user.css"
import { PermIdentity,Publish, CalendarToday, PhoneAndroid, MailOutline, LocationSearching } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function User() {
    return (
        <div className="user">
            
            <div className="userTitleContainer">
                
                <h1 className="userTitle">Edit User</h1>
                
                <Link to="/newUser">
                <button className="userAddButton">Create</button>
                </Link>

            </div>

            <div className="userContainer">

                <div className="userShow">

                    <div className="userShowTop">
                        <img src="./images/image2.jpg" alt=""  className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Becker</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>

                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">annabeck99</span>
                        </div>

                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">10.22.1999</span>
                        </div>

                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">+1 123 456 78</span>
                        </div>

                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                        </div>

                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">New York | USA</span>
                        </div>
                    </div>

                </div>





                <div className="userUpdate">

                    <span className="userUpdateTitle">Edit</span>

                    <form className="userUpdateForm">

                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label htmlFor="">Username</label>
                                <input type="text" placeholder="annabeck99" className="userUpdateInput"/>
                            </div>
                        
                            <div className="userUpdateItem">
                                <label htmlFor="">Full Name</label>
                                <input type="text" placeholder="Anna Becker" className="userUpdateInput"/>
                            </div>
                        
                            <div className="userUpdateItem">
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder="annabeck99@gmail.com" className="userUpdateInput"/>
                            </div>
                       
                            <div className="userUpdateItem">
                                <label htmlFor="">Phone</label>
                                <input type="text" placeholder="+1 123 456 78" className="userUpdateInput"/>
                            </div>
                        
                            <div className="userUpdateItem">
                                <label htmlFor="">Address</label>
                                <input type="text" placeholder="New York | USA" className="userUpdateInput"/>
                            </div>
                        </div>

                        <div className="userUpdateRight">

                            <div className="userUpdateUpload">
                                <img src="./images/image1.jpg" alt="" className="userUpdateImg" />
                                <label htmlFor="file">
                                <Publish className="userUpdateImg"/>
                                </label>
                                <input type="file" id="file" style={{ display:"none" }}/>
                            </div>

                            <button className="userUpdateButton">Update</button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}

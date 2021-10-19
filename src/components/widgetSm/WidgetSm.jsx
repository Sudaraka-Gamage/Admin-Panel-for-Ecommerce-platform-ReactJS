import React from 'react'
import "./widgetSm.css" 
import { Visibility } from '@mui/icons-material';

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">

                <li className="widgetSmListItem">
                    <img src="./images/image2.jpg" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">

                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>

                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="./images/image2.jpg" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">

                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>

                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="./images/image2.jpg" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">

                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>

                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="./images/image2.jpg" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">

                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>

                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="./images/image2.jpg" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">

                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>

                    </div>
                    <button className="widgetSmButton">
                        <Visibility  className="widgetSmIcon"/>
                        Display
                    </button>
                </li>

            </ul>
            
        </div>
    )
}

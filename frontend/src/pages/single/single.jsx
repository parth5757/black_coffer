import React from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Chart from "../../components/chart/chart";
import List from "../../components/table/Table";

const Single = () => {
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://img.freepik.com/free-photo/good-advice-from-beautiful-woman_329181-3527.jpg?size=626&ext  =jpg&ga=GA1.1.353270024.1699445558&semt=ais" alt="Nothing" className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">
                                    Parth Thakkar
                                </h1>
                                <div className="detailItem">
                                    <span className="itemKey">
                                        Email:
                                    </span>
                                    <span className="itemValue">
                                        Bella@blackcoffer.com
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">
                                        Phone:
                                    </span>
                                    <span className="itemValue">
                                        +91 64974574876
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">
                                        Address:
                                    </span>
                                    <span className="itemValue">
                                        Ahmedabad
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">
                                        Country:
                                    </span>
                                    <span className="itemValue">
                                        Bharat
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="Usker Spending"/>
                    </div>
                </div>
                <div className="bottom">
                    <List />
                </div>
            </div>
        </div>
    )
}
export default Single
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Widget from "../../components/widget/widget";
import Featured from "../../components/featured/featured"
import Chart from "../../components/chart/chart";
import "./home.scss";
import Table from "../../components/table/Table";
 

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homecontainer">
                <Navbar /> 
                <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance"/>
                </div>
                <div className="charts">
                      <Featured />
                      <Chart />  
                </div>           
                <div className="listContainer">
                    <div className="listTitle">
                        Latest Transaction
                    </div>
                    <Table />
                </div>                    
            </div>
        </div>
    )
}
export default Home
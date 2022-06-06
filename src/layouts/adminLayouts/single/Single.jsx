import "./single.scss";
import Sidebar from '../../../components/adminComponents/sidebar/Sidebar'
import Navbar from "../../../components/adminComponents/navbar/Navbar";
import Chart from "../../../components/adminComponents/chart/Chart";
import List from "../../../components/adminComponents/table/Table";


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
              <img className="itemImg" src="https://images.unsplash.com/photo-1506543730435-e2c1d4553a84?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387" alt="image" />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email</span>
                  <span className="itemValue">janeDoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone</span>
                  <span className="itemValue">08xxxxxxxxx</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address</span>
                  <span className="itemValue">Lampung</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country</span>
                  <span className="itemValue">Indonesia</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last Six Month)"/>
          </div>
        </div>
        <div className="buttom">
          <h1 className="title">Last Transaction</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;

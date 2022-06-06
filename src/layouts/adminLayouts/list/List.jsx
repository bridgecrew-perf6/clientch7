import "./list.scss"
import Sidebar from "../../../components/adminComponents/sidebar/Sidebar"
import Navbar from "../../../components/adminComponents/navbar/Navbar"
import Datatable from "../../../components/adminComponents/datatable/Datatable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable />
      </div>
    </div>
  )
}

export default List
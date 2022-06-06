import AdminLayout from "../adminLayout/AdminLayout"
import CarsTable from "../../../components/adminComponents/carsTable/CarsTable"
import Chart from '../../../components/adminComponents/chart/Chart'

const Dashboard = () => {
  return (
    <>
        <AdminLayout>
            <div className="charts" style={{ marginBottom: "40px", display: "flex", alignItems: "center"}}>
              <Chart aspect={2 / 1} title="Perbandingan harga sewa" />
            </div>
            <CarsTable />
        </AdminLayout>
    </>
  )
}

export default Dashboard
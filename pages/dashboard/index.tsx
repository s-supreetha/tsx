import Table from '../../components/dashboard/table'
import Success from '../../components/dashboard/success'
import Warning from '../../components/dashboard/warning'
import Notification from '../../components/dashboard/model'


function Dashboard(){
    return(
        <div>
            {/* <Warning/>
            <Success/>
            <Notification/> */}
            <Table/>
            
        </div>
    )
}
export default Dashboard;
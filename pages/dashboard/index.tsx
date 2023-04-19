import Table from '../../components/dashboard/table'
import Success from '../../components/dashboard/success'
import Warning from '../../components/dashboard/warning'
import Notification from '../../components/dashboard/model'
import BaseLayout from '@/components/layout'


function Dashboard(){
    return(
        <>
        <BaseLayout>
        <div>
            {/* <Warning/>
            <Success/>
            <Notification/> */}
            <Table/>
            
            
        </div>
        </BaseLayout>
        </>
    )
}
export default Dashboard;
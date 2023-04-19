import BaseLayout from '@/components/layout'
import Cards from '../../components/projects/cards-project'
 function Projects(){
    return(
        <>
        <BaseLayout>
        <div>
            <Cards/>
            <Cards/>
            <Cards/>
        </div>
        </BaseLayout>
        </>
    )
}
export default Projects

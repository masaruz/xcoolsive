import Layout from '../components/Layout'
import Slide from '../components/Slide'
import Service from '../components/service/Container'
import Contact from '../components/contact/Container'
import Navbar from '../components/Navbar'

class Index extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Layout>
                <Navbar/>
                <Slide/>
                <Contact/>
            </Layout>
        )
    }
}
export default Index
import Layout from '../components/Layout'
import Header from '../components/Header'
import Service from '../components/service/Container'
import Navbar from '../components/Navbar'

class Hotel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Layout>
                <Navbar/>
                <Header/>
                <Service/>
            </Layout>
        )
    }
}
export default Hotel
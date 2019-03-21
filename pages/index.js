import Layout from '../components/Layout'
import Header from '../components/Header'
import Gallery from '../components/gallery/Container'
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
                <Header/>
                <Service/>
                <Contact/>
            </Layout>
        )
    }
}
export default Index
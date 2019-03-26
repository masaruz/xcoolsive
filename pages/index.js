import Layout from '../components/Layout'
import Slide from '../components/Slide'
import Logo from '../components/logo/Container'
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
                <Logo/>
                <Contact/>
            </Layout>
        )
    }
}
export default Index
import Layout from '../components/Layout'
import Header from '../components/Header'
import Gallery from '../components/gallery/Container'
import Contact from '../components/contact/Container'
import Navbar from '../components/Navbar'

class Hotel extends React.Component {
    constructor(props) {
        super(props)
        this.hotel = {
            name: 'All That Bangkok Hostel',
            desc: `All That Bangkok Hostel is set in the Sathorn district of Bangkok, and is a 15-minute walk from Silom and Patpong night market. This property is located a short distance from attractions such as Snake Farm-Queen Saovabha Memorial Institute. The property features a restaurant and a shared lounge.
            The property offers both private and dormitory rooms with a shared bathroom. Guests will find an electric kettle, a microwave and a toaster at a shared lounge. Other facilities include a washing machine, a fridge as well as a hair dryer.
            Asian, Thai and international dishes can be enjoyed onsite at All Good In The Hood -Casual Cafe.`,
            images: [
                'static/img/6/01.jpg',
                'static/img/6/02.jpg',
                'static/img/6/03.jpg',
                'static/img/6/04.jpg',
                'static/img/6/05.jpg',
                'static/img/6/06.jpg',
                'static/img/6/07.jpg',
                'static/img/6/08.jpg',
                'static/img/6/09.jpg',
                'static/img/6/10.jpg',
                'static/img/6/11.jpg',
                'static/img/6/12.jpg',
                'static/img/6/13.jpg',
                'static/img/6/14.jpg',
                'static/img/6/15.jpg',
                'static/img/6/16.jpg',
                'static/img/6/17.jpg',
                'static/img/6/18.jpg',
            ]
        }
    }

    render() {
        return (
            <Layout>
                <Navbar/>
                <Header img='static/img/6/04.jpg'/>
                <Gallery name={this.hotel.name} desc={this.hotel.desc} images={this.hotel.images}/>
                <Contact/>
            </Layout>
        )
    }
}
export default Hotel
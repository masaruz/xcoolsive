import Layout from '../components/Layout'
import Header from '../components/Header'
import Gallery from '../components/gallery/Container'
import Service from '../components/service/Container'
import Contact from '../components/contact/Container'
import Navbar from '../components/Navbar'

class Hotel1 extends React.Component {
    constructor(props) {
        super(props)
        this.hotel = {
            name: 'The Victory Executive Residences Bangkok',
            desc: `One of our best sellers in Bangkok! The Victory Executive Residences Bangkok is located in Phayathai area, a 2-minute walk from Victory Monument BTS Skytrain Station. Located along a quiet side street, it has an outdoor pool, gym and free Wi-Fi.
            All rooms are fitted with air conditioning and a satellite TV with movies and sports channels. A microwave, fridge and dining table are included.
            The Victory Executive Residences is within 1.2 mi from MBK Shopping Center and Siam Paragon. 
            If guests wish to stay indoors, the health center provides a modern gym, a sauna and steam room. The rooftop pool is lined by sun loungers and enjoys views of the city. The hotel also provides a self-service laundry area.`,
            images: [
                'static/img/2/01.jpg',
                'static/img/2/02.jpg',
                'static/img/2/03.jpg',
                'static/img/2/04.jpg',
                'static/img/2/05.jpg',
                'static/img/2/06.jpg',
                'static/img/2/07.jpg',
                'static/img/2/08.jpg',
                'static/img/2/09.jpg',
                'static/img/2/10.jpg',
                'static/img/2/11.jpg',
                'static/img/2/12.jpg',
                'static/img/2/13.jpg',
                'static/img/2/14.jpg',
                'static/img/2/15.jpg',
                'static/img/2/16.jpg',
                'static/img/2/17.jpg',
                'static/img/2/18.jpg',
                'static/img/2/19.jpg',
                'static/img/2/20.jpg',
                'static/img/2/21.jpg',
                'static/img/2/22.jpg'
            ]
        }
    }

    render() {
        return (
            <Layout>
                <Navbar/>
                <Header/>
                <Gallery name={this.hotel.name} desc={this.hotel.desc} images={this.hotel.images}/>
                <Service/>
                <Contact/>
            </Layout>
        )
    }
}
export default Hotel1
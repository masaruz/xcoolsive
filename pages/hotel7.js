import Layout from '../components/Layout'
import Header from '../components/Header'
import Gallery from '../components/gallery/Container'
import Contact from '../components/contact/Container'
import Navbar from '../components/Navbar'

class Hotel1 extends React.Component {
    constructor(props) {
        super(props)
        this.hotel = {
            name: 'Ceylon Place Kuala Lumpur',
            desc: `Ceylon Place offers air-conditioned studios and suites with self-catering facilities and free WiFi. It has an outdoor pool, restaurant and fitness centre.
            Located in Kuala Lumpur, Ceylon Place is a 15-minute walk from Suria KLCC and Petronas Twin Towers. Farenheit 88 and Sungei Wang Plaza shopping malls are both an 8-minute walk away.
            Each studio and suite has a balcony, seating and dining areas and a kitchenette with microwave, refrigerator and electric kettle. A flat-screen TV, DVD player and safe is included. Free toiletries are included in the ensuite bathroom.`,
            images: [
                'static/img/7/01.jpg',
                'static/img/7/02.jpg',
                'static/img/7/03.jpg',
                'static/img/7/04.jpg',
                'static/img/7/05.jpg',
                'static/img/7/06.jpg',
                'static/img/7/07.jpg',
                'static/img/7/08.jpg',
                'static/img/7/09.jpg',
                'static/img/7/10.jpg',
                'static/img/7/11.jpg',
                'static/img/7/12.jpg',
                'static/img/7/13.jpg',
                'static/img/7/14.jpg',
                'static/img/7/15.jpg',
                'static/img/7/16.jpg',
                'static/img/7/17.jpg',
                'static/img/7/18.jpg',
                'static/img/7/19.jpg',
                'static/img/7/20.jpg',
                'static/img/7/21.jpg',
                'static/img/7/22.jpg',
            ]
        }
    }

    render() {
        return (
            <Layout>
                <Navbar/>
                <Header img='static/img/7/15.jpg'/>
                <Gallery name={this.hotel.name} desc={this.hotel.desc} images={this.hotel.images}/>
                <Contact/>
            </Layout>
        )
    }
}
export default Hotel1
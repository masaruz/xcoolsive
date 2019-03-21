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
            name: 'Grand Parazo Hotel Suvarnbhumi Airport',
            desc: `Grand Parazo Hotel Suvarnbhumi Airport has rooms in Bang Bo. Offering a restaurant, the property also features a garden and a terrace. The property provides a 24-hour front desk.
            The rooms in the hotel are equipped with a flat-screen TV. Every room includes a private bathroom.
            A buffet breakfast is served at the property.
            Suvarnabhumi Airport is 35.4 km away from Grand Parazo Hotel Suvarnbhumi Airport.`,
            images: [
                'static/img/4/01.jpg',
                'static/img/4/02.jpg',
                'static/img/4/03.jpg',
                'static/img/4/04.jpg',
                'static/img/4/05.jpg',
                'static/img/4/06.jpg',
                'static/img/4/07.jpg',
                'static/img/4/08.jpg',
                'static/img/4/09.jpg',
                'static/img/4/10.jpg',
                'static/img/4/11.jpg',
                'static/img/4/12.jpg',
                'static/img/4/13.jpg',
                'static/img/4/14.jpg',
                'static/img/4/15.jpg',
                'static/img/4/16.jpg',
                'static/img/4/17.jpg',
                'static/img/4/18.jpg',
                'static/img/4/19.jpg',
                'static/img/4/20.jpg',
                'static/img/4/21.jpg',
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
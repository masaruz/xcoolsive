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
            name: 'Chatau De Sukhumvit Hotel Bangkok',
            desc: `Chateau de Sukhumvit offers impeccable service and 
            all the essential amenities to invigorate travelers. A selection 
            of top-class facilities such as free Wi-Fi in all rooms, taxi service, 
            24-hour security, daily housekeeping, laundromat can be enjoyed at the hotel. The hotel 
            features 87 beautifully appointed guest rooms, many of which include television LCD/plasma screen, 
            additional toilet, clothes rack, complimentary instant coffee, complimentary tea. Besides, the hotel's 
            host of recreational offerings ensures you have plenty to do during your stay. Chateau de Sukhumvit is an 
            ideal place of stay for travelers seeking charm, comfort and convenience in Bangkok.`,
            images: [
                'static/img/1/01.jpg',
                'static/img/1/02.jpg',
                'static/img/1/03.jpg',
                'static/img/1/04.jpg',
                'static/img/1/05.jpg',
                'static/img/1/06.jpg',
                'static/img/1/07.jpg',
                'static/img/1/08.jpg',
                'static/img/1/09.jpg',
                'static/img/1/10.jpg',
                'static/img/1/11.jpg',
                'static/img/1/12.jpg',
                'static/img/1/13.jpg',
                'static/img/1/14.jpg',
                'static/img/1/15.jpg'
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
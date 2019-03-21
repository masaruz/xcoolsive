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
            name: 'The Signature at The Victory Residences',
            desc: `The Signature at The Victory Residences is a blend of colonial modern-style architecture and authentic Thaiesthetics, located only 2 minutes walk from Victory Monument Skytrain Station and only 10 minutes walk from  Phaya Thai Airport Link Station. It features a state-of-the-art outdoor pool and well-equipped gym and spa. Free WiFi is available in all areas.
            Guest rooms are elegantly furnished with Thai décor accents and Art European-style wood. They all include a flat-screen TV with cable channels, a seating area and private bathroom.`,
            images: [
                'static/img/3/01.jpg',
                'static/img/3/02.jpg',
                'static/img/3/03.jpg',
                'static/img/3/04.jpg',
                'static/img/3/05.jpg',
                'static/img/3/06.jpg',
                'static/img/3/07.jpg',
                'static/img/3/08.jpg',
                'static/img/3/09.jpg',
                'static/img/3/10.jpg',
                'static/img/3/11.jpg',
                'static/img/3/12.jpg',
                'static/img/3/13.jpg',
                'static/img/3/14.jpg',
                'static/img/3/15.jpg',
                'static/img/3/16.jpg',
                'static/img/3/17.jpg',
                'static/img/3/18.jpg',
                'static/img/3/19.jpg',
                'static/img/3/20.jpg',
                'static/img/3/21.jpg',
                'static/img/3/22.jpg',
                'static/img/3/23.jpg',
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
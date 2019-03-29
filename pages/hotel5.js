import Layout from '../components/Layout'
import Header from '../components/Header'
import Gallery from '../components/gallery/Container'
import Contact from '../components/contact/Container'
import Navbar from '../components/Navbar'

class Hotel extends React.Component {
    constructor(props) {
        super(props)
        this.hotel = {
            name: 'Le Club at Chateau Sukhumvit 56, \nThe Xcoolsive Collection',
            desc: `Le Club at Chateau Sukhunvit 56 is conveniently located in Sukhumvit, within easy reach of various businesses and shopping centers like Terminal 21 and EmQuartier Shopping Mall. Set only a 5-minute walk from BTS Skytrain Station, this hotel also offers a free Tuk Tuk shuttle service to nearby attractions area. Guests can enjoy free WiFi during stay.
            Suvarnabhumi International Airport is approximately a 35-minute drive away.
            All stylish modern rooms and suites are air-conditioned and provide an LED flat-screen TV, a large working desk and a comfortable bed. An in-room safe is also available for added security. Complete with a walk-in shower, the private bathroom comes with bath amenities, slippers and a hairdryer.
            The on-site restaurant, Chateau De Café, is an all-day dining option with Thai and European delicacies and many kind of signature dinks at the bar.`,
            images: [
                'static/img/5/01.jpg',
                'static/img/5/02.jpg',
                'static/img/5/03.jpg',
                'static/img/5/04.jpg',
                'static/img/5/05.jpg',
                'static/img/5/07.jpg',
                'static/img/5/08.jpg',
                'static/img/5/09.jpg',
                'static/img/5/10.png',
                'static/img/5/11.jpg',
                'static/img/5/12.jpg',
            ]
        }
    }

    render() {
        return (
            <Layout>
                <Navbar/>
                <Header img='static/img/5/10.png'/>
                <Gallery name={this.hotel.name} desc={this.hotel.desc} images={this.hotel.images}/>
                <Contact/>
            </Layout>
        )
    }
}
export default Hotel
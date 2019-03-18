import Layout from '../components/Layout'
import Header from '../components/Header'
import Gallery from '../components/gallery/Container'
import Service from '../components/service/Container'
import Contact from '../components/contact/Container'
import Navbar from '../components/Navbar'

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.all = [
            {
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
                    'static/img/1/15.jpg',
                    'static/img/1/16.jpg',
                ]
            },
            {
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
            },
            {
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
                    'static/img/3/12.jpg'
                ]
            },
            {
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
                    'static/img/4/11.jpg'
                ]
            },
            {
                name: 'Le Club at Chateau Sukhumvit 56, The Xcoolsive Collection',
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
                    'static/img/5/10.jpg',
                    'static/img/5/11.jpg',
                    'static/img/5/12.jpg',
                    'static/img/5/13.jpg',
                    'static/img/5/14.jpg',
                    'static/img/5/15.jpg',
                    'static/img/5/16.jpg',
                    'static/img/5/17.jpg',
                    'static/img/5/18.jpg',
                    'static/img/5/19.jpg',
                    'static/img/5/20.jpg',
                    'static/img/5/21.jpg',
                    'static/img/5/22.jpg',
                    'static/img/5/23.jpg',
                    'static/img/5/24.jpg',
                    'static/img/5/25.jpg',
                    'static/img/5/26.jpg'
                ]
            },
            {
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
                    'static/img/6/12.jpg'
                ]
            },
            {
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
                ]
            }
        ]
        let info = this.all[0]
        this.state = {
            images: info.images, 
            name: info.name,
            desc: info.desc
        }
        this.updateGallery = this.updateGallery.bind(this)
    }

    updateGallery(index) {
        let info = this.all[index]
        this.setState({
            name: info.name,
            images: info.images,
            desc: info.desc
        })
    }

    render() {
        return (
            <Layout>
                <Navbar updateGallery={this.updateGallery}/>
                <Header/>
                <Gallery name={this.state.name} desc={this.state.desc} images={this.state.images}/>
                <Service/>
                <Contact/>
            </Layout>
        )
    }
}
export default Index
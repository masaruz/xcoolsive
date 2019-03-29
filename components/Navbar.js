import Menu from './Menu'
import Dropdown from './Dropdown'
import Link from 'next/link'

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
            <Link href="/"><a className="navbar-brand js-scroll-trigger"><img src="static/img/header-bg.jpg"></img></a></Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                    <Menu href="service.html" text="Our Services"/>
                    <Dropdown items={[
                        {
                            text: 'Chateau De Sukhumvit Hotel Bangkok',
                            link: 'ChateauDeSukhumvitHotelBangkok.html'
                        },
                        {
                            text: 'The Victory Executive Residences Bangkok',
                            link: 'TheVictoryExecutiveResidencesBangkok.html'
                        },
                        {
                            text: 'The Signature at The Victory Residences',
                            link: 'TheSignatureAtTheVictoryResidences.html'
                        },
                        {
                            text: 'Grand Parazo Hotel Suvarnbhumi Airport',
                            link: 'GrandParazoHotelSuvarnbhumiAirport.html'
                        },
                        {
                            text: 'Le Club at Chateau 56, A Xcoolsive Collection',
                            link: 'LeClubAtChateau56AXcoolsiveCollection.html'
                        },
                        {
                            text: 'All That Bangkok Hostel',
                            link: 'AllThatBangkokHostel.html'
                        },
                        {
                            text: 'Ceylon Place Kuala Lumpur',
                            link: 'CeylonPlaceKualaLumpur.html'
                        }
                    ]}/>
                    <Menu href="#contact" text="Contact"/>
                </ul>
            </div>
        </div>
    </nav>
)

export default Navbar
import Menu from './Menu'
import Dropdown from './Dropdown';

const Navbar = ({updateGallery}) => (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#home">XCOOLSIVE</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                    <Menu href="#services" text="Our Services"/>
                    <Dropdown items={[
                        {
                            text: 'Chateau De Sukhumvit Hotel Bangkok',
                            link: 'hotel1'
                        },
                        {
                            text: 'The Victory Executive Residences Bangkok',
                            link: 'hotel2'
                        },
                        {
                            text: 'The Signature at The Victory Residences',
                            link: 'hotel3'
                        },
                        {
                            text: 'Grand Parazo Hotel Suvarnbhumi Airport',
                            link: 'hotel4'
                        },
                        {
                            text: 'Le Club at Chateau 56, A Xcoolsive Collection',
                            link: 'hotel5'
                        },
                        {
                            text: 'All That Bangkok Hostel',
                            link: 'hotel6'
                        },
                        {
                            text: 'Ceylon Place Kuala Lumpur',
                            link: 'hotel7'
                        }
                    ]}/>
                    <Menu href="#contact" text="Contact"/>
                </ul>
            </div>
        </div>
    </nav>
)

export default Navbar
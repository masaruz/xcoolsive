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
                        "Chateau De Sukhumvit Hotel Bangkok",
                        "The Victory Executive Residences Bangkok",
                        "The Signature at The Victory Residences",
                        "Grand Parazo Hotel Suvarnbhumi Airport",
                        "Le Club at Chateau 56, A Xcoolsive Collection",
                        "All That Bangkok Hostel",
                        "Le Lamoon Chiangmai (Opening late of 2019)",
                        "Ceylon Place Kuala Lumpur",
                        "Bangkok Transport Service, Limousine Service"
                    ]}/>
                    <Menu href="#contact" text="Contact"/>
                </ul>
            </div>
        </div>
    </nav>
)

export default Navbar
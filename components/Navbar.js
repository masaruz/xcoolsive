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
                            link: 'hotel1.html'
                        },
                        {
                            text: 'The Victory Executive Residences Bangkok',
                            link: 'hotel2.html'
                        },
                        {
                            text: 'The Signature at The Victory Residences',
                            link: 'hotel3.html'
                        },
                        {
                            text: 'Grand Parazo Hotel Suvarnbhumi Airport',
                            link: 'hotel4.html'
                        },
                        {
                            text: 'Le Club at Chateau 56, A Xcoolsive Collection',
                            link: 'hotel5.html'
                        },
                        {
                            text: 'All That Bangkok Hostel',
                            link: 'hotel6.html'
                        },
                        {
                            text: 'Ceylon Place Kuala Lumpur',
                            link: 'hotel7.html'
                        }
                    ]}/>
                    <Menu href="#contact" text="Contact"/>
                </ul>
            </div>
        </div>
    </nav>
)

export default Navbar
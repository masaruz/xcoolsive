import Row from './Row'

const Header = () => (
    <section id="services">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Our Services</h2>
                <div className="text-muted" style={{marginBottom: '50px;'}}>The Xcoolsive Collection provide management services for a whole range of hospitality projects that includes Hotels, Resorts and Apartments from our exclusive concepts for small property to five stars prperty. Backed by years of hospitality experience, we are able to provide strong management capabilities and critical competences across the value chain, and direct access to our proven distribution platform.</div> 
                </div>
            </div>
            <div className="row text-center" style={{'marginBottom': '35px'}}>
                <Row name="Project Pre-opening" desc={[
                    "Development of Outlets & Facilities",
                    "Concept and Specifications",
                    "System Set up and Configuration",
                    "Marketing Plans",
                    "Establishing Goals, Objectives and Budgets",
                    "Policies and Procedures",
                    "Recruitment and Training"
                    ]} icon="static/img/service/1.jpg"/>
                <Row name="Project Opening" desc={[
                    "Soft Opening & Official Launching Planning",
                    "Project Managing and Operating",
                    "Public Relations and Publications",
                    "Improvement Strategies & Evaluations",
                    "Marketing & Sales"
                ]} icon="static/img/service/2.jpg"/>
                <Row name="Operations Consulting" desc={[
                    "Policies and Procedures",
                    "Costs and Expenses Evaluation",
                    "Staff Efficiency Evaluation",
                    "Recruitment and Training",
                    "Policies and Procedures",
                    "Service Improvements",
                    "Quality Assurance"
                ]} icon="static/img/service/3.jpg"/>
            </div>
            <div className="row text-center">
                <Row name="Marketing & Sales Solutions" desc={[
                    "Marketing & Sales Management",
                    "Public Relations & Advertising",
                    "Online E-Business & Distributions",
                    "Webpage Content Review and Optimization",
                    "Booking Engines",
                    "Brand Development",
                    "Sales & Market (Country / Area) Representation"
                ]} icon="static/img/service/4.jpg"/>
                <Row name="Owner Representation" desc={[
                    "Site Visits & Spot Checks",
                    "Negotiating of Contracts and Agreements",
                    "Interpersonal Communicator",
                    "Budget Reviews",
                    "Management Counseling",
                    "Business Plan Review",
                    "Future Developments"
                ]} icon="static/img/service/5.jpg"/>
            </div>
        </div>
    </section>
)

export default Header
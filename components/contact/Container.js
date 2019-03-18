import Input from './Input'

const Container = () => (
    <section id="contact">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <form id="contactForm" name="sentMessage" noValidate="novalidate">
                    <div className="row">
                        <Input col="col-md-6" id="firstname" placeholder="First Name" validateMsg="Please enter your first name."/>
                        <Input col="col-md-6" id="lastname" placeholder="Last Name" validateMsg="Please enter your last name."/>
                        <Input col="col-md-6" id="email" placeholder="Email" validateMsg="Please enter your email."/>
                        <Input col="col-md-6" id="phone" placeholder="Phone" validateMsg="Please enter your phone number."/>
                        <Input col="col-md-12" id="company" placeholder="Company" validateMsg="Please enter your company."/>
                        <Input col="col-md-12" id="enquiry" placeholder="Your Enquiry" validateMsg="Please enter your enquiry."/>
                        <div className="clearfix"></div>
                        <div className="col-lg-12 text-center">
                            <div id="success"></div>
                            <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </section>
)

export default Container
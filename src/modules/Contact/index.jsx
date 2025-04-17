import React from 'react'

const ContactWrapper = () => {
  return (
    <div>
        <section className="page-title centred">
            <div className="outer-container" style={{backgroundImage: "url(assets/images/background/page-title.jpg)"}}>
                <div className="auto-container">
                    <div className="content-box clearfix">
                        <div className="title">
                            <h1>Contact Us</h1>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li><a href="index">Home</a></li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>


        <section className="contact-section">
            <div className="pattern-layer" style={{backgroundImage: "url(assets/images/shape/shape-23.png)"}}></div>
            <div className="auto-container">
                {/* <div className="inner-box">
                    <div className="image-box">
                        <figure className="image"><img src="assets/images/resource/contact-1.jpg" alt="" /></figure>
                        <div className="text">
                            <div className="icon-box"><img src="assets/images/icons/icon-64.png" alt="" /></div>
                            <h3>Headquarters</h3>
                            <p>Boat House, 152/21 City Road Hoxton N1 6NG, UK.</p>
                            <a href="https://www.google.com/maps/@23.1866368,89.6499712,13z" target="_blank"><i className="fas fa-angle-right"></i><i className="fas fa-angle-right"></i><span>Google Map</span></a>
                        </div>
                    </div>
                    <div className="form-inner">
                        <div className="sec-title">
                            <h6>Send Message</h6>
                            <h3>Drop Your Line to Our Experts</h3>
                        </div>
                        <form method="post" action="https://st.ourhtmldemo.com/new/Kodesk1/sendemail.php" id="contact-form" className="default-form">
                            <div className="form-group">
                                <i className="far fa-user"></i>
                                <input type="text" name="username" placeholder="Your Name" required="" />
                            </div>
                            <div className="form-group">
                                <i className="far fa-envelope-open"></i>
                                <input type="email" name="email" placeholder="Email Address" required="" />
                            </div>
                            <div className="form-group">
                              <i className="flaticon-phone"></i>
                              <input type="email" name="" placeholder="Contact" required="" />

                             </div>
                            <div className="form-group">
                                <i className="far fa-text-width"></i>
                                <textarea name="message" placeholder="Your Message..."></textarea>
                            </div>
                            <div className="message-btn">
                                <button className="theme-btn btn-one" type="submit" name="submit-form"><span>Submit Here</span></button>
                            </div>
                        </form>
                    </div>
                </div> */}
                <div className="info-inner centred">
                    <div className="row justify-center">
                        {/* <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="single-item">
                                <div className="icon-box"><i className="flaticon-phone"></i></div>
                                <h3>Call On</h3>
                                <p><a href="tel:98060712348134">+98 060 712 34  & 812 34</a></p>
                            </div>
                        </div> */}
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="single-item">
                                <div className="icon-box"><i className="flaticon-envelope"></i></div>
                                <h3>Email</h3>
                                <p><a href="mailto:supportyou@info.com">contactme@assistant.com</a></p>
                            </div>
                        </div>
                       
                        {/* <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="single-item">
                                <div className="icon-box"><i className="flaticon-share"></i></div>
                                <h3>Call On</h3>
                                <p><a href="contact.html">Facebook</a>, <a href="contact.html">Twitter</a>, <a href="contact.html">Instagram</a></p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>


        {/* <section className="location-section">
            <div className="auto-container">
                <div className="three-item-carousel owl-carousel owl-theme owl-nav-none dots-style-one">
                    <div className="single-item">
                        <figure className="image-box"><img src="assets/images/resource/location-2.jpg" alt="" /></figure>
                        <div className="lower-content">
                            <h3>Newyork</h3>
                            <ul className="info clearfix">
                                <li><span>Add&nbsp;&nbsp;:</span>191 Integer Rd, 2nd Street LA 08219 USA.</li>
                                <li><span>Mob&nbsp;&nbsp;:</span><a href="tel:08963648018">+089 636-48018</a></li>
                                <li><span>Mail&nbsp;&nbsp;:</span><a href="mailto:supportny@example.com">supportnyexample.com</a></li>
                            </ul>
                            <div className="google-map">
                                <a href="https://www.google.com/maps/@23.1866368,89.6499712,13z" target="_blank"><i className="light-icon fas fa-angle-right"></i><i className="fas fa-angle-right"></i><span>Google Map</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="single-item">
                        <figure className="image-box"><img src="assets/images/resource/location-3.jpg" alt="" /></figure>
                        <div className="lower-content">
                            <h3>San Fransisco</h3>
                            <ul className="info clearfix">
                                <li><span>Add&nbsp;&nbsp;:</span>191 Integer Rd, 2nd Street LA 08219 USA.</li>
                                <li><span>Mob&nbsp;&nbsp;:</span><a href="tel:08963648018">+089 636-48018</a></li>
                                <li><span>Mail&nbsp;&nbsp;:</span><a href="mailto:supportny@example.com">supportnyexample.com</a></li>
                            </ul>
                            <div className="google-map">
                                <a href="https://www.google.com/maps/@23.1866368,89.6499712,13z" target="_blank"><i className="light-icon fas fa-angle-right"></i><i className="fas fa-angle-right"></i><span>Google Map</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="single-item">
                        <figure className="image-box"><img src="assets/images/resource/location-4.jpg" alt="" /></figure>
                        <div className="lower-content">
                            <h3>Philadelphia</h3>
                            <ul className="info clearfix">
                                <li><span>Add&nbsp;&nbsp;:</span>191 Integer Rd, 2nd Street LA 08219 USA.</li>
                                <li><span>Mob&nbsp;&nbsp;:</span><a href="tel:08963648018">+089 636-48018</a></li>
                                <li><span>Mail&nbsp;&nbsp;:</span><a href="mailto:supportny@example.com">supportnyexample.com</a></li>
                            </ul>
                            <div className="google-map">
                                <a href="https://www.google.com/maps/@23.1866368,89.6499712,13z" target="_blank"><i className="light-icon fas fa-angle-right"></i><i className="fas fa-angle-right"></i><span>Google Map</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="single-item">
                        <figure className="image-box"><img src="assets/images/resource/location-2.jpg" alt="" /></figure>
                        <div className="lower-content">
                            <h3>Newyork</h3>
                            <ul className="info clearfix">
                                <li><span>Add&nbsp;&nbsp;:</span>191 Integer Rd, 2nd Street LA 08219 USA.</li>
                                <li><span>Mob&nbsp;&nbsp;:</span><a href="tel:08963648018">+089 636-48018</a></li>
                                <li><span>Mail&nbsp;&nbsp;:</span><a href="mailto:supportny@example.com">supportnyexample.com</a></li>
                            </ul>
                            <div className="google-map">
                                <a href="https://www.google.com/maps/@23.1866368,89.6499712,13z" target="_blank"><i className="light-icon fas fa-angle-right"></i><i className="fas fa-angle-right"></i><span>Google Map</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="single-item">
                        <figure className="image-box"><img src="assets/images/resource/location-3.jpg" alt="" /></figure>
                        <div className="lower-content">
                            <h3>San Fransisco</h3>
                            <ul className="info clearfix">
                                <li><span>Add&nbsp;&nbsp;:</span>191 Integer Rd, 2nd Street LA 08219 USA.</li>
                                <li><span>Mob&nbsp;&nbsp;:</span><a href="tel:08963648018">+089 636-48018</a></li>
                                <li><span>Mail&nbsp;&nbsp;:</span><a href="mailto:supportny@example.com">supportnyexample.com</a></li>
                            </ul>
                            <div className="google-map">
                                <a href="https://www.google.com/maps/@23.1866368,89.6499712,13z" target="_blank"><i className="light-icon fas fa-angle-right"></i><i className="fas fa-angle-right"></i><span>Google Map</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="single-item">
                        <figure className="image-box"><img src="assets/images/resource/location-4.jpg" alt="" /></figure>
                        <div className="lower-content">
                            <h3>Philadelphia</h3>
                            <ul className="info clearfix">
                                <li><span>Add&nbsp;&nbsp;:</span>191 Integer Rd, 2nd Street LA 08219 USA.</li>
                                <li><span>Mob&nbsp;&nbsp;:</span><a href="tel:08963648018">+089 636-48018</a></li>
                                <li><span>Mail&nbsp;&nbsp;:</span><a href="mailto:supportny@example.com">supportnyexample.com</a></li>
                            </ul>
                            <div className="google-map">
                                <a href="https://www.google.com/maps/@23.1866368,89.6499712,13z" target="_blank"><i className="light-icon fas fa-angle-right"></i><i className="fas fa-angle-right"></i><span>Google Map</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="single-item">
                        <figure className="image-box"><img src="assets/images/resource/location-2.jpg" alt="" /></figure>
                        <div className="lower-content">
                            <h3>Newyork</h3>
                            <ul className="info clearfix">
                                <li><span>Add&nbsp;&nbsp;:</span>191 Integer Rd, 2nd Street LA 08219 USA.</li>
                                <li><span>Mob&nbsp;&nbsp;:</span><a href="tel:08963648018">+089 636-48018</a></li>
                                <li><span>Mail&nbsp;&nbsp;:</span><a href="mailto:supportny@example.com">supportnyexample.com</a></li>
                            </ul>
                            <div className="google-map">
                                <a href="https://www.google.com/maps/@23.1866368,89.6499712,13z" target="_blank"><i className="light-icon fas fa-angle-right"></i><i className="fas fa-angle-right"></i><span>Google Map</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="single-item">
                        <figure className="image-box"><img src="assets/images/resource/location-3.jpg" alt="" /></figure>
                        <div className="lower-content">
                            <h3>San Fransisco</h3>
                            <ul className="info clearfix">
                                <li><span>Add&nbsp;&nbsp;:</span>191 Integer Rd, 2nd Street LA 08219 USA.</li>
                                <li><span>Mob&nbsp;&nbsp;:</span><a href="tel:08963648018">+089 636-48018</a></li>
                                <li><span>Mail&nbsp;&nbsp;:</span><a href="mailto:supportny@example.com">supportnyexample.com</a></li>
                            </ul>
                            <div className="google-map">
                                <a href="https://www.google.com/maps/@23.1866368,89.6499712,13z" target="_blank"><i className="light-icon fas fa-angle-right"></i><i className="fas fa-angle-right"></i><span>Google Map</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="single-item">
                        <figure className="image-box"><img src="assets/images/resource/location-4.jpg" alt="" /></figure>
                        <div className="lower-content">
                            <h3>Philadelphia</h3>
                            <ul className="info clearfix">
                                <li><span>Add&nbsp;&nbsp;:</span>191 Integer Rd, 2nd Street LA 08219 USA.</li>
                                <li><span>Mob&nbsp;&nbsp;:</span><a href="tel:08963648018">+089 636-48018</a></li>
                                <li><span>Mail&nbsp;&nbsp;:</span><a href="mailto:supportny@example.com">supportnyexample.com</a></li>
                            </ul>
                            <div className="google-map">
                                <a href="https://www.google.com/maps/@23.1866368,89.6499712,13z" target="_blank"><i className="light-icon fas fa-angle-right"></i><i className="fas fa-angle-right"></i><span>Google Map</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}


        {/* <section className="cta-section centred">
            <div className="outer-container" style={{backgroundImage: "url(assets/images/background/cta-bg.jpg)"}}>
                <div className="auto-container">
                    <div className="inner-box">
                        <div className="icon-box"><i className="flaticon-teamwork"></i></div>
                        <h6>Doing Good, Together.</h6>
                        <h2>Get Inspired to The Collaboration</h2>
                        <div className="btn-box">
                            <a href="tel:3125096995" className="phone theme-btn"><i className="flaticon-phone"></i>312-509-6995</a>
                            <a href="index-2.html" className="theme-btn btn-one"><span>Appointment</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
    </div>
  )
}

export default ContactWrapper
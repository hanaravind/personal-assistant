import React from 'react'

const ForgotWrapper = () => {
  return (
    <div>
       <section className="booking-section">
        <div className="outer-container" style={{backgroundImage: "url(assets/images/background/booking-bg.jpg)"}}>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-xl-6 col-lg-12 col-md-12 inner-column">
                        <div className="inner-box">
                            <div className="text">
                                <h2>Forget Password</h2>
                                <p>Enter your email address or username to reset your password.</p>
                            </div>
                            <div className="form-inner">
                                <form action="https://st.ourhtmldemo.com/new/Kodesk1/index.html" method="post"  className="default-form">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                                            <div className="form-group">
                                                <i className="far fa-user"></i>
                                                <input type="text" name="name" placeholder="Your Name" required="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                                            <div className="form-group">
                                                <i className="far fa-envelope-open"></i>
                                                <input type="email" name="email" placeholder="Email Address" required="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                                            <div className="form-group">
                                                <i className="far fa-envelope-open"></i>
                                                <input type="email" id="password" name="password"  placeholder="New Password" required="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                                            <div className="form-group">
                                                <i className="far fa-envelope-open"></i>
                                                <input type="email" id="password_confirmation" name="password_confirmation" placeholder="Confirm Password" required="" />
                                            </div>
                                        </div>
                                       
                                        <div className="col-lg-12 col-md-12 col-sm-12 column">
                                            <div className="form-group message-btn">
                                                <button type="submit" className="theme-btn btn-one"><span>Submit Here</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <section className="location-section">
            <div className="auto-container">
                <div className="sec-title centred">
                    <h6>Our Locations</h6>
                    <h2> Centers in Your City</h2>
                </div>
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
        </section>


        <section className="cta-section centred">
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
        </section>
    </div>
  )
}

export default ForgotWrapper
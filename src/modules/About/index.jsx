import React from 'react'

const AboutWrapper = () => {
  return (  
    <> 
    <section className="page-title centred">
        <div className="outer-container" style={{backgroundImage: "url(assets/images/background/page-title.jpg)"}}>
            <div className="auto-container">
                <div className="content-box clearfix">
                    <div className="title">
                        <h1>About</h1>
                    </div>
                    <ul className="bread-crumb clearfix">
                        <li><a href="index">Home</a></li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>


    <section className="about-style-two">
        <div className="auto-container">
            <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                    <div className="image-box">
                        <figure className="image"><img src="assets/images/resource/about-3.jpg" alt="" /></figure>
                       
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div className="content-box">
                        <div className="sec-title">
                            <h6>Who we are</h6>
                            <h3>This website provides services such as Personal assistance in  friends greetings , festival and special occasion greetings in a pre scheduled option</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <section className="funfact-section centred">
        <div className="auto-container">
            <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                    <div className="counter-block-one wow slideInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="count-outer count-box">
                                <span className="count-text" data-speed="2500" data-stop="25000">0</span>
                            </div>
                            <h3>Members</h3>
                            <p>With 100% Satisfaction</p>
                            <div className="icon-box"><img src="assets/images/icons/icon-16.png" alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                    <div className="counter-block-one wow slideInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="count-outer count-box">
                                <span className="count-text" data-speed="2500" data-stop="35">0</span><span>+</span>
                            </div>
                            <h3>Countries</h3>
                            <p>Covers around the World</p>
                            <div className="icon-box"><img src="assets/images/icons/icon-17.png" alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                    <div className="counter-block-one wow slideInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="count-outer count-box">
                                <span className="count-text" data-speed="2500" data-stop="467">0</span>
                            </div>
                            <h3>Cities</h3>
                            <p>Covers around the World</p>
                            <div className="icon-box"><img src="assets/images/icons/icon-18.png" alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                    <div className="counter-block-one wow slideInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="count-outer count-box">
                                <span className="count-text" data-speed="2500" data-stop="1890">0</span>
                            </div>
                            <h3>Workspaces</h3>
                            <p>With Essestial Amenities</p>
                            <div className="icon-box"><img src="assets/images/icons/icon-19.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
    {/* <section className="chooseus-style-two">
        <div className="outer-container">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                        <div className="chooseus-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-46.png" alt="" /></div>
                                <div className="text">
                                    <h3>Cost Savings and Flexibility</h3>
                                    <p>Rationally encounter extremely painful there anyone.</p>
                                    <a href="index-3.html"><i className="fas fa-angle-right"></i><span>Read More</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                        <div className="chooseus-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-47.png" alt="" /></div>
                                <div className="text">
                                    <h3>Networking & Community Events</h3>
                                    <p>Denouncing pleasure & praising pain give you a complete.</p>
                                    <a href="index-3.html"><i className="fas fa-angle-right"></i><span>Read More</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                        <div className="chooseus-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-48.png" alt="" /></div>
                                <div className="text">
                                    <h3>Perks With The <br />Space</h3>
                                    <p>Actual teachings great explorers of the truth master.</p>
                                    <a href="index-3.html"><i className="fas fa-angle-right"></i><span>Read More</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                        <div className="chooseus-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-49.png" alt="" /></div>
                                <div className="text">
                                    <h3>Central Location For Clients</h3>
                                    <p>Actual teachings great explorers of the truth master.</p>
                                    <a href="index-3.html"><i className="fas fa-angle-right"></i><span>Read More</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                        <div className="chooseus-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-50.png" alt="" /></div>
                                <div className="text">
                                    <h3>Enhanced Company Productivity </h3>
                                    <p>Rationally encounter extremely painful there anyone.</p>
                                    <a href="index-3.html"><i className="fas fa-angle-right"></i><span>Read More</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                        <div className="chooseus-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-51.png" alt="" /></div>
                                <div className="text">
                                    <h3>Bring Structure to Your Day</h3>
                                    <p>Ever undertakes laborer excepts tain some advantage.</p>
                                    <a href="index-3.html"><i className="fas fa-angle-right"></i><span>Read More</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}

{/* 
    <section className="team-section about-page">
        <div className="auto-container">
            <div className="sec-title centred">
                <h6>Our Leaders</h6>
                <h2>Our Experienced Experts</h2>
            </div>
            <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                    <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/team/team-1.jpg" alt="" /></figure>
                            <div className="content-box">
                                <div className="text">
                                    <h3>Max</h3>
                                    <h2><a href="index-2.html">Benjamin</a></h2>
                                    <span className="designation">- Senior Manager</span>
                                </div>
                                <div className="lower-content clearfix">
                                    <figure className="signature pull-left"><img src="assets/images/icons/signature-1.png" alt="" /></figure>
                                    <ul className="list pull-right">
                                        <li className="share-option">
                                            <a href="index-2.html" className="share-icon"><i className="fas fa-share-alt"></i></a>
                                            <ul className="share-links clearfix">
                                                <li><a href="index-4.html"><i className="fab fa-linkedin-in"></i></a></li>
                                                <li><a href="index-4.html"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="index-4.html"><i className="fab fa-facebook-f"></i></a></li>
                                            </ul>
                                        </li>
                                        <li><a href="tel:123456789123"><i className="fas fa-phone"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                    <div className="team-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/team/team-2.jpg" alt="" /></figure>
                            <div className="content-box">
                                <div className="text">
                                    <h3>Chloe</h3>
                                    <h2><a href="index-2.html">Savannah</a></h2>
                                    <span className="designation">- CEO Founder</span>
                                </div>
                                <div className="lower-content clearfix">
                                    <figure className="signature pull-left"><img src="assets/images/icons/signature-1.png" alt="" /></figure>
                                    <ul className="list pull-right">
                                        <li className="share-option">
                                            <a href="index-2.html" className="share-icon"><i className="fas fa-share-alt"></i></a>
                                            <ul className="share-links clearfix">
                                                <li><a href="index-4.html"><i className="fab fa-linkedin-in"></i></a></li>
                                                <li><a href="index-4.html"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="index-4.html"><i className="fab fa-facebook-f"></i></a></li>
                                            </ul>
                                        </li>
                                        <li><a href="tel:123456789123"><i className="fas fa-phone"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                    <div className="team-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/team/team-3.jpg" alt="" /></figure>
                            <div className="content-box">
                                <div className="text">
                                    <h3>Ethan</h3>
                                    <h2><a href="index-2.html">Sebastian</a></h2>
                                    <span className="designation">- Director of Marketing</span>
                                </div>
                                <div className="lower-content clearfix">
                                    <figure className="signature pull-left"><img src="assets/images/icons/signature-1.png" alt="" /></figure>
                                    <ul className="list pull-right">
                                        <li className="share-option">
                                            <a href="index-2.html" className="share-icon"><i className="fas fa-share-alt"></i></a>
                                            <ul className="share-links clearfix">
                                                <li><a href="index-4.html"><i className="fab fa-linkedin-in"></i></a></li>
                                                <li><a href="index-4.html"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="index-4.html"><i className="fab fa-facebook-f"></i></a></li>
                                            </ul>
                                        </li>
                                        <li><a href="tel:123456789123"><i className="fas fa-phone"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
    </>
  )
}

export default AboutWrapper
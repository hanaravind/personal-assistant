import React from 'react'

const HomeWrapper = () => {
  return (
    <>
    <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn"><i className="fas fa-times"></i></div>

        <nav className="menu-box">
            <div className="nav-logo"><a href="index-2.html"><img src="/assets/images/logo-2.png" alt="" title="" /></a></div>
            <div className="menu-outer">Here Menu Will Come Automatically Via Javascript / Same Menu as in Header</div>
            <div className="contact-info">
                <h4>Contact Info</h4>
                <ul>
                    <li>Chicago 12, Melborne City, USA</li>
                    <li><a href="tel:+8801682648101">+88 01682648101</a></li>
                    <li><a href="mailto:info@example.com">infoexample.com</a></li>
                </ul>
            </div>
            <div className="social-links">
                <ul className="clearfix">
                    <li><a href="index-2.html"><span className="fab fa-twitter"></span></a></li>
                    <li><a href="index-2.html"><span className="fab fa-facebook-square"></span></a></li>
                    <li><a href="index-2.html"><span className="fab fa-pinterest-p"></span></a></li>
                    <li><a href="index-2.html"><span className="fab fa-instagram"></span></a></li>
                    <li><a href="index-2.html"><span className="fab fa-youtube"></span></a></li>
                </ul>
            </div>
        </nav>
    </div>

    <section className="weare-section">
     <div className="auto-container">
         <div className="row clearfix">
             <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                 <div className="image-box">
                     {/* <div className="pattern-layer" style={{backgroundImage: "url(https://plus.unsplash.com/premium_photo-1664474834472-6c7d1e3198e2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D)"}}></div> */}
                     <figure className="image float-bob-y"><img src="https://plus.unsplash.com/premium_photo-1664474834472-6c7d1e3198e2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" /></figure>

                 </div>
             </div>
             <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                 <div className="content-box">
                     <div className="sec-title">
                         <h6>Who we are</h6>
                         <h2>Your Personal Office Assistant</h2>
                     </div>
                     <div className="text">
                         <p>We are on a mission to create software solutions that eliminate mundane, repetitive, and cumbersome manual tasks from professionals’ radar.</p>
                     </div>
                     <div className="quote-box">
                         <div className="quote" style={{backgroundImage: "url(/assets/images/icons/quote-3.png)"}}></div>
                         <div className="inner">
                             <h3>The workplace will not feel like a place of work anymore working together.</h3>
                             <h5>Chole Savannah, <span>Manager</span></h5>
                         </div>
                     </div>
                     <div className="btn-box">
                         <a href='/about' className="theme-btn btn-one"><span>Read More</span></a>
                     </div>
                 </div>
             </div>
         </div>
         </div>
     </section>
 {/* <section className="testimonial-section">
   <div className="outer-container sec-pad">
       <div className="auto-container">
           <div className="sec-title">
               <h6>Test</h6>
               <h2>Our Families</h2>
           </div>
           <div className="card-container" >
               <div  className="testimonial-block-one">
                   <div className="inner-box">
                       <figure className="quote"><img src="/assets/images/resource/send.png" alt="" /></figure>
                       <figure className="overlay-quote"><img src="/assets/images/resource/send.png" alt="" /></figure>
                       <div className="author-info">
                           <figure className="thumb-box"><img src="/assets/images/resource/testimonial-1.png" alt="" /></figure>
                           <h3>John Doe</h3>
                           <span className="designation">Web Designer</span>
                       </div>
                       <div className="text">
                           <p>That people work better when they work together, even if they are working on completely different projects.</p>
                       </div>
                       <ul className="rating clearfix">
                            <li><i className="fas fa-star"></i></li>
                           <li><i className="fas fa-star"></i></li>
                           <li><i className="fas fa-star"></i></li>
                           <li><i className="fas fa-star"></i></li>
                           <li><i className="fas fa-star"></i></li>
                       </ul>
                   </div>
               </div>
           </div>
       </div>
       </div>
</section> */}
    {/* <section className="banner-section centred">
        <div className="banner-carousel owl-theme owl-carousel owl-dots-none">
            <div className="slide-item">
                <div className="image-layer" style={{backgroundImage: "url(//assetsbanner/banner-1.jpg)"}}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                       <div className="col-xl-6 col-lg-6 col-md-12 content-column offset-xl-6">
                           <div className="content-inner">
                                <div className="text">
                                    <h1>Looking</h1>
                                    <h3>Flexible Workspace In Your City!</h3>
                                    <p>Our global network of workspaces enable you to work wherever you need to be.</p>
                                    <div className="btn-box">
                                        <a href="index-2.html" className="theme-btn btn-one"><span>Read More</span></a>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
            <div className="slide-item">
                <div className="image-layer" style={{backgroundImage: "url(/assets/images/banner/banner-2.jpg)"}}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                       <div className="col-xl-6 col-lg-6 col-md-12 content-column">
                           <div className="content-inner">
                                <div className="text">
                                    <h1>Mission</h1>
                                    <h3>Build a better office environment.</h3>
                                    <p>Except to obtain some advantage from it? but who has any right to find fault with a man.</p>
                                    <div className="btn-box">
                                        <a href="index-2.html" className="theme-btn btn-one"><span>Read More</span></a>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
            <div className="slide-item">
                <div className="image-layer" style={{backgroundImage: "url(/assets/images/banner/banner-3.jpg)"}}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                       <div className="col-xl-6 col-lg-6 col-md-12 content-column offset-xl-6">
                           <div className="content-inner">
                                <div className="text">
                                    <h1>Best way</h1>
                                    <h3>love your work more is to co-work.</h3>
                                    <p>Praising pain was born and I will give you a complete account of the system expound.</p>
                                    <div className="btn-box">
                                        <a href="index-2.html" className="theme-btn btn-one"><span>Read More</span></a>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}


    {/* <section className="service-section sec-pad">
        <div className="auto-container">
            <div className="sec-title centred">
                <h6>What We Offer</h6>
                <h2>Space to Work & Room to Grow</h2>
            </div>
            <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="/assets/images/service/service-1.png" alt="" /></figure>
                                <figure className="overlay-image"><img src="/assets/images/service/service-2.png" alt="" /></figure>
                            </div>
                            <div className="lower-content">
                                <h6>We Offer</h6>
                                <h3><a href="index-2.html">Exclusive Workspaces</a></h3>
                                <p>Trouble that are bound to ensue & equal fail in their duty...</p>
                                <div className="btn-box">
                                    <a href="index-2.html" className="theme-btn btn-two"><span>Read More</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="/assets/images/service/service-3.png" alt="" /></figure>
                                <figure className="overlay-image"><img src="/assets/images/service/service-4.png" alt="" /></figure>
                            </div>
                            <div className="lower-content">
                                <h6>We Offer</h6>
                                <h3><a href="index-2.html">Shared Workspaces</a></h3>
                                <p>Every pleasure is too be welco- med every pain the avoided...</p>
                                <div className="btn-box">
                                    <a href="index-2.html" className="theme-btn btn-two"><span>Read More</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="/assets/images/service/service-5.png" alt="" /></figure>
                                <figure className="overlay-image"><img src="/assets/images/service/service-6.png" alt="" /></figure>
                            </div>
                            <div className="lower-content">
                                <h6>We Offer</h6>
                                <h3><a href="index-2.html">Meetings & Events</a></h3>
                                <p>These cases are perfectly simple & easy to distinguish...</p>
                                <div className="btn-box">
                                    <a href="index-2.html" className="theme-btn btn-two"><span>Read More</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}


    {/* <section className="about-section sec-pad">
        <div className="auto-container">
            <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                    <div className="image_block_1">
                        <div className="image-box">
                            <div className="image-shape" style={{backgroundImage: "url(/assets/images/shape/shape-1.png)"}}></div>
                            <figure className="iamge image-1"><img src="/assets/images/resource/about-4.jpg" alt="" /></figure>
                            <figure className="iamge image-2"><img src="/assets/images/resource/about-2.jpg" alt="" /></figure>
                            <div className="curve-text">
                                <div className="icon-box"><img src="/assets/images/icons/icon-5.png" alt="" /></div>
                                <span className="curved-circle rotate-me">We Achieve the pinnacle of success together . </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div className="content_block_1">
                        <div className="content-box">
                            <div className="sec-title">
                                <h6>Who we are</h6>
                                <h2>Passion to Create Inspirational Workspace Solutions</h2>
                            </div>
                            <div className="text">
                                <p>Calm. Quiet. Peaceful. That is the best kind of place to co-work.</p>
                                <p>We call it Kodesk!</p>
                                <p>How to pursue pleasure rationally encounter consequences that are extremely painful or again is there anyone who loves pursues desires to obtain occasionally circumstances occur. </p>
                            </div>
                            <div className="inner-box">
                                <div className="single-item">
                                    <h4><span>1</span>Read more</h4>
                                    <div className="link"><a href="about.html"><i className="fas fa-angle-right"></i><span>Read More</span></a></div>
                                </div>
                                <div className="single-item">
                                    <h4><span>2</span>Read more</h4>
                                    <div className="link"><a href="about.html"><i className="fas fa-angle-right"></i><span>Read More</span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}


    {/* <section className="ourcenters-section">
        <div className="project-tab">
            <div className="auto-container">
                <div className="sec-title centred">
                    <h6>Our Centers</h6>
                    <h2>Top Coworking Cities Near You</h2>
                </div>
                <div className="tab-btn-box centred">
                    <div className="tab-btns product-tab-btns clearfix">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 btn-column">
                                <div className="p-tab-btn active-btn" data-tab="#tab-1">
                                    <h5>Office Space</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 btn-column">
                                <div className="p-tab-btn" data-tab="#tab-2">
                                    <h5>Private Space</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 btn-column">
                                <div className="p-tab-btn" data-tab="#tab-3">
                                    <h5>Open Space</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 btn-column">
                                <div className="p-tab-btn" data-tab="#tab-4">
                                    <h5>Meeting Rooms</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="outer-container">
                <div className="p-tabs-content">
                    <div className="p-tab active-tab" id="tab-1">
                        <div className="three-item-carousel owl-carousel owl-theme owl-dots-none">
                            <div className="center-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images/resource/center-1.jpg" alt="" /></figure>
                                    <div className="content-box">
                                        <div className="icon-box"><i className="flaticon-new-york"></i></div>
                                        <h3>KoDesk Newyork</h3>
                                        <span>240 Spaces</span>
                                        <a href="index-2.html"><i className="fas fa-angle-right"></i>Book a Tour</a>
                                    </div>
                                    <div className="text"><h2>Read More</h2></div>
                                </div>
                            </div>
                            <div className="center-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images/resource/center-2.jpg" alt="" /></figure>
                                    <div className="content-box">
                                        <div className="icon-box"><i className="flaticon-twin-towers"></i></div>
                                        <h3>KoDesk illinois</h3>
                                        <span>165 Spaces</span>
                                        <a href="index-2.html"><i className="fas fa-angle-right"></i>Book a Tour</a>
                                    </div>
                                    <div className="text"><h2>Read More</h2></div>
                                </div>
                            </div>
                            <div className="center-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images/resource/center-3.jpg" alt="" /></figure>
                                    <div className="content-box">
                                        <div className="icon-box"><i className="flaticon-city-hall"></i></div>
                                        <h3>KoDesk California</h3>
                                        <span>126 Spaces</span>
                                        <a href="index-2.html"><i className="fas fa-angle-right"></i>Book a Tour</a>
                                    </div>
                                    <div className="text"><h2>Read More</h2></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-tab" id="tab-2">
                        <div className="three-item-carousel owl-carousel owl-theme owl-dots-none">
                            <div className="center-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images/resource/center-1.jpg" alt="" /></figure>
                                    <div className="content-box">
                                        <div className="icon-box"><i className="flaticon-new-york"></i></div>
                                        <h3>KoDesk Newyork</h3>
                                        <span>240 Spaces</span>
                                        <a href="index-2.html"><i className="fas fa-angle-right"></i>Book a Tour</a>
                                    </div>
                                    <div className="text"><h2>Read More</h2></div>
                                </div>
                            </div>
                            <div className="center-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images/resource/center-2.jpg" alt="" /></figure>
                                    <div className="content-box">
                                        <div className="icon-box"><i className="flaticon-twin-towers"></i></div>
                                        <h3>KoDesk illinois</h3>
                                        <span>165 Spaces</span>
                                        <a href="index-2.html"><i className="fas fa-angle-right"></i>Book a Tour</a>
                                    </div>
                                    <div className="text"><h2>Read More</h2></div>
                                </div>
                            </div>
                            <div className="center-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images/resource/center-3.jpg" alt="" /></figure>
                                    <div className="content-box">
                                        <div className="icon-box"><i className="flaticon-city-hall"></i></div>
                                        <h3>KoDesk California</h3>
                                        <span>126 Spaces</span>
                                        <a href="index-2.html"><i className="fas fa-angle-right"></i>Book a Tour</a>
                                    </div>
                                    <div className="text"><h2>Read More</h2></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-tab" id="tab-3">
                        <div className="three-item-carousel owl-carousel owl-theme owl-dots-none">
                            <div className="center-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images/resource/center-1.jpg" alt="" /></figure>
                                    <div className="content-box">
                                        <div className="icon-box"><i className="flaticon-new-york"></i></div>
                                        <h3>KoDesk Newyork</h3>
                                        <span>240 Spaces</span>
                                        <a href="index-2.html"><i className="fas fa-angle-right"></i>Book a Tour</a>
                                    </div>
                                    <div className="text"><h2>Read More</h2></div>
                                </div>
                            </div>
                            <div className="center-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images/resource/center-2.jpg" alt="" /></figure>
                                    <div className="content-box">
                                        <div className="icon-box"><i className="flaticon-twin-towers"></i></div>
                                        <h3>KoDesk illinois</h3>
                                        <span>165 Spaces</span>
                                        <a href="index-2.html"><i className="fas fa-angle-right"></i>Book a Tour</a>
                                    </div>
                                    <div className="text"><h2>Read More</h2></div>
                                </div>
                            </div>
                            <div className="center-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images/resource/center-3.jpg" alt="" /></figure>
                                    <div className="content-box">
                                        <div className="icon-box"><i className="flaticon-city-hall"></i></div>
                                        <h3>KoDesk California</h3>
                                        <span>126 Spaces</span>
                                        <a href="index-2.html"><i className="fas fa-angle-right"></i>Book a Tour</a>
                                    </div>
                                    <div className="text"><h2>Read More</h2></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-tab" id="tab-4">
                        <div className="three-item-carousel owl-carousel owl-theme owl-dots-none">
                            <div className="center-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images/resource/center-1.jpg" alt="" /></figure>
                                    <div className="content-box">
                                        <div className="icon-box"><i className="flaticon-new-york"></i></div>
                                        <h3>KoDesk Newyork</h3>
                                        <span>240 Spaces</span>
                                        <a href="index-2.html"><i className="fas fa-angle-right"></i>Book a Tour</a>
                                    </div>
                                    <div className="text"><h2>Read More</h2></div>
                                </div>
                            </div>
                            <div className="center-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images/resource/center-2.jpg" alt="" /></figure>
                                    <div className="content-box">
                                        <div className="icon-box"><i className="flaticon-twin-towers"></i></div>
                                        <h3>KoDesk illinois</h3>
                                        <span>165 Spaces</span>
                                        <a href="index-2.html"><i className="fas fa-angle-right"></i>Book a Tour</a>
                                    </div>
                                    <div className="text"><h2>Read More</h2></div>
                                </div>
                            </div>
                            <div className="center-block-one">
                                <div className="inner-box">
                                    <figure className="image-box"><img src="/assets/images/resource/center-3.jpg" alt="" /></figure>
                                    <div className="content-box">
                                        <div className="icon-box"><i className="flaticon-city-hall"></i></div>
                                        <h3>KoDesk California</h3>
                                        <span>126 Spaces</span>
                                        <a href="index-2.html"><i className="fas fa-angle-right"></i>Book a Tour</a>
                                    </div>
                                    <div className="text"><h2>Read More</h2></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}

    {/* <section className="pricing-section sec-pad">
        <div className="pattern-layer" style={{backgroundImage: "url(/assets/images/shape/shape-2.png)"}}></div>
        <div className="auto-container">
            <div className="sec-title centred">
                <h6>Pricing & Plans</h6>
                <h2>We Have Flexible Pricing Plan</h2>
            </div>
            <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                    <div className="pricing-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="pricing-table">
                            <div className="table-header">
                                <h3>$20</h3>
                                <div className="icon-box"><img src="/assets/images/icons/icon-12.png" alt="" /></div>
                                <h2>Daily Pass</h2>
                                <p>Our Best Plan for Individuals</p>
                            </div>
                            <div className="feature-box">
                                <div className="single-item">
                                    <h6>Working Hours</h6>
                                    <p>One Time 24 hours access</p>
                                </div>
                                <div className="single-item">
                                    <h6>Meeting Room</h6>
                                    <p>Additional charge $5/Per hour</p>
                                </div>
                                <div className="single-item">
                                    <h6>Essentials</h6>
                                    <p>Internet, A/C, Cofee machines ... <i className="flaticon-diagonal-arrow"></i></p>
                                </div>
                                <div className="single-item">
                                    <h6>Administration</h6>
                                    <p>Instant current month upgrades</p>
                                </div>
                            </div>
                            <div className="table-footer">
                                <a href="index-2.html" className="theme-btn btn-one"><span>Choose a Plan</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                    <div className="pricing-block-one active-block wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="pricing-table">
                            <div className="table-header">
                                <h3>$220</h3>
                                <div className="icon-box"><img src="/assets/images/icons/icon-13.png" alt="" /></div>
                                <h2>Basic Members</h2>
                                <p>Monthly Plan for Basic Members</p>
                            </div>
                            <div className="feature-box">
                                <div className="single-item">
                                    <h6>Working Hours</h6>
                                    <p>12 hours * 7 days * 1 month</p>
                                </div>
                                <div className="single-item">
                                    <h6>Meeting Room</h6>
                                    <p>Spend 6 hours/month</p>
                                </div>
                                <div className="single-item">
                                    <h6>Essentials</h6>
                                    <p>Internet, A/C, Cofee machines ... <i className="flaticon-diagonal-arrow"></i></p>
                                </div>
                                <div className="single-item">
                                    <h6>Administration</h6>
                                    <p>Parcel reception, Company add...</p>
                                </div>
                            </div>
                            <div className="table-footer">
                                <a href="index-2.html" className="theme-btn btn-one"><span>Choose a Plan</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                    <div className="pricing-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="pricing-table">
                            <div className="table-header">
                                <h3>$320</h3>
                                <div className="icon-box"><img src="/assets/images/icons/icon-14.png" alt="" /></div>
                                <h2>Pro Members</h2>
                                <p>Monthly Plan for Pro Members</p>
                            </div>
                            <div className="feature-box">
                                <div className="single-item">
                                    <h6>Working Hours</h6>
                                    <p>12 hours * 7 days * 1 month</p>
                                </div>
                                <div className="single-item">
                                    <h6>Meeting Room</h6>
                                    <p>Spend 15 hours/month</p>
                                </div>
                                <div className="single-item">
                                    <h6>Essentials</h6>
                                    <p>Internet, A/C, Cofee machines ... <i className="flaticon-diagonal-arrow"></i></p>
                                </div>
                                <div className="single-item">
                                    <h6>Administration</h6>
                                    <p>Parcel reception, Company add...</p>
                                </div>
                            </div>
                            <div className="table-footer">
                                <a href="index-2.html" className="theme-btn btn-one"><span>Choose a Plan</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}


    {/* <section className="project-section sec-pad">
        <div className="auto-container">
            <div className="sec-title">
                <h6>Our Gallery</h6>
                <h2>Inspirational Workspace</h2>
                <div className="btn-box">
                    <a href="project-5.html" className="theme-btn btn-one"><span>View More</span></a>
                </div>
            </div>
        </div>
        <div className="outer-container">
            <div className="sortable-masonry">
                <div className="items-container row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column clearfix">
                        <div className="double-block">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 small-column">
                                    <div className="project-block-one">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="/assets/images/gallery/project-1.jpg" alt="" /></figure>
                                            <div className="content-box">
                                                <div className="text">
                                                    <h3><a href="project-details.html">On-Site Management</a></h3>
                                                </div>
                                                <div className="link"><a href="project-details-2.html"><i className="fas fa-angle-double-right"></i>Details</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 small-column">
                                    <div className="project-block-one">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="/assets/images/gallery/project-2.jpg" alt="" /></figure>
                                            <div className="content-box">
                                                <div className="text">
                                                    <h3><a href="project-details.html">On-Site Management</a></h3>
                                                </div>
                                                <div className="link"><a href="project-details-2.html"><i className="fas fa-angle-double-right"></i>Details</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column">
                        <div className="project-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="/assets/images/gallery/project-4.jpg" alt="" /></figure>
                                <div className="content-box">
                                    <div className="text">
                                        <h3><a href="project-details.html">On-Site Management</a></h3>
                                    </div>
                                    <div className="link"><a href="project-details-2.html"><i className="fas fa-angle-double-right"></i>Details</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column clearfix">
                        <div className="double-block">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 small-column">
                                    <div className="project-block-one">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="/assets/images/gallery/project-5.jpg" alt="" /></figure>
                                            <div className="content-box">
                                                <div className="text">
                                                    <h3><a href="project-details.html">On-Site Management</a></h3>
                                                </div>
                                                <div className="link"><a href="project-details-2.html"><i className="fas fa-angle-double-right"></i>Details</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 small-column">
                                    <div className="project-block-one">
                                        <div className="inner-box">
                                            <figure className="image-box"><img src="/assets/images/gallery/project-6.jpg" alt="" /></figure>
                                            <div className="content-box">
                                                <div className="text">
                                                    <h3><a href="project-details.html">On-Site Management</a></h3>
                                                </div>
                                                <div className="link"><a href="project-details-2.html"><i className="fas fa-angle-double-right"></i>Details</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column">
                        <div className="project-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="/assets/images/gallery/project-8.jpg" alt="" /></figure>
                                <div className="content-box">
                                    <div className="text">
                                        <h3><a href="project-details.html">On-Site Management</a></h3>
                                    </div>
                                    <div className="link"><a href="project-details-2.html"><i className="fas fa-angle-double-right"></i>Details</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column">
                        <div className="project-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="/assets/images/gallery/project-7.jpg" alt="" /></figure>
                                <div className="content-box">
                                    <div className="text">
                                        <h3><a href="project-details.html">On-Site Management</a></h3>
                                    </div>
                                    <div className="link"><a href="project-details-2.html"><i className="fas fa-angle-double-right"></i>Details</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 masonry-item small-column">
                        <div className="project-block-one">
                            <div className="inner-box">
                                <figure className="image-box"><img src="/assets/images/gallery/project-3.jpg" alt="" /></figure>
                                <div className="content-box">
                                    <div className="text">
                                        <h3><a href="project-details.html">On-Site Management</a></h3>
                                    </div>
                                    <div className="link"><a href="project-details-2.html"><i className="fas fa-angle-double-right"></i>Details</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}


    {/* <section className="team-section">
        <div className="auto-container">
            <div className="sec-title centred">
                <h6>Our Leaders</h6>
                <h2>Our Experienced Experts</h2>
            </div>
            <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                    <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><img src="/assets/images/team/team-1.jpg" alt="" /></figure>
                            <div className="content-box">
                                <div className="text">
                                    <h3>Max</h3>
                                    <h2><a href="index-2.html">Benjamin</a></h2>
                                    <span className="designation">- Senior Manager</span>
                                </div>
                                <div className="lower-content clearfix">
                                    <figure className="signature pull-left"><img src="/assets/images/icons/signature-1.png" alt="" /></figure>
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
                            <figure className="image-box"><img src="/assets/images/team/team-2.jpg" alt="" /></figure>
                            <div className="content-box">
                                <div className="text">
                                    <h3>Chloe</h3>
                                    <h2><a href="index-2.html">Savannah</a></h2>
                                    <span className="designation">- CEO Founder</span>
                                </div>
                                <div className="lower-content clearfix">
                                    <figure className="signature pull-left"><img src="/assets/images/icons/signature-1.png" alt="" /></figure>
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
                            <figure className="image-box"><img src="/assets/images/team/team-3.jpg" alt="" /></figure>
                            <div className="content-box">
                                <div className="text">
                                    <h3>Ethan</h3>
                                    <h2><a href="index-2.html">Sebastian</a></h2>
                                    <span className="designation">- Director of Marketing</span>
                                </div>
                                <div className="lower-content clearfix">
                                    <figure className="signature pull-left"><img src="/assets/images/icons/signature-1.png" alt="" /></figure>
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


    {/* <section className="testimonial-section">
        <div className="outer-container sec-pad">
            <div className="auto-container">
                <div className="sec-title">
                    <h6>Testimonials</h6>
                    <h2>Words About Our Service</h2>
                </div>
                <div className="two-column-carousel owl-carousel owl-theme owl-dots-none">
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <figure className="quote"><img src="/assets/images/icons/quote-1.png" alt="" /></figure>
                            <figure className="overlay-quote"><img src="/assets/images/icons/quote-2.png" alt="" /></figure>
                            <div className="author-info">
                                <figure className="thumb-box"><img src="/assets/images/resource/testimonial-1.png" alt="" /></figure>
                                <h3>Silvester Scott</h3>
                                <span className="designation">Web Designer</span>
                            </div>
                            <div className="text">
                                <p>Kodesk was born from the notion that people work better when they work together, even if they are working on completely different projects.</p>
                            </div>
                            <ul className="rating clearfix">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="testimonial-block-one">
                        <div className="inner-box">
                            <figure className="quote"><img src="/assets/images/icons/quote-1.png" alt="" /></figure>
                            <figure className="overlay-quote"><img src="/assets/images/icons/quote-2.png" alt="" /></figure>
                            <div className="author-info">
                                <figure className="thumb-box"><img src="/assets/images/resource/testimonial-2.png" alt="" /></figure>
                                <h3>Dahlia Bianca</h3>
                                <span className="designation">Tax Lawyer</span>
                            </div>
                            <div className="text">
                                <p>I was skeptical at first, but man was I pleasantly surprised! I was so used to the traditional world of work, I'd never thought about co-working.</p>
                            </div>
                            <ul className="rating clearfix">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}


    {/* <section className="news-section sec-pad">
        <div className="auto-container">
            <div className="sec-title centred">
                <h6>Blog & Article</h6>
                <h2>Explore Latest From Blog</h2>
            </div>
            <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="category"><a href="blog-details.html">Work Space</a></div>
                                <figure className="image"><a href="blog-details.html"><img src="/assets/images/news/news-1.jpg" alt="" /></a></figure>
                            </div>
                            <div className="lower-content">
                                <div className="option-box">
                                    <div className="admin"><img src="/assets/images/news/admin-1.png" alt="" /><a href="blog-details.html">By: Colmin O'Neill</a></div>
                                    <div className="share"><a href="blog-details.html"><i className="fas fa-share-alt"></i></a></div>
                                </div>
                                <div className="text">
                                    <h3><a href="blog-details.html">We’ve Officially Reached 15k Coworking Spaces!</a></h3>
                                    <p>Laborious physical exercise excepts obtain some advantage from...</p>
                                </div>
                                <div className="lower-box clearfix">
                                    <span className="post-date pull-left">20.08.2021</span>
                                    <div className="link pull-right"><a href="blog-details.html"><i className="fas fa-angle-right"></i><span>Read More</span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="category"><a href="blog-details.html">Consulting</a></div>
                                <figure className="image"><a href="blog-details.html"><img src="/assets/images/news/news-2.jpg" alt="" /></a></figure>
                            </div>
                            <div className="lower-content">
                                <div className="option-box">
                                    <div className="admin"><img src="/assets/images/news/admin-2.png" alt="" /><a href="blog-details.html">By: Layla Madison</a></div>
                                    <div className="share"><a href="blog-details.html"><i className="fas fa-share-alt"></i></a></div>
                                </div>
                                <div className="text">
                                    <h3><a href="blog-details.html">Types Of Professionals You See At KoDesk!</a></h3>
                                    <p>Must explain to you how to mistaken ideas off denouncing...</p>
                                </div>
                                <div className="lower-box clearfix">
                                    <span className="post-date pull-left">14.08.2021</span>
                                    <div className="link pull-right"><a href="blog-details.html"><i className="fas fa-angle-right"></i><span>Read More</span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <div className="category"><a href="blog-details.html">Innovation</a></div>
                                <figure className="image"><a href="blog-details.html"><img src="/assets/images/news/news-3.jpg" alt="" /></a></figure>
                            </div>
                            <div className="lower-content">
                                <div className="option-box">
                                    <div className="admin"><img src="/assets/images/news/admin-3.png" alt="" /><a href="blog-details.html">By: Austin Lincoln</a></div>
                                    <div className="share"><a href="blog-details.html"><i className="fas fa-share-alt"></i></a></div>
                                </div>
                                <div className="text">
                                    <h3><a href="blog-details.html">A Guide To Kodesk Spaces In Newyork – Start Here!</a></h3>
                                    <p>Nor again is there anyone who loves or pursues or desires too...</p>
                                </div>
                                <div className="lower-box clearfix">
                                    <span className="post-date pull-left">26.07.2021</span>
                                    <div className="link pull-right"><a href="blog-details.html"><i className="fas fa-angle-right"></i><span>Read More</span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}

{/* 
    <section className="booking-section">
        <div className="outer-container" style={{backgroundImage: "url(/assets/images/background/booking-bg.jpg)"}}>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-xl-6 col-lg-12 col-md-12 inner-column">
                        <div className="inner-box">
                            <div className="text">
                                <h2>Book a Tour</h2>
                                <p>Rationally encounter consequences that are extremely painful or again is there anyone.</p>
                            </div>
                            <div className="form-inner">
                                <form action="https://st.ourhtmldemo.com/new/Kodesk1/index.html" method="post" className="default-form">
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
                                        <div className="col-lg-12 col-md-12 col-sm-12 column">
                                            <div className="form-group">
                                                <div className="select-box">
                                                    <select className="wide">
                                                       <option data-display="Residential">Service You Need</option>
                                                       <option value="1">Service 01</option>
                                                       <option value="2">Service 02</option>
                                                       <option value="3">Service 03</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 column">
                                            <div className="form-group">
                                                <i className="far fa-text-width"></i>
                                                <textarea name="message" placeholder="Your Message..."></textarea>
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
    </section> */}

    </>
  )
}

export default HomeWrapper
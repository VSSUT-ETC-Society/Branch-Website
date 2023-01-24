    import React from "react";
    // import etc from "../assets/img/etc.png";
    // import meter2 from "../assets/img/etc.png";
    // import meter3 from "../assets/img/etc.png";
    import Carousel from "react-multi-carousel";
    import "react-multi-carousel/lib/styles.css";
    // import arrow1 from "../asses/img/arrow1.svg";
    // import arrow2 from "../assets/img/arrow2.svg";
    import colorSharp from "../assets/img/color-sharp.png";
    import "../Courses.css";

    export const Courses = () => {
    const responsive = {
        superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        },
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        },
        tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        },
    };

    return (
        <section className="courses" id="courses">
        <div className="container">
            <div className="row">
            <div className="col-12">
                <div className="skill-bx wow zoomIn">
                <div className="ohh">
                    <h2>Courses Offered</h2>
                    <h3>BTECH</h3>
                    {/* <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.<br></br> Lorem Ipsum has been the industry's standard
                    dummy text.
                </p> */}
                    <Carousel
                    responsive={responsive}
                    infinite={true}
                    className="owl-carousel owl-theme skill-slider"
                    >
                    <div className="item" style={{ paddingBottom: 60, paddingTop: 60, }}>
                        <section className="parent">
                        <div class="background">
                            <div class="shape"></div>
                            <div class="shape"></div>
                        </div>

                        <div class="wrapper">
                            <div class="img-area">
                            <div class="inner-area">
                                <img
                                style={{width: '100%'}}
                                src="https://1.bp.blogspot.com/-NYPWByswrmg/YSKXi-CZiGI/AAAAAAAACZY/LtLeocLNtrkdb31nrCn6V0mkDRW-jhOUwCNcBGAsYHQ/s16000/img4.jpg"
                                alt=""
                                />
                            </div>
                            </div>

                            <div class="name">First Year</div>

                            {/* <div class="social-icons">
            <a href="#" class="gl"><i class="fab fa-youtube"></i></a>
            <a href="#" class="facebook"><i class="fab fa-facebook"></i></a>
            <a href="#" class="insta"><i class="fab fa-google"></i></a> 
            <a href="#" class="yt"><i class="fab fa fa-whatsapp"></i></a>

        </div> */}

                            <div class="buttons" style={{ width: '100%' }}>
                            <button>View</button>
                            {/* <button>Subscribe</button> */}
                            </div>
                        </div>
                        </section>
                    </div>
                    <div className="item" style={{ paddingBottom: 60, paddingTop: 60 }}>
                        <section className="parent">
                        <div class="background">
                            <div class="shape"></div>
                            <div class="shape"></div>
                        </div>

                        <div class="wrapper">
                            <div class="img-area">
                            <div class="inner-area">
                                <img
                                style={{width: '100%'}}
                                src="https://1.bp.blogspot.com/-NYPWByswrmg/YSKXi-CZiGI/AAAAAAAACZY/LtLeocLNtrkdb31nrCn6V0mkDRW-jhOUwCNcBGAsYHQ/s16000/img4.jpg"
                                alt=""
                                />
                            </div>
                            </div>

                            <div class="name">Second Year</div>

                            {/* <div class="social-icons">
            <a href="#" class="gl"><i class="fab fa-youtube"></i></a>
            <a href="#" class="facebook"><i class="fab fa-facebook"></i></a>
            <a href="#" class="insta"><i class="fab fa-google"></i></a> 
            <a href="#" class="yt"><i class="fab fa fa-whatsapp"></i></a>

        </div> */}

                            <div class="buttons" style={{ width: '100%' }}>
                            <button>View</button>
                            {/* <button>Subscribe</button> */}
                            </div>
                        </div>
                        </section>
                    </div>
                    <div className="item" style={{ paddingBottom: 60, paddingTop: 60 }}>
                        <section className="parent">
                        <div class="background">
                            <div class="shape"></div>
                            <div class="shape"></div>
                        </div>

                        <div class="wrapper">
                            <div class="img-area">
                            <div class="inner-area">
                                <img
                                style={{width: '100%'}}
                                src="https://1.bp.blogspot.com/-NYPWByswrmg/YSKXi-CZiGI/AAAAAAAACZY/LtLeocLNtrkdb31nrCn6V0mkDRW-jhOUwCNcBGAsYHQ/s16000/img4.jpg"
                                alt=""
                                />
                            </div>
                            </div>

                            <div class="name">Third Year</div>

                            {/* <div class="social-icons">
            <a href="#" class="gl"><i class="fab fa-youtube"></i></a>
            <a href="#" class="facebook"><i class="fab fa-facebook"></i></a>
            <a href="#" class="insta"><i class="fab fa-google"></i></a> 
            <a href="#" class="yt"><i class="fab fa fa-whatsapp"></i></a>

        </div> */}

                            <div class="buttons" style={{ width: '100%' }}>
                            <button>View</button>
                            {/* <button>Subscribe</button> */}
                            </div>
                        </div>
                        </section>
                    </div>
                    <div className="item" style={{ paddingBottom: 60, paddingTop: 60 }}>
                        <section className="parent">
                        <div class="background">
                            <div class="shape"></div>
                            <div class="shape"></div>
                        </div>

                        <div class="wrapper">
                            <div class="img-area">
                            <div class="inner-area">
                                <img
                                style={{width: '100%'}}
                                src="https://1.bp.blogspot.com/-NYPWByswrmg/YSKXi-CZiGI/AAAAAAAACZY/LtLeocLNtrkdb31nrCn6V0mkDRW-jhOUwCNcBGAsYHQ/s16000/img4.jpg"
                                alt=""
                                />
                            </div>
                            </div>

                            <div class="name">Fourth Year</div>

                            {/* <div class="social-icons">
            <a href="#" class="gl"><i class="fab fa-youtube"></i></a>
            <a href="#" class="facebook"><i class="fab fa-facebook"></i></a>
            <a href="#" class="insta"><i class="fab fa-google"></i></a> 
            <a href="#" class="yt"><i class="fab fa fa-whatsapp"></i></a>

        </div> */}

                            <div class="buttons" style={{ width: '100%' }}>
                            <button>View</button>
                            {/* <button>Subscribe</button> */}
                            </div>
                        </div>
                        </section>
                    </div>
                    </Carousel>
                </div>
                <br></br>
                <div className="ohh">
                    <h3>MTECH</h3>
                    {/* <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.<br></br> Lorem Ipsum has been the industry's standard
                    dummy text.
                </p> */}
                    <Carousel
                    responsive={responsive}
                    infinite={true}
                    className="owl-carousel owl-theme skill-slider mid"
                    >
                    <div className="item" style={{ paddingBottom: 60, paddingTop: 60, }}>
                        <section className="parent">
                        <div class="background">
                            <div class="shape"></div>
                            <div class="shape"></div>
                        </div>

                        <div class="wrapper">
                            <div class="img-area">
                            <div class="inner-area">
                                <img
                                style={{width: '100%'}}
                                src="https://1.bp.blogspot.com/-NYPWByswrmg/YSKXi-CZiGI/AAAAAAAACZY/LtLeocLNtrkdb31nrCn6V0mkDRW-jhOUwCNcBGAsYHQ/s16000/img4.jpg"
                                alt=""
                                />
                            </div>
                            </div>

                            <div class="name">First Year</div>

                            {/* <div class="social-icons">
            <a href="#" class="gl"><i class="fab fa-youtube"></i></a>
            <a href="#" class="facebook"><i class="fab fa-facebook"></i></a>
            <a href="#" class="insta"><i class="fab fa-google"></i></a> 
            <a href="#" class="yt"><i class="fab fa fa-whatsapp"></i></a>
        </div> */}

                            <div class="buttons" style={{ width: '100%' }}>
                            <button>View</button>
                            {/* <button>Subscribe</button> */}
                            </div>
                        </div>
                        </section>
                    </div>
                    <div className="item" style={{ paddingBottom: 60, paddingTop: 60 }}>
                        <section className="parent">
                        <div class="background">
                            <div class="shape"></div>
                            <div class="shape"></div>
                        </div>

                        <div class="wrapper">
                            <div class="img-area">
                            <div class="inner-area">
                                <img
                                style={{width: '100%'}}
                                src="https://1.bp.blogspot.com/-NYPWByswrmg/YSKXi-CZiGI/AAAAAAAACZY/LtLeocLNtrkdb31nrCn6V0mkDRW-jhOUwCNcBGAsYHQ/s16000/img4.jpg"
                                alt=""
                                />
                            </div>
                            </div>

                            <div class="name">Second Year</div>

                            {/* <div class="social-icons">
            <a href="#" class="gl"><i class="fab fa-youtube"></i></a>
            <a href="#" class="facebook"><i class="fab fa-facebook"></i></a>
            <a href="#" class="insta"><i class="fab fa-google"></i></a> 
            <a href="#" class="yt"><i class="fab fa fa-whatsapp"></i></a>
        </div> */}

                            <div class="buttons" style={{ width: '100%' }}>
                            <button>View</button>
                            {/* <button>Subscribe</button> */}
                            </div>
                        </div>
                        </section>
                    </div>
                    </Carousel>
                </div>
                </div>
            </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    );
    };

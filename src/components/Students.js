        import React from "react";
        import etc from "../assets/img/etc.png";
        // import meter2 from "../assets/img/etc.png";
        // import meter3 from "../assets/img/etc.png";
        import Carousel from "react-multi-carousel";
        import "react-multi-carousel/lib/styles.css";
        // import arrow1 from "../asses/img/arrow1.svg";
        // import arrow2 from "../assets/img/arrow2.svg";
        import colorSharp from "../assets/img/color-sharp.png";
        import "../App.css";

        export const Students = () => {
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
        <section className="skill stu" id="students">
            <div className="container">
            <div className="row">
                <div className="col-12">
                <div className="skill-bx wow zoomIn">
                    <br></br>
                    <div className="ohh">
                    <h2>List of Developers</h2>
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
                        <div className="item">
                        <img src={etc} alt="" />
                        <h5>HOD</h5>
                        </div>
                        <div className="item">
                        <img src={etc} alt="" />
                        <h5>HOD</h5>
                        </div>
                        <div className="item">
                        <img src={etc} alt="" />
                        <h5>HOD</h5>
                        </div>
                        <div className="item">
                        <img src={etc} alt="" />
                        <h5>HOD</h5>
                        </div>
                    </Carousel>
                    </div>
                    <div className="ohh">
                    <h2>List of Students</h2>
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
                        <div className="item">
                        <img src={etc} alt="" />
                        <h5>HOD</h5>
                        </div>
                        <div className="item">
                        <img src={etc} alt="" />
                        <h5>HOD</h5>
                        </div>
                        <div className="item">
                        <img src={etc} alt="" />
                        <h5>HOD</h5>
                        </div>
                        <div className="item">
                        <img src={etc} alt="" />
                        <h5>HOD</h5>
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

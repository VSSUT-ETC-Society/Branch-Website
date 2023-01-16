                import React from "react";
                import Heading from "../common/heading/Heading";
                import "./hero.css";

                const hero = () => {
                return (
                  <>
                    <section className="hero">
                      <div className="container">
                        <div className="row">
                          <Heading
                            subtitle="ESTABLISHED In 1976"
                            title1="Enhancing the"
                            title2="engineer in"
                            title3="You"
                          />
                          <p>
                            By{" "}
                            <span className="yellow">
                              Electronics and Telecommunication Department
                            </span>{" "}
                            | Nov 28, 2022 <br></br>
                            <br></br>
                            <span className="center">
                              Our vision is to develop new ideas in the field of
                              communicaion to enable students to learn new
                              technologies, assimilate appropriate skills and
                              deliver meaningful services to the global society
                              and improve the quality of life by training them
                              with strength of character, leadership and
                              self-attainment.
                            </span>
                          </p>
                          <div className="button">
                            <button className="primary-btn">
                              Read More >{" "}
                              <i className="fa fa-long-arrow-alt-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>
                    <div className="margin"></div>
                  </>
                );
                };

                export default hero;

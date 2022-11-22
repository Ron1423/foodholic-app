import React from "react";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import logo from "../img/intro.jpg";

console.log(logo);

const About = () => {
  return (
    <div className="container">
      <Navigation />
      <section className="page-section clearfix">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="intro-text text-center cta-inner mb-5 mb-lg-0 bg-faded p-5 rounded">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">Final Project</span>
                </h2>
                <p className="mb-3">Kelas : Machine Learning</p>
                <h2 className="section-heading mb-4">
                  <span className="section-heading-lower">
                    Yasin, Saylendra Myheart
                  </span>
                </h2>
                <p className="mb-3">
                  NIM : 105022010102 <br /> Program Studi : Informatika <br />
                </p>
                <h2 className="section-heading mb-4">
                  <span className="section-heading-lower">
                    Pelle, Aaron Yerusyadai
                  </span>
                </h2>
                <p className="mb-3">
                  NIM : 105022010091 <br /> Program Studi : Informatika <br />
                </p>
                <div className="intro-button mx-auto">
                  <button className="btn btn-primary btn-xl">Developers</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="cta-inner bg-faded text-center rounded">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">Please Welcome</span>
                  <span className="section-heading-lower">Food'aHolic</span>
                </h2>
                <p className="mb-0">
                  Cooking is all about people. Food is maybe the only universal
                  thing that really has the power to bring everyone together. No
                  matter what culture, everywhere around the wordl, people eat
                  together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;

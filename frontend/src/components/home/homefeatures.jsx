import React, { useEffect } from "react";
import adhd from "./adhd.png";
import dyslexia from "./dyslexia.png";
import visual from "./visual.png";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaPrint,
} from "react-icons/fa";
export default function HomeFeatures() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div
      id="tutorial"
      style={{ paddingTop: "30px", backgroundColor: "aliceblue" }}
    >
      <div className="container py-4 py-xl-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2>Learning Plans</h2>
            <p data-aos="zoom-in-up">
              Carefully catered plans for students with learning difficulties.
            </p>
          </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <div className="col">
            <div className="text-center d-flex flex-column align-items-center align-items-xl-center">
              <div className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon">
                <img src={adhd} alt="" data-aos="zoom-in-up" />
              </div>
              <div className="px-3">
                <h4 data-aos="zoom-in-up">ADHD</h4>
                <p data-aos="zoom-in-up">
                  ADHD (Attention-Deficit/Hyperactivity Disorder) is a
                  neurodevelopmental disorder characterized by persistent
                  patterns of inattention, hyperactivity, and impulsivity that
                  can impact daily functioning. It often leads to difficulties
                  in focusing, organizing tasks, and maintaining self-control.
                  With proper management and support, individuals with ADHD can
                  learn effective strategies and lead fulfilling lives.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="text-center d-flex flex-column align-items-center align-items-xl-center">
              <div className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon">
                <img
                  style={{ width: "96px", height: "96px" }}
                  src={dyslexia}
                  alt=""
                  data-aos="zoom-in-up"
                />
              </div>
              <div className="px-3">
                <h4 data-aos="zoom-in">Dyslexia</h4>
                <p data-aos="zoom-in">
                  Dyslexia is a learning disorder that affects reading, writing,
                  and spelling skills due to difficulties in processing language
                  and decoding words. It can cause frustration, self-doubt, and
                  challenges in academic settings. However, with appropriate
                  support and accommodations, individuals with dyslexia can
                  overcome obstacles and thrive in various aspects of life.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="text-center d-flex flex-column align-items-center align-items-xl-center">
              <div className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon">
                <img src={visual} alt="" data-aos="zoom-in-up" />
              </div>
              <div className="px-3">
                <h4 data-aos="zoom-in-up">Visual Agnosia</h4>
                <p data-aos="zoom-in-up">
                  Visual Agnosia is a neurological condition where individuals
                  have difficulty recognizing and interpreting visual
                  information despite intact vision. It can result in an
                  inability to recognize familiar objects, faces, or shapes.
                  However, other sensory modalities remain intact, highlighting
                  the specific impairment in visual perception.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <footer
          className="text-center text-lg-start text-dark"
          style={{ backgroundColor: "#5cac81" }}
        >
          <section
            className="d-flex justify-content-between p-2 text-white"
            style={{ backgroundColor: "#1b854a", fontSize: "23px" }}
          >
            <div className="me-2">
              <div style={{ marginLeft: "70px" }}>Connect with us:</div>
            </div>

            <div>
              <a href="" className="text-white me-4">
                <FaFacebookF />
              </a>
              <a href="" className="text-white me-4">
                <FaTwitter />
              </a>
              <a href="" className="text-white me-4">
                <FaGoogle />
              </a>
              <a href="" className="text-white me-4">
                <FaInstagram />
              </a>
              <a href="" className="text-white me-4">
                <FaLinkedinIn />
              </a>
              <a href="" class="text-white me-4">
                <FaGithub />
              </a>
            </div>
          </section>
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">EduAid</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ backgroundColor: "#7c4dff" }}
                    // "width: 60px; background-color: #7c4dff; height: 2px"
                  />
                  <p>
                    We provide a platform for students with learning
                    difficulties to learn and grow.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Useful Links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ backgroundColor: "#7c4dff" }}
                    // "width: 60px; background-color: #7c4dff; height: 2px"
                  />
                  <p>
                    <a href="#!" className="text-dark">
                      Take Test
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      Sign Up
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      Log In
                    </a>
                  </p>
                  <p></p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">About</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ backgroundColor: "#7c4dff" }}
                    // "width: 60px; background-color: #7c4dff; height: 2px"
                  />
                </div>
              </div>
            </div>
          </section>
          <div
            className="text-center text-light p-3"
            style={{ backgroundColor: "black" }}
          >
            © 2023 Copyright:&nbsp;
            <a className="text-light" href="http://localhost:3000">
              EduAid.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

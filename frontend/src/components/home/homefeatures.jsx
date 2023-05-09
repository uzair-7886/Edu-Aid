import adhd from "./adhd.png";
import dyslexia from "./dyslexia.png";
import visual from "./visual.png";
import { FaFacebookF ,FaGithub,FaGoogle,FaInstagram,FaLinkedinIn,FaTwitter,FaHome, FaEnvelope, FaPhone, FaPrint} from "react-icons/fa";

export default function HomeFeatures() {
  return (
    <div id="tutorial" style={{paddingTop:"30px", backgroundColor:"aliceblue"}}>
    <div className="container py-4 py-xl-5">
      <div className="row mb-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <h2>Learning Plans</h2>
          <p>
            Carefully catered plans for students with learning difficulties.
          </p>
        </div>
      </div>
      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        <div className="col">
          <div className="text-center d-flex flex-column align-items-center align-items-xl-center">
            <div className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon">
              <img src={adhd} alt="" />
            </div>
            <div className="px-3">
              <h4>ADHD</h4>
              <p>
                Erat netus est hendrerit, nullam et quis ad cras porttitor
                iaculis. Bibendum vulputate cras aenean.
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
              />
            </div>
            <div className="px-3">
              <h4>Dyslexia</h4>
              <p>
                Erat netus est hendrerit, nullam et quis ad cras porttitor
                iaculis. Bibendum vulputate cras aenean.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="text-center d-flex flex-column align-items-center align-items-xl-center">
            <div className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon">
              <img src={visual} alt="" />
            </div>
            <div className="px-3">
              <h4>Visual Agnosia</h4>
              <p>
                Erat netus est hendrerit, nullam et quis ad cras porttitor
                iaculis. Bibendum vulputate cras aenean.
              </p>
            </div>
          </div>
        </div>
      </div>
 
    </div>
    <div style={{marginTop:"20px"}}>
      <footer
          className="text-center text-lg-start text-dark"
          style={{backgroundColor:"#5cac81"}}
          >
      <section
             className="d-flex justify-content-between p-2 text-white"
             style={{backgroundColor:"#1b854a" ,fontSize:"23px"}}
             >
      <div className="me-5">
        <div style={{marginLeft:"80px"}}>Get connected with us on social networks:</div>
      </div>

      <div>
        <a href="" className="text-white me-4">
          <FaFacebookF/>
        </a>
        <a href="" className="text-white me-4">
          <FaTwitter/>
        </a>
        <a href="" className="text-white me-4">
          <FaGoogle/>
        </a>
        <a href="" className="text-white me-4">
          <FaInstagram/>
        </a>
        <a href="" className="text-white me-4">
          <FaLinkedinIn/>
        </a>
        <a href="" class="text-white me-4">
          <FaGithub/>
        </a>
      </div>
    </section>
    <section className="">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Company name</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{backgroundColor:"#7c4dff"}}
                // "width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Products</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{backgroundColor:"#7c4dff"}}
                // "width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              <a href="#!" className="text-dark">MDBootstrap</a>
            </p>
            <p>
              <a href="#!" className="text-dark">MDWordPress</a>
            </p>
            <p>
              <a href="#!" className="text-dark">BrandFlow</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Bootstrap Angular</a>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{backgroundColor:"#7c4dff"}}
                // "width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              <a href="#!" className="text-dark">Your Account</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Help</a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{backgroundColor:"#7c4dff"}}
                // "width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p><FaHome/> New York, NY 10012, US</p>
            <p><FaEnvelope/> info@example.com</p>
            <p><FaPhone/> + 01 234 567 88</p>
            <p><FaPrint/> + 01 234 567 89</p>
          </div>
         
        </div>
      </div>
    </section>
    <div
         className="text-center text-light p-3"
         style={{backgroundColor: "black"}}
         >
      © 2023 Copyright:&nbsp;
      <a className="text-light" href="http://localhost:3000"
         >EduAid.com</a
        >
    </div>
  </footer>
  </div>
    </div>
  );
}

import adhd from "./adhd.png";
import dyslexia from "./dyslexia.png";
import visual from "./visual.png";

export default function HomeFeatures() {
  return (
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
  );
}

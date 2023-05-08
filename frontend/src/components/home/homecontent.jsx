import main from "./main.png";
export default function HomeContent() {
  return (
    <section>
      <div
        style={{
          height: "600px",
          backgroundImage: `url(${main})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
              <div style={{ maxWidth: "350px" }}>
                <h1 className="text-uppercase fw-bold">
                  Empowering Those with Learning Difficulties
                </h1>
                <p>
                  We are a team of passionate individuals who want to help
                  people with learning difficulties. We want to help them
                  overcome their difficulties and achieve their dreams.
                </p>
                <a
                  className="btn btn-success btn-lg me-2"
                  role="button"
                  href="#"
                >
                  Get Started
                </a>
                <a className="btn btn-success btn-lg" role="button" href="#">
                  Tutorial
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

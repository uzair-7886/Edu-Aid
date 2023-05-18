import { useNavigate } from "react-router-dom";

export default function Card({ Plan, Remove }) {
  const navigate = useNavigate();
  const showPlan = (name) => {
    console.log(name);
    navigate("/showplans", { state: { name } });
  };

  return Plan.map((plans) => (
    <div className="col" key={plans.id}>
      <div className="card mb-4 rounded-3 shadow-sm ">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">Learning Plan</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">{plans.name}</h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>{plans.description}</li>
          </ul>
          <button
            type="button"
            className={`w-100 btn btn-lg btn-outline-success mb-3 ${
              plans.id == 0 ? "disabled" : ""
            } `}
            onClick={() => showPlan(plans.name)}
          >
            Show Plan
          </button>
          <button
            type="button"
            className="w-100 btn btn-lg btn-outline-danger"
            data-bs-toggle="modal"
            data-bs-target={`#exampleModal-${plans.id}`}
          >
            Forfeit
          </button>
          {/* Forfeit Modal */}
          <div
            class="modal fade"
            id={`exampleModal-${plans.id}`}
            tabindex="-1"
            aria-labelledby={`exampleModalLabel-${plans.id}`}
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Forfeit?
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  Forfeiting will cause you to lose all progress
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => {
                      Remove(plans.id);
                    }}
                    data-bs-dismiss="modal"
                  >
                    Forfeit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
}

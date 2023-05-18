import { useNavigate } from "react-router-dom";
import LinearWithValueLabel from "./Progress";
export default function Lcards({ Plan, Score }) {
  const navigate = useNavigate();
  const showPlan = (name) => {
    console.log(name);
    if (name != "Sample Plan") {
      navigate("/showplans", { state: { name } });
    } else {
      navigate("/lplans");
    }
  };
  return Plan.map((plans) => (
    <div className="col" key={plans.id}>
      <div className="card mb-4 rounded-3 shadow-sm ">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal ">Learning Plan</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title fs-2 fs-md-1">
            {plans.name}
          </h1>

          <button
            type="button"
            className="w-100 btn btn-lg btn-outline-success mb-3"
            onClick={() => showPlan(plans.name)}
          >
            Show Plan
          </button>
          {plans.name == "ADHD" ? (
            <>
              <hr />
              <LinearWithValueLabel value={Score} />
            </>
          ) : (
            <>
              <hr />
              <LinearWithValueLabel value={0} />
            </>
          )}
        </div>
      </div>
    </div>
  ));
}

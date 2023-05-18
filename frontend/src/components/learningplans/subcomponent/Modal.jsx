import Modaloptions from "./Modaloptions";
import { useRef } from "react";
// Work on Modal Form Submit
export default function Modal(prop) {
  const OptionChosen = useRef({});
  const ChangeOption = (e) => {
    var { value } = e.target;
    var name = e.target.name;
    OptionChosen.current = { [name]: value };
  };
  // {difficulty: "entry"}
  const FormSubmit = (e) => {
    e.preventDefault();
    if (prop.options[0] != null) {
      prop.AddPlan(OptionChosen.current.difficulty);
    }
  };
  return (
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Choose your plan
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={FormSubmit}>
            <div class="modal-body">
              <div className="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
                <Modaloptions
                  options={prop.options}
                  ChangeOption={ChangeOption}
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                id="modalbutton"
                type="submit"
                class="btn btn-outline-success w-100"
                data-bs-dismiss="modal"
              >
                Done
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

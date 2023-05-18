import modaloptstyles from "./modaloptions.module.css";
export default function Modaloptions({ options, ChangeOption }) {
  // Run an if here to change the icon source depending on option name
  if (options[0] == null) {
    return <div>All Plans are added</div>;
  }
  return options.map((option) => (
    <div className="col" key={option.id}>
      <div
        className="card mb-4 rounded border-light"
        style={{
          height: "0%",
        }}
      >
        <input
          className="button-check"
          type="radio"
          id={option.name}
          name="difficulty"
          value={option.id}
          onClick={ChangeOption}
          required
        />

        <label htmlFor={option.name}>
          <div className="card-header py-3 text-white bg-success border-success rounded ">
            <h4 className="my-0 fw-normal fs-5">{option.name}</h4>
          </div>
        </label>
      </div>
    </div>
  ));
}

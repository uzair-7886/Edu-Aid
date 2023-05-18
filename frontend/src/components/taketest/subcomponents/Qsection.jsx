import { useEffect } from "react";
import Questions from "./Questions";

export default function Qsection(prop) {
  useEffect(() => {
    document.getElementById("form").reset();
    console.log(1);
  });
  return (
    <form onSubmit={(e) => prop.changeQSection(e)} id="form">
      <h2 className="card mb-4 rounded-1 shadow-sm border-success text-center display-6 ">
        {prop.sectiondetails.name}
      </h2>
      <div className="card shadow">
        <Questions
          questiondetails={prop.sectiondetails.questions}
          name={prop.sectiondetails.name}
          Answers={prop.Answers}
        />
      </div>
      <hr className="featurette-divider" />
      <button
        id="next"
        type="submit"
        className="btn btn-outline-success w-100 fs-4"
      >
        Next
      </button>
    </form>
  );
}

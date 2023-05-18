import { useState } from "react";
export default function Questions(prop) {
  return (
    // Mainly htmlFor ADHD Questions as their htmlFormat is different from the other two
    //Key?
    <>
      {prop.questiondetails.map((question) => (
        <>
          <div className="fs-3 text-center bg-secondary text-white rounded ">
            {question.question}
          </div>
          <div className="text-center align-content-center py-3 mb-2">
            {question.options.map((option) => (
              <span className="px-1  px-md-3 px-lg-4 fs-5 ">
                <input
                  type="radio"
                  id={option}
                  name={question.id}
                  value={option}
                  required
                  onClick={(e) => {
                    prop.Answers(e);
                  }}
                />
                <label htmlFor={option}>{option}</label>
              </span>
            ))}
          </div>
        </>
      ))}
    </>
  );
}

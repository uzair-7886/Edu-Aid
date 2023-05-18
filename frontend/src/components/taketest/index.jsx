import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Qsection from "./subcomponents/Qsection";

export default function Taketest() {
  const Navigate = useNavigate();
  const ADHDQuestions = {
    name: "ADHD",
    questions: [
      {
        id: "q1",
        question:
          "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
      },
      {
        id: "q2",
        question:
          "How often do you have difficulty getting things in order when you have to do a task that requires organization?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
      },
      {
        id: "q3",
        question:
          "How often do you have difficulty getting things in order when you have to do a task that requires organization?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
      },
      {
        id: "q4",
        question:
          "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
      },
      {
        id: "q5",
        question:
          "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
      },
      {
        id: "q6",
        question:
          "How often do you feel overly active and compelled to do things, like you were driven by a motor?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
      },
    ],
  };

  const DyslexiaQuestions = {
    name: "Dyslexia",
    questions: [
      {
        id: "q1",
        question:
          "Do you have difficulty sounding out words phonetically, particularly new words like proper names, technical or industry terms? For example, 'Telephony' as 'tə/le/fə/nē' ?",
        options: ["Yes", "No", "I don't know"],
      },
      {
        id: "q2",
        question:
          "Do you find yourself incorrectly copying or transferring notes from a white board, screen or paper, by missing information, misspelling, or reversing information?",
        options: ["Yes", "No", "I don't know"],
      },
      {
        id: "q3",
        question:
          "Do you prefer to receive information through means other than reading, such as by using video, audio, brief notes or summaries, or conversation? ",
        options: ["Yes", "No", "I don't know"],
      },
      {
        id: "q4",
        question:
          "As a child or an adult, did or do you make reading mistakes in letters, numbers, or grammar, such as confusing 'a' and 'o' (pat, pot) '7' and '1'  or not seeing punctuation such as periods and commas?",
        options: ["Yes", "No", "I don't know"],
      },
      {
        id: "q5",
        question:
          "Do you struggle with solving mathematical word problems in school or at work compared to your ability to execute calculations or understand mathematical operations?",
        options: ["Yes", "No", "I don't know"],
      },
      {
        id: "q6",
        question:
          "Do you find yourself having difficulty with spelling, particularly when writing under pressure or when you are tired?",
        options: ["Yes", "No", "I don't know"],
      },
    ],
  };
  const VisualAgnosiaQuestions = {
    name: "Visual Agnosia",
    questions: [
      {
        id: "q1",
        question:
          "Do you have difficulty recognizing faces of people you know?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
      },
      {
        id: "q2",
        question:
          "Do you have difficulty recognizing objects, such as a pencil or a pen?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
      },
      {
        id: "q3",
        question: "Do you have difficulty recognizing colors?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
      },
      {
        id: "q4",
        question: "Do you have difficulty recognizing words?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
      },
      {
        id: "q5",
        question: "Do you have difficulty recognizing places?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
      },
      {
        id: "q6",
        question: "Do you have difficulty recognizing body parts?",
        options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
      },
    ],
  };
  const Answers = useRef({});

  const [QSections, setQSections] = useState(ADHDQuestions);
  var statedata = (e) => {
    var questionId = e.target.name;
    console.log(questionId);
    var condition = QSections.name;
    console.log(condition);
    const { value } = e.target;

    // Create a new array with the updated answer for the corresponding question

    // Update the answer for the corresponding question directly using the ref
    var updatedAnswers = {
      ...Answers.current,
      [condition]: { ...Answers.current[condition], [questionId]: value },
    };

    console.log(updatedAnswers);
    Answers.current = updatedAnswers;
    console.log(Answers);
  };
  function changeQSection(e) {
    e.preventDefault();
    if (QSections.name === "ADHD") {
      setQSections(DyslexiaQuestions);
    } else if (QSections.name === "Dyslexia") {
      setQSections(VisualAgnosiaQuestions);
      document.getElementById("next").innerHTML = "Finish";
    } else if (QSections.name === "Visual Agnosia") {
      Navigate("/rticket", { state: Answers.current });
    }
  }

  return (
    <div className="container py-3">
      <h1 className="display-5 fw-bold text-center">Questionnaire</h1>
      <p className="fs-4 text-center">
        Fill in the form and receive your Assessment Results
      </p>
      <hr className="featurette-divider" />
      {/* Add another component here for each Questionnaire section ADHD,Dyslexia,Visual Agnosia
      and for each make a subcomponent for their question container */}

      <Qsection
        sectiondetails={QSections}
        changeQSection={changeQSection}
        Answers={statedata}
      />
    </div>
  );
}
// Button should be next and at each press replace Prop that generates Questions
// Change button to submit at last page
// At Submit run the Boolean Finder and generate the booleans and transfer to report ticket page

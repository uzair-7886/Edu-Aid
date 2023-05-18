import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import Sidebar from "../../sidebar/Sidebar";
export default function Usrticket() {
  /*Data Uzair needs to send to BackEnd*/
  var backendData = useRef({
    id: 1,
    adhd_boolean: true,
    dyslexia_boolean: true,
    visual_agnosia_boolean: true,
  });
  const location = useLocation();
  var TestObjectRemvelATER2 = { current: location?.state };
  var [TestObjectRemvelATER, setTestObjectRemvelATER] = useState(
    TestObjectRemvelATER2
  );

  console.log(TestObjectRemvelATER);
  /*---------------------------------------------------------*/
  //   const TestObjectRemvelATER = {
  //     current: {
  //       ADHD: {
  //         q1: "Rarely",
  //         q2: "Sometimes",
  //         q3: "Rarely",
  //         q4: "Sometimes",
  //         q5: "Sometimes",
  //         q6: "Rarely",
  //       },
  //       Dyslexia: {
  //         q1: "No",
  //         q2: "No",
  //         q3: "Yes",
  //         q4: "Yes",
  //         q5: "No",
  //         q6: "Yes",
  //       },
  //       "Visual Agnosia": {
  //         q1: "Never",
  //         q2: "Sometimes",
  //         q3: "Rarely",
  //         q4: "Sometimes",
  //         q5: "Sometimes",
  //         q6: "Rarely",
  //       },
  //     },
  //   };

  // apply the boolean finder here
  // ADHD
  var ADHD = TestObjectRemvelATER.current.ADHD;

  var TrueADHDCount = 0;
  for (var key in ADHD) {
    if (String(key) in ["q1", "q2", "q3"]) {
      if (ADHD[key] in ["Sometimes", "Often", "Very Often"]) {
        TrueADHDCount++;
      }
    }
    if (String(key) in ["q4", "q5", "q6"]) {
      if (ADHD[key] in ["Often", "Very Often"]) {
        TrueADHDCount++;
      }
    }
  }
  if (TrueADHDCount >= 4) {
    backendData.current = { ...backendData.current, adhd_boolean: true };
  } else {
    backendData.current = { ...backendData.current, adhd_boolean: false };
  }

  // Dyslexia
  var Dyslexia = TestObjectRemvelATER.current.Dyslexia;

  var DyslexiaTrueCount = 0;
  for (var key in Dyslexia) {
    if (Dyslexia[key] === "Yes") {
      DyslexiaTrueCount++;
    }
  }
  if (DyslexiaTrueCount >= 3) {
    backendData.current = { ...backendData.current, dyslexia_boolean: true };
  } else {
    backendData.current = { ...backendData.current, dyslexia_boolean: false };
  }

  // Visual Agnosia
  var Visual_Agnosia = TestObjectRemvelATER.current["Visual Agnosia"];

  var TrueVACount = 0;
  for (var key in Visual_Agnosia) {
    if (String(key) in ["q1", "q2", "q3"]) {
      if (Visual_Agnosia[key] in ["Sometimes", "Often", "Very Often"]) {
        TrueVACount++;
      }
    }
    if (String(key) in ["q4", "q5", "q6"]) {
      if (Visual_Agnosia[key] in ["Often", "Very Often"]) {
        TrueVACount++;
      }
    }
  }
  if (TrueVACount >= 4) {
    backendData.current = {
      ...backendData.current,
      visual_agnosia_boolean: true,
    };
  } else {
    backendData.current = {
      ...backendData.current,
      visual_agnosia_boolean: false,
    };
  }
  console.log(backendData);
  return (
    <>
      <Sidebar />
      <div
        className="container"
        style={{
          marginTop: "8%",
        }}
      >
        <div className="card justify-self-center align-self-center shadow">
          <div className="card-body ">
            <h5 className="card-title">Report Ticket</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Ticket ID: {backendData.current.id}
            </h6>
            <p className="card-text">
              Your Report Ticket has been generated. Please note down the Ticket
              ID and your Results
            </p>
            <h6 className="card-subtitle mb-2 text-muted">Results</h6>
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">ADHD</th>
                    <td>{backendData.current.adhd_boolean ? "Yes" : "No"}</td>
                  </tr>
                  <tr>
                    <th scope="row">Dyslexia</th>
                    <td>
                      {backendData.current.dyslexia_boolean ? "Yes" : "No"}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Visual Agnosia</th>
                    <td>
                      {backendData.current.visual_agnosia_boolean
                        ? "Yes"
                        : "No"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

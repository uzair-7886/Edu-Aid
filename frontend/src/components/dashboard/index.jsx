import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Sidebar from "../sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import Lcards from "./subcomponents/Learningplans";

export default function Dashboard(props) {
  const Location = useLocation();
  var Score = Location?.state;
  console.log(Score);
  if (Score == undefined) {
    Score = 0;
  } else {
    Score = (Score.easy + Score.hard + Score.medium) / 31;
    Score = Score * 100;
  }
  console.log(Score);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:3001/dashboard/${decodedUserId._id}`;
        const { data: res } = await axios.get(url);
        await setBackendData(res.data);

        // console.log(res.data.adhd)

        await setBoolean({
          adhd_boolean: res.data.adhd,
          dyslexia_boolean: true,
          visual_agnosia_boolean: res.data.vis_agn,
        });

        await setPlans(
          PassTest({
            adhd_boolean: res.data.adhd,
            dyslexia_boolean: res.data.dyslexia,
            visual_agnosia_boolean: res.data.vis_agn,
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [backendData, setBackendData] = useState({});

  const [booleanData, setBoolean] = useState({
    adhd_boolean: false,
    dyslexia_boolean: false,
    visual_agnosia_boolean: false,
  });
  //
  const ADHD = {
    id: 1,
    name: "ADHD",
    description:
      "This plan aims to address the unique challenges faced by individuals such as difficulties with attention, organization, time management, and impulse control.",
  };
  const Dyslexia = {
    id: 2,
    name: "Dyslexia",
    description:
      "This plan aims to address the unique challenges faced by individuals with Dyslexia, such as difficulties with reading, writing, and spelling.",
  };
  const Visual_Agnosia = {
    id: 3,
    name: "Visual Agnosia",
    description:
      "This plan aims to address the unique challenges faced by individuals with Visual Agnosia, such as difficulties with recognizing objects, faces, and places.",
  };
  const PlanArray = [ADHD, Dyslexia, Visual_Agnosia];

  const CheckBoolean = (booleanData) => {
    var ReturnArray = PlanArray;
    if (booleanData.adhd_boolean === false) {
      ReturnArray = PlanArray.filter((plan) => plan.id != 1);
    }
    if (booleanData.dyslexia_boolean === false) {
      ReturnArray = ReturnArray.filter((plan) => plan.id != 2);
    }
    if (booleanData.visual_agnosia_boolean === false) {
      ReturnArray = ReturnArray.filter((plan) => plan.id != 3);
    }
    return ReturnArray;
  };
  const PassTest = (booleanData) => {
    var SamplePlan = [
      {
        id: 0,
        name: "Sample Plan",
        description:
          "This is a sample plan. Forfeit this plan to add your own plan either by taking a test or adding a plan from above",
      },
    ];

    if (
      booleanData.adhd_boolean ||
      booleanData.dyslexia_boolean ||
      booleanData.visual_agnosia_boolean
    ) {
      return CheckBoolean(booleanData);
    } else {
      // console.log(1);
      return SamplePlan;
    }
  };

  const Navigate = useNavigate();

  const token = localStorage.getItem("token");
  const decodedUserId = jwt_decode(token);
  // console.log(decoded)

  const handleLogout = () => {
    localStorage.removeItem("token");

    Navigate("/login");
  };
  const [plans, setPlans] = useState(PassTest(booleanData));

  return (
    <div>
      {console.log(backendData)}
      <Sidebar />
      <div className="container text-center py-5 ">
        <h1 className="text-start ">
          Welcome back, {backendData.firstName} {backendData.lastName}
        </h1>
        <hr />
        <br />

        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
          <Lcards Plan={plans} Score={Score} />
        </div>
        <section class="py-4 py-xl-5">
          <div class="container">
            <div class="text-white border bg-secondary rounded border-0 border-success d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5">
              <div class="pb-2 pb-lg-1">
                <h2 class="fw-bold mb-2 text-start">Diagnostic Test</h2>
                <p class="mb-0">
                  Fill out a small questionnaire and receive a diagnosis on your
                  learning difficulty
                </p>
              </div>
              <div class="my-2">
                <Link
                  to="/usertktest"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <a class="btn btn-light fs-5 py-2 px-4" role="button">
                    Take Test
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <Puzzle/> */}
    </div>
  );
}

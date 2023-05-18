import Card from "./subcomponent/Card";
import { useEffect, useState } from "react";
import Modal from "./subcomponent/Modal";
import Sidebar from "../sidebar/Sidebar";
import jwt_decode from "jwt-decode";
import axios from "axios";


export default function Lplan() {
  //   Uzair Khana I need the below Data from the DataBase
  const [booleanData, setBoolean] = useState({});


  const token = localStorage.getItem("token");
  const decodedUserId = jwt_decode(token);
  // console.log(decodedUserId)


  const getData =async ()=>{
    try {
      const url = `http://localhost:3001/dashboard/${decodedUserId._id}`;
      const { data: res } = await axios.get(url);
      // await setBackendData(res.data)

      // console.log(res.data.adhd)

      await setBoolean({
        adhd_boolean:res.data.adhd ,
        dyslexia_boolean:res.data.dyslexia,
        visual_agnosia_boolean: res.data.vis_agn,
      })

      await setPlans(PassTest(
        {
          adhd_boolean:res.data.adhd ,
          dyslexia_boolean: res.data.dyslexia,
          visual_agnosia_boolean: res.data.vis_agn,
        }
      ))
      await setModalOptions(
        OptionsSet(
          {
            adhd_boolean:res.data.adhd ,
            dyslexia_boolean: res.data.dyslexia,
            visual_agnosia_boolean: res.data.vis_agn,
          }
          )
      )
    } catch (error) {
      console.log(error);
    }
  }


  const postData = async ()=>{
    try {
      const url = `http://localhost:3001/lplans/${decodedUserId._id}`;
      const { data: res } = await axios.post(url,booleanData);
      // await setBackendData(res.data)

      // console.log(res.data.adhd)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData()
  },[])

  useEffect(()=>{
    postData()
  },[booleanData])
  
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

  const OptionsSet = (booleanData) => {
    var OptionsArray;
    if (
      booleanData.adhd_boolean ||
      booleanData.dyslexia_boolean ||
      booleanData.visual_agnosia_boolean
    ) {
      OptionsArray = PlanArray;
      if (booleanData.adhd_boolean) {
        OptionsArray = PlanArray.filter((plan) => plan.id != 1);
      }
      if (booleanData.dyslexia_boolean) {
        OptionsArray = OptionsArray.filter((plan) => plan.id != 2);
      }
      if (booleanData.visual_agnosia_boolean) {
        OptionsArray = OptionsArray.filter((plan) => plan.id != 3);
      }
      if (OptionsArray.length == 0) {
        OptionsArray = [];
      }
    } else {
      OptionsArray = PlanArray;
    }

    return OptionsArray;
  };
  const [plans, setPlans] = useState(PassTest(booleanData));
  const [modaloptions, setModalOptions] = useState(OptionsSet(booleanData));

  //Use boolean variable to set plans Done!
  // Using booleans to generate modal options Done!
  // Add plan based on input and it should be added to the list of plans and decrease the modal options (EXTRA: If model options is NULL then disable the button)

  const AddPlan = (id) => {
    var Add;
    if (id == 1) {
      Add = ADHD;
      setBoolean({...booleanData,adhd_boolean:true})
    } else if (id == 2) {
      Add = Dyslexia;
      setBoolean({...booleanData,dyslexia_boolean:true})
    } else if (id == 3) {
      Add = Visual_Agnosia;
      setBoolean({...booleanData,visual_agnosia_boolean:true})
    }
    // This still needs to be worked on
    setPlans([...plans, Add]);
    setModalOptions(modaloptions.filter((option) => option.id != id));
    // console.log(modaloptions);
  };
  const RemovePlan = (plansid) => {
    // console.log(plansid);
    var addtooption = plans.filter((plan) => plan.id == plansid)[0];
   
    if (addtooption.id == 1) {
      
      setBoolean({...booleanData,adhd_boolean:false})
    } else if (addtooption.id == 2) {
      
      setBoolean({...booleanData,dyslexia_boolean:false})
    } else if (addtooption.id == 3) {
      
      setBoolean({...booleanData,visual_agnosia_boolean:false})
    }
    setPlans(plans.filter((plan) => plan.id !== plansid));
    // console.log(plans);
    // console.log(addtooption);
    if (plansid != 0) {
      setModalOptions([
        ...modaloptions.filter((option) => option != null),
        addtooption,
      ]);
    }
    // console.log(modaloptions);
  };

  return (
    <>
      <Sidebar />
      {console.log(booleanData)}
      <div className="container py-3 ">
        <h1 className="display-5 fw-bold text-center">Learning Plans</h1>
        <p className="fs-4 text-center">
          Follow your Learning Plans and keep track of your progress
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            className="btn btn-lg btn-outline-success w-100"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            style={{
              borderStyle: "dashed",
              borderWidth: "2px",
            }}
          >
            Add Plan
          </button>
          <Modal options={modaloptions} AddPlan={AddPlan} />
        </div>
        <hr className="featurette-divider" />

        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-start">
          <Card Remove={RemovePlan} Plan={plans} />
        </div>
      </div>
    </>
  );
}

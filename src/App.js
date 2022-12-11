// import logo from './logo.svg';
import { useState, useEffect } from "react";
import "./App.css";
import QuestionType from "./components/questionType/QuestionType.js";
import {singleQuestionType,multiQuestionType} from "./helper/FormingObject.js";
function App() {
  const [questionTyp, setQuestionTyp] = useState([]);
  const [status, setStatus] = useState(false);
  const [selectionType, setSelectionType] = useState("");
  const [quesCreation, setQuesCreation] = useState([]);

  useEffect(() => {
    console.log(quesCreation);
  }, [quesCreation]);

  const createSurvey = () => {
    setStatus(true);
    setQuestionTyp(["Select Question Type", "Multi-select", "Single-select"]);
  };

  const selectedQuestionType = (inputType) => {
    //console.log(inputType);
    if (inputType == "Single-select") {
      setSelectionType("Single-select");
      setQuesCreation([...quesCreation, singleQuestionType]);
    }
    if (inputType == "Multi-select") {
      setSelectionType("Multi-select");
      setQuesCreation([...quesCreation, multiQuestionType]);
    }
  };

  return (
    <div className="container">
      {/* first row */}
      <div className="row">
        <div className="col-12 position-center">
          <img
            src="./tag-pic.png"
            alt="Its the form tagline"
            width="300"
            height="100"
          />
        </div>
      </div>
      {/* second row */}
      {!status && (
        <div className="row">
          <div className="col-4"></div>

          <div className="col-4 position-center">
            <div className="button-box">
              <button
                type="button"
                onClick={createSurvey}
                className="btn btn-secondary"
              >
                Create Survey
              </button>
            </div>
            <div className="button-box">
              <button type="button" className="btn btn-secondary">
                Take Survey
              </button>
            </div>
          </div>

          <div className="col-4 position-center"></div>
        </div>
      )}
      {/* third row */}
      {status && (
        <div className="row">
          <div className="col-12 position-center">
            <QuestionType
              questionTyp={questionTyp}
              selectedQuestionType={selectedQuestionType}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

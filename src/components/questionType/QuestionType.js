import "./QuestionType.css";
const QuestionType = ({questionTyp,selectedQuestionType}) => {
  return (
    <div className="row">

      <div className="col-4 "></div>

      <div className="col-4 text-center">

        <form>
          <div className="form-group">
            <label htmlFor="questionType">Select Question Type</label>
            <select className="form-control" id="questionType" onChange={(event)=>selectedQuestionType(event.target.value)}>
                {
                    questionTyp.map((data,index)=>{
                        return ( <option key={index} value={data}>{data}</option>);
                    })
                }
             
             
             
            </select>
          </div>
        </form>

      </div>

      <div className="col-4 "></div>

    </div>
  );
};
export default QuestionType;

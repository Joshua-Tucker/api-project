import React from "react";
import Button from "../../Components/Button/Button";
import InputField from "../../Components/InputField/InputField";
import "./Form.scss"

const Form = () => {


//FOR FORM

// const handleSubmit = async greeting => {
//   const result = await fetch("http://localhost:8080/greeting",{
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(greeting)
//   })
// };
  return (
    <div className="form-container">
      <div className="form">
        <div className="form__left">
          <InputField label={"Name"} placeholderText={"Don't leave empty"} id={"3"} />
          <InputField label={"Location"} placeholderText={"Don't leave empty"} id={"3"} />
          <InputField label={"Country"} placeholderText={"Don't leave empty"} id={"3"} />
          <InputField label={"Website"} placeholderText={"Don't leave empty"} id={"3"} />
          <InputField label={"Cost"} placeholderText={"Don't leave empty"} id={"3"} />
          <InputField label={"Highest Point"} placeholderText={"Don't leave empty"} id={"3"} />
        </div>
        <div className="form__right">
          <InputField label={"Transfer Time"} placeholderText={"Don't leave empty"} id={"3"} />
          <InputField label={"Typical users are"} placeholderText={"Don't leave empty"} id={"3"} />
          <InputField label={"Snowpark"} placeholderText={"Don't leave empty"} id={"3"} />
          <InputField label={"Ski Area"} placeholderText={"Don't leave empty"} id={"3"} />
          <InputField label={"Images"} placeholderText={"Don't leave empty"} id={"3"} />
          <Button text="Submit"/>
        </div>
      </div>
    </div>
  );
};

export default Form;

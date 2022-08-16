import React from "react";

import "./CourseInput.css";
import Button from "../../UI/Button/Button";


const CourseInput=props=>{
    const goalInputChangeHandler=event=>{

    }
    const formSubmitHandler=event=>{

    }
    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler}></input>
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
}

export default CourseInput;
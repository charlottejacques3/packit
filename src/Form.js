import React, { useState } from 'react';

function Form({ setApi }) {
    const [url, setUrl] = useState("");

    const handleSubmit = (event) => {
        console.log("submitted!");
        // let url = "";
        // setUrl("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/vancouver?unitGroup=metric&include=days&key=LR9FZM68C2LQX5B8SUT84J6QK&contentType=json");
        // setApi("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/vancouver?unitGroup=metric&include=days&key=LR9FZM68C2LQX5B8SUT84J6QK&contentType=json");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Trip Name: </label>
            <input type="text" name="tripName"/>
            <br/>

            <label>Dates: </label>
            <input type="date" name="startDate"/>
             - 
            <input type="date" name="startDate"/>
            <br/>

            <label>Location: </label>
            <input type="text" name="startDate"/>
            <br/>
            
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
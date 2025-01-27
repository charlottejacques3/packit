import { useState, useEffect } from "react";

const Fetch = ({ url }) => {
    const [weatherData, setWeatherData] = useState([]);
    useEffect(() => {
        //use url search params to pass location, dates etc?
        //https://stackoverflow.com/questions/35038857/setting-query-string-using-fetch-get-request
        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data.days);
            setWeatherData(data.days);
        });
    }, []);

    return (
        <div>
            {weatherData.map((data) => (
                <p key={data.datetimeEpoch}>{data.tempmax}</p>
            ))}
        </div>
    );
};

export default Fetch;
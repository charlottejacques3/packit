import { useState, useEffect } from "react";

function Fetch ({ url }) {
    const [weatherData, setWeatherData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error: status ${res.status}`)
            }
            return res.json();
        })
        .then((data) => {
            console.log(data.days);
            setWeatherData(data.days);
        })
        .catch((err) => {
            console.error(err.message);
            setError(err.message);
        });
    }, [url]);

    return (
        <div>
            { error ? (
                <p>Error: Please enter a valid location</p>
            ) : (
                weatherData.map((data) => (
                    <p key={data.datetimeEpoch}>{data.tempmax}</p>
                ))
            )}
        </div>
    );
};

export default Fetch;
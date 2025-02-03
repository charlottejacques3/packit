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

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toDateString();
    }

    return (
        <div>
            { error ? (
                <p>Error: Please enter a valid location</p>
            ) : (
                weatherData.map((data) => (
                    <span>
                        <p key={data.datetimeEpoch}>{data.datetime} - {formatDate(data.datetime)} - {Math.round(data.tempmax)}</p>
                        <p></p>
                    </span>
                ))
            )}
        </div>
    );
};

export default Fetch;
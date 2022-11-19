import axios from "axios";
import React, { useState, useEffect } from "react";
import Loader from "../Loader";
// import "../index.css";

function Weather() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&units=metric&appid=81cf86110a99a58f3b70631a0bf231c4"
      )
      .then((res) => setData(res.data))
      .catch((error) => setIsError(error.message));
  }, []);

  return (
    <>
      {typeof data.main === "undefined" ? (
        <span>
          <Loader />
        </span>
      ) : (
        <span className="fs-6 pe-none">
          {isError !== "" && <span>{isError}</span>}
          <div>{data.name}</div>
          <small>
            {data.main.temp}°C | {data.weather[0].main}
          </small>
        </span>
      )}
    </>
  );
}
export default Weather;

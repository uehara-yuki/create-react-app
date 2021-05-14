import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather (props){
    function handleResponse (response){
        alert (`The weather in ${props.city} is ${response.data.main.temp} C`);

    }
    let apiKey= "c25c2e288aa866c69cd6db4b9732a68a";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return (
    <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    )
}
import React from "react";

import Form from "./form.js";

const API_KEY = "70058c19934ab36e73a95f859c747db1";

class App extends React.Component{
  getWeather = async (e) =>{
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${API_KEY}&units=metric`);
    Const data = await api_call.json();
    console.log(data);
  }
  render(){
    return(
      <div>
        <form />
      </div>
    );
  }
};

export default App;
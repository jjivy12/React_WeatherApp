import react from "react";
import { render } from "@testing-library/react";

Class Form extends Reaxt.Component{
    render() {
        return (
            <form onSubmit={this.PaymentResponse.getWeather}>
                <input type="text" name="city" placeholder="Enter City Here.."/>
                <button> Get Weather</button>
            </form>
        );
    }
};

export default Form;
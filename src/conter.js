import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { connect } from "react-redux";

function Counter(props) {

     console.log("props:", props);

    const increment = () => {
        props.dispatch({ type: "INCREMENT" })
    }

    const decrement = () => {
        props.dispatch({ type: "DECREMENT" })
    }

    return (
        <div>
            <button onClick={decrement}> -</button>
            <span>{props.count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        count: state.count,
    }

}

export default connect(mapStateToProps)(Counter);

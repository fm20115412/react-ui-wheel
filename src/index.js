import React from 'react';
import ReactDOM from 'react-dom';
import style from "./index.scss";

const Hello = () => {
    return <div>Hello React! Hello world !</div>;
};

ReactDOM.render(<Hello />, document.getElementById('app'));

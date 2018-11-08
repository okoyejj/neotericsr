import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss'

const Index = () => {
    return <div className="testing__this--now">Hello world</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
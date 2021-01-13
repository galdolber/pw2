var React = require('react');
var ReactDOM = require ("react-dom");
var Photon = require('@silvia-odwyer/photon');

window.React = React
window.ReactDOM = ReactDOM
window.Photon = Photon

ReactDOM.render(
    React.createElement("h1", null, "Con React"),
    document.getElementById("app"))
  
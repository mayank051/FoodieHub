/* 
  Build below HTML structure using React

  <div id="parent">
    <div id="child">
      <h1>Hello From React!</h1>
      <h2>Namaste React</h2>
    <div>
  </div>

*/

const heading = React.createElement(
  "h1",
  { id: "heading", className: "header" },
  "Hello World From React!"
);

//React.createElement will create a React object which is normal javascript object,
//React.render will convert it to HTML elements and replace the content under the id specified in inde.html.

const element = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("div", {}, "Hello From React!"),
    React.createElement("div", {}, "Namaste React!"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);

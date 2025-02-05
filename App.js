/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>i am h1 tag</h1>
 *      </div>
 * </div>
 * 
 */



const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement("div",{id: "child"},
        [
            React.createElement("h1",{},"i am h1 tag"),
            React.createElement("h2",{},"i am h2 tag")
        ]
    )
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("rot"));
root.render(parent);
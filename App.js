const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    React.createElement(
        "div",
         {id: "child"},[
        React.createElement("h1", {}, "i'm an h1 tag"),
         React.createElement("h1", {}, "i'm an h1 tag"),
         ]        
)

);

/*
const heading =  React.createElement(
    "h1",
    {id: "heading", xyz: "abc"},
        "Hello World from React!"
    
);*/
console.log(parent); //object
   const root = React.createElement("h1", {}, "Hello World from React!");

    ReactDOM.render(parent, document.getElementById("root"));
import React, { Component, useState } from "react";
import ReactDOM  from "react-dom/client";

//react element
const heading = React.createElement('h1' , {
    id : 'heading'
} , "Hello world from React!"); // first link used

const root = ReactDOM.createRoot(document.getElementById('root')); // second link used

const nestedHtml = React.createElement('div' , {id : 'parent'} , // react element -> Html element
    [
        React.createElement('div' , {id : 'child'} , 
        [
            React.createElement('h1' , {className : 'headingTag'} , "This is heading1 inside Nested"),
            React.createElement('h2' , {className : 'headingTag'} , "This is heading2 inside Nested")
        
        ]) ,
        React.createElement('div' , {id : 'child2'} , 
        [
            React.createElement('h1' , {className : 'headingTag'} , "This is heading1 inside Nested"),
            React.createElement('h2' , {className : 'headingTag'} , "This is heading2 inside Nested")
        
        ]) 
    ]
)


// function that returns react Element or jsx is called functional Component

function Func({name}){
    return <h1>Hello {name}</h1>
}

const Func1 = () =>{

    //array destructuring
    const numbers = [2,3,4,5,6,7];

    const [first , second , ...arr] = numbers;
    // const [...arr , five , seven] = numbers; // error , spread operator only used at last for array.

    //object destructuring
    // const newobj = {...obj , name : "balaji"};

   
 


    return (
        <div>
            <div>
                <h2>Hello world 2</h2>
            </div>
            <div>
                <h3>World inside div</h3>
            </div>
            <Func name ="balaji" />
        </div>
    )
}

//jsx 
const usingJsx = (
   <h1>Hello world</h1>
)









console.log(nestedHtml)
root.render(<Func1 />);



// "start": "rm -rf .parcel-cache && parcel",
// "build": "rm -rf .parcel-cache && parcel build"
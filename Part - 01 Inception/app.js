const heading = React.createElement('h1' , {
    id : 'heading'
} , "Hello world from React!"); // first link used

const root = ReactDOM.createRoot(document.getElementById('root')); // second link used

const nestedHtml = React.createElement('div' , {id : 'parent'} , 
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

console.log(nestedHtml)
root.render(nestedHtml);
import React from "react";

class App extends React.Component {
  state = {
    message : <h4>Welcome first Time</h4>,
    count : 0,
  };
  updateMessage(){
    this.setState({ message: "updated message"})
  }

 
  updateCount(){
    this.setState({count : this.state.count + 1})
  }
  render() {
    return (
      <div>
         <h3>Hello from REACT class Component {' '} {/* {' '}  to add space*/ }
        {x} {y} {z} </h3>
         <p>{this.state.message}</p>
         {/* we use "this" pour accéder a "state" de la class en cas on a une autre cons or let en dehors de la class  */}
        <p>
          React makes it painless to create interactive UIs. Design simple views
          for each state in your application, and React will efficiently update
          and render just the right components when your data changes.
          Declarative views make your code more predictable and easier to debug.{" "}
        </p>
        <button onClick={() =>{this.updateMessage()}}>Update</button>
      <div>
        <p>{this.state.count} </p>
        <button onClick={() =>{this.updateCount()}}>change the value</button>
      </div>
      </div>



      
    );
  }
}
export default App;
export const x = 1;
export const y = 3;
export const z = 5;

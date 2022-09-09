import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Brother', age: 22},
      {name: 'Parfaite', age: 19},
      {name: 'Consolatus', age: 24}
    ],
    showPersons: false
  }

switchNameHandler = (newName) => {
  //console.log('Was cliked');
  this.setState({
    persons: [
      {name: newName, age: 22},
      {name: 'Parfaite Irakiza', age: 19},
      {name: 'Consolatus', age: 24}
    ]

  })
}
namechangedHandler = (event) =>{
  this.setState(
    {
      persons: [
        {name: event.target.value, age: 22},
        {name: 'Parfaite Irakiza', age: 19},
        {name: 'Consolatus', age: 24}
      ]
    }
  )
}
togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow})
}

  render() {
    const style = {
      backGround:  "Wheat",
      border: "1px solid ",
      font:'inherit',
      padding:'8px',
      cursor: 'pointer'
    }
    return (
    <div className="App">
      <h1>Hi, I am  a React App</h1>
      <p>This is working!</p>
      <button 
      style={style}
      onClick={this.togglePersonsHandler()}>Switch Name</button>
      {this.state.showPersons ?
        <div>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          click={this.switchNameHandler.bind(this, 'Brother Dushime!')}
          changed={this.namechangedHandler}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Parfaite!')} >She is my sister!</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />

      </div> : null
      }
    </div>
    );
  }
}


export default App;

import React from 'react';
import './App.css';
import Box from './Box';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isVisible: false};
  }

    //called automatically anytime our component shows up on the screen
    componentDidMount() {
      console.log("my component was rendered to the screen");
      setTimeout(
        () => this.setState({ isVisible: true }), 
        1000
      );

      this.removeFromScreen();
  }

  removeFromScreen = () => {
      setTimeout(
        () => this.setState({ isVisible: false }), 
        5000
      );
  }

 

  render() {
    if (this.state.isVisible) {
      return (
         <div className="App">
            <Box size={150}></Box>
            <Box size={50}></Box>
            <Box size={100}></Box>
           {/* <div className="box box1"></div>
           <div className="box box2"></div>
           <div className="box box3"></div> */}
         </div>
       );
    }
     else {
      return (
        <div className="App"></div>
      );
     }
  }
}

export default App;

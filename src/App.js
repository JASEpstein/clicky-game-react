import React, { Component } from "react";
import AvengerCard from "./components/AvengerCard";
import Wrapper from "./components/Wrapper";
import avengers from "./characters.json";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron"
import cardContainer from "./components/CardContainer";

class App extends Component {
  state = {
    avengers
  };


  render() {
    return (
      <Wrapper>
        <Navbar/>
        <Jumbotron/>
        <div className="container">
          {this.state.avengers.map(avengers => (
          <AvengerCard
            id={avengers.id}
            key={avengers.id}
            name={avengers.name}
            image={avengers.image}
          />
        ))}
       </div>
        
    
      </Wrapper>
    );
  }
}

export default App;

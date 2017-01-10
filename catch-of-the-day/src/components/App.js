import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {

  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    this.state = {
      fishes: {

      },
      order: {}
    };
  }

  addFish(fish) {
    // update our state
    const fishes = {...this.state.fishes}; // ... is a spread. takes every item form object and spread it into this object
    // add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // this.state.fishes.fish1 = fish -- bad practice
    //set state
    this.setState({fishes: fishes}); // ten drugi fishes to jest ten const
  }



  render() {
    return (

      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"  />
        </div>
        <Order />
        <Inventory addFish={this.addFish}/>
      </div>
    )
  }
}
export default App;

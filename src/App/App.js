import React from 'react';
import './App.scss';
import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';

class App extends React.Component {
  state = {
    mushrooms: [],
    basket: [],
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    const basket = mushroomData.getBasket();
    this.setState({ mushrooms, basket });
  }

  pickMushroom = () => {
    const mushrooms = mushroomData.getMushrooms();
    const basket = mushroomData.getBasket();
    mushroomData.pickAMushroom();
    this.setState({ mushrooms, basket });
  }

  checkShrooms = () => {
    const mushrooms = mushroomData.getMushrooms();
    const basket = mushroomData.getBasket();
    mushroomData.checkMushroomsInBasket();
    this.setState({ mushrooms, basket });
  }

  render() {
    const { mushrooms, basket } = this.state;
    return (
      <div className="App">
        <h1>Mushroom Picker App</h1>
        <Forest mushrooms={mushrooms} pickMushroom={this.pickMushroom} checkShrooms={this.checkShrooms}/>
        <Basket basket={basket} />
        <footer>
          <p>Mushroom Picking With Davis &copy;2020</p>
        </footer>
      </div>
    );
  }
}

export default App;

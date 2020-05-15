import React from 'react';
import Mushroom from '../Mushroom/Mushroom';
import './Basket.scss';
import mushroomShape from '../../helpers/propz/mushroomShape';

class Basket extends React.Component {
  static propTypes = {
    basket: mushroomShape.mushroomShape,
  }

  render() {
    const { basket } = this.props;
    const makeMushrooms = basket.map((mushroom, i) => (
      <Mushroom key={i + 1} mushroom={mushroom} />
    ));
    return (
      <div>
        <h1><i className="fas fa-shopping-basket"></i> O' Shrooms</h1>
        <div className="Basket d-flex flex-wrap">
        {makeMushrooms}
        </div>
      </div>
    );
  }
}

export default Basket;

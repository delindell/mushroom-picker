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
    const makeMushrooms = basket.map((mushroom) => (
      <Mushroom key={mushroom.id} mushroom={mushroom} />
    ));
    return (
      <div>
        <h1>Basket O' Shrooms</h1>
        <div className="Basket d-flex flex-wrap">
        {makeMushrooms}
        </div>
      </div>
    );
  }
}

export default Basket;

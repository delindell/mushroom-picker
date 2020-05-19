import React from 'react';
import PropTypez from 'prop-types';
import Mushroom from '../Mushroom/Mushroom';
import mushroomShape from '../../helpers/propz/mushroomShape';
import './Basket.scss';


class Basket extends React.Component {
  static propTypes = {
    basket: PropTypez.arrayOf(mushroomShape.mushroomShape),
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

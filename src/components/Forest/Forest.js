import React from 'react';
import PropTypez from 'prop-types';
import Mushroom from '../Mushroom/Mushroom';
import mushroomShape from '../../helpers/propz/mushroomShape';
import './Forest.scss';

class Forest extends React.Component {
  static propTypes = {
    mushrooms: PropTypez.arrayOf(mushroomShape.mushroomShape),
    pickMushroom: PropTypez.func.isRequired,
  }

  pickMushroomEvent = (e) => {
    e.preventDefault();
    const { pickMushroom } = this.props;
    pickMushroom();
  }

  render() {
    const { mushrooms } = this.props;
    const makeMushrooms = mushrooms.map((mushroom) => (
      <Mushroom key={mushroom.id} mushroom={mushroom} />
    ));
    return (
      <div>
        <h1>Forest Full O' Shrooms</h1>
        <button className="btn btn-primary" onClick={this.pickMushroomEvent}>Pick a Mushroom</button>
        <div className="Forest d-flex flex-wrap">
        {makeMushrooms}
        </div>
      </div>
    );
  }
}

export default Forest;

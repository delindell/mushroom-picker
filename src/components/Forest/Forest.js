import React from 'react';
import PropTypez from 'prop-types';
import Mushroom from '../Mushroom/Mushroom';
import mushroomShape from '../../helpers/propz/mushroomShape';
import './Forest.scss';

class Forest extends React.Component {
  static propTypes = {
    mushrooms: PropTypez.arrayOf(mushroomShape.mushroomShape),
    pickMushroom: PropTypez.func.isRequired,
    checkShrooms: PropTypez.func.isRequired,
  }

  pickMushroomEvent = (e) => {
    e.preventDefault();
    const { pickMushroom, checkShrooms } = this.props;
    pickMushroom();
    checkShrooms();
  }

  render() {
    const { mushrooms } = this.props;
    const makeMushrooms = mushrooms.map((mushroom) => (
      <Mushroom key={mushroom.id} mushroom={mushroom} />
    ));
    return (
      <div className="Forest">
        <h1 className="text-success"><i className="fas fa-tree"></i> Full O' Shrooms</h1>
        <button className="btn btn-outline-success" onClick={this.pickMushroomEvent}>Pick a Mushroom</button>
        <div className="d-flex flex-wrap">
        {makeMushrooms}
        </div>
      </div>
    );
  }
}

export default Forest;

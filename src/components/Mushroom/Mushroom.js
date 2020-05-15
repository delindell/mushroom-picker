import React from 'react';
import mushroomShape from '../../helpers/propz/mushroomShape';
import './Mushroom.scss';

class Mushroom extends React.Component {
  static propTypes = {
    mushroom: mushroomShape.mushroomShape,
  }

  render() {
    const { mushroom } = this.props;
    let className = 'card';
    if (mushroom.isDeadly) {
      className += ' deadly-mush';
    } else if (mushroom.isMagic) {
      className += ' magic-mush';
    } else if (mushroom.isPoisonous) {
      className += ' poisonous-mush';
    }
    return (
      <div className="Mushroom col-3">
        <div className="card">
          <div className={className}>
            <img className="card-img" src={mushroom.imgUrl} alt="Mushroom card" />
            <div className="card-body">
              <h5 className="card-title">{mushroom.name}</h5>
              <p className="card-text">{mushroom.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mushroom;

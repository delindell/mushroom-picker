import PropTypez from 'prop-types';

const mushroomShape = PropTypez.shape({
  id: PropTypez.string.isRequired,
  name: PropTypez.string.isRequired,
  description: PropTypez.string.isRequired,
  imgUrl: PropTypez.string.isRequired,
  isMagic: PropTypez.bool.isRequired,
  isPoisonous: PropTypez.bool.isRequired,
  isDeadly: PropTypez.bool.isRequired,
});

export default { mushroomShape };

import WinnerModal from '../../components/Winner/Winner';

let basket = [];

const mushrooms = [
  {
    id: 'mush1',
    name: 'Morel',
    description: 'Delicious for cooking and hard to find',
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61b-fEfEqKL._AC_SY679_.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mush2',
    name: 'Shitake',
    description: 'Delicious for cooking, grow on natural decaying wood, native to East Asia',
    imgUrl: 'https://cdn.shopify.com/s/files/1/0972/6282/products/shiitake-mushroom-log-vegetables-pinetree-garden-seeds_252_600x.jpg?v=1573656892',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mush3',
    name: 'Oyster',
    description: 'Among the most widely consumed mushrooms',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Oyster_mushoom_fells.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mush4',
    name: 'Portobello',
    description: 'Edible mushroom know for its meaty texture and mild flavor',
    imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portobello-mushroom-pizza-1573760586.jpg?crop=1.00xw:1.00xh;0,0.00116xh&resize=480:*',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mush5',
    name: 'Button',
    description: ' cultivated in more than seventy countries,[2] and is one of the most commonly and widely consumed mushrooms in the world.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/01/ChampignonMushroom.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mush6',
    name: 'Chanterelle',
    description: 'They are among the most popular of wild edible mushrooms. They are orange, yellow or white, meaty and funnel-shaped.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/02/2007-07-14_Cantharellus_cibarius_Detail.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mush7',
    name: 'Enoki',
    description: 'Commercially farmed enoki is a long, thin white mushroom and is a popular ingredient for soups, especially in East Asian cuisine, but can be used for salads and other dishes.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/EnokitakeJapaneseMushroom.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mush8',
    name: 'Porcini',
    description: 'The fungus grows in deciduous and coniferous forests and tree plantations, forming symbiotic ectomycorrhizal associations with living trees by enveloping the tree\'s underground roots with sheaths of fungal tissue.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Boletus_edulis_EtgHollande_041031_091.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mush9',
    name: 'King Oyster',
    description: 'They have a very firm meaty texture compared to regular oyster mushrooms.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Pleurotus-eryngii-768x384.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mush10',
    name: 'Hedgehog',
    description: 'Hedgehog or sweet tooth mushrooms get their name from the gills underneath their cap.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Hedgehog-Mushrooms-768x384.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mush11',
    name: 'Chicken of the Woods',
    description: 'This mushroom grows in clusters on the side of trees and is a beautiful orange color.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Chicken-Of-The-Woods-Mushrooms-768x384.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mush12',
    name: 'Black Trumpet',
    description: 'People describe the flavor as rich and smoky. When allowed to dry, their flavor even takes on hints of black truffle.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/black-chanterelles-768x384.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mush13',
    name: 'Wood Blewit',
    description: 'They can be found wild, and are also cultivated in for instance the UK​, France, and the Netherlands.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Wood-Blewit-Mushrooms-768x384.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mush14',
    name: 'Shimeji',
    description: 'Shimeji is another mushroom native to East Asia, but they can also be found in Northern Europe.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Shimeji-Mushrooms-1-768x401.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mush15',
    name: 'Maitake',
    description: 'Maitake mushrooms are also called hen-of-the-woods. However, they shouldn\'t be confused with chicken of the woods mushrooms. Nor with shiitakes, which also have a similar sounding name.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Maitake-Mushrooms-768x384.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mush16',
    name: 'Psilocybin',
    description: 'A psilocybin mushroom, also known as a magic mushroom or a psychedelic mushroom.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Psilocybe_semilanceata_6514.jpg',
    isMagic: true,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mush17',
    name: 'Death Cap',
    description: 'Within 6 to 12 hours after consumption, violent abdominal pain, vomiting, and bloody diarrhea appear, causing rapid loss of fluid from the tissues and intense thirst.',
    imgUrl: 'https://cdn.britannica.com/s:800x1000/79/145379-050-4461FF66/Death-cap-mushroom.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: true,
  },
  {
    id: 'mush18',
    name: 'Webcaps',
    description: 'These mushrooms feature a poison known as orellanin, which initially causes symptoms similar to the common flu.',
    imgUrl: 'https://cdn.britannica.com/s:800x1000/66/180666-050-FED69BBD/webcaps-Europe-Ingestion-mushrooms-symptoms.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mush19',
    name: 'Autumn Skullcap',
    description: 'Ingestion causes diarrhea, vomiting, hypothermia, and liver damage, and can result in death if left untreated.',
    imgUrl: 'https://cdn.britannica.com/s:800x1000/03/180803-050-11B5EAE5/skullcaps-mushrooms-autumn-skullcap.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mush20',
    name: 'Destroying Angels',
    description: 'These incredibly toxic fungi are very similar in appearance to edible button mushrooms and the meadow mushrooms, and have been collected by mistake on numerous occassions.',
    imgUrl: 'https://cdn.britannica.com/s:800x1000/08/5508-004-E3F081AB/angel.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
];

const checkMushroomsInBasket = () => {
  basket.forEach((mushroom) => {
    if (mushroom.isDeadly) {
      basket = [];
      alert('You\'re dead');
    } else if (basket.length >= 3 && mushroom.isPoisonous) {
      basket.pop();
      basket.splice(0, 2);
      alert('You picked a poisonous mushroom, you\'re probably going to die');
    } else if (basket.length < 3 && mushroom.isPoisonous) {
      basket.pop();
      alert('You picked a poisonous mushroom, you\'re probably going to die');
    } else if (mushroom.isMagic) {
      basket.pop();
      mushrooms.forEach((shroom) => {
        if (!shroom.isDeadly && !shroom.isPoisonous && !shroom.isMagic) {
          basket.push(shroom);
        }
      });
    }
  });
  removeDuplicatesFromBasket();
};

const removeDuplicatesFromBasket = () => {
  const sortedBasket = Array.from(new Set(basket));
  console.log('sorted basket', sortedBasket);
  if (sortedBasket.length === 15) {
    WinnerModal();
  }
};

const pickAMushroom = () => {
  const randomMushroom = mushrooms[Math.floor(Math.random() * mushrooms.length)];
  basket.push(randomMushroom);
};

const getMushrooms = () => mushrooms;

const getBasket = () => basket;

export default {
  getMushrooms,
  getBasket,
  pickAMushroom,
  checkMushroomsInBasket,
};

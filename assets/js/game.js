const poligon = document.querySelector('[data-poligon]');
const startButton = document.querySelector('[data-start-game]');
const restartButton = document.querySelector('[data-restart-game]');
const gameTitle = document.querySelector('[data-game-title]');
const gameDescription = document.querySelector('[data-game-description]');
const gameImagesEl = document.querySelector('[data-game-images]');

const gameData = [
  {
    id: '1',
    name: 'ветчина «Сочная»',
    title: 'Ты как ветчина <br>«Сочная»',
    description: 'Яркая, насыщенная и&nbsp;способная <br>добавить радости в&nbsp;каждое утро.',
  },
  {
    id: '2',
    name: '«Краковская» колбаса',
    title: 'Ты как «Краковская» <br>колбаса',
    description: 'Всегда способная поднять настроение, <br>делая самый обычный день - особенным!',
  },
  {
    id: '3',
    name: 'сырокопченая колбаса «Мускат Пренцлау»',
    title: 'Ты как сырокопченая <br>колбаса «Мускат <br>Пренцлау»',
    description: 'Гурман, знающий толк во&nbsp;вкусе, <br>способный делиться им с&nbsp;окружающими!',
  },
  {
    id: '4',
    name: '«Балыковая» колбаса',
    title: 'Ты как «Балыковая» <br>колбаса',
    description: 'Человек-праздник, наполняющий любое <br>застолье атмосферой веселья и&nbsp;тепла.',
  },
  {
    id: '5',
    name: 'сырокопченая колбаса «Итальянская»',
    title: 'Ты как сырокопченая <br>колбаса «Итальянская»',
    description: 'Обладаешь элегантным шармом <br>и&nbsp;изысканным вкусом.',
  },
  {
    id: '6',
    name: '«Фирменный» карбонад',
    title: 'Ты как «Фирменный» <br>карбонад',
    description: 'Настоящая душа компании! <br>Ты&nbsp;способен создать атмосферу веселья и&nbsp;непринужденности!',
  },
  {
    id: '7',
    name: '«Английский» бекон',
    title: 'Ты как <br>«Английский» <br>бекон',
    description: 'Традиционный и&nbsp;надежный, <br>всегда любим многими!',
  },
  {
    id: '8',
    name: '«Московская» колбаса',
    title: 'Ты как «Московская» <br>колбаса',
    description: 'Ты притягиваешь взгляды и&nbsp;манишь к&nbsp;себе, <br>влюбляя с&nbsp;первого взгляда!',
  },
  {
    id: '9',
    name: '«Русская» колбаса',
    title: 'Ты как «Русская» <br>колбаса',
    description: 'Хранитель традиций, <br>знаешь толк в&nbsp;русских застольях!',
  },
];

const repeater = () => {
  const activeImage = gameImagesEl.querySelector('.active') || gameImagesEl.querySelector('img');
  const nextImage = activeImage.nextElementSibling || gameImagesEl.querySelector('img');
  activeImage.classList.remove('active');
  nextImage.classList.add('active');
};

const setResultMarkup = () => {
  const activeImage = gameImagesEl.querySelector('.active');
  const randomIndex = Math.floor(Math.random() * gameData.length);
  activeImage && activeImage.classList.remove('active');

  const { id, name, title, description } = gameData[randomIndex];

  // Тут можно отловить результат и настроить цель в аналитику по name
  console.log(`В игре случайным образом выпадает: ${name}`);

  gameTitle.innerHTML = title;
  gameDescription.innerHTML = description;
  gameImagesEl.querySelector('[data-game-image="' + id + '"]').classList.add('active');
};

const setElementsPositions = () => {
  let repeaterInterval;

  setTimeout(() => {
    poligon.classList.add('start');
    repeaterInterval = setInterval(repeater, 150);
  }, 700);

  setTimeout(() => {
    clearInterval(repeaterInterval);
    setResultMarkup();
  }, 4000); //4000

  setTimeout(() => {
    poligon.classList.remove('start');
    poligon.classList.add('finish');
  }, 4500); //4500
};

const startGame = () => {
  poligon.classList.remove('intro');
  setElementsPositions();
};

const restartGame = () => {
  poligon.classList.remove('finish');
  setElementsPositions();
};

if (startButton) {
  startButton.addEventListener('click', startGame);
}

if (restartButton) {
  restartButton.addEventListener('click', restartGame);
}

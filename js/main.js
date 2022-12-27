// function checkCommit(str, value = 140) {
//   return str.length <= value;
// }
//test
function getRandomNum(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
const NAMES = [
  'Емелиан',
  'Лукьян',
  'Ефим',
  'Лучезар',
  'Назар',
  'Ной',
  'Платон',
  'Потап',
  'Радомир',
  'Трофим',
  'Агата',
  'Агафья',
  'Василина',
  'Евдокия',
  'Лада',
  'Лукерья',
  'Серафима',
  'Сияна',
];
const PHOTO_DESCRIPTION = [
  'Передо мной интересная фотография.',
  'Давайте рассмотрим изображение внимательнее',
  'Мне нравится эта фотография, потому что она точно передаёт настроение',
  'На переднем плане изображены…',
  'Если внимательно посмотреть на изображение, то…',
  'Композиция снимка весьма интересна, потому что…',
  'Выражения лиц у героев фотографии говорят о том, что…',
  'Фото несёт в себе определённое настроение:…',
];
const TEXT_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const createComments = () => ({
  id: getRandomNum(0, 100),
  avatar: 'img/avatar-' + getRandomNum(1, 6) + '.svg',
  message: TEXT_MESSAGE[getRandomNum(0, TEXT_MESSAGE.length - 1)],
  name: NAMES[getRandomNum(0, NAMES.length - 1)],
});

let idPhoto = 0;
const createPhoto = () => {
  idPhoto++;
  return {
    id: idPhoto,
    url: 'photos/' + idPhoto + '.jpg',
    description: PHOTO_DESCRIPTION[getRandomNum(0, PHOTO_DESCRIPTION.length - 1)],
    likes: getRandomNum(15, 200),
    comments: Array.from({ length: getRandomNum(1, 5) }, createComments),
  };
};

const getPhotoArray = () => Array.from({ length: 25 }, createPhoto);
//getPhotoArray();
//console.log(photoArray);


import {getRandomArrayElement, getRandomInteger} from './util.js';

const DESCRIPTIONS = [
  'Познакомьтесь с моим котом..)',
  'Раньше было лучше',
  'Это я в отпуске, сейчас дома уже',
  'Придумывать описание - самое сложное.'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Астрид',
  'Аксель',
  'Ася',
  'Арнольд',
  'Альбина'
];

function getImageDescription (_, counter) {
  const currentID = counter + 1;
  return {
    id: currentID,
    url: `photos/${currentID + 1}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger (15, 200),
    comment: Array.from({length: getRandomInteger (1, 5)}, commentsList)
  };
}

function commentsList (_, counter) {
  const currentID = counter + 1;
  return {
    id: currentID,
    avatar: `img/avatar-${getRandomInteger (1, 6)}.svg`,
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES)
  };
}

const SIMILAR_DESCRIPTIONS_COUNT = 25;

const SIMILAR_IMAGE_DESCRIPTIONS = Array.from({length: SIMILAR_DESCRIPTIONS_COUNT}, getImageDescription);

export {SIMILAR_IMAGE_DESCRIPTIONS};

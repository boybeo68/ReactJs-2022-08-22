export const currencyFormat = (num) => {
  if (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + 'đ';
  }
  return '';
};

export const SORT_BY = {
  asc: 'asc',
  desc: 'desc',
};

export const API_KEY = 'AIzaSyBvWZbtsBfP5YtRgK75Rh5JHGlo656-_oo';
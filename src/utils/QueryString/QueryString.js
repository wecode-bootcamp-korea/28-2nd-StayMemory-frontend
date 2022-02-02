export const convertToQs = (page, obj) => {
  const queryString = Object.entries(obj)
    .map(el => el.join('='))
    .join('&');
  return `/${page}?${queryString}`;
};

export default convertToQs;

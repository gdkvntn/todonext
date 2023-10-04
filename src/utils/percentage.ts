export const percentage = (array: Array<any>) => {
  const completedArray = array.filter((el) => el.is_completed);
  return Math.floor((completedArray.length / array.length) * 100);
};

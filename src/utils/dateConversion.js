const dateConversion = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
};

export default dateConversion;

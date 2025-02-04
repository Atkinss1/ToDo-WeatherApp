const dateConversion = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleTimeString();
};

export default dateConversion;

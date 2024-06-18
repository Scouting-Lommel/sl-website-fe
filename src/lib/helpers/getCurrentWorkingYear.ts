const getCurrentWorkingYear = () => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  if (currentMonth >= 7 && currentMonth <= 11) {
    return `${currentYear}-${currentYear + 1}`;
  }
  return `${currentYear - 1}-${currentYear}`;
};

export default getCurrentWorkingYear;

export const taskDate = dbDate => {
  const date = new Date(dbDate);
  const options = {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };
  return date.toLocaleDateString('en-US', options).replace(',', ' ');
};

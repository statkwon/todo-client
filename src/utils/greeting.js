export const greeting = () => {
  const date = new Date();
  const time = date.getHours();
  if (time >= 7 && time < 12) return 'morning';
  else if (time < 18) return 'afternoon';
  else if (time < 22) return 'evening';
  else return 'night';
};

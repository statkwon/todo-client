export const headerDate = () => {
  const today = new Date();
  const monthDate = today.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' });
  const day = today.toLocaleDateString('en-US', { weekday: 'short' });
  return `${monthDate} (${day})`;
};

export const formatDate = (yearMonth: string) => {
  if (yearMonth === 'current') {
    return 'Current';
  }
  return new Date(
    Number(yearMonth.substring(0, 4)),
    Number(yearMonth.substring(5)) - 1,
    1,
  ).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

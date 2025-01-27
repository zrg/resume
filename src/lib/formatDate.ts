export const formatDate = (yearMonth: string) => {
  return new Date(
    Number(yearMonth.substring(0, 4)),
    Number(yearMonth.substring(5)) - 1,
    1,
  ).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

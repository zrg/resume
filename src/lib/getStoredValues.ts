export const getStoredDarkMode = () => {
  const raw = localStorage.getItem('darkMode');
  return typeof raw === 'string' && ['0', '1'].indexOf(raw) > -1 ? !!parseInt(raw) : null;
};

export const getStoredFontSizeLevel = () => {
  const raw = localStorage.getItem('fontSizeLevel');
  return typeof raw === 'string' && ['small', 'medium', 'large'].indexOf(raw) > -1 ? raw : null;
};

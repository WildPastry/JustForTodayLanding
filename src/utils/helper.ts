const screenWidth = window.innerWidth;

export const selectWidth = (id: string): string => {
  if (id === 'reflections') {
    return screenWidth < 460 ? '204' : '204';
  } else if (id === 'steps') {
    return screenWidth < 460 ? '93' : '74';
  } else if (id === 'traditions') {
    return screenWidth < 460 ? '186' : '186';
  } else {
    return '0';
  }
};

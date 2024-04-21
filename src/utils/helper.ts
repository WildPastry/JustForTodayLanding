const mediaMatch = window.matchMedia('(min-width: 460px)');

export const selectWidth = (id: string): string => {
 if (id === 'reflections') {
  return mediaMatch ? '204' : '300'
 }
 return '300'
};
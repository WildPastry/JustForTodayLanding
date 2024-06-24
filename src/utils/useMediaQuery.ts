import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
  const mediaMatch = window.matchMedia(query);
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e: { matches: boolean | (() => boolean) }) =>
      setMatches(e.matches);
    const listener = (e: { matches: boolean | (() => boolean) }) => handler(e);
    mediaMatch.addEventListener('change', listener);
    return () => {
      mediaMatch.removeEventListener('change', listener);
    };
  }, [mediaMatch]);

  return matches;
};

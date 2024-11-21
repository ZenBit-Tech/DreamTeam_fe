import { useState, useEffect } from 'react';

interface UseDebounceProps {
  searchValue: string;
  delay: number;
}
export const useDebounce = ({
  searchValue,
  delay,
}: UseDebounceProps): string => {
  const [debounceValue, setDebounceValue] = useState(searchValue);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(searchValue);
    }, delay);

    return (): void => {
      clearTimeout(handler);
    };
  }, [searchValue, delay]);
  return debounceValue;
};

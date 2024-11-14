import React from 'react';

const pagesShownByDefault = 5;
export const usePagination = (): {
  selectedPage: number;
  selectedOption: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
} => {
  const [selectedPage, setSelectedPage] = React.useState(1);
  const [selectedOption, setSelectedOption] =
    React.useState(pagesShownByDefault);
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ): void => {
    setSelectedPage(value);
  };

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedOption(Number(event.target.value));
  };

  return { selectedPage, selectedOption, handlePageChange, handleSelectChange };
};

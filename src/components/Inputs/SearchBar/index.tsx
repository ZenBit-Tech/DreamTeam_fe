import { IconWrapper, SearchWrapper, StyledSearchBar } from './styles';

import { IconType } from '@/assets/styles/types';
import { IconSet } from '@/components/Button/Icons';

export const SearchBar = (): React.ReactNode => {
  return (
    <div>
      <SearchWrapper>
        <StyledSearchBar placeholder='Search' />
        <IconWrapper>
          <IconSet iconType={IconType.Search} />
        </IconWrapper>
      </SearchWrapper>
    </div>
  );
};

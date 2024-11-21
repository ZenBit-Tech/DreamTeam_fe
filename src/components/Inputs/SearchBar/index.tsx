import { t } from 'i18next';

import { IconWrapper, SearchWrapper, StyledSearchBar } from './styles';

import { IconType } from '@/assets/styles/types';
import { IconSet } from '@/components/Button/Icons';

interface SearchBarProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onChange,
}: SearchBarProps) => {
  return (
    <div>
      <SearchWrapper>
        <StyledSearchBar placeholder={t('search')} onChange={onChange} />
        <IconWrapper>
          <IconSet iconType={IconType.Search} />
        </IconWrapper>
      </SearchWrapper>
    </div>
  );
};

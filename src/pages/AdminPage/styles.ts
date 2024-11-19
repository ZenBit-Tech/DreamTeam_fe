import styled from 'styled-components';

import { COLORS } from '@/assets/styles/constants/colors';
import { BodyBase } from '@/assets/styles/typography.ts';

interface SortButtonProps {
  sortOrder: 'asc' | 'desc';
}

export const AdminListWrapper = styled.div`
  width: 1016px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 2px solid ${COLORS.primaryContainer};
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  gap: 8px;
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const PageInfo = styled.div`
  color: ${COLORS.mainText};
`;

export const StyledSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${COLORS.mainText};
`; // Предполагаем, что COLORS импортированы из вашего файла стилей

export const StyledSelect = styled.select`
  padding: 10px;
  border: 1px solid ${COLORS.primaryContainer};
  border-radius: 8px; /* Закругленные края */
  color: ${COLORS.mainText};
  cursor: pointer;
  background-color: white; /* Белый фон */
  appearance: auto; /* Сохранение стандартной стрелки */

  &:hover {
    border-color: ${COLORS.primaryContainer}; /* Цвет обводки при наведении */
  }

  &:focus {
    outline: none;
    border-color: ${COLORS.primaryContainer}; /* Цвет обводки при фокусе */
    box-shadow: 0 0 4px ${COLORS.primaryContainer}; /* Тень при фокусе */
  }

  /* Для опций */
  option {
    background-color: white; /* Фон белый */
    color: ${COLORS.mainText}; /* Цвет текста */
    padding: 10px; /* Отступы для опций */
    border-radius: 8px; /* Закругление краёв для опций */
    cursor: pointer;
    appearance: none;

    &:hover {
      background-color: ${COLORS.primaryContainer}; /* Цвет при наведении */
      color: white; /* Текст при наведении */
    }
  }

  /* Убираем стандартный вид стрелки */
  &::-ms-expand {
    display: none;
  }
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`;

export const SortButton = styled(BodyBase)<SortButtonProps>`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #807c8c; /* Цвет текста, можно оставить или изменить */
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;

  &:hover {
    color: #5b5566; /* Цвет при наведении */
  }

  img {
    width: 22px;
    transform: ${(props) =>
      props.sortOrder === 'asc'
        ? 'rotate(0deg)'
        : 'rotate(180deg)'}; /* Поворот иконки */
    transition: transform 0.2s ease;
  }
`;

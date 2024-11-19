import { FaSortUp, FaSortDown } from 'react-icons/fa';
import styled from 'styled-components';

import { COLORS } from '@/assets/styles/constants/colors.ts';

// Контейнер заголовка таблицы
const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  background-color: ${COLORS.primaryContainer};
  border-bottom: 2px solid ${COLORS.borderColor};
  font-weight: bold;
  color: ${COLORS.mainText};
`;

// Для стилизации заголовков таблицы
const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &.actions {
    justify-content: flex-end;
  }
`;

// Добавить стрелки в заголовок
const SortIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 4px;

  svg {
    font-size: 12px;
  }
`;

const AdminListHeader: React.FC<{ sortOrder: string; onSort: () => void }> = ({
  sortOrder,
  onSort,
}) => (
  <TableHeader>
    {/* Admin Name Column */}
    <HeaderItem onClick={onSort}>
      Admin name
      <SortIconWrapper>
        <FaSortUp
          color={sortOrder === 'asc' ? COLORS.secondary : COLORS.accent500}
        />
        <FaSortDown
          color={sortOrder === 'desc' ? COLORS.secondary : COLORS.accent500}
        />
      </SortIconWrapper>
    </HeaderItem>

    {/* Actions Column */}
    <HeaderItem className='actions'>Actions</HeaderItem>
  </TableHeader>
);

export default AdminListHeader;

import { TextField } from '@mui/material';
import styled from 'styled-components';

import { COLORS } from '@/assets/styles/constants/colors.ts';

export const StyledLoginInput = styled(TextField)`
  && {
    margin-bottom: 30px;
  }

  width: 100%;
  height: 56px;

  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: ${COLORS.onSurfaceVariant};
    }
  }
  .MuiInputLabel-root {
    &.Mui-focused {
      color: ${COLORS.secondary};
    }
  }

  .MuiFormHelperText-root {
    color: ${COLORS.error};
  }
`;

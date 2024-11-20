import { Box } from '@mui/material';
import styled from 'styled-components';

import { COLORS } from '@/assets/styles/constants/colors';

export const FooterText = styled(Box)`
  color: ${COLORS.onSurface};
`;

export const PolicyLinks = styled.a`
  color: ${COLORS.accent600};
`;

import { COLORS } from './colors';

import { hexToRgb } from '@/utils/colorUtils';

const rgb = hexToRgb(COLORS.scrim);
const boxShadow = rgb || '0, 0, 0';

export const STYLES = {
  paddingHorizontal: '16px',
  borderRadius: '8px',
  opacityDisabled: 0.6,
  opacityHover: 0.8,
  transitionDuration: '0.3s',
  glowingOutlineWidth: '3px',
  outlineWidth: '3px',
  boxShadow: `${boxShadow}`,
};

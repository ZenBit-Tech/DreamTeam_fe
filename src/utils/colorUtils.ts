export const hexToRgb = (hex: string): string | null => {
  const hexBase = 16;
  const shortHexLength = 4;
  const redStart = 1;
  const redEnd = 3;
  const greenStart = 3;
  const greenEnd = 5;
  const blueStart = 5;
  const blueEnd = 7;

  const isValidHex = /^#([0-9A-F]{3}){1,2}$/i.test(hex);
  if (!isValidHex) {
    return null;
  }

  const fullHex =
    hex.length === shortHexLength
      ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
      : hex;

  const r = parseInt(fullHex.slice(redStart, redEnd), hexBase);
  const g = parseInt(fullHex.slice(greenStart, greenEnd), hexBase);
  const b = parseInt(fullHex.slice(blueStart, blueEnd), hexBase);

  return `${r}, ${g}, ${b}`;
};

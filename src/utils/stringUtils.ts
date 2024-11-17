export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase();
};

export const underlineJoin = (text: string): string => {
  return text.toLowerCase().split(' ').join('_');
};

export const sortOrders = {
  asc: 'asc' as const,
  desc: 'desc' as const,
};

export const getNextSortOrder = (
  currentOrder: 'asc' | 'desc'
): 'asc' | 'desc' => {
  return currentOrder === sortOrders.asc ? sortOrders.desc : sortOrders.asc;
};

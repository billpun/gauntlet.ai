export const getColumns = (items, map) =>
  Object.keys(items[0]).map((k) => ({ field: k, name: map[k] }));

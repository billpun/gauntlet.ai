export const getColumns = (items) =>
  Object.keys(items[0]).map((k) => ({ field: k, name: k }));

export const Statuses = [
  { status: "Failed", color: "danger" },
  { status: "Online", color: "success" },
  { status: "Retired", color: "subdued" }
];

export const getStatusColor = (status) => {
  const r = Statuses.filter((r) => r.status === status);
  if (r.length > 0) {
    return r[0].color;
  }
  return "#DCDCDC";
};

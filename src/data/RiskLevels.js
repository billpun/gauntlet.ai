export const RiskLevels = [
  { status: "High", color: "danger" },
  { status: "Medium", color: "warning" },
  { status: "Low", color: "success" }
];

export const getRiskColor = (status) => {
  const r = RiskLevels.filter((r) => r.status === status);
  if (r.length > 0) {
    return r[0].color;
  }
  return "subdued";
};

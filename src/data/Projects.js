const faker = require("faker");

export let projects = [
  {
    key: "P00001",
    name: "Orchestra - ROME",
    business_unit: "CDSP",
    version: "V1",
    risk_level: "Medium",
    status: "Failed"
  },
  {
    key: "P00002",
    name: "Experience Manager",
    business_unit: "GIM",
    version: "V0",
    risk_level: "Low",
    status: "Online"
  },
  {
    key: "P00003",
    name: "Default Predictor",
    business_unit: "RISK",
    version: "V0",
    risk_level: "Medium",
    status: "Failed"
  },
  {
    key: "P00004",
    name: "Customer Value Model - GOLD",
    business_unit: "GSM",
    version: "V10",
    risk_level: "Low",
    status: "Retired"
  },
  {
    key: "P00005",
    name: "Marketing Trigger Optimization",
    business_unit: "IMAP",
    version: "V3",
    risk_level: "Medium",
    status: "Online"
  },
  {
    key: "P00006",
    name: "Fraud Detection",
    business_unit: "RISK",
    version: "V6",
    risk_level: "High",
    status: "Online"
  },
  {
    key: "P00007",
    name: "Investment Optimization",
    business_unit: "FINS",
    version: "V2",
    risk_level: "Medium",
    status: "Failed"
  },
  {
    key: "P00008",
    name: "Redemption Prediction",
    business_unit: "RISK",
    version: "V0",
    risk_level: "Low",
    status: "Dev."
  }
];

projects = projects.map((p) => {
  const first = faker.date
    .between("2020-01-01", "2020-12-31")
    .toISOString()
    .substr(0, 10);
  const second = faker.date
    .between("2020-01-01", "2020-12-31")
    .toISOString()
    .substr(0, 10);
  return {
    ...p,
    created_dt: first > second ? second : first,
    updated_dt: first > second ? first : second
  };
});

export const projectColumns = {
  key: "Key",
  name: "Project Name",
  business_unit: "BU",
  version: "Version",
  risk_level: "Risk Level",
  status: "Status",
  created_dt: "Created On",
  updated_dt: "Updated On"
};

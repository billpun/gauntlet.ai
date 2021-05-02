import faker from "faker";
import { Names } from "./Names";

export let projects = [
  {
    key: "P00001",
    name: "Orchestra",
    business_unit: "CDSP",
    versions: ["V0", "V1"],
    risk_level: "Medium",
    status: "Failed",
    description: "A tree-based model for conversion prediction."
  },
  {
    key: "P00002",
    name: "Experience Manager",
    business_unit: "GIM",
    versions: ["V0"],
    risk_level: "Low",
    status: "Online",
    description: "A multi-armed bandit system to manage digital experiences."
  },
  {
    key: "P00003",
    name: "Default Predictor",
    business_unit: "RISK",
    versions: ["V0"],
    risk_level: "Medium",
    status: "Failed",
    description: "A machine learning model to predict default probabilites."
  },
  {
    key: "P00004",
    name: "Customer Value Model",
    business_unit: "GSM",
    versions: ["V1", "V2", "V3"],
    risk_level: "Low",
    status: "Retired",
    description: "A machine learning model to predict customer long-term value."
  },
  {
    key: "P00005",
    name: "Marketing Trigger Optimization",
    business_unit: "IMAP",
    versions: ["V1", "V2", "V3"],
    risk_level: "Medium",
    status: "Online",
    description: "A machine learning model to optimize targeting."
  },
  {
    key: "P00006",
    name: "Fraud Detection",
    business_unit: "RISK",
    versions: ["V1", "V2", "V3", "V4", "V5", "V6"],
    risk_level: "High",
    status: "Online",
    description: "A machine learning model to predict fraud probabilities."
  },
  {
    key: "P00007",
    name: "Investment Optimization",
    business_unit: "FINS",
    versions: ["V1", "V2"],
    risk_level: "Medium",
    status: "Failed",
    description: "A simulation module to optimize campaign investment."
  },
  {
    key: "P00008",
    name: "Redemption Prediction",
    business_unit: "RISK",
    versions: ["V0"],
    risk_level: "Low",
    status: "Dev.",
    description:
      "A machine learning model to predict amount of miles to be redeemed."
  }
];

const r = () => Math.floor(Math.random() * Names.length);

projects = projects.map((p, i) => {
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
    updated_dt: first > second ? first : second,
    model_owner: Names[r()],
    model_developer: Names[r()],
    tech_owner: Names[r()],
    validation_lead: Names[r()]
  };
});

export const projectColumns = {
  key: "Key",
  name: "Project Name",
  business_unit: "BU",
  versions: "Version",
  risk_level: "Risk Level",
  status: "Status",
  created_dt: "Created On",
  updated_dt: "Updated On"
};

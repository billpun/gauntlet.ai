import faker from "faker";

export const Names = Array(100)
  .fill(0)
  .map((_, i) => `${faker.name.firstName()} ${faker.name.lastName()}`)
  .sort();

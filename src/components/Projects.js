import React, { useState } from "react";
import { EuiFlexGroup, EuiHealth, EuiInMemoryTable } from "@elastic/eui";
import { getColumns } from "./Functions";
import { getRiskColor } from "../data/RiskLevels";
import { getStatusColor } from "../data/Statuses";
import P from "../data/Projects";

const Projects = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const columns = getColumns(P).map((c) => {
    let out = { ...c, sortable: true };
    if (c.field === "risk_level") {
      out = {
        ...c,
        render: (status) => {
          return <EuiHealth color={getRiskColor(status)}>{status}</EuiHealth>;
        }
      };
    }
    if (c.field === "status") {
      out = {
        ...c,
        render: (status) => {
          return <EuiHealth color={getStatusColor(status)}>{status}</EuiHealth>;
        }
      };
    }
    return out;
  });

  const onTableChange = ({ page = {}, sort = {} }) => {
    const { index: pageIndex, size: pageSize } = page;
    const { field: sortField, direction: sortDirection } = sort;
    setPageIndex(pageIndex);
    setPageSize(pageSize);
    setSortField(sortField);
    setSortDirection(sortDirection);
  };

  return (
    <EuiInMemoryTable
      style={{ width: "100%" }}
      compressed={true}
      items={P}
      columns={columns}
      tableLayout="auto"
      onChange={onTableChange}
      sorting={{
        sort: {
          field: sortField,
          direction: sortDirection
        }
      }}
      pagination={{
        pageIndex: pageIndex,
        pageSize: pageSize,
        pageSizeOptions: [10, 25, 50]
      }}
    />
  );
};

export default Projects;

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  EuiButtonIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFieldSearch,
  EuiHealth,
  EuiInMemoryTable,
  EuiText,
  EuiToast,
  EuiToolTip
} from "@elastic/eui";
import { getColumns } from "./Functions";
import { getRiskColor } from "../data/RiskLevels";
import { getStatusColor } from "../data/Statuses";
import { projectColumns } from "../data/Projects";
import uuid from "react-uuid";

const Projects = (props) => {
  const history = useHistory();
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [searchValue, setSearchValue] = useState("");
  const { projects, setProjects } = props;
  const viewProject = (p) => {
    history.push(`/project/${p.key}`);
  };

  const columns = getColumns(projects, projectColumns)
    .filter((c) => Object.keys(projectColumns).includes(c.field))
    .map((c) => {
      let out = {
        ...c,
        sortable: true
      };
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
            return (
              <EuiHealth color={getStatusColor(status)}>{status}</EuiHealth>
            );
          }
        };
      }
      if (c.field === "versions") {
        console.log("hello");
        out = {
          ...c,
          render: (versions) => {
            return <div>{versions[versions.length - 1]}</div>;
          }
        };
      }
      return out;
    })
    .concat({
      name: "",
      actions: [
        {
          name: "magnify",
          description: "View this project",
          icon: "magnifyWithPlus",
          type: "icon",
          onClick: viewProject
        }
      ]
    });

  const onTableChange = ({ page = {}, sort = {} }) => {
    const { index: pageIndex, size: pageSize } = page;
    const { field: sortField, direction: sortDirection } = sort;
    setPageIndex(pageIndex);
    setPageSize(pageSize);
    setSortField(sortField);
    setSortDirection(sortDirection);
  };

  const onSearchChange = (e) => {
    const keyword = e.target.value;
    setSearchValue(keyword);
    const cache = projects.filter(
      (p) =>
        Object.keys(p).filter((n) => {
          return p[n].includes(keyword);
        }).length > 0
    );
    if (keyword !== "" && cache.length > 0) {
      setProjects(cache);
    } else {
      setProjects(projects);
    }
  };

  return (
    <EuiFlexGroup gutterSize="s" direction="column">
      <EuiFlexItem>
        <p style={{ textAlign: "left" }}>
          <span class="euiText--medium">{projects.length} Projects</span>
          <span style={{ float: "right" }}>
            <EuiFieldSearch
              placeholder="Search projects"
              value={searchValue}
              onChange={onSearchChange}
              isClearable={true}
              aria-label="abc"
              compressed={true}
              append={
                <EuiToolTip position="top" content="Create a new project">
                  <EuiButtonIcon
                    display="base"
                    onClick={() =>
                      props.setToasts([
                        {
                          id: uuid(),
                          title: "Not supported!",
                          color: "warning",
                          iconType: "iInCircle",
                          text: ""
                        }
                      ])
                    }
                    iconType="plus"
                    aria-label="Next"
                  />
                </EuiToolTip>
              }
            />
          </span>
        </p>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiInMemoryTable
          style={{ width: "100%" }}
          compressed={true}
          items={projects}
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
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default Projects;

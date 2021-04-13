import React from "react";
import { EuiIcon, EuiTab, EuiTabs } from "@elastic/eui";

export const tabs = [
  {
    id: "projects",
    name: (
      <span>
        <EuiIcon type="submodule" />
        &nbsp;Projects
      </span>
    )
  },
  {
    id: "testkits",
    name: (
      <span>
        <EuiIcon type="temperature" />
        &nbsp;Test Kits
      </span>
    )
  },
  {
    id: "datasets",
    name: (
      <span>
        <EuiIcon type="database" />
        &nbsp;Datasets
      </span>
    )
  },
  {
    id: "models",
    name: (
      <span>
        <EuiIcon type="indexMapping" />
        &nbsp;Models
      </span>
    )
  }
];

const MainTabs = (props) => {
  return (
    <EuiTabs expand={TextTrackCueList}>
      {tabs.map((tab, index) => (
        <EuiTab
          style={{ background: "white" }}
          onClick={() => {
            props.setTabId(tab.id);
          }}
          isSelected={tab.id === props.tabId}
          key={index}
        >
          {tab.name}
        </EuiTab>
      ))}
    </EuiTabs>
  );
};

export default MainTabs;

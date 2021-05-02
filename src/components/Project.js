import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  EuiButtonIcon,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiTextArea,
  EuiComboBox
} from "@elastic/eui";

import { BusinessUnits } from "../data/BusinessUnits";
import { RiskLevels } from "../data/RiskLevels";
import { Statuses } from "../data/Statuses";
import { Names } from "../data/Names";

const Project = (props) => {
  const { key } = useParams();
  const { projects, setProjects } = props;
  // project
  const [project, setProject] = useState(
    projects.filter((p) => p.key === key)[0]
  );
  // business units
  const bus = BusinessUnits.map((bu) => ({ label: bu }));
  // risk levels
  const risks = RiskLevels.map((rl) => ({
    color: rl.color,
    label: rl.status
  }));
  // statuses
  const statuses = Statuses.map((rl) => ({
    color: rl.color,
    label: rl.status
  }));
  // names
  const names = Names.map((n) => ({ label: n }));

  const onChange = (key, e) => {
    const p = { ...project };
    p[key] = e[0].label;
    setProject(p);
  };

  useEffect(() => {
    return () => {
      setProjects(projects.map((p) => (p.key === key ? { ...project } : p)));
    };
  }, [project]);

  return (
    <Fragment>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiFormRow label="Project Key">
            <EuiFieldText
              value={project.key}
              onChange={() => {}}
              compressed={true}
              readOnly={true}
              style={{ background: "white", cursor: "no-drop" }}
              append={<EuiButtonIcon size="xs" iconType="copy" />}
            />
          </EuiFormRow>
          <EuiFormRow label="Project Name">
            <EuiFieldText
              value={project.name}
              onChange={() => {}}
              compressed={true}
            />
          </EuiFormRow>
          <EuiFormRow label="Project Description">
            <EuiTextArea
              value={project.description}
              onChange={() => {}}
              compressed={true}
              style={{ height: "calc(50vh - 100px)" }}
            />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Business Unit">
            <EuiComboBox
              compressed={true}
              singleSelection={{ asPlainText: true }}
              options={bus}
              selectedOptions={bus.filter(
                (b) => b.label === project.business_unit
              )}
              onChange={(e) => onChange("business_unit", e)}
            />
          </EuiFormRow>
          <EuiFormRow label="Model Owner">
            <EuiComboBox
              compressed={true}
              singleSelection={{ asPlainText: true }}
              options={names}
              selectedOptions={names.filter(
                (n) => n.label === project.model_owner
              )}
              onChange={(e) => onChange("model_owner", e)}
            />
          </EuiFormRow>
          <EuiFormRow label="Model Developer">
            <EuiComboBox
              compressed={true}
              singleSelection={{ asPlainText: true }}
              options={names}
              selectedOptions={names.filter(
                (n) => n.label === project.model_developer
              )}
              onChange={(e) => onChange("model_developer", e)}
            />
          </EuiFormRow>
          <EuiFormRow label="Tech Owner">
            <EuiComboBox
              compressed={true}
              singleSelection={{ asPlainText: true }}
              options={names}
              selectedOptions={names.filter(
                (n) => n.label === project.tech_owner
              )}
              onChange={(e) => onChange("tech_owner", e)}
            />
          </EuiFormRow>
          <EuiFormRow label="Validation Lead">
            <EuiComboBox
              compressed={true}
              singleSelection={{ asPlainText: true }}
              options={names}
              selectedOptions={names.filter(
                (n) => n.label === project.validation_lead
              )}
              onChange={(e) => onChange("validation_lead", e)}
            />
          </EuiFormRow>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiFormRow label="Risk Level">
            <EuiComboBox
              compressed={true}
              singleSelection={true}
              options={risks}
              selectedOptions={risks.filter(
                (r) => r.label === project.risk_level
              )}
              onChange={(e) => onChange("risk_level", e)}
            />
          </EuiFormRow>

          <EuiFormRow label="Status">
            <EuiComboBox
              compressed={true}
              singleSelection={true}
              options={statuses}
              selectedOptions={statuses.filter(
                (r) => r.label === project.status
              )}
              onChange={(e) => onChange("status", e)}
            />
          </EuiFormRow>
          <EuiFormRow label="Latest Version">
            <EuiFieldText
              value={project.versions[project.versions.length - 1]}
              onChange={() => {}}
              compressed={true}
              readOnly={true}
              style={{ background: "white", cursor: "no-drop" }}
              append={<EuiButtonIcon size="xs" iconType="inspect" />}
            />
          </EuiFormRow>
          <EuiFormRow label="Last Modified">
            <EuiFieldText
              value={project.updated_dt}
              onChange={() => {}}
              compressed={true}
              readOnly={true}
              style={{ background: "white", cursor: "no-drop" }}
            />
          </EuiFormRow>
        </EuiFlexItem>
      </EuiFlexGroup>
    </Fragment>
  );
};

export default Project;

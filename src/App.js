import React, { Fragment, useState } from "react";
import {
  Route,
  Link,
  Switch,
  withRouter,
  Redirect,
  useHistory
} from "react-router-dom";

import { EuiGlobalToastList } from "@elastic/eui";
import "./styles.scss";

import Header from "./components/Header";
import Tabs, { tabs } from "./components/Tabs";
import Projects from "./components/Projects";
import TestKits from "./components/TestKits";
import Datasets from "./components/Datasets";
import Models from "./components/Models";

import Project from "./components/Project";

import { EuiPageContent } from "@elastic/eui";

const App = () => {
  const history = useHistory();
  const [tabId, setTabId] = useState("projects");
  const onChangeTab = (_tabId) => {
    setTabId(_tabId);
    history.push(`/${_tabId}`);
  };
  const [toasts, setToasts] = useState([]);

  const PageNotFound = () => (
    <EuiPageContent
      verticalPosition="center"
      horizontalPosition="center"
      color="transparent"
      className="app-content"
      hasShadow={false}
    >
      <div>
        <h1>404 - Not Found!</h1>
        <Link to="/">Go Home</Link>
      </div>
    </EuiPageContent>
  );

  return (
    <Fragment>
      <Header />
      <div
        style={{
          paddingTop: 30,
          paddingBottom: 30,
          maxWidth: 1200,
          margin: "auto",
          width: "90%",
          alignItems: "center"
        }}
      >
        <Tabs tabId={tabId} setTabId={onChangeTab} />
        <div
          className="shadow"
          style={{
            padding: "20px 30px",
            background: "white",
            height: "calc(100vh - 160px)"
          }}
        >
          <Switch>
            <Redirect exact from="/" to="/projects" />
            <Route
              path="/projects"
              render={(props) => <Projects {...props} setToasts={setToasts} />}
            />
            <Route path="/project/:key" component={Project} />
            <Route path="/testkits" component={TestKits} />
            <Route path="/datasets" component={Datasets} />
            <Route path="/models" component={Models} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
      <EuiGlobalToastList toasts={toasts} toastLifeTimeMs={5000} />
    </Fragment>
  );
};

export default withRouter(App);

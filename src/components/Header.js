import React from "react";
import {
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderLink,
  EuiHeaderLinks,
  EuiImage
} from "@elastic/eui";

import logo from "../assets/images/gauntlet.png";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMitten } from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <EuiHeader style={{ paddingLeft: 10 }}>
    <EuiHeaderSection>
      <EuiHeaderSectionItem
        border="right"
        style={{ fontWeight: 500, fontSize: 16 }}
      >
        {/* <FontAwesomeIcon icon={faMitten} size="lg" /> */}
        <EuiImage alt="logo" src={logo} style={{ width: 30 }} />
        &nbsp; Gauntlet.ai
      </EuiHeaderSectionItem>
    </EuiHeaderSection>

    <EuiHeaderSection side="right">
      <EuiHeaderSectionItem>
        <EuiHeaderLinks aria-label="App navigation links example">
          <EuiHeaderLink>Docs</EuiHeaderLink>
          <EuiHeaderLink>About Us</EuiHeaderLink>
          <EuiHeaderLink>Help</EuiHeaderLink>
        </EuiHeaderLinks>
      </EuiHeaderSectionItem>
    </EuiHeaderSection>
  </EuiHeader>
);

export default Header;

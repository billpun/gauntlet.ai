import React from "react";
import {
  EuiAvatar,
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
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
        <EuiHeaderLinks aria-label="Navigation Links">
          <EuiHeaderLink>API Docs</EuiHeaderLink>
        </EuiHeaderLinks>
      </EuiHeaderSectionItem>
      <EuiHeaderSectionItemButton
        style={{ paddingTop: 7 }}
        aria-controls="Header Avatar"
        aria-expanded="false"
        aria-haspopup="true"
        aria-label="Account Menu"
      >
        <EuiAvatar name="John Doe" type="space" color="#871F78" size="m" />
      </EuiHeaderSectionItemButton>
    </EuiHeaderSection>
  </EuiHeader>
);

export default Header;

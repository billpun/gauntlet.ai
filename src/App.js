import {
  EuiIcon,
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderLink,
  EuiHeaderLinks
} from "@elastic/eui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMitten } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import "@elastic/eui/dist/eui_theme_amsterdam_light.css";

export default function App() {
  const Header = () => (
    <EuiHeader>
      <EuiHeaderSection>
        <EuiHeaderSectionItem
          border="right"
          style={{ fontWeight: 500, fontSize: 16 }}
        >
          <FontAwesomeIcon icon={faMitten} size="lg" />
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
  return (
    <>
      <Header />
    </>
  );
}

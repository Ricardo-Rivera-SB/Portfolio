import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  SiFigma,
  SiReact,
  SiNetlify,
  SiAdobe,
  SiApplemusic,
  SiWordpress,
  SiEnvato,
} from "react-icons/si";
import { FaElementor } from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I specialize in Front-End web development technologies and
      <br /> the Adobe Creative Cloud.
    </SectionText>
    <List>
      <ListItem>
        <SiReact
          size="5rem"
          style={{
            paddingBottom: "1rem",
          }}
        />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br /> React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiNetlify
          size="5rem"
          style={{
            paddingBottom: "1rem",
          }}
        />
        <ListContainer>
          <ListTitle>
            Static Web <br /> Hosting
          </ListTitle>
          <ListParagraph>
            Experience with <br /> Netlify
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiFigma
          size="5rem"
          style={{
            paddingBottom: "1rem",
          }}
        />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br /> tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAdobe
          size="5rem"
          style={{
            paddingBottom: "1rem",
          }}
        />
        <ListContainer>
          <ListTitle>Adobe</ListTitle>
          <ListParagraph>
            Experience with <br /> Photoshop, After Effects, <br />
            Premier Pro, and XD
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiWordpress
          size="5rem"
          style={{
            paddingBottom: "1rem",
          }}
        />
        <ListContainer>
          <ListTitle>WordPress</ListTitle>
          <ListParagraph>
            Experience with <br /> WordPress CMS and <br />
            theme creation
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaElementor size="5rem" />
        <ListContainer>
          <ListTitle>Elementor</ListTitle>
          <ListParagraph>
            Experience with <br /> Elementor drag and <br />
            drop design, and Envato
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;

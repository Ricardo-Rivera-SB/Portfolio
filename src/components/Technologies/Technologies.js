import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  SiFigma,
  SiReact,
  SiNetlify,
  SiAdobe,
  SiApplemusic,
} from "react-icons/si";
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
      I Specialize in Front-End web development technologies and
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
        <SiApplemusic
          size="5rem"
          style={{
            paddingBottom: "1rem",
          }}
        />
        <ListContainer>
          <ListTitle>
            Music Production/
            <br /> Sound Design
          </ListTitle>
          <ListParagraph>
            Experience with <br /> Ableton live and <br /> various VSTs
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;

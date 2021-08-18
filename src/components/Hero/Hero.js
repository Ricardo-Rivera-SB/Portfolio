import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi I'm, <br />
        Ricardo Rivera
      </SectionTitle>
      <SectionText>
        Front-End Web Developer, <br /> Technology Specialist and <br /> Music
        Producer.
      </SectionText>
      <Button onClick={() => (window.location = "#about")}>About Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;

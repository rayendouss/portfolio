import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typical from "react-typical"
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bonjour , Je suis <br />
           Douss Mohamed Rayen
        </SectionTitle>
        <SectionText>
       <Typical
         loop={Infinity}
         steps={[
           'Développeur Full Stack JavaScript',10
         ]}
       />
        </SectionText>
        Je suis lié au développement logiciel, je fais le suivi des derniers changements dans le domaine et je le fais avec passion. J'ai mis en place ce site afin d'exposer ma carrière et partager ma passion.
      </LeftSection>
    </Section>
  </>
);

export default Hero;
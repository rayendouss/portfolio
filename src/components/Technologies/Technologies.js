import React from 'react';
import { DiFirebase, DiReact, DiGoogleAnalytics ,DiMysql,DiGit} from 'react-icons/di';
import { FaDesktop } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    Ci-dessous vous trouverez mes compétences :
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
          
            React.js / Redux / Next.js <br />
            Angular <br />
            JavaScript ES5/6 <br />
            UI Librairies

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            NodeJs / ExpressJs  <br />
            ASP.NET Core (C# ,Entity Framework) <br />
            J2EE , SpringBoot (JAVA) <br />
            Symfony (PHP) <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiMysql size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Base de données</ListTitle>
          <ListParagraph>
            Experience with <br />
            MongoDB
            Mysql , PostgreSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaDesktop size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Applications de bureau</ListTitle>
          <ListParagraph>
            Experience with <br />
           JavaFx
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiGoogleAnalytics size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Méthode d’analyse et modélisation</ListTitle>
          <ListParagraph>
            Experience with <br />
          UML <br/>
          Etudes de cas
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiGit size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>
Gestion des versions et de projet</ListTitle>
          <ListParagraph>
            Experience with <br />
          Git <br/>
          Scrum <br/>
          Netlify <br />
          Heroku <br />
          Trello <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;

import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from '../Projects/ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { FaDownload } from 'react-icons/fa';
const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Curriculum vitae </SectionTitle>
    <Boxes>

                                        <UtilityList>
              <ExternalLinks href="cv.pdf"><FaDownload/>  &nbsp;  Download CV</ExternalLinks>
            </UtilityList>
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;

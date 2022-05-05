/** @jsx createElement */
import { createElement } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const AboutPageStyle = styled.div`
  text-align: left;
`;

function About() {
  const { t } = useTranslation("about.lang", { useSuspense: true });

  return (
    <AboutPageStyle>
      <h1>{t("title")}</h1>
      <p>{t("subtitle")}</p>
    </AboutPageStyle>
  );
}

export default About;

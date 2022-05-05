/** @jsx createElement */
import { createElement, Fragment } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import ireland from "../../assets/images/ireland.svg";
import usa from "../../assets/images/usa.svg";
import { AppPage } from "../../constants/enums";

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;

  p:last-of-type {
    margin-left: 10px;
  }
`;

const Flag = styled.img`
  width: 50px;
  height: 25px;
  margin-right: 10px;
  cursor: pointer;
`;

const Languages = styled.div`
  display: flex;
  align-items: center;
`;

function Header() {
  const history = useHistory();
  const { t, i18n } = useTranslation("header.lang", { useSuspense: true });

  return (
    <Fragment>
      <HeaderStyle>
        <p
          onClick={() => {
            history.push(AppPage.Home);
          }}
        >
          {t("homelinktext")}
        </p>
        <p
          onClick={() => {
            history.push(AppPage.About);
          }}
        >
          {t("aboutlinktext")}
        </p>
      </HeaderStyle>
      <Languages>
        <Flag
          onClick={() => {
            i18n.changeLanguage("ie");
          }}
          src={ireland}
          alt="ireland"
        />
        <Flag
          onClick={() => {
            i18n.changeLanguage("en");
          }}
          src={usa}
          alt="united states"
        />
      </Languages>
    </Fragment>
  );
}

export default Header;

/** @jsx createElement */
import { createElement, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { getContactsFromChrome } from "../services/chromeApi";

const LandingStyle = styled.div`
  text-align: left;
`;

function Home() {
  const { t } = useTranslation("home.lang", { useSuspense: true });
  const [contacts, setContacts] = useState();

  return (
    <LandingStyle>
      {JSON.stringify(contacts)}
      <h1
        onClick={async () => {
          const x = await getContactsFromChrome();
          setContacts(x);
        }}
      >
        click
      </h1>
      <h1>{t("title")}</h1>
      <p>{t("subtitle")}</p>
    </LandingStyle>
  );
}

export default Home;
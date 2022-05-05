/** @jsx createElement */
import { createElement, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { apiAvailable, getContactsFromChrome } from "../services/chromeApi";

const LandingStyle = styled.div`
  text-align: left;
`;

interface Contact {
  name: string[];
  tel: string;
}

function Home() {
  const { t } = useTranslation("home.lang", { useSuspense: true });
  const [contacts, setContacts] = useState<Contact[]>([]);

  return (
    <LandingStyle>
      {apiAvailable() && (
        <h1
          onClick={async () => {
            const x = await getContactsFromChrome();
            setContacts(x);
          }}
        >
          click
          {JSON.stringify(contacts)}
        </h1>
      )}
      <h1>{t("title")}</h1>
      <p>{t("subtitle")}</p>

      {contacts &&
        contacts.map((x) => {
          return (
            <div key={x.tel}>
              <p>{x.tel}</p>
              <p>{x.name[0]}</p>
            </div>
          );
        })}
    </LandingStyle>
  );
}

export default Home;

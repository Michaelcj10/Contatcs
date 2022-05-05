/* eslint-disable @typescript-eslint/no-explicit-any */
export const apiAvailable = (): boolean => {
  const supported = "contacts" in navigator && "ContactsManager" in window;
  return supported;
};

export const getContactsFromChrome = async (): Promise<any> => {
  if (apiAvailable()) {
    const props = ["name", "email", "tel", "address", "icon"];
    const opts = { multiple: true };

    try {
      const contacts = await (navigator as any).contacts.select(props, opts);
      console.log(contacts, "xx");

      return contacts;
    } catch (ex) {
      // Handle any errors here.

      return [];
    }
  }

  return [];
};

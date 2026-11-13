export const site = {
  name: "DCS",
  fullName: "DCS – Global AeroCleaning Solutions",
  phone: "+48 734 002 821",
  email: "biuro@dcs-drone.com",
  address: "ul. Pucka 35, 81-036 Gdynia, Poland",
  social: {
    youtube: "https://www.youtube.com/@DCSGlobalAeroCleaningSolutions",
    facebook: "https://www.facebook.com/dcs.drone",
    instagram: "https://www.instagram.com/dcs_aerocleaning_solutions/",
  },
};

/** Role and note are dictionary keys (`t.contacts[role]`), so the labels translate. */
export type ContactRole = "office" | "sales" | "examiner";
export type ContactNote = "hours" | "callOrText";
export type Contact = { role: ContactRole; name: string; phone: string; note?: ContactNote };

/** People to call. Sales numbers go everywhere the office number goes. */
export const contacts = {
  office: { role: "office", name: "DCS", phone: "+48 734 002 821", note: "hours" } as Contact,
  sales: [
    { role: "sales", name: "Mateusz", phone: "+48 668 373 821" },
    { role: "sales", name: "Mariusz", phone: "+48 664 250 323" },
  ] as Contact[],
  examiner: { role: "examiner", name: "Jakub", phone: "+48 517 050 177", note: "callOrText" } as Contact,
};

export const defaultContacts: Contact[] = [contacts.office, ...contacts.sales];

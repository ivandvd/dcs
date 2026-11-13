/**
 * English legal documents – the client's own copy from incoming/scrape/privacy.txt and terms.txt, kept verbatim.
 * The scrape showed e-mail addresses as "[email protected]" (Cloudflare obfuscation);
 * every one of them decodes to biuro@dcs-drone.com. Types and `getLegal(slug, locale)` live in legal.ts.
 */
import type { LegalBlock, LegalDocument } from "./legal";

/** Block helpers shared with legal.pl.ts. */
export const p = (text: string): LegalBlock => ({ type: "paragraph", text });
export const h = (text: string): LegalBlock => ({ type: "subheading", text });
export const ul = (items: string[]): LegalBlock => ({ type: "list", items });
export const address = (lines: string[]): LegalBlock => ({ type: "address", lines });

const COMPANY = "DCS - Drone Cleaning Solutions Sp. z o.o.";
const STREET = "ul. Pucka 35, 81-306 Gdynia, Poland";
const CORRESPONDENCE = "Correspondence address: ul. Kwidzyńska 15, 81-306 Gdynia, Poland";
const EMAIL = "E-mail: biuro@dcs-drone.com";

export const privacyPolicy: LegalDocument = {
  slug: "privacy",
  metaTitle: "Privacy Policy",
  metaDescription:
    "This Privacy and Cookies Policy defines the rules for processing personal data and using cookies within the website available at dcs-drone.com.",
  title: "Privacy and Cookies Policy",
  lede: "of the dcs-drone.com Website",
  meta: "Administrator: DCS - Drone Cleaning Solutions Sp. z o.o.",
  sections: [
    {
      id: "general-provisions",
      heading: "General Provisions",
      blocks: [
        p(
          "This Privacy and Cookies Policy defines the rules for processing personal data and using cookies within the website available at dcs-drone.com, hereinafter referred to as the “Website”.",
        ),
        p(
          "The Website is used in particular to present information about the activities of DCS - Drone Cleaning Solutions Sp. z o.o., cleaning, washing, disinfection and inspection services, as well as technological solutions related to the use of drones and cleaning systems, including communication concerning Aeroglobal Cleaning Solutions.",
        ),
        p(
          "Use of the Website may involve the processing of users' personal data, in particular when using contact forms, offer forms, recruitment forms, e-mail correspondence, analytical tools and cookies.",
        ),
      ],
    },
    {
      id: "data-administrator",
      heading: "Personal Data Administrator",
      blocks: [
        p("The administrator of personal data is:"),
        address([COMPANY, STREET, CORRESPONDENCE, "NIP: 5862427650", "KRS: 0001225754", EMAIL]),
        p(
          "In matters concerning personal data protection, the Administrator may be contacted by e-mail at biuro@dcs-drone.com or in writing to the address of the Administrator's registered office.",
        ),
      ],
    },
    {
      id: "scope-of-data",
      heading: "Scope of Data We May Process",
      blocks: [
        p("The Administrator may process, in particular, the following categories of data:"),
        h("Identification data:"),
        ul(["first name and surname,", "company name,", "position or function, if provided."]),
        h("Contact data:"),
        ul([
          "e-mail address,",
          "telephone number,",
          "correspondence address or company registered office address, if provided.",
        ]),
        h("Inquiry-related data:"),
        ul([
          "message content,",
          "type of service or product in which the user is interested,",
          "information concerning the facility, service performance, equipment sale, cooperation, franchise or recruitment,",
          "other information voluntarily provided by the user.",
        ]),
        h("Technical and operational data:"),
        ul([
          "IP address,",
          "cookie identifiers,",
          "device type,",
          "browser type and version,",
          "operating system,",
          "date and time of visit,",
          "subpages visited on the Website,",
          "source of entry to the Website,",
          "data concerning technical or security errors.",
        ]),
        h("Recruitment data:"),
        ul([
          "data included in a CV,",
          "data included in a cover letter or recruitment message,",
          "information about professional experience, education, qualifications and skills,",
          "other data voluntarily provided by the candidate.",
        ]),
        p(
          "The Administrator does not require the provision of special categories of personal data, such as data concerning health, political opinions, religious beliefs, sexual orientation, racial or ethnic origin. If the user provides such data on their own initiative, it will be processed only to the extent necessary to handle the relevant matter or on the basis of explicit consent, if required.",
        ),
      ],
    },
    {
      id: "purposes-and-legal-bases",
      heading: "Purposes and Legal Bases for Data Processing",
      blocks: [
        p("The Administrator processes personal data for the following purposes:"),
        h("4.1. Handling the Contact Form and Correspondence"),
        p(
          "Data is processed in order to respond to a message, handle an inquiry, conduct correspondence and contact the user.",
        ),
        p("Legal basis:"),
        ul([
          "Article 6(1)(f) GDPR — the Administrator's legitimate interest consisting in communication with Website users,",
          "Article 6(1)(b) GDPR — taking steps at the request of the data subject prior to entering into an agreement, if the contact is aimed at concluding an agreement.",
        ]),
        h("4.2. Handling Offer Inquiries"),
        p(
          "Data is processed in order to prepare a response to an inquiry, present commercial information, prepare an individual offer, discuss the scope of a service, sale of equipment, cooperation, training or another solution offered by the Administrator.",
        ),
        p("Legal basis:"),
        ul([
          "Article 6(1)(b) GDPR — taking steps prior to entering into an agreement or performance of an agreement,",
          "Article 6(1)(f) GDPR — the Administrator's legitimate interest consisting in handling offer inquiries and conducting business communication.",
        ]),
        h("4.3. Performance of Agreements and Settlements"),
        p(
          "If contact through the Website leads to the conclusion of an agreement, data may be processed in order to perform the agreement, handle an order, perform a service, sell equipment, issue accounting documents, handle payments, delivery, acceptance, complaints, warranty or servicing.",
        ),
        p("Legal basis:"),
        ul([
          "Article 6(1)(b) GDPR — performance of an agreement,",
          "Article 6(1)(c) GDPR — compliance with legal obligations imposed on the Administrator, in particular accounting, tax and archiving obligations,",
          "Article 6(1)(f) GDPR — the Administrator's legitimate interest consisting in pursuing claims or defending against claims.",
        ]),
        h("4.4. Recruitment Processes"),
        p(
          "Candidates' data is processed in order to conduct the recruitment process for a selected position, contact the candidate, assess qualifications and make a recruitment decision.",
        ),
        p("Legal basis:"),
        ul([
          "Article 6(1)(c) GDPR — compliance with obligations arising from labour law provisions with respect to data required by law,",
          "Article 6(1)(a) GDPR — the candidate's consent with respect to voluntarily provided data exceeding the scope required by law,",
          "Article 6(1)(f) GDPR — the Administrator's legitimate interest consisting in establishing, pursuing or defending against potential claims,",
          "Article 9(2)(a) GDPR — the candidate's explicit consent if the candidate voluntarily provides special categories of personal data.",
        ]),
        p(
          "If consent is given to participate in future recruitment processes, data may also be stored for the purposes of subsequent recruitment processes.",
        ),
        h("4.5. Marketing of Own Services and Commercial Contact"),
        p(
          "Data may be processed in order to provide information about the Administrator's services, products, technological solutions, cooperation, training or other activities, if the user has consented to such contact or if the contact takes place within the legally permissible legitimate interest of the Administrator.",
        ),
        p("Legal basis:"),
        ul([
          "Article 6(1)(a) GDPR — the user's consent,",
          "Article 6(1)(f) GDPR — the Administrator's legitimate interest consisting in marketing its own products and services.",
        ]),
        p(
          "Sending commercial information by electronic means or conducting telephone marketing takes place with regard to the required consents resulting from applicable legal provisions, in particular provisions concerning electronic communications.",
        ),
        h("4.6. Website Analytics and Statistics"),
        p(
          "Data may be processed in order to maintain statistics, analyse Website traffic, examine how the Website is used, optimise the operation of the Website, improve its functionality, measure the effectiveness of content and ensure security.",
        ),
        p("Legal basis:"),
        ul([
          "Article 6(1)(f) GDPR — the Administrator's legitimate interest with respect to necessary technical and security data,",
          "Article 6(1)(a) GDPR — the user's consent in the case of analytical or marketing cookies and similar technologies requiring consent.",
        ]),
        h("4.7. Ensuring Website Security"),
        p(
          "Technical data, including server logs, may be processed in order to ensure the security of the Website, detect abuse, errors, unauthorised access, cyberattacks and protect IT infrastructure.",
        ),
        p("Legal basis:"),
        ul([
          "Article 6(1)(f) GDPR — the Administrator's legitimate interest consisting in ensuring Website security, data protection and preventing abuse.",
        ]),
        h("4.8. Pursuing Claims and Defending Against Claims"),
        p(
          "Data may be processed in order to establish, pursue or defend against claims related to the use of the Website, correspondence, inquiries, concluded agreements or other relationships with the Administrator.",
        ),
        p("Legal basis:"),
        ul(["Article 6(1)(f) GDPR — the Administrator's legitimate interest consisting in protecting its rights."]),
      ],
    },
    {
      id: "voluntary-provision",
      heading: "Voluntary Provision of Data",
      blocks: [
        p("The provision of personal data is voluntary; however, in certain cases it may be necessary in order to:"),
        ul([
          "send a contact form,",
          "receive a response to an inquiry,",
          "prepare an offer,",
          "participate in recruitment,",
          "conduct further correspondence,",
          "conclude or perform an agreement.",
        ]),
        p(
          "Failure to provide the required data may prevent the handling of an inquiry, preparation of an offer, return contact or participation in the recruitment process.",
        ),
      ],
    },
    {
      id: "retention-period",
      heading: "Data Retention Period",
      blocks: [
        p(
          "Personal data will be stored for the period necessary to achieve the purpose for which it was collected, and subsequently for the period required by law or justified by the protection of the Administrator's rights.",
        ),
        p("In particular:"),
        ul([
          "Data from contact forms and correspondence is stored for the period necessary to handle the inquiry and conduct further correspondence, and subsequently for the limitation period of any potential claims.",
          "Data related to offer inquiries is stored for the period of conducting commercial discussions, preparing an offer and for the limitation period of any potential claims.",
          "Data related to concluded agreements is stored for the period of performance of the agreement, and subsequently for the period required by tax, accounting and archiving regulations, as well as for the limitation period of any potential claims.",
          "Recruitment data is stored for the duration of the recruitment process, and if consent is given to participate in future recruitment processes — for a period of 12 months or until consent is withdrawn.",
          "Data processed on the basis of consent is stored until consent is withdrawn, unless there is another legal basis for further processing.",
          "Technical logs may be stored for the period necessary to ensure the security and proper operation of the Website, and subsequently for the period justified by protection against claims or analysis of security incidents.",
        ]),
      ],
    },
    {
      id: "data-recipients",
      heading: "Data Recipients",
      blocks: [
        p(
          "Personal data may be transferred to entities supporting the Administrator in operating the Website and conducting business activities, in particular:",
        ),
        ul([
          "hosting providers,",
          "IT service providers,",
          "e-mail service providers,",
          "contact form system providers,",
          "analytical and statistical tool providers,",
          "marketing service providers, if such tools are used,",
          "law firms,",
          "accounting offices and tax advisers,",
          "entities providing accounting, administrative or technical services,",
          "courier, logistics or service companies, if necessary for the performance of an agreement,",
          "banks or payment operators, if a transaction is settled,",
          "public authorities, if the obligation to provide data results from legal provisions.",
        ]),
        p(
          "Entities processing data on behalf of the Administrator act on the basis of appropriate data processing agreements and are obliged to ensure an appropriate level of security.",
        ),
      ],
    },
    {
      id: "transfer-outside-eea",
      heading: "Transfer of Data Outside the European Economic Area",
      blocks: [
        p("As a rule, the Administrator aims to process data within the European Economic Area."),
        p(
          "In connection with the use of tools provided by global technology providers, in particular analytical, statistical, hosting, e-mail or marketing tools, data may be transferred outside the European Economic Area, including to the United States.",
        ),
        p("In such a case, data transfer takes place using appropriate legal mechanisms, in particular:"),
        ul([
          "a European Commission adequacy decision confirming an adequate level of data protection,",
          "the EU–U.S. Data Privacy Framework, if the relevant data recipient participates in this programme,",
          "standard contractual clauses approved by the European Commission,",
          "other safeguards provided for under the GDPR.",
        ]),
      ],
    },
    {
      id: "google-analytics",
      heading: "Google Analytics and Analytical Tools",
      blocks: [
        p(
          "The Website may use Google Analytics provided by Google Ireland Limited in order to maintain statistics and analyse how the Website is used.",
        ),
        p("Google Analytics may collect information concerning the use of the Website, in particular:"),
        ul([
          "visited subpages,",
          "time spent on the Website,",
          "source of entry to the Website,",
          "approximate location,",
          "technical data of the device and browser,",
          "user events on the Website.",
        ]),
        p(
          "Analytical cookies and similar technologies are activated only after the user has given consent, if such consent is required under applicable law.",
        ),
        p(
          "The User may manage cookie consents using the privacy settings panel available on the Website, as well as through their web browser settings.",
        ),
      ],
    },
    {
      id: "cookies",
      heading: "Cookies",
      blocks: [
        p("The Website uses cookies, i.e. small text files stored on the user's end device."),
        p("Cookies may be used for the following purposes:"),
        h("10.1. Necessary Cookies"),
        p(
          "These cookies are required for the proper operation of the Website, ensuring security, handling forms, remembering basic settings and ensuring the technical stability of the Website.",
        ),
        p(
          "These cookies may be used without the user's separate consent if they are necessary to provide a service requested by the user or to ensure the transmission of a communication.",
        ),
        h("10.2. Analytical Cookies"),
        p(
          "These cookies are used to measure Website traffic, create statistics, analyse how the Website is used and improve its operation.",
        ),
        p("These cookies are used only after the user has given consent, if such consent is required under applicable law."),
        h("10.3. Marketing Cookies"),
        p(
          "These cookies may be used to measure the effectiveness of marketing activities, adapt content or conduct advertising campaigns.",
        ),
        p("These cookies are used only after the user has given consent."),
        h("10.4. Functional Cookies"),
        p(
          "These cookies may be used to remember the user's preferences, such as language settings, choices made in the cookie banner or other preferences concerning the operation of the Website.",
        ),
      ],
    },
    {
      id: "managing-cookies",
      heading: "Managing Cookies",
      blocks: [
        p("The User may manage cookies through:"),
        ul([
          "the cookie settings panel available on the Website,",
          "web browser settings,",
          "deletion of cookies stored on the device,",
          "blocking specific categories of cookies,",
          "installation of add-ons blocking analytical tools.",
        ]),
        p("Restricting or disabling necessary cookies may affect the proper operation of the Website."),
        p("Withdrawal of cookie consent does not affect the lawfulness of processing carried out before its withdrawal."),
      ],
    },
    {
      id: "user-rights",
      heading: "User Rights",
      blocks: [
        p("The data subject has the right to:"),
        ul([
          "access personal data,",
          "obtain a copy of the data,",
          "rectify data,",
          "erase data,",
          "restrict processing,",
          "data portability,",
          "object to data processing,",
          "withdraw consent at any time, if processing is based on consent,",
          "lodge a complaint with a supervisory authority.",
        ]),
        p("In Poland, the supervisory authority is the President of the Personal Data Protection Office."),
        p(
          "In order to exercise their rights, the User may contact the Administrator at the following e-mail address: biuro@dcs-drone.com.",
        ),
      ],
    },
    {
      id: "right-to-object",
      heading: "Right to Object",
      blocks: [
        p(
          "The User has the right to object to the processing of personal data if the processing is based on the Administrator's legitimate interest.",
        ),
        p(
          "If an objection is lodged, the Administrator will cease processing data for the given purpose, unless there are compelling legitimate grounds for further processing overriding the interests, rights and freedoms of the User, or grounds for establishing, pursuing or defending claims.",
        ),
        p(
          "If data is processed for direct marketing purposes, the User may object at any time, and the Administrator will cease processing data for this purpose.",
        ),
      ],
    },
    {
      id: "automated-decision-making",
      heading: "Automated Decision-Making and Profiling",
      blocks: [
        p(
          "Users' personal data is not used to make decisions concerning them based solely on automated processing that would produce legal effects concerning the User or similarly significantly affect the User.",
        ),
        p(
          "Data may be used for basic statistical and technical analysis of the operation of the Website; however, such analysis does not lead to automated decision-making concerning the User.",
        ),
      ],
    },
    {
      id: "data-security",
      heading: "Data Security",
      blocks: [
        p(
          "The Administrator applies appropriate technical and organisational measures aimed at protecting personal data against:",
        ),
        ul([
          "unauthorised access,",
          "loss,",
          "destruction,",
          "accidental alteration,",
          "unauthorised disclosure,",
          "unlawful processing.",
        ]),
        p(
          "These measures include, in particular, technical safeguards of the Website, access control, limiting access to data only to authorised persons and cooperation with service providers ensuring an appropriate level of security.",
        ),
      ],
    },
    {
      id: "childrens-data",
      heading: "Children's Data",
      blocks: [
        p(
          "The Website is not directed at children. The Administrator does not intend to knowingly obtain children's personal data through the Website.",
        ),
        p(
          "If the Administrator becomes aware that a child's data has been provided without the required consent of a legal representative, it will take appropriate steps to delete the data or restrict its processing.",
        ),
      ],
    },
    {
      id: "external-links",
      heading: "Links to External Websites",
      blocks: [
        p("The Website may contain links to websites, social media, external materials or services of third parties."),
        p(
          "The Administrator is not responsible for the privacy rules applicable on external websites. After accessing a third-party website, the User should read its privacy policy and cookie rules.",
        ),
      ],
    },
    {
      id: "amendments",
      heading: "Amendments to the Privacy Policy",
      blocks: [
        p("The Administrator may amend this Privacy Policy in the event of:"),
        ul([
          "changes in legal regulations,",
          "changes to the scope of operation of the Website,",
          "implementation of new functionalities,",
          "changes to the analytical, marketing or technical tools used,",
          "the need to clarify the rules for data processing.",
        ]),
        p("The current version of the Privacy Policy is available on the Website."),
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      blocks: [
        p(
          "In matters concerning the Privacy Policy, cookies or personal data processing, the Administrator may be contacted at:",
        ),
        address([COMPANY, STREET, CORRESPONDENCE, EMAIL]),
      ],
    },
  ],
};

export const termsAndConditions: LegalDocument = {
  slug: "terms",
  metaTitle: "Terms and Conditions",
  metaDescription: "These Terms and Conditions define the rules for using the website available at dcs-drone.com.",
  title: "Terms and Conditions of the Website",
  lede: "dcs-drone.com",
  meta: "Website Owner: DCS - Drone Cleaning Solutions Sp. z o.o.",
  links: { "Privacy and Cookies Policy": "/privacy", "Privacy Policy": "/privacy" },
  sections: [
    {
      id: "general-provisions",
      heading: "General Provisions",
      blocks: [
        p(
          "These Terms and Conditions define the rules for using the website available at dcs-drone.com, hereinafter referred to as the “Website”.",
        ),
        p("The owner and administrator of the Website is:"),
        address([COMPANY, STREET, CORRESPONDENCE, "NIP: 5862427650", "KRS: 0001225754", EMAIL]),
        p(
          "The Administrator operates the Website in order to present information about its business activities, services, technologies and solutions related to the use of drones and cleaning systems, including the area of Aeroglobal Cleaning Solutions.",
        ),
        p(
          "Use of the Website is voluntary and free of charge, subject to data transmission costs resulting from the user's agreement with their Internet service provider.",
        ),
      ],
    },
    {
      id: "definitions",
      heading: "Definitions",
      blocks: [
        p("For the purposes of these Terms and Conditions, the following terms shall have the meanings set out below:"),
        ul([
          "Administrator – DCS - Drone Cleaning Solutions Sp. z o.o. with its registered office in Gdynia.",
          "Website – the website available at dcs-drone.com and its subpages.",
          "User – any natural person, legal person or organisational unit using the Website.",
          "Contact Form – a Website functionality enabling a message to be sent to the Administrator.",
          "Offer Form – a Website functionality enabling an inquiry to be submitted regarding services, products, equipment, cooperation or other solutions offered by the Administrator.",
          "Recruitment Form – a Website functionality enabling a recruitment application to be submitted.",
          "Electronic Services – services provided electronically by the Administrator via the Website, in particular the provision of content, forms and contact functionalities.",
          "Terms and Conditions – this document defining the rules for using the Website.",
        ]),
      ],
    },
    {
      id: "scope-of-the-website",
      heading: "Scope of the Website",
      blocks: [
        p("The Website may contain, in particular, information concerning:"),
        ul([
          "the Administrator's business activities,",
          "cleaning and washing services using drones,",
          "disinfection, impregnation, inspection or technical documentation services,",
          "the sale or presentation of technological solutions, equipment, washing kits, cleaning systems or accessories,",
          "training, technical support, business cooperation or franchising,",
          "recruitment,",
          "the Administrator's contact details,",
          "information materials, photographs, graphics, descriptions of technologies and marketing content.",
        ]),
        p(
          "The information published on the Website is for informational and promotional purposes. It does not constitute an offer within the meaning of the Civil Code, unless a given content item expressly states otherwise.",
        ),
        p(
          "Individual terms of cooperation, sale, service performance, equipment delivery, payment, warranty, servicing, acceptance or liability are determined each time in a separate offer, agreement, order, specific terms and conditions or another document agreed with the client.",
        ),
      ],
    },
    {
      id: "electronic-services",
      heading: "Types of Services Provided Electronically",
      blocks: [
        p("Through the Website, the Administrator may provide the following electronic services:"),
        ul([
          "providing informational content concerning the Administrator's activities,",
          "enabling users to browse the Website's subpages,",
          "providing a contact form,",
          "providing an offer or inquiry form,",
          "providing a recruitment form,",
          "enabling messages to be sent to the Administrator,",
          "enabling subscription to a newsletter or consent to marketing contact, if such functionality is available,",
          "enabling the downloading or display of information materials, if such materials are available,",
          "providing links to external communication channels, social media or materials of third parties.",
        ]),
      ],
    },
    {
      id: "conditions-of-use",
      heading: "Conditions for Using the Website",
      blocks: [
        p("The User is obliged to use the Website in accordance with:"),
        ul([
          "the law,",
          "the provisions of these Terms and Conditions,",
          "good practices,",
          "principles of social coexistence,",
          "the intended purpose of the Website.",
        ]),
        p("The User is obliged to refrain from actions that could:"),
        ul([
          "disrupt the operation of the Website,",
          "compromise the security of the Website,",
          "lead to unauthorised access to the Administrator's systems,",
          "introduce malicious software into the Website,",
          "infringe the rights of the Administrator or third parties,",
          "infringe copyrights, personal rights, trade secrets or personal data protection regulations.",
        ]),
        p(
          "It is prohibited to provide, via the Website, unlawful, offensive, vulgar or misleading content, content infringing the rights of third parties, containing spam, malicious software or content contrary to law.",
        ),
      ],
    },
    {
      id: "contact-and-offer-forms",
      heading: "Contact and Offer Forms",
      blocks: [
        p("Use of the forms available on the Website is voluntary."),
        p(
          "In order to submit a form, the User may be asked to provide data necessary to handle the inquiry, in particular:",
        ),
        ul([
          "first name and surname,",
          "company name,",
          "e-mail address,",
          "telephone number,",
          "message content,",
          "information about the type of service, product or cooperation to which the inquiry relates.",
        ]),
        p("The User is obliged to provide true and up-to-date data that does not infringe the rights of third parties."),
        p(
          "Submitting a form does not mean that an agreement has been concluded with the Administrator. The form is used to submit an inquiry, initiate communication or take steps prior to the possible conclusion of an agreement.",
        ),
        p(
          "The Administrator may contact the User in response to the submitted inquiry using the contact details provided in the form.",
        ),
      ],
    },
    {
      id: "recruitment-form",
      heading: "Recruitment Form",
      blocks: [
        p(
          "If the Website provides a recruitment form, the User may submit an application for a selected position or a cooperation inquiry.",
        ),
        p("As part of the recruitment form, the User may be asked to provide:"),
        ul([
          "first name and surname,",
          "e-mail address,",
          "telephone number,",
          "message,",
          "CV,",
          "cover letter or other recruitment documents.",
        ]),
        p(
          "Submitting a recruitment application does not guarantee an invitation to the recruitment process or employment. The Administrator reserves the right to contact only selected candidates.",
        ),
        p("The rules for processing candidates' data are set out in the “Privacy Policy”."),
      ],
    },
    {
      id: "newsletter",
      heading: "Newsletter and Commercial Information",
      blocks: [
        p(
          "If the Website provides newsletter functionality or the option to consent to marketing contact, the User may voluntarily consent to receiving information concerning the Administrator's activities, services, products, technologies, offers, cooperation, training or other commercial information.",
        ),
        p(
          "The User may withdraw consent to receive marketing information at any time by contacting the Administrator or using the unsubscribe mechanism, if such mechanism has been made available.",
        ),
        p("Withdrawal of consent does not affect the lawfulness of actions taken before the withdrawal."),
      ],
    },
    {
      id: "technical-requirements",
      heading: "Technical Requirements",
      blocks: [
        p("For proper use of the Website, the following are required:"),
        ul([
          "an end device with Internet access,",
          "an up-to-date web browser,",
          "JavaScript enabled,",
          "cookies enabled to the extent required for the proper operation of the Website,",
          "an active e-mail account, if the User wishes to use forms or e-mail contact.",
        ]),
        p(
          "The Administrator recommends using current versions of popular web browsers and applying up-to-date security measures on the end device.",
        ),
      ],
    },
    {
      id: "availability",
      heading: "Website Availability",
      blocks: [
        p(
          "The Administrator takes measures to ensure the proper and continuous operation of the Website; however, it does not guarantee that the Website will be available without interruptions, errors or disruptions.",
        ),
        p("Access to the Website may be temporarily restricted, in particular due to:"),
        ul([
          "technical works,",
          "updates,",
          "failures,",
          "actions of external providers,",
          "cyberattacks,",
          "force majeure,",
          "problems on the part of the User or Internet service provider.",
        ]),
        p(
          "The Administrator may at any time modify the Website's functionalities, content, graphic layout, forms, subpages and the scope of information available on the Website.",
        ),
      ],
    },
    {
      id: "published-content",
      heading: "Content Published on the Website",
      blocks: [
        p("The content published on the Website is informational, promotional and general in nature."),
        p(
          "The Administrator makes efforts to ensure that the information published on the Website is current and reliable; however, it does not guarantee that every item of information will be complete, current or adequate to the User's individual situation.",
        ),
        p(
          "In particular, information concerning services, equipment, technologies, parameters, scope of cooperation, prices, availability or deadlines may require individual confirmation by the Administrator.",
        ),
        p(
          "If the User is interested in a specific service, equipment, training, cooperation or other solution, the User should contact the Administrator in order to obtain individual information.",
        ),
      ],
    },
    {
      id: "copyright",
      heading: "Copyright and Intellectual Property",
      blocks: [
        p(
          "All content, graphics, photographs, logos, names, designs, Website layout, visual elements, texts, promotional materials, technical materials and other elements of the Website are the property of the Administrator or have been used by the Administrator on the basis of appropriate authorisations.",
        ),
        p(
          "Copying, distributing, modifying, publishing, using commercially or making available the content of the Website without the Administrator's consent is prohibited, unless mandatory provisions of law provide otherwise.",
        ),
        p(
          "Use of the Website does not grant the User any licence to use the Administrator's trademarks, logos, trade names, graphic materials, photographs, descriptions, documentation or other intellectual property elements.",
        ),
      ],
    },
    {
      id: "external-links",
      heading: "External Links",
      blocks: [
        p(
          "The Website may contain links to websites, platforms, social media, maps, video materials or other resources of third parties.",
        ),
        p(
          "The Administrator is not responsible for the content, privacy policies, terms and conditions, security or operation of websites or services operated by third parties.",
        ),
        p("Accessing an external website is done at the User's own risk."),
      ],
    },
    {
      id: "liability",
      heading: "Administrator's Liability",
      blocks: [
        p("The Administrator shall not be liable for:"),
        ul([
          "the consequences of using the Website in a manner contrary to law or these Terms and Conditions,",
          "the provision of false or outdated data by the User,",
          "interruptions in the operation of the Website resulting from technical reasons or reasons beyond the Administrator's control,",
          "damage resulting from malicious software, cyberattacks or actions of third parties, provided that the Administrator applied appropriate security measures,",
          "the content of external websites to which links on the Website lead,",
          "business decisions made by the User solely on the basis of general information published on the Website.",
        ]),
        p(
          "Limitations of liability do not infringe mandatory consumer rights or provisions of law that cannot be excluded or limited.",
        ),
      ],
    },
    {
      id: "complaints",
      heading: "Complaints Concerning the Operation of the Website",
      blocks: [
        p(
          "The User may submit complaints concerning the operation of the Website, in particular technical problems, problems with forms or improper functioning of functionalities.",
        ),
        p("Complaints should be sent to the following e-mail address:"),
        p("biuro@dcs-drone.com"),
        p("A complaint notification should include:"),
        ul([
          "the User's first name and surname or name,",
          "contact e-mail address,",
          "description of the problem,",
          "date on which the problem occurred,",
          "optionally, screenshots or other information enabling verification of the problem.",
        ]),
        p(
          "The Administrator shall consider the complaint within 14 days from the date of its receipt, unless the nature of the matter requires a longer period. In such a case, the Administrator shall inform the User of the expected response date.",
        ),
      ],
    },
    {
      id: "personal-data-protection",
      heading: "Personal Data Protection",
      blocks: [
        p(
          "The rules for processing Users' personal data and using cookies are set out in the Privacy and Cookies Policy available on the Website.",
        ),
        p("The User should read the Privacy Policy before using the forms available on the Website."),
      ],
    },
    {
      id: "termination",
      heading: "Termination of Use of Electronic Services",
      blocks: [
        p("The User may stop using the Website at any time by leaving the website."),
        p(
          "In the case of services consisting of submitting a form, the electronic service ends upon submission of the form or interruption of its completion by the User.",
        ),
        p(
          "In the case of a newsletter or marketing consent, the User may stop using this service by withdrawing consent or unsubscribing from the mailing list, if such functionality is available.",
        ),
      ],
    },
    {
      id: "amendments",
      heading: "Amendments to the Terms and Conditions",
      blocks: [
        p("The Administrator may amend the Terms and Conditions in the event of:"),
        ul([
          "changes in legal regulations,",
          "changes to the scope or functionality of the Website,",
          "implementation of new forms, subpages or electronic services,",
          "changes to the Administrator's details,",
          "the need to clarify the rules for using the Website,",
          "organisational, technical or business changes.",
        ]),
        p("The current version of the Terms and Conditions is available on the Website."),
        p(
          "Amendments to the Terms and Conditions enter into force on the date of their publication on the Website, unless another date is specified in the Terms and Conditions.",
        ),
      ],
    },
    {
      id: "governing-law",
      heading: "Governing Law",
      blocks: [
        p("These Terms and Conditions shall be governed by Polish law."),
        p(
          "The provisions of these Terms and Conditions do not limit consumer rights or other rights of Users resulting from mandatory provisions of law.",
        ),
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      blocks: [
        p(
          "In matters concerning these Terms and Conditions or the operation of the Website, the Administrator may be contacted at:",
        ),
        address([COMPANY, STREET, CORRESPONDENCE, EMAIL]),
      ],
    },
  ],
};

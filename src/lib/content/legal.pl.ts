/**
 * Polish legal documents – the client's own originals from incoming/scrape/pl/privacy.txt and terms.txt, kept
 * verbatim (only typography: the hyphen between a legal basis / defined term and its description became an en dash).
 * Section ids match legal.en.ts so anchors and the table of contents are the same in both languages.
 * The scrape showed e-mail addresses as "[email protected]" (Cloudflare obfuscation); each one is biuro@dcs-drone.com.
 */
import type { LegalDocument } from "./legal";
import { p, h, ul, address } from "./legal.en";

const COMPANY = "DCS - Drone Cleaning Solutions Sp. z o.o.";
const STREET = "ul. Pucka 35, 81-306 Gdynia";
const CORRESPONDENCE = "Adres do korespondencji: ul. Kwidzyńska 15, 81-306 Gdynia";
const EMAIL = "E-mail: biuro@dcs-drone.com";

export const privacyPolicyPl: LegalDocument = {
  slug: "privacy",
  metaTitle: "Polityka Prywatności",
  metaDescription:
    "Niniejsza Polityka Prywatności i Cookies określa zasady przetwarzania danych osobowych oraz wykorzystywania plików cookies w ramach serwisu internetowego dostępnego pod adresem dcs-drone.com.",
  title: "Polityka Prywatności i Cookies",
  lede: "Serwisu dcs-drone.com",
  meta: "Administrator: DCS - Drone Cleaning Solutions Sp. z o.o.",
  sections: [
    {
      id: "general-provisions",
      heading: "Postanowienia ogólne",
      blocks: [
        p(
          "Niniejsza Polityka Prywatności i Cookies określa zasady przetwarzania danych osobowych oraz wykorzystywania plików cookies w ramach serwisu internetowego dostępnego pod adresem dcs-drone.com, dalej jako „Serwis”.",
        ),
        p(
          "Serwis służy w szczególności do prezentowania informacji o działalności DCS Drone Cleaning Solutions Sp. z o.o., usługach czyszczenia, mycia, dezynfekcji, inspekcji oraz rozwiązaniach technologicznych związanych z wykorzystaniem dronów i systemów czyszczących, w tym komunikacji dotyczącej Aeroglobal Cleaning Solutions.",
        ),
        p(
          "Korzystanie z Serwisu może wiązać się z przetwarzaniem danych osobowych użytkowników, w szczególności w przypadku korzystania z formularzy kontaktowych, formularzy ofertowych, formularzy rekrutacyjnych, korespondencji e-mail, narzędzi analitycznych oraz plików cookies.",
        ),
      ],
    },
    {
      id: "data-administrator",
      heading: "Administrator danych osobowych",
      blocks: [
        p("Administratorem danych osobowych jest:"),
        address([COMPANY, STREET, CORRESPONDENCE, "NIP: 5862427650", "KRS: 0001225754", EMAIL]),
        p(
          "W sprawach dotyczących ochrony danych osobowych można skontaktować się z Administratorem poprzez adres e-mail: biuro@dcs-drone.com lub pisemnie na adres siedziby Administratora.",
        ),
      ],
    },
    {
      id: "scope-of-data",
      heading: "Zakres danych, które możemy przetwarzać",
      blocks: [
        p("Administrator może przetwarzać w szczególności następujące kategorie danych:"),
        h("Dane identyfikacyjne:"),
        ul(["imię i nazwisko,", "nazwa firmy,", "stanowisko lub funkcja, jeżeli zostanie podana."]),
        h("Dane kontaktowe:"),
        ul(["adres e-mail,", "numer telefonu,", "adres korespondencyjny lub adres siedziby firmy, jeżeli zostanie podany."]),
        h("Dane dotyczące zapytania:"),
        ul([
          "treść wiadomości,",
          "rodzaj usługi lub produktu, którym zainteresowany jest użytkownik,",
          "informacje dotyczące obiektu, realizacji usługi, sprzedaży sprzętu, współpracy, franczyzy lub rekrutacji,",
          "inne informacje podane dobrowolnie przez użytkownika.",
        ]),
        h("Dane techniczne i eksploatacyjne:"),
        ul([
          "adres IP,",
          "identyfikatory cookies,",
          "typ urządzenia,",
          "typ i wersja przeglądarki,",
          "system operacyjny,",
          "data i godzina wizyty,",
          "podstrony odwiedzone w Serwisie,",
          "źródło wejścia na stronę,",
          "dane dotyczące błędów technicznych lub bezpieczeństwa.",
        ]),
        h("Dane rekrutacyjne:"),
        ul([
          "dane zawarte w CV,",
          "dane zawarte w liście motywacyjnym lub wiadomości rekrutacyjnej,",
          "informacje o doświadczeniu zawodowym, wykształceniu, kwalifikacjach i umiejętnościach,",
          "inne dane podane dobrowolnie przez kandydata.",
        ]),
        p(
          "Administrator nie wymaga podawania szczególnych kategorii danych osobowych, takich jak dane dotyczące zdrowia, poglądów politycznych, przekonań religijnych, orientacji seksualnej, pochodzenia rasowego lub etnicznego. Jeżeli użytkownik przekaże takie dane z własnej inicjatywy, będą one przetwarzane wyłącznie w zakresie niezbędnym do obsługi danej sprawy lub na podstawie wyraźnej zgody, jeżeli będzie to wymagane.",
        ),
      ],
    },
    {
      id: "purposes-and-legal-bases",
      heading: "Cele i podstawy prawne przetwarzania danych",
      blocks: [
        p("Administrator przetwarza dane osobowe w następujących celach:"),
        h("4.1. Obsługa formularza kontaktowego i korespondencji"),
        p(
          "Dane są przetwarzane w celu udzielenia odpowiedzi na wiadomość, obsługi zapytania, prowadzenia korespondencji oraz kontaktu z użytkownikiem.",
        ),
        p("Podstawa prawna:"),
        ul([
          "art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes Administratora polegający na komunikacji z użytkownikami Serwisu,",
          "art. 6 ust. 1 lit. b RODO – podjęcie działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy, jeżeli kontakt zmierza do zawarcia umowy.",
        ]),
        h("4.2. Obsługa zapytań ofertowych"),
        p(
          "Dane są przetwarzane w celu przygotowania odpowiedzi na zapytanie, przedstawienia informacji handlowych, przygotowania indywidualnej oferty, omówienia zakresu usługi, sprzedaży sprzętu, współpracy, szkolenia lub innego rozwiązania oferowanego przez Administratora.",
        ),
        p("Podstawa prawna:"),
        ul([
          "art. 6 ust. 1 lit. b RODO – działania przed zawarciem umowy lub wykonanie umowy,",
          "art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes Administratora polegający na obsłudze zapytań ofertowych i prowadzeniu komunikacji biznesowej.",
        ]),
        h("4.3. Realizacja umów i rozliczeń"),
        p(
          "Jeżeli kontakt poprzez Serwis doprowadzi do zawarcia umowy, dane mogą być przetwarzane w celu realizacji umowy, obsługi zamówienia, wykonania usługi, sprzedaży sprzętu, wystawienia dokumentów księgowych, obsługi płatności, dostawy, odbioru, reklamacji, gwarancji lub serwisu.",
        ),
        p("Podstawa prawna:"),
        ul([
          "art. 6 ust. 1 lit. b RODO – wykonanie umowy,",
          "art. 6 ust. 1 lit. c RODO – wypełnienie obowiązków prawnych ciążących na Administratorze, w szczególności obowiązków księgowych, podatkowych i archiwizacyjnych,",
          "art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes Administratora polegający na dochodzeniu lub obronie przed roszczeniami.",
        ]),
        h("4.4. Procesy rekrutacyjne"),
        p(
          "Dane kandydatów są przetwarzane w celu przeprowadzenia procesu rekrutacji na wybrane stanowisko, kontaktu z kandydatem, oceny kwalifikacji oraz podjęcia decyzji rekrutacyjnej.",
        ),
        p("Podstawa prawna:"),
        ul([
          "art. 6 ust. 1 lit. c RODO – wykonanie obowiązków wynikających z przepisów prawa pracy w zakresie danych wymaganych przepisami,",
          "art. 6 ust. 1 lit. a RODO – zgoda kandydata w zakresie danych podanych dobrowolnie, wykraczających poza katalog wymagany przepisami prawa,",
          "art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes Administratora polegający na ustaleniu, dochodzeniu lub obronie przed ewentualnymi roszczeniami,",
          "art. 9 ust. 2 lit. a RODO – wyraźna zgoda kandydata, jeżeli kandydat dobrowolnie poda szczególne kategorie danych osobowych.",
        ]),
        p(
          "W przypadku wyrażenia zgody na udział w przyszłych rekrutacjach dane mogą być przechowywane także na potrzeby kolejnych procesów rekrutacyjnych.",
        ),
        h("4.5. Marketing własnych usług i kontakt handlowy"),
        p(
          "Dane mogą być przetwarzane w celu przekazywania informacji o usługach, produktach, rozwiązaniach technologicznych, współpracy, szkoleniach lub innych działaniach Administratora, jeżeli użytkownik wyraził zgodę na taki kontakt lub jeżeli kontakt odbywa się w ramach dopuszczalnego prawnie uzasadnionego interesu Administratora.",
        ),
        p("Podstawa prawna:"),
        ul([
          "art. 6 ust. 1 lit. a RODO – zgoda użytkownika,",
          "art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes Administratora polegający na prowadzeniu marketingu własnych produktów i usług.",
        ]),
        p(
          "Wysyłanie informacji handlowych drogą elektroniczną lub prowadzenie marketingu telefonicznego odbywa się z uwzględnieniem wymaganych zgód wynikających z właściwych przepisów prawa, w szczególności przepisów dotyczących komunikacji elektronicznej.",
        ),
        h("4.6. Analityka i statystyka Serwisu"),
        p(
          "Dane mogą być przetwarzane w celu prowadzenia statystyk, analizy ruchu w Serwisie, badania sposobu korzystania ze strony, optymalizacji działania Serwisu, poprawy jego funkcjonalności, mierzenia skuteczności treści oraz zapewnienia bezpieczeństwa.",
        ),
        p("Podstawa prawna:"),
        ul([
          "art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes Administratora w zakresie niezbędnych danych technicznych i bezpieczeństwa,",
          "art. 6 ust. 1 lit. a RODO – zgoda użytkownika w przypadku analitycznych lub marketingowych plików cookies oraz podobnych technologii wymagających zgody.",
        ]),
        h("4.7. Zapewnienie bezpieczeństwa Serwisu"),
        p(
          "Dane techniczne, w tym logi serwera, mogą być przetwarzane w celu zapewnienia bezpieczeństwa Serwisu, wykrywania nadużyć, błędów, nieautoryzowanego dostępu, cyberataków oraz ochrony infrastruktury informatycznej.",
        ),
        p("Podstawa prawna:"),
        ul([
          "art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes Administratora polegający na zapewnieniu bezpieczeństwa Serwisu, ochronie danych oraz przeciwdziałaniu nadużyciom.",
        ]),
        h("4.8. Dochodzenie roszczeń i obrona przed roszczeniami"),
        p(
          "Dane mogą być przetwarzane w celu ustalenia, dochodzenia lub obrony przed roszczeniami związanymi z korzystaniem z Serwisu, prowadzoną korespondencją, zapytaniami, zawartymi umowami lub innymi relacjami z Administratorem.",
        ),
        p("Podstawa prawna:"),
        ul(["art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes Administratora polegający na ochronie jego praw."]),
      ],
    },
    {
      id: "voluntary-provision",
      heading: "Dobrowolność podania danych",
      blocks: [
        p("Podanie danych osobowych jest dobrowolne, jednak w określonych przypadkach może być niezbędne do:"),
        ul([
          "wysłania formularza kontaktowego,",
          "uzyskania odpowiedzi na zapytanie,",
          "przygotowania oferty,",
          "udziału w rekrutacji,",
          "prowadzenia dalszej korespondencji,",
          "zawarcia lub wykonania umowy.",
        ]),
        p(
          "Brak podania wymaganych danych może uniemożliwić obsługę zapytania, przygotowanie oferty, kontakt zwrotny lub udział w procesie rekrutacyjnym.",
        ),
      ],
    },
    {
      id: "retention-period",
      heading: "Okres przechowywania danych",
      blocks: [
        p(
          "Dane osobowe będą przechowywane przez okres niezbędny do realizacji celu, w którym zostały zebrane, a następnie przez okres wymagany przepisami prawa lub uzasadniony ochroną praw Administratora.",
        ),
        p("W szczególności:"),
        ul([
          "Dane z formularzy kontaktowych i korespondencji są przechowywane przez okres niezbędny do obsługi zapytania i prowadzenia dalszej korespondencji, a następnie przez okres przedawnienia ewentualnych roszczeń.",
          "Dane związane z zapytaniami ofertowymi są przechowywane przez okres prowadzenia rozmów handlowych, przygotowywania oferty oraz przez okres przedawnienia ewentualnych roszczeń.",
          "Dane związane z zawartymi umowami są przechowywane przez okres realizacji umowy, a następnie przez okres wymagany przepisami podatkowymi, rachunkowymi i archiwizacyjnymi oraz przez okres przedawnienia ewentualnych roszczeń.",
          "Dane rekrutacyjne są przechowywane przez czas trwania procesu rekrutacyjnego, a w przypadku wyrażenia zgody na udział w przyszłych rekrutacjach – przez okres 12 miesięcy lub do momentu cofnięcia zgody.",
          "Dane przetwarzane na podstawie zgody są przechowywane do czasu cofnięcia zgody, chyba że istnieje inna podstawa prawna dalszego przetwarzania.",
          "Logi techniczne mogą być przechowywane przez okres niezbędny do zapewnienia bezpieczeństwa i prawidłowego działania Serwisu, a następnie przez okres uzasadniony ochroną przed roszczeniami lub analizą incydentów bezpieczeństwa.",
        ]),
      ],
    },
    {
      id: "data-recipients",
      heading: "Odbiorcy danych",
      blocks: [
        p(
          "Dane osobowe mogą być przekazywane podmiotom, które wspierają Administratora w prowadzeniu Serwisu i działalności gospodarczej, w szczególności:",
        ),
        ul([
          "dostawcom hostingu,",
          "dostawcom usług IT,",
          "dostawcom poczty elektronicznej,",
          "dostawcom systemów formularzy kontaktowych,",
          "dostawcom narzędzi analitycznych i statystycznych,",
          "dostawcom usług marketingowych, jeżeli takie narzędzia są stosowane,",
          "kancelariom prawnym,",
          "biurom rachunkowym i doradcom podatkowym,",
          "podmiotom świadczącym usługi księgowe, administracyjne lub techniczne,",
          "firmom kurierskim, logistycznym lub serwisowym, jeżeli jest to konieczne do realizacji umowy,",
          "bankom lub operatorom płatności, jeżeli dochodzi do rozliczenia transakcji,",
          "organom publicznym, jeżeli obowiązek przekazania danych wynika z przepisów prawa.",
        ]),
        p(
          "Podmioty przetwarzające dane na zlecenie Administratora działają na podstawie odpowiednich umów powierzenia przetwarzania danych osobowych i są zobowiązane do zapewnienia odpowiedniego poziomu bezpieczeństwa.",
        ),
      ],
    },
    {
      id: "transfer-outside-eea",
      heading: "Przekazywanie danych poza Europejski Obszar Gospodarczy",
      blocks: [
        p("Co do zasady Administrator dąży do przetwarzania danych na terenie Europejskiego Obszaru Gospodarczego."),
        p(
          "W związku z korzystaniem z narzędzi dostarczanych przez globalnych dostawców technologicznych, w szczególności narzędzi analitycznych, statystycznych, hostingowych, pocztowych lub marketingowych, dane mogą być przekazywane poza Europejski Obszar Gospodarczy, w tym do Stanów Zjednoczonych.",
        ),
        p("W takim przypadku przekazywanie danych odbywa się z zastosowaniem odpowiednich mechanizmów prawnych, w szczególności:"),
        ul([
          "decyzji Komisji Europejskiej stwierdzającej odpowiedni stopień ochrony danych,",
          "EU–U.S. Data Privacy Framework, jeżeli dany odbiorca danych uczestniczy w tym programie,",
          "standardowych klauzul umownych zatwierdzonych przez Komisję Europejską,",
          "innych zabezpieczeń przewidzianych przez przepisy RODO.",
        ]),
      ],
    },
    {
      id: "google-analytics",
      heading: "Google Analytics i narzędzia analityczne",
      blocks: [
        p(
          "Serwis może wykorzystywać narzędzie Google Analytics dostarczane przez Google Ireland Limited w celu prowadzenia statystyk oraz analizy sposobu korzystania z Serwisu.",
        ),
        p("Google Analytics może gromadzić informacje dotyczące korzystania z Serwisu, w szczególności:"),
        ul([
          "odwiedzane podstrony,",
          "czas spędzony w Serwisie,",
          "źródło wejścia na stronę,",
          "przybliżoną lokalizację,",
          "dane techniczne urządzenia i przeglądarki,",
          "zdarzenia użytkownika w Serwisie.",
        ]),
        p(
          "Analityczne pliki cookies oraz podobne technologie są uruchamiane wyłącznie po wyrażeniu przez użytkownika zgody, jeżeli zgodnie z przepisami taka zgoda jest wymagana.",
        ),
        p(
          "Użytkownik może zarządzać zgodami na cookies za pomocą panelu ustawień prywatności dostępnego w Serwisie, a także poprzez ustawienia swojej przeglądarki internetowej.",
        ),
      ],
    },
    {
      id: "cookies",
      heading: "Pliki cookies",
      blocks: [
        p("Serwis wykorzystuje pliki cookies, czyli niewielkie pliki tekstowe zapisywane na urządzeniu końcowym użytkownika."),
        p("Pliki cookies mogą być wykorzystywane w następujących celach:"),
        h("10.1. Cookies niezbędne"),
        p(
          "Są wymagane do prawidłowego działania Serwisu, zapewnienia bezpieczeństwa, obsługi formularzy, zapamiętania podstawowych ustawień oraz zapewnienia stabilności technicznej strony.",
        ),
        p(
          "Te pliki cookies mogą być stosowane bez odrębnej zgody użytkownika, jeżeli są niezbędne do świadczenia usługi żądanej przez użytkownika lub zapewnienia transmisji komunikatu.",
        ),
        h("10.2. Cookies analityczne"),
        p(
          "Służą do mierzenia ruchu w Serwisie, tworzenia statystyk, analizowania sposobu korzystania ze strony oraz ulepszania jej działania.",
        ),
        p(
          "Te pliki cookies są wykorzystywane wyłącznie po wyrażeniu zgody przez użytkownika, jeżeli zgodnie z przepisami taka zgoda jest wymagana.",
        ),
        h("10.3. Cookies marketingowe"),
        p("Mogą służyć do mierzenia skuteczności działań marketingowych, dopasowania treści lub prowadzenia kampanii reklamowych."),
        p("Te pliki cookies są wykorzystywane wyłącznie po wyrażeniu zgody przez użytkownika."),
        h("10.4. Cookies funkcjonalne"),
        p(
          "Mogą służyć do zapamiętywania preferencji użytkownika, takich jak ustawienia językowe, wybory w banerze cookies lub inne preferencje dotyczące działania Serwisu.",
        ),
      ],
    },
    {
      id: "managing-cookies",
      heading: "Zarządzanie cookies",
      blocks: [
        p("Użytkownik może zarządzać plikami cookies poprzez:"),
        ul([
          "panel ustawień cookies dostępny w Serwisie,",
          "ustawienia przeglądarki internetowej,",
          "usunięcie cookies zapisanych na urządzeniu,",
          "blokadę określonych kategorii cookies,",
          "instalację dodatków blokujących narzędzia analityczne.",
        ]),
        p("Ograniczenie lub wyłączenie cookies niezbędnych może wpływać na prawidłowe działanie Serwisu."),
        p("Cofnięcie zgody na cookies nie wpływa na zgodność z prawem przetwarzania, którego dokonano przed jej cofnięciem."),
      ],
    },
    {
      id: "user-rights",
      heading: "Prawa użytkownika",
      blocks: [
        p("Osobie, której dane dotyczą, przysługuje prawo do:"),
        ul([
          "dostępu do danych osobowych,",
          "uzyskania kopii danych,",
          "sprostowania danych,",
          "usunięcia danych,",
          "ograniczenia przetwarzania,",
          "przenoszenia danych,",
          "wniesienia sprzeciwu wobec przetwarzania danych,",
          "cofnięcia zgody w dowolnym momencie, jeżeli przetwarzanie odbywa się na podstawie zgody,",
          "wniesienia skargi do organu nadzorczego.",
        ]),
        p("W Polsce organem nadzorczym jest Prezes Urzędu Ochrony Danych Osobowych."),
        p("W celu realizacji swoich praw można skontaktować się z Administratorem pod adresem e-mail: biuro@dcs-drone.com."),
      ],
    },
    {
      id: "right-to-object",
      heading: "Prawo do sprzeciwu",
      blocks: [
        p(
          "Użytkownik ma prawo wnieść sprzeciw wobec przetwarzania danych osobowych, jeżeli podstawą przetwarzania jest prawnie uzasadniony interes Administratora.",
        ),
        p(
          "W przypadku wniesienia sprzeciwu Administrator zaprzestanie przetwarzania danych w danym celu, chyba że istnieją ważne prawnie uzasadnione podstawy do dalszego przetwarzania, nadrzędne wobec interesów, praw i wolności użytkownika, lub podstawy do ustalenia, dochodzenia lub obrony roszczeń.",
        ),
        p(
          "Jeżeli dane są przetwarzane na potrzeby marketingu bezpośredniego, użytkownik może wnieść sprzeciw w każdym czasie, a Administrator zaprzestanie przetwarzania danych w tym celu.",
        ),
      ],
    },
    {
      id: "automated-decision-making",
      heading: "Zautomatyzowane podejmowanie decyzji i profilowanie",
      blocks: [
        p(
          "Dane osobowe użytkowników nie są wykorzystywane do podejmowania wobec nich decyzji opartych wyłącznie na zautomatyzowanym przetwarzaniu, które wywoływałyby wobec użytkownika skutki prawne lub w podobny sposób istotnie na niego wpływały.",
        ),
        p(
          "Dane mogą być wykorzystywane do podstawowej analizy statystycznej i technicznej działania Serwisu, jednak taka analiza nie prowadzi do automatycznego podejmowania decyzji wobec użytkownika.",
        ),
      ],
    },
    {
      id: "data-security",
      heading: "Bezpieczeństwo danych",
      blocks: [
        p("Administrator stosuje odpowiednie środki techniczne i organizacyjne mające na celu ochronę danych osobowych przed:"),
        ul([
          "nieuprawnionym dostępem,",
          "utratą,",
          "zniszczeniem,",
          "przypadkową zmianą,",
          "nieuprawnionym ujawnieniem,",
          "niezgodnym z prawem przetwarzaniem.",
        ]),
        p(
          "Środki te obejmują w szczególności zabezpieczenia techniczne Serwisu, kontrolę dostępu, ograniczenie dostępu do danych wyłącznie do osób upoważnionych oraz współpracę z dostawcami usług zapewniającymi odpowiedni poziom bezpieczeństwa.",
        ),
      ],
    },
    {
      id: "childrens-data",
      heading: "Dane dzieci",
      blocks: [
        p("Serwis nie jest kierowany do dzieci. Administrator nie zamierza świadomie pozyskiwać danych osobowych dzieci za pośrednictwem Serwisu."),
        p(
          "Jeżeli Administrator uzyska informację, że dane dziecka zostały przekazane bez wymaganej zgody przedstawiciela ustawowego, podejmie odpowiednie działania w celu ich usunięcia lub ograniczenia przetwarzania.",
        ),
      ],
    },
    {
      id: "external-links",
      heading: "Linki do stron zewnętrznych",
      blocks: [
        p("Serwis może zawierać linki do stron internetowych, mediów społecznościowych, materiałów zewnętrznych lub usług podmiotów trzecich."),
        p(
          "Administrator nie ponosi odpowiedzialności za zasady prywatności obowiązujące na stronach zewnętrznych. Po przejściu na stronę podmiotu trzeciego użytkownik powinien zapoznać się z jej polityką prywatności oraz zasadami cookies.",
        ),
      ],
    },
    {
      id: "amendments",
      heading: "Zmiany Polityki Prywatności",
      blocks: [
        p("Administrator może zmienić niniejszą Politykę Prywatności w przypadku:"),
        ul([
          "zmiany przepisów prawa,",
          "zmiany zakresu działania Serwisu,",
          "wdrożenia nowych funkcjonalności,",
          "zmiany stosowanych narzędzi analitycznych, marketingowych lub technicznych,",
          "konieczności doprecyzowania zasad przetwarzania danych.",
        ]),
        p("Aktualna wersja Polityki Prywatności jest dostępna w Serwisie."),
      ],
    },
    {
      id: "contact",
      heading: "Kontakt",
      blocks: [
        p("W sprawach dotyczących Polityki Prywatności, cookies lub przetwarzania danych osobowych można skontaktować się z Administratorem:"),
        address([COMPANY, STREET, CORRESPONDENCE, EMAIL]),
      ],
    },
  ],
};

export const termsAndConditionsPl: LegalDocument = {
  slug: "terms",
  metaTitle: "Regulamin",
  metaDescription: "Niniejszy Regulamin określa zasady korzystania z serwisu internetowego dostępnego pod adresem dcs-drone.com.",
  title: "Regulamin Serwisu Internetowego",
  lede: "dcs-drone.com",
  meta: "Właściciel Serwisu: DCS - Drone Cleaning Solutions Sp. z o.o.",
  links: {
    "Polityka Prywatności i Cookies": "/privacy",
    "Polityką Prywatności": "/privacy",
    "Polityka Prywatności": "/privacy",
  },
  sections: [
    {
      id: "general-provisions",
      heading: "Postanowienia ogólne",
      blocks: [
        p("Niniejszy Regulamin określa zasady korzystania z serwisu internetowego dostępnego pod adresem dcs-drone.com, dalej jako „Serwis”."),
        p("Właścicielem i administratorem Serwisu jest:"),
        address([COMPANY, STREET, CORRESPONDENCE, "NIP: 5862427650", "KRS: 0001225754", EMAIL]),
        p(
          "Administrator prowadzi Serwis w celu prezentowania informacji o swojej działalności, usługach, technologiach oraz rozwiązaniach związanych z wykorzystaniem dronów i systemów czyszczących, w tym z obszarem Aeroglobal Cleaning Solutions.",
        ),
        p(
          "Korzystanie z Serwisu jest dobrowolne i bezpłatne, z zastrzeżeniem kosztów transmisji danych wynikających z umowy użytkownika z dostawcą Internetu.",
        ),
      ],
    },
    {
      id: "definitions",
      heading: "Definicje",
      blocks: [
        p("Na potrzeby niniejszego Regulaminu poniższe pojęcia oznaczają:"),
        ul([
          "Administrator – DCS - Drone Cleaning Solutions Sp. z o.o. z siedzibą w Gdyni.",
          "Serwis – strona internetowa dostępna pod adresem dcs-drone.com oraz jej podstrony.",
          "Użytkownik – każda osoba fizyczna, osoba prawna lub jednostka organizacyjna korzystająca z Serwisu.",
          "Formularz kontaktowy – funkcjonalność Serwisu umożliwiająca przesłanie wiadomości do Administratora.",
          "Formularz ofertowy – funkcjonalność Serwisu umożliwiająca przesłanie zapytania dotyczącego usług, produktów, sprzętu, współpracy lub innych rozwiązań oferowanych przez Administratora.",
          "Formularz rekrutacyjny – funkcjonalność Serwisu umożliwiająca przesłanie aplikacji rekrutacyjnej.",
          "Usługi elektroniczne – usługi świadczone drogą elektroniczną przez Administratora za pośrednictwem Serwisu, w szczególności udostępnianie treści, formularzy oraz funkcjonalności kontaktowych.",
          "Regulamin – niniejszy dokument określający zasady korzystania z Serwisu.",
        ]),
      ],
    },
    {
      id: "scope-of-the-website",
      heading: "Zakres działania Serwisu",
      blocks: [
        p("Serwis może zawierać w szczególności informacje dotyczące:"),
        ul([
          "działalności Administratora,",
          "usług czyszczenia i mycia z wykorzystaniem dronów,",
          "usług dezynfekcji, impregnacji, inspekcji lub dokumentacji technicznej,",
          "sprzedaży lub prezentacji rozwiązań technologicznych, sprzętu, zestawów myjących, systemów czyszczących lub akcesoriów,",
          "szkoleń, wsparcia technicznego, współpracy biznesowej lub franczyzy,",
          "rekrutacji,",
          "danych kontaktowych Administratora,",
          "materiałów informacyjnych, zdjęć, grafik, opisów technologii oraz treści marketingowych.",
        ]),
        p(
          "Informacje zamieszczone w Serwisie mają charakter informacyjny i promocyjny. Nie stanowią oferty w rozumieniu Kodeksu cywilnego, chyba że z danej treści wyraźnie wynika inaczej.",
        ),
        p(
          "Indywidualne warunki współpracy, sprzedaży, realizacji usług, dostawy sprzętu, płatności, gwarancji, serwisu, odbioru lub odpowiedzialności są ustalane każdorazowo w odrębnej ofercie, umowie, zamówieniu, regulaminie szczególnym lub innym dokumencie uzgodnionym z klientem.",
        ),
      ],
    },
    {
      id: "electronic-services",
      heading: "Rodzaje usług świadczonych drogą elektroniczną",
      blocks: [
        p("Za pośrednictwem Serwisu Administrator może świadczyć następujące usługi elektroniczne:"),
        ul([
          "udostępnianie treści informacyjnych dotyczących działalności Administratora,",
          "umożliwienie przeglądania podstron Serwisu,",
          "udostępnienie formularza kontaktowego,",
          "udostępnienie formularza ofertowego lub zapytaniowego,",
          "udostępnienie formularza rekrutacyjnego,",
          "umożliwienie przesłania wiadomości do Administratora,",
          "umożliwienie zapisania się do newslettera lub wyrażenia zgody na kontakt marketingowy, jeżeli taka funkcjonalność jest dostępna,",
          "umożliwienie pobrania lub wyświetlenia materiałów informacyjnych, jeżeli takie materiały są dostępne,",
          "udostępnianie linków do zewnętrznych kanałów komunikacji, mediów społecznościowych lub materiałów podmiotów trzecich.",
        ]),
      ],
    },
    {
      id: "conditions-of-use",
      heading: "Warunki korzystania z Serwisu",
      blocks: [
        p("Użytkownik zobowiązany jest korzystać z Serwisu zgodnie z:"),
        ul(["przepisami prawa,", "postanowieniami Regulaminu,", "dobrymi obyczajami,", "zasadami współżycia społecznego,", "przeznaczeniem Serwisu."]),
        p("Użytkownik zobowiązany jest do powstrzymania się od działań, które mogłyby:"),
        ul([
          "zakłócić działanie Serwisu,",
          "naruszyć bezpieczeństwo Serwisu,",
          "prowadzić do nieuprawnionego dostępu do systemów Administratora,",
          "wprowadzać do Serwisu złośliwe oprogramowanie,",
          "naruszać prawa Administratora lub osób trzecich,",
          "naruszać prawa autorskie, dobra osobiste, tajemnicę przedsiębiorstwa lub przepisy o ochronie danych osobowych.",
        ]),
        p(
          "Zabronione jest dostarczanie za pośrednictwem Serwisu treści bezprawnych, obraźliwych, wulgarnych, naruszających prawa osób trzecich, wprowadzających w błąd, zawierających spam, złośliwe oprogramowanie lub treści sprzeczne z prawem.",
        ),
      ],
    },
    {
      id: "contact-and-offer-forms",
      heading: "Formularze kontaktowe i ofertowe",
      blocks: [
        p("Korzystanie z formularzy dostępnych w Serwisie jest dobrowolne."),
        p("W celu wysłania formularza użytkownik może zostać poproszony o podanie danych niezbędnych do obsługi zapytania, w szczególności:"),
        ul([
          "imienia i nazwiska,",
          "nazwy firmy,",
          "adresu e-mail,",
          "numeru telefonu,",
          "treści wiadomości,",
          "informacji o rodzaju usługi, produktu lub współpracy, której dotyczy zapytanie.",
        ]),
        p("Użytkownik zobowiązany jest do podawania danych prawdziwych, aktualnych i nienaruszających praw osób trzecich."),
        p(
          "Wysłanie formularza nie oznacza zawarcia umowy z Administratorem. Formularz służy do przekazania zapytania, rozpoczęcia komunikacji lub podjęcia działań przed ewentualnym zawarciem umowy.",
        ),
        p("Administrator może skontaktować się z użytkownikiem w odpowiedzi na przesłane zapytanie, korzystając z danych kontaktowych podanych w formularzu."),
      ],
    },
    {
      id: "recruitment-form",
      heading: "Formularz rekrutacyjny",
      blocks: [
        p("Jeżeli Serwis udostępnia formularz rekrutacyjny, użytkownik może przesłać aplikację na wybrane stanowisko lub zgłoszenie dotyczące współpracy."),
        p("W ramach formularza rekrutacyjnego użytkownik może zostać poproszony o podanie:"),
        ul(["imienia i nazwiska,", "adresu e-mail,", "numeru telefonu,", "wiadomości,", "CV,", "listu motywacyjnego lub innych dokumentów rekrutacyjnych."]),
        p(
          "Przesłanie aplikacji rekrutacyjnej nie gwarantuje zaproszenia do procesu rekrutacyjnego ani zatrudnienia. Administrator zastrzega sobie prawo do kontaktu wyłącznie z wybranymi kandydatami.",
        ),
        p("Zasady przetwarzania danych kandydatów określa „Polityka Prywatności”."),
      ],
    },
    {
      id: "newsletter",
      heading: "Newsletter i informacje handlowe",
      blocks: [
        p(
          "Jeżeli Serwis udostępnia funkcjonalność newslettera lub zgody na kontakt marketingowy, użytkownik może dobrowolnie wyrazić zgodę na otrzymywanie informacji dotyczących działalności Administratora, usług, produktów, technologii, ofert, współpracy, szkoleń lub innych informacji handlowych.",
        ),
        p(
          "Użytkownik może w każdej chwili cofnąć zgodę na otrzymywanie informacji marketingowych, kontaktując się z Administratorem lub korzystając z mechanizmu rezygnacji, jeżeli został udostępniony.",
        ),
        p("Cofnięcie zgody nie wpływa na zgodność z prawem działań dokonanych przed jej cofnięciem."),
      ],
    },
    {
      id: "technical-requirements",
      heading: "Wymagania techniczne",
      blocks: [
        p("Do prawidłowego korzystania z Serwisu niezbędne jest:"),
        ul([
          "urządzenie końcowe z dostępem do Internetu,",
          "aktualna przeglądarka internetowa,",
          "włączona obsługa JavaScript,",
          "włączona obsługa plików cookies w zakresie wymaganym do prawidłowego działania Serwisu,",
          "aktywne konto poczty elektronicznej, jeżeli użytkownik chce skorzystać z formularzy lub kontaktu e-mail.",
        ]),
        p("Administrator rekomenduje korzystanie z aktualnych wersji popularnych przeglądarek internetowych oraz stosowanie aktualnych zabezpieczeń urządzenia końcowego."),
      ],
    },
    {
      id: "availability",
      heading: "Dostępność Serwisu",
      blocks: [
        p(
          "Administrator podejmuje działania w celu zapewnienia prawidłowego i ciągłego funkcjonowania Serwisu, jednak nie gwarantuje, że Serwis będzie dostępny bez przerw, błędów lub zakłóceń.",
        ),
        p("Dostęp do Serwisu może być czasowo ograniczony w szczególności z powodu:"),
        ul([
          "prac technicznych,",
          "aktualizacji,",
          "awarii,",
          "działań dostawców zewnętrznych,",
          "cyberataków,",
          "siły wyższej,",
          "problemów po stronie użytkownika lub dostawcy Internetu.",
        ]),
        p("Administrator może w dowolnym czasie modyfikować funkcjonalności Serwisu, treści, układ graficzny, formularze, podstrony oraz zakres informacji dostępnych w Serwisie."),
      ],
    },
    {
      id: "published-content",
      heading: "Treści zamieszczone w Serwisie",
      blocks: [
        p("Treści publikowane w Serwisie mają charakter informacyjny, promocyjny i ogólny."),
        p(
          "Administrator dokłada starań, aby informacje zamieszczone w Serwisie były aktualne i rzetelne, jednak nie gwarantuje, że każda informacja będzie kompletna, aktualna lub adekwatna do indywidualnej sytuacji użytkownika.",
        ),
        p(
          "W szczególności informacje dotyczące usług, sprzętu, technologii, parametrów, zakresu współpracy, cen, dostępności lub terminów mogą wymagać indywidualnego potwierdzenia przez Administratora.",
        ),
        p(
          "W przypadku zainteresowania konkretną usługą, sprzętem, szkoleniem, współpracą lub innym rozwiązaniem, użytkownik powinien skontaktować się z Administratorem w celu uzyskania indywidualnych informacji.",
        ),
      ],
    },
    {
      id: "copyright",
      heading: "Prawa autorskie i własność intelektualna",
      blocks: [
        p(
          "Wszelkie treści, grafiki, zdjęcia, logotypy, nazwy, projekty, układ Serwisu, elementy wizualne, teksty, materiały promocyjne, materiały techniczne oraz inne elementy Serwisu stanowią własność Administratora lub zostały wykorzystane przez Administratora na podstawie odpowiednich uprawnień.",
        ),
        p(
          "Kopiowanie, rozpowszechnianie, modyfikowanie, publikowanie, wykorzystywanie komercyjne lub udostępnianie treści Serwisu bez zgody Administratora jest zabronione, chyba że bezwzględnie obowiązujące przepisy prawa stanowią inaczej.",
        ),
        p(
          "Korzystanie z Serwisu nie oznacza udzielenia użytkownikowi jakiejkolwiek licencji do korzystania ze znaków towarowych, logotypów, nazw handlowych, materiałów graficznych, zdjęć, opisów, dokumentacji lub innych elementów własności intelektualnej Administratora.",
        ),
      ],
    },
    {
      id: "external-links",
      heading: "Linki zewnętrzne",
      blocks: [
        p("Serwis może zawierać linki do stron internetowych, platform, mediów społecznościowych, map, materiałów wideo lub innych zasobów podmiotów trzecich."),
        p(
          "Administrator nie ponosi odpowiedzialności za treści, polityki prywatności, regulaminy, bezpieczeństwo ani sposób działania stron internetowych lub usług prowadzonych przez podmioty trzecie.",
        ),
        p("Przejście na stronę zewnętrzną odbywa się na ryzyko użytkownika."),
      ],
    },
    {
      id: "liability",
      heading: "Odpowiedzialność Administratora",
      blocks: [
        p("Administrator nie ponosi odpowiedzialności za:"),
        ul([
          "skutki korzystania z Serwisu w sposób sprzeczny z prawem lub Regulaminem,",
          "podanie przez użytkownika nieprawdziwych lub nieaktualnych danych,",
          "przerwy w działaniu Serwisu wynikające z przyczyn technicznych lub niezależnych od Administratora,",
          "szkody wynikające z działania złośliwego oprogramowania, cyberataków lub działań osób trzecich, o ile Administrator stosował odpowiednie środki bezpieczeństwa,",
          "treści stron zewnętrznych, do których prowadzą linki z Serwisu,",
          "decyzje biznesowe podjęte przez użytkownika wyłącznie na podstawie ogólnych informacji opublikowanych w Serwisie.",
        ]),
        p("Ograniczenia odpowiedzialności nie naruszają bezwzględnie obowiązujących praw konsumentów ani przepisów, których nie można wyłączyć lub ograniczyć."),
      ],
    },
    {
      id: "complaints",
      heading: "Reklamacje dotyczące działania Serwisu",
      blocks: [
        p(
          "Użytkownik może zgłaszać reklamacje dotyczące działania Serwisu, w szczególności problemów technicznych, problemów z formularzami lub nieprawidłowego działania funkcjonalności.",
        ),
        p("Reklamacje należy kierować na adres e-mail: biuro@dcs-drone.com."),
        p("Zgłoszenie reklamacyjne powinno zawierać:"),
        ul([
          "imię i nazwisko lub nazwę użytkownika,",
          "adres e-mail do kontaktu,",
          "opis problemu,",
          "datę wystąpienia problemu,",
          "opcjonalnie zrzuty ekranu lub inne informacje umożliwiające weryfikację problemu.",
        ]),
        p(
          "Administrator rozpatrzy reklamację w terminie 14 dni od dnia jej otrzymania, chyba że charakter sprawy wymaga dłuższego czasu. W takim przypadku Administrator poinformuje użytkownika o przewidywanym terminie odpowiedzi.",
        ),
      ],
    },
    {
      id: "personal-data-protection",
      heading: "Ochrona danych osobowych",
      blocks: [
        p("Zasady przetwarzania danych osobowych użytkowników oraz wykorzystywania plików cookies określa Polityka Prywatności i Cookies dostępna w Serwisie."),
        p("Użytkownik powinien zapoznać się z Polityką Prywatności przed skorzystaniem z formularzy dostępnych w Serwisie."),
      ],
    },
    {
      id: "termination",
      heading: "Zakończenie korzystania z usług elektronicznych",
      blocks: [
        p("Użytkownik może w każdej chwili zakończyć korzystanie z Serwisu poprzez opuszczenie strony internetowej."),
        p(
          "W przypadku usług polegających na wysłaniu formularza, usługa elektroniczna zostaje zakończona z chwilą wysłania formularza albo przerwania jego wypełniania przez użytkownika.",
        ),
        p(
          "W przypadku newslettera lub zgody marketingowej użytkownik może zakończyć korzystanie z tej usługi poprzez cofnięcie zgody lub wypisanie się z listy mailingowej, jeżeli taka funkcjonalność jest dostępna.",
        ),
      ],
    },
    {
      id: "amendments",
      heading: "Zmiany Regulaminu",
      blocks: [
        p("Administrator może zmienić Regulamin w przypadku:"),
        ul([
          "zmiany przepisów prawa,",
          "zmiany zakresu lub funkcjonalności Serwisu,",
          "wdrożenia nowych formularzy, podstron lub usług elektronicznych,",
          "zmiany danych Administratora,",
          "konieczności doprecyzowania zasad korzystania z Serwisu,",
          "zmian organizacyjnych, technicznych lub biznesowych.",
        ]),
        p("Aktualna wersja Regulaminu jest dostępna w Serwisie."),
        p("Zmiany Regulaminu wchodzą w życie z dniem ich opublikowania w Serwisie, chyba że w treści Regulaminu wskazano inny termin."),
      ],
    },
    {
      id: "governing-law",
      heading: "Prawo właściwe",
      blocks: [
        p("Do Regulaminu stosuje się prawo polskie."),
        p("Postanowienia Regulaminu nie ograniczają praw konsumentów ani innych uprawnień użytkowników wynikających z bezwzględnie obowiązujących przepisów prawa."),
      ],
    },
    {
      id: "contact",
      heading: "Kontakt",
      blocks: [
        p("W sprawach dotyczących Regulaminu lub działania Serwisu można skontaktować się z Administratorem:"),
        address([COMPANY, STREET, CORRESPONDENCE, EMAIL]),
      ],
    },
  ],
};

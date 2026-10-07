/**
 * City data for the local SEO landing pages.
 *
 * Every field here is meant to be genuinely city-specific. The point of these
 * pages is to avoid the template-with-swapped-name pattern that Google filters
 * out as doorway pages — so if a field cannot be written truthfully and
 * distinctly for a given city, it should be left out rather than padded.
 *
 * `hasLocalCases` gates the case-study section: only cities where LeadOne has
 * real, named clients show one. No invented local proof.
 */

export type CityIndustry = {
  h: string;
  p: string;
};

export type CityFaq = {
  q: string;
  a: string;
};

export type City = {
  /** URL slug, without the `seo-` prefix handled by the route folder. */
  slug: string;
  /** Proper city name, correctly inflected for headings. */
  name: string;
  /** Adjectival/possessive form used in running copy, e.g. "göteborgska". */
  adjective: string;
  /** "ett Helsingborgsföretag" — the compound used in body copy. */
  companyNoun: string;
  region: string;
  /** Whether LeadOne has real named case studies in this city. */
  hasLocalCases: boolean;
  /** One-paragraph, honest description of the local search market. */
  marketIntro: string;
  /** Competitive reality for this specific city. */
  competition: string;
  /** Districts/areas that matter for geo-grid visibility. */
  districts: string[];
  /** Local search behaviour note unique to the city. */
  searchBehaviour: string;
  /** Industries that actually dominate this city's local search. */
  industries: CityIndustry[];
  /** City-specific FAQ entries appended to the shared ones. */
  faqs: CityFaq[];
  /** Why local SEO pays off specifically here — the business case. */
  whyItMatters: string;
  /** Honest note on what is realistic in this market, and in what timeframe. */
  expectations: string;
  /** Common local mistakes we see on profiles in this city. */
  mistakes: { h: string; p: string }[];
};

export const cities: City[] = [
  {
    slug: "stockholm",
    name: "Stockholm",
    adjective: "stockholmska",
    companyNoun: "ett Stockholmsföretag",
    region: "Stockholms län",
    hasLocalCases: false,
    marketIntro:
      "Stockholm är Sveriges mest konkurrensutsatta lokala sökmarknad. Med drygt 2,4 miljoner invånare i länet och en täthet av tjänsteföretag som inte finns någon annanstans i landet betyder det att nästan varje kommersiell sökterm redan har etablerade aktörer på de tre översta platserna. Samtidigt är staden så geografiskt utsträckt att ingen enskild aktör dominerar hela ytan — synligheten avgörs kvarter för kvarter.",
    competition:
      "I Stockholm konkurrerar du sällan med hela staden, utan med de företag som ligger inom några kilometer från sökaren. En frisör i Vasastan syns inte automatiskt i sökningar från Södermalm, även om avståndet är kort. Det gör att strategin här handlar mindre om att ranka på \"Stockholm\" och mer om att äga sitt faktiska upptagningsområde. Ett företag som försöker synas i hela staden på en gång rankar oftast ingenstans.",
    districts: ["Södermalm", "Norrmalm", "Vasastan", "Östermalm", "Kungsholmen", "Bromma", "Solna", "Nacka"],
    searchBehaviour:
      "Stockholmssökare använder \"nära mig\" mer än i övriga landet och har högre tolerans för att jämföra fem eller sex alternativ innan de bokar. Det gör recensionsvolymen ovanligt viktig: att ha 20 omdömen räcker sällan när konkurrenten har 200.",
    industries: [
      {
        h: "Restauranger och caféer",
        p: "Stockholm har landets hårdaste restaurangkonkurrens på Google. Här avgörs synligheten av bildkvalitet, uppdaterade menyer och ett jämnt inflöde av nya recensioner. En profil som inte rört sig på tre månader tappar mark snabbt.",
      },
      {
        h: "Kliniker och specialistvård",
        p: "Tandläkare, hudkliniker och privatvård konkurrerar med hundratals aktörer inom samma kommun. Förtroendesignaler väger tyngst: antal omdömen, hur färska de är, och hur väl behandlingssidorna svarar på det patienten faktiskt söker på.",
      },
      {
        h: "Hantverkare och akuttjänster",
        p: "Rörmokare, elektriker och låssmeder lever på akuta sökningar där sökaren ringer det första trovärdiga resultatet. Upptagningsområde, öppettider och telefonnummerets synlighet i profilen är det som avgör om samtalet kommer till dig.",
      },
      {
        h: "Konsult- och tjänsteföretag",
        p: "För B2B i Stockholm är den organiska sökningen ofta viktigare än kartan. Köparen söker på problem snarare än på plats, vilket flyttar tyngdpunkten till innehåll och teknisk SEO framför Google Business Profile.",
      },
    ],
    faqs: [
      {
        q: "Går det att ranka i Stockholm som ett litet företag?",
        a: "Ja, men inte på hela staden samtidigt. Ett mindre företag som fokuserar på sitt faktiska upptagningsområde — några stadsdelar snarare än hela länet — kan ta topplaceringar där det räknas. Det är oftast mer lönsamt än att slåss om breda termer med rikstäckande aktörer.",
      },
      {
        q: "Hur lång tid tar lokal SEO i Stockholm jämfört med mindre städer?",
        a: "Räkna med längre tid. I mindre städer kan tydliga förbättringar synas inom 30–90 dagar; i Stockholm är 3–6 månader mer realistiskt för Google Maps och 6–12 månader för konkurrensutsatta organiska termer. Konkurrensen är helt enkelt djupare.",
      },
    ],
    whyItMatters:
      "Ett samtal från Google är i Stockholm värt mer än i någon annan svensk stad, helt enkelt för att kundvärdena är högre. Samtidigt är kostnaden per klick i Google Ads bland landets högsta, vilket gör organisk och lokal synlighet till det billigare alternativet på sikt. Ett företag som tar en stabil topp 3-placering i sitt upptagningsområde slutar behöva betala för varje enskild kund.",
    expectations:
      "Vi lovar inte förstaplats på hela Stockholm. Det som är realistiskt är att äga de sökningar som sker inom några kilometer från din adress, och att bygga ut därifrån. Räkna med 3–6 månader innan Google Maps-synligheten stabiliserats och 6–12 månader för konkurrensutsatta organiska termer. Den som utlovar snabbare än så i Stockholm beskriver inte marknaden korrekt.",
    mistakes: [
      {
        h: "Försöker täcka hela staden på en gång",
        p: "Den vanligaste missen i Stockholm. En profil som anger hela länet som upptagningsområde rankar svagare i varje delområde än en som är tydligt avgränsad. Google tolkar bredden som lägre lokal relevans.",
      },
      {
        h: "För få recensioner i förhållande till konkurrenterna",
        p: "I Stockholm har etablerade aktörer ofta hundratals omdömen. Att stanna på tjugo räcker sällan, oavsett hur bra betyget är. Både volym och färskhet väger tungt här.",
      },
      {
        h: "Fel primärkategori i Google Business Profile",
        p: "Många väljer en bred kategori i tron att den fångar fler sökningar. Effekten är den motsatta: en precis primärkategori rankar bättre på de termer som faktiskt ger kunder.",
      },
    ],
  },
  {
    slug: "goteborg",
    name: "Göteborg",
    adjective: "göteborgska",
    companyNoun: "ett Göteborgsföretag",
    region: "Västra Götaland",
    hasLocalCases: false,
    marketIntro:
      "Göteborg är Sveriges näst största stad med omkring 600 000 invånare i kommunen och närmare en miljon i storstadsområdet. Sökmarknaden är betydligt mer koncentrerad än Stockholms: centrum, Hisingen och de östra stadsdelarna fungerar nästan som separata marknader, och ett företag som syns starkt i Majorna kan vara helt osynligt i Angered.",
    competition:
      "Konkurrensen i Göteborg är hög men ojämnt fördelad. Centrala lägen som Vasastaden och Linné är mättade, medan flera stadsdelar utanför centrum fortfarande har kommersiella söktermer där de tre översta platserna är fullt möjliga att ta. Det gör att en genomtänkt geografisk prioritering ofta ger snabbare resultat här än i Stockholm.",
    districts: ["Centrum", "Majorna", "Linné", "Hisingen", "Mölndal", "Partille", "Angered", "Västra Frölunda"],
    searchBehaviour:
      "Göteborgssökare har en tydlig tendens att söka stadsdelsspecifikt — \"frisör Majorna\" snarare än bara \"frisör Göteborg\". Att bygga innehåll och profilsignaler kring stadsdelen är därför ofta mer effektivt än att jaga stadens namn.",
    industries: [
      {
        h: "Fordonstjänster och verkstäder",
        p: "Göteborgs fordonsbransch är ovanligt stark, med hög sökvolym på däckbyte, service och bilvård. Tydliga tjänstekategorier och prisindikationer i profilen avgör vem som visas när sökningen är akut.",
      },
      {
        h: "Hantverkare och byggföretag",
        p: "Renoveringstakten i Göteborgs äldre bostadsområden driver stadig efterfrågan på snickare, elektriker och rörmokare. Här är upptagningsområdet i profilen avgörande: många hantverkare täcker Hisingen men syns bara i centrum.",
      },
      {
        h: "Restauranger och caféer",
        p: "Konkurrensen är hård i Linné och Vasastaden men avsevärt mildare längre ut. Bilder, öppettider och attribut i Google Business Profile påverkar både placering och hur många som faktiskt begär vägbeskrivning.",
      },
      {
        h: "Salonger och skönhetsvård",
        p: "Frisörer och hudterapeuter i Göteborg lever på återkommande kunder plus nytillskott via kartan. Bokningslänk direkt i profilen och ett stabilt recensionstempo är det som flyttar placeringen.",
      },
    ],
    faqs: [
      {
        q: "Ska jag rikta in mig på \"Göteborg\" eller på min stadsdel?",
        a: "Oftast stadsdelen först. Sökvolymen på \"Göteborg\" är högre men konkurrensen betydligt tyngre, och Google visar ändå resultat utifrån var sökaren står. Att ta topplaceringar i Majorna, Hisingen eller Mölndal ger i praktiken fler samtal än en tionde plats på stadens namn.",
      },
      {
        q: "Vi har kunder i hela Västsverige — hur hanterar vi det?",
        a: "Google Maps rankar utifrån närhet till sökaren, så en profil kan inte täcka hela regionen jämnt. Vi mäter var din synlighet faller bort geografiskt och prioriterar de områden där du har både kapacitet och rimlig chans att ranka, i stället för att sprida insatsen tunt över hela Västra Götaland.",
      },
    ],
    whyItMatters:
      "Göteborg har en ovanligt hög andel företag som ännu inte gjort grundarbetet på sin företagsprofil, samtidigt som sökvolymen är stor. Det betyder att skillnaden mellan en ofullständig och en komplett profil ofta är avgörande här, och att förbättringen syns snabbare än i Stockholm eftersom färre konkurrenter aktivt arbetar med sin lokala SEO.",
    expectations:
      "Realistiskt är att ta topp 3 i två eller tre prioriterade stadsdelar först, snarare än i hela Göteborg samtidigt. De flesta kunder ser mätbara förbättringar i kartan inom 30–90 dagar. Organiskt tar det längre tid, 3–6 månader, och centrala Linné och Vasastaden hör till de tyngsta områdena i staden.",
    mistakes: [
      {
        h: "Bara stadens namn i innehållet",
        p: "Göteborgssökare söker stadsdelsspecifikt. En sida som bara nämner Göteborg men aldrig Majorna, Hisingen eller Mölndal missar de sökningar där konkurrensen faktiskt är lägre.",
      },
      {
        h: "Upptagningsområde som inte matchar verkligheten",
        p: "Många hantverkare anger hela Västra Götaland men kan i praktiken bara ta jobb inom en halvtimme. Det sprider synligheten tunt och sänker rankingen i det område där jobben faktiskt finns.",
      },
      {
        h: "Inaktuella öppettider kring helgdagar",
        p: "Google sänker förtroendet för profiler med felaktig information. Öppettider som inte stämmer under röda dagar är en av de vanligaste orsakerna till tappad synlighet.",
      },
    ],
  },
  {
    slug: "malmo",
    name: "Malmö",
    adjective: "malmöitiska",
    companyNoun: "ett Malmöföretag",
    region: "Skåne",
    hasLocalCases: true,
    marketIntro:
      "Malmö är Sveriges tredje största stad med drygt 360 000 invånare, och sökmarknaden präglas av två saker som skiljer den från Stockholm och Göteborg: en mycket ung befolkning och närheten till Köpenhamn. Det ger hög mobilanvändning, stark tillväxt i tjänstesektorn och en ovanligt snabb omsättning av nya företag som konkurrerar om samma söktermer.",
    competition:
      "Konkurrensen i Malmö är måttlig jämfört med Stockholm men ökar snabbt. Många söktermer i centrum är hårt bevakade, medan områden som Limhamn, Husie och Oxie fortfarande har utrymme. Den snabba företagsomsättningen betyder också att placeringar rör sig mer här än i mognare marknader — vilket gynnar den som arbetar löpande snarare än i engångsinsatser.",
    districts: ["Centrum", "Västra Hamnen", "Limhamn", "Möllevången", "Hyllie", "Husie", "Oxie", "Rosengård"],
    searchBehaviour:
      "Malmö har en av landets högsta andelar mobilsökningar, vilket gör laddtid och mobilanpassning till en direkt rankingfaktor snarare än en teknisk detalj. Sökningar sker också ofta på danska eller engelska, vilket kan påverka vilka termer som är värda att prioritera.",
    industries: [
      {
        h: "Restauranger och caféer",
        p: "Malmös restaurangscen växer snabbt och sökbeteendet är nästan helt mobilt. Aktuella bilder, menyer och öppettider påverkar både placering i kartan och hur många som faktiskt tar sig dit.",
      },
      {
        h: "Tandläkare och kliniker",
        p: "Vårdsökningar i Malmö är förtroendedrivna och priskänsliga. Recensionernas antal och färskhet väger tyngre än i de flesta andra branscher, och sökaren jämför nästan alltid flera profiler innan hen bokar.",
      },
      {
        h: "Hantverkare och byggföretag",
        p: "Nybyggnationen i Hyllie och Västra Hamnen driver efterfrågan på hantverk och installation. Akuta sökningar dominerar, vilket gör Local Pack-placeringen och telefonnummerets synlighet avgörande.",
      },
      {
        h: "Salonger och skönhetsvård",
        p: "Med en ung befolkning är skönhetsbranschen i Malmö ovanligt söktät. Bokningslänkar i profilen och tjänstelistor som matchar hur folk faktiskt söker är det som skiljer en full kalender från en tom.",
      },
    ],
    faqs: [
      {
        q: "Påverkar närheten till Köpenhamn vår SEO?",
        a: "Ja, på två sätt. Dels förekommer sökningar på danska och engelska i Malmöområdet, dels kan din profil visas för sökare på andra sidan sundet om ditt upptagningsområde tillåter det. Vi bedömer om det är relevant för just din verksamhet innan vi lägger tid på det.",
      },
      {
        q: "Är Malmö lättare att ranka i än Stockholm?",
        a: "Generellt ja. Konkurrensen är lägre och placeringarna rör sig snabbare, vilket brukar innebära tydliga resultat i Google Maps inom 30–90 dagar mot Stockholms 3–6 månader. Centrala Malmö är dock ett undantag där flera branscher är mättade.",
      },
    ],
    whyItMatters:
      "Malmös snabba företagsomsättning gör att placeringarna rör sig mer här än i mognare marknader. För dig som arbetar löpande med lokal SEO är det en fördel: konkurrenter faller ifrån, och den som håller profilen aktiv tar över deras placeringar. Omvänt tappar den som gör en engångsinsats och sedan slutar mark snabbare i Malmö än i exempelvis Örebro.",
    expectations:
      "Utanför centrala Malmö är topp 3 i kartan ofta möjligt inom 30–90 dagar. Centrum är däremot mättat i flera branscher, särskilt restaurang och skönhetsvård, och där bör du räkna med 3–6 månader. Vi säger till innan vi börjar om vi bedömer att din bransch i ditt område kräver mer tid än så.",
    mistakes: [
      {
        h: "Hemsidan är inte mobilanpassad i praktiken",
        p: "Malmö har en av landets högsta andelar mobilsökningar. En sida som tekniskt fungerar på mobil men laddar långsamt tappar både placering och besökare. Här är laddtid en direkt rankingfaktor.",
      },
      {
        h: "Ingen bokningslänk i profilen",
        p: "Med en ung målgrupp förväntas digital bokning. Profiler som bara erbjuder telefonnummer tappar mätbart fler potentiella kunder i Malmö än i äldre demografier.",
      },
      {
        h: "Ignorerar sökningar på engelska och danska",
        p: "Malmös internationella befolkning söker inte alltid på svenska. Att helt förbise de termerna innebär att lämna sökvolym till konkurrenterna.",
      },
    ],
  },
  {
    slug: "uppsala",
    name: "Uppsala",
    adjective: "uppsaliensiska",
    companyNoun: "ett Uppsalaföretag",
    region: "Uppsala län",
    hasLocalCases: false,
    marketIntro:
      "Uppsala är Sveriges fjärde största stad med omkring 240 000 invånare, och sökmarknaden domineras av två faktorer: universitetet och närheten till Stockholm. Studentbefolkningen skapar kraftiga säsongsvariationer i sökvolym, och många Uppsalabor söker tjänster som utförs i Stockholm — vilket gör den geografiska avgränsningen ovanligt viktig.",
    competition:
      "Konkurrensen i Uppsala är lägre än i storstäderna men koncentrerad till centrum. Många kommersiella söktermer har fortfarande utrymme i topp 3, särskilt utanför stadskärnan. Den största utmaningen är oftast inte lokala konkurrenter utan Stockholmsföretag som breddar sitt upptagningsområde norrut.",
    districts: ["Centrum", "Luthagen", "Sala backe", "Gottsunda", "Sävja", "Boländerna", "Årsta", "Eriksberg"],
    searchBehaviour:
      "Uppsalas sökvolym svänger tydligt med studieterminerna — augusti och januari ger kraftiga toppar i flera branscher. Att planera innehåll och kampanjer efter den cykeln ger mer effekt här än på de flesta andra orter.",
    industries: [
      {
        h: "Restauranger och caféer",
        p: "Studentbefolkningen gör Uppsalas restaurangsökningar starkt säsongsbetonade och priskänsliga. Uppdaterade öppettider och menyer under terminsstart har direkt påverkan på både placering och besök.",
      },
      {
        h: "Tandläkare och vårdgivare",
        p: "Uppsala har hög täthet av vårdgivare i förhållande till befolkningen. Recensionsflöde och tydliga behandlingssidor är det som avgör vem av flera likvärdiga kliniker som får bokningen.",
      },
      {
        h: "Hantverkare och fastighetsservice",
        p: "Den stora hyresmarknaden driver stadig efterfrågan på hantverk och fastighetsservice. Här är utmaningen ofta att synas mot Stockholmsföretag som anger Uppsala i sitt upptagningsområde.",
      },
      {
        h: "Salonger och skönhetsvård",
        p: "En ung befolkning ger hög sökvolym på frisör och skönhetsbehandlingar. Bokningslänk direkt i profilen väger tungt när målgruppen förväntar sig att kunna boka utan att ringa.",
      },
    ],
    faqs: [
      {
        q: "Hur påverkar studentsäsongen vår lokala SEO?",
        a: "I flera branscher — restaurang, frisör, träning, boendeservice — svänger sökvolymen kraftigt med terminsstarterna i augusti och januari. Vi lägger optimeringen och innehållsarbetet så att du står starkt inför de topparna snarare än efter dem.",
      },
      {
        q: "Vi konkurrerar med Stockholmsföretag som säger att de täcker Uppsala. Kan vi vinna?",
        a: "Oftast ja. Google Maps prioriterar närhet och lokal relevans, vilket ger ett faktiskt Uppsalaföretag med verifierad adress och lokala recensioner en strukturell fördel över en Stockholmsprofil som listar Uppsala som upptagningsområde. Den fördelen måste dock aktiveras genom en komplett profil.",
      },
    ],
    whyItMatters:
      "I Uppsala konkurrerar du inte bara med lokala företag utan med Stockholmsaktörer som breddar sitt upptagningsområde norrut. Den goda nyheten är att Google Maps prioriterar närhet och lokal relevans: ett faktiskt Uppsalaföretag med verifierad adress och lokala recensioner har en strukturell fördel. Men fördelen måste aktiveras genom en komplett profil, annars vinner den större aktören ändå.",
    expectations:
      "Utanför centrum är topp 3 ofta realistiskt inom 30–90 dagar. Det som skiljer Uppsala är säsongsvariationen: att lansera en optimering i juli ger svagt utslag, medan samma arbete klart inför terminsstart i augusti får betydligt större effekt. Vi planerar därför insatsen efter den cykeln.",
    mistakes: [
      {
        h: "Planerar utan hänsyn till studentsäsongen",
        p: "Flera branscher i Uppsala har kraftiga toppar i augusti och januari. Att göra optimeringen efter toppen i stället för före är den vanligaste missen vi ser här.",
      },
      {
        h: "Konkurrerar på Stockholmstermer",
        p: "Vissa Uppsalaföretag lägger tid på att synas i Stockholm där de har liten chans, i stället för att äga sin hemmamarknad där de har en inbyggd närhetsfördel.",
      },
      {
        h: "Saknar lokala recensioner",
        p: "Recensioner från Uppsalakunder väger tyngre för lokal relevans än omdömen från andra orter. En profil med spridda recensioner från hela landet signalerar svagare lokal koppling.",
      },
    ],
  },
  {
    slug: "linkoping",
    name: "Linköping",
    adjective: "linköpingska",
    companyNoun: "ett Linköpingsföretag",
    region: "Östergötland",
    hasLocalCases: false,
    marketIntro:
      "Linköping har omkring 170 000 invånare och en näringsstruktur som skiljer sig markant från andra städer i samma storlek: universitet, teknikindustri och en stor andel kunskapsföretag. Det ger en sökmarknad där B2B-termer väger ovanligt tungt i förhållande till stadens storlek, samtidigt som den lokala konsumentkonkurrensen är hanterbar.",
    competition:
      "Konkurrensen i Linköping är måttlig och flera kommersiella söktermer har fortfarande lediga topplaceringar. Tvillingstaden Norrköping gör dock att många företag försöker täcka båda orterna med en profil, vilket sällan fungerar — Google behandlar dem som separata marknader och synligheten faller ofta bort mitt emellan.",
    districts: ["Centrum", "Vasastaden", "Ryd", "Skäggetorp", "Lambohov", "Ekholmen", "Tannefors", "Linghem"],
    searchBehaviour:
      "Linköpingssökare är i högre grad än genomsnittet vana vid digitala bokningsflöden, delvis tack vare teknikprofilen i staden. Företag utan bokningslänk eller tydlig kontaktväg i profilen tappar mätbart fler potentiella kunder här.",
    industries: [
      {
        h: "Teknik- och kunskapsföretag",
        p: "Med universitetet och teknikindustrin är B2B-sökningar starkare i Linköping än i jämförbara städer. Här ligger tyngdpunkten på organisk SEO och innehåll som svarar på köparens frågor, snarare än på Google Maps.",
      },
      {
        h: "Hantverkare och byggföretag",
        p: "Stadig bostadsutbyggnad i Lambohov och Ekholmen driver efterfrågan på hantverk. Ett tydligt avgränsat upptagningsområde är viktigt eftersom många försöker täcka både Linköping och Norrköping.",
      },
      {
        h: "Tandläkare och kliniker",
        p: "Vårdsökningar i Linköping är mindre mättade än i storstäderna, vilket gör topp 3 realistiskt för en klinik med komplett profil och ett fungerande recensionsflöde.",
      },
      {
        h: "Restauranger och caféer",
        p: "Studentnärvaron ger säsongsvariation men konkurrensen är mildare än i storstäderna. Aktuella bilder och öppettider räcker ofta långt för att ta en topplacering i kartan.",
      },
    ],
    faqs: [
      {
        q: "Kan vi täcka både Linköping och Norrköping med samma sida?",
        a: "Det fungerar sällan. Google behandlar orterna som separata lokala marknader, och en sida som försöker ranka på båda tenderar att ranka svagt på ingen av dem. Vi rekommenderar separata sidor med genuint eget innehåll, eller att prioritera den ort där ni har verklig närvaro.",
      },
      {
        q: "Vår verksamhet är B2B — är lokal SEO relevant för oss?",
        a: "Delvis. För B2B i Linköping ger den organiska sökningen oftast mer än Google Maps, eftersom köparen söker på problem snarare än på plats. Vi flyttar då tyngdpunkten till teknisk SEO och innehåll, men håller företagsprofilen komplett eftersom den fortfarande påverkar förtroendet.",
      },
    ],
    whyItMatters:
      "Linköpings näringsstruktur gör att många företag här har mer att hämta i organisk sökning än i Google Maps. Teknik- och kunskapsföretag söks upp utifrån problem, inte plats, vilket betyder att en genomarbetad hemsida ofta ger fler affärer än en optimerad kartprofil. Samtidigt är den lokala konsumentkonkurrensen mild nog att topp 3 är realistiskt för den som gör grundarbetet.",
    expectations:
      "För lokala konsumenttjänster i Linköping är topp 3 i kartan ofta möjligt inom 30–60 dagar eftersom konkurrensen är måttlig. För organiska B2B-termer bör du räkna med 4–8 månader, eftersom det arbetet handlar om innehåll och auktoritet snarare än profilinställningar.",
    mistakes: [
      {
        h: "Försöker täcka Linköping och Norrköping med en sida",
        p: "Google behandlar orterna som separata marknader. En sida som riktar sig till båda rankar oftast svagt i båda. Det här är den enskilt vanligaste missen i Östergötland.",
      },
      {
        h: "B2B-företag lägger all tid på Google Maps",
        p: "För kunskapsföretag i Linköping kommer affärerna oftast via organisk sökning på problemformuleringar. Att optimera kartprofilen och strunta i innehållet är felprioriterat här.",
      },
      {
        h: "Ingen tydlig kontaktväg för digitala köpare",
        p: "Linköpingssökare är vana vid digitala flöden. Företag utan bokningslänk eller formulär tappar fler kunder här än på orter med mindre digital mognad.",
      },
    ],
  },
  {
    slug: "orebro",
    name: "Örebro",
    adjective: "örebroska",
    companyNoun: "ett Örebroföretag",
    region: "Örebro län",
    hasLocalCases: false,
    marketIntro:
      "Örebro har omkring 160 000 invånare och ett läge mitt emellan Stockholm, Göteborg och Oslo som gjort staden till ett logistiknav. Det präglar sökmarknaden: transport, lager och handel väger tyngre här än i jämförbara städer, samtidigt som den lokala konsumentkonkurrensen är bland de mildaste i någon svensk stad av den här storleken.",
    competition:
      "Konkurrensen i Örebro är låg till måttlig, och det finns fortfarande kommersiella söktermer där topp 3 är fullt möjligt att ta inom några månader. Det gör staden till en av de marknader där lokal SEO ger snabbast utslag — men också en där många företag ännu inte gjort grundarbetet, vilket betyder att den som gör det tar ett tydligt försprång.",
    districts: ["Centrum", "Almby", "Vivalla", "Hjärsta", "Adolfsberg", "Brickebacken", "Marieberg", "Ladugårdsängen"],
    searchBehaviour:
      "Örebro har en jämnare sökvolym över året än universitetsstäderna, utan de kraftiga säsongstopparna. Det gör resultatutvecklingen lättare att läsa av och innebär att förbättringar i placering syns tydligare i faktiska samtal.",
    industries: [
      {
        h: "Handel och logistiktjänster",
        p: "Örebros läge som logistiknav ger ovanligt hög sökvolym på transport, lager och distribution. För dessa företag är organisk SEO och tydliga tjänstesidor viktigare än kartplaceringen.",
      },
      {
        h: "Hantverkare och byggföretag",
        p: "Bostadsutbyggnaden i Ladugårdsängen och Adolfsberg driver efterfrågan på hantverk. Konkurrensen är mild nog att en komplett profil ofta räcker för topp 3 inom rimlig tid.",
      },
      {
        h: "Tandläkare och vårdgivare",
        p: "Vårdmarknaden i Örebro är mindre mättad än i storstäderna. En klinik med komplett profil, färska recensioner och tydliga behandlingssidor har god chans att ta en topplacering.",
      },
      {
        h: "Restauranger och salonger",
        p: "Lokala konsumenttjänster i Örebro har låg söktäthet i förhållande till befolkningen. Grundläggande GBP-optimering och ett fungerande recensionsflöde ger här mer effekt per krona än i någon storstad.",
      },
    ],
    faqs: [
      {
        q: "Är det lättare att ranka i Örebro än i storstäderna?",
        a: "Ja, tydligt. Konkurrensen är lägre och många lokala företag har ofullständiga företagsprofiler, vilket gör att grundarbetet ofta räcker längre här. Mätbara förbättringar i Google Maps inom 30–60 dagar är realistiskt i flera branscher.",
      },
      {
        q: "Vad kostar lokal SEO i Örebro?",
        a: "Samma paket som i övriga landet: LaunchMap™ som engångsoptimering från 5 999 kr och MapPilot™ som löpande abonnemang från 3 999 kr/mån utan bindningstid. Eftersom konkurrensen är lägre räcker ofta en mindre insats för att nå topplaceringar här.",
      },
    ],
    whyItMatters:
      "Örebro är en av de marknader där lokal SEO ger snabbast avkastning i Sverige. Kombinationen av låg konkurrens och många ofullständiga företagsprofiler betyder att grundarbetet ensamt ofta räcker för topp 3. Den som gör det först tar ett försprång som är svårt för konkurrenterna att ta tillbaka, eftersom få aktivt arbetar med sin lokala synlighet här.",
    expectations:
      "Mätbara förbättringar i Google Maps inom 30–60 dagar är realistiskt i flera branscher, snabbare än i storstäderna. Organiskt bör du räkna med 3–6 månader. Eftersom konkurrensen är lägre räcker ofta en mindre insats, och vi säger till om vi bedömer att LaunchMap™ som engångsoptimering är tillräckligt för dig i stället för ett löpande paket.",
    mistakes: [
      {
        h: "Antar att låg konkurrens betyder att inget behövs",
        p: "Den vanligaste missen i Örebro. Konkurrensen är mild, men en tom eller ofullständig profil rankar ändå inte. Grundarbetet krävs, det är bara mindre omfattande än i Stockholm.",
      },
      {
        h: "Logistikföretag optimerar för kartan i stället för organiskt",
        p: "Transport- och distributionsföretag söks upp på tjänst, inte närhet. För dem ger tydliga tjänstesidor mer effekt än en optimerad kartprofil.",
      },
      {
        h: "Slutar arbeta efter första topplaceringen",
        p: "Eftersom placeringarna är stabilare här är det lätt att tro att arbetet är klart. Men konkurrenter som börjar arbeta kan ta platsen, särskilt när recensionsflödet stannat av.",
      },
    ],
  },
  {
    slug: "jonkoping",
    name: "Jönköping",
    adjective: "jönköpingska",
    companyNoun: "ett Jönköpingsföretag",
    region: "Jönköpings län",
    hasLocalCases: true,
    marketIntro:
      "Jönköping har omkring 145 000 invånare och ett läge vid Vätterns södra ände som gjort staden till ett handels- och logistikcentrum för hela småländska höglandet. Sökmarknaden är utspridd över tre sammanvuxna orter — Jönköping, Huskvarna och Gränna — vilket gör den geografiska avgränsningen viktigare här än i en stad med en tydlig kärna.",
    competition:
      "Konkurrensen i Jönköping är låg till måttlig och flera kommersiella söktermer har fortfarande lediga topplaceringar. Den största utmaningen är att många lokala företag har ofullständiga företagsprofiler, vilket gör att den som gör grundarbetet ordentligt tar ett snabbt och tydligt försprång.",
    districts: ["Centrum", "Huskvarna", "Råslätt", "Gränna", "Norrahammar", "Bankeryd", "Tenhult", "Ljungarum"],
    searchBehaviour:
      "Jönköpingsområdet har en jämn sökvolym över året och en hög andel sökningar som leder till faktiska besök samma dag. Det gör att korrekt information om öppettider och vägbeskrivningar i profilen får direkt affärspåverkan.",
    industries: [
      {
        h: "Bilvård och fordonstjänster",
        p: "Fordonsbranschen i Jönköping har hög sökvolym på rekond, bilvård och service. Tydliga tjänstekategorier och bilder på utfört arbete är det som avgör vem som får samtalet — vi har mätbara resultat i just den här branschen lokalt.",
      },
      {
        h: "Hantverkare och byggföretag",
        p: "Bostadsutbyggnaden runt Jönköping och Bankeryd driver stadig efterfrågan. Här är upptagningsområdet avgörande eftersom många hantverkare täcker både Jönköping och Huskvarna men bara syns i den ena.",
      },
      {
        h: "Handel och logistiktjänster",
        p: "Stadens roll som logistiknav ger ovanligt hög sökvolym på transport och distribution i förhållande till befolkningen. För dessa företag väger organisk SEO tyngre än kartplaceringen.",
      },
      {
        h: "Restauranger och salonger",
        p: "Lokala konsumenttjänster har låg söktäthet i Jönköping jämfört med storstäderna. Grundläggande GBP-optimering och ett fungerande recensionsflöde ger här stor effekt per krona.",
      },
    ],
    faqs: [
      {
        q: "Ska vi rikta oss mot Jönköping eller även Huskvarna?",
        a: "Google behandlar dem som delvis separata lokala marknader, och en profil rankar sällan jämnt i båda. Vi mäter var din synlighet faktiskt faller bort och prioriterar utifrån var du har kapacitet — ofta är det mer lönsamt att äga en av orterna helt än att synas svagt i båda.",
      },
      {
        q: "Har ni kunder i Jönköping?",
        a: "Ja. RS Bilvård i Jönköping är en av våra kunder med verifierad förbättring i Google Maps-synlighet, mätt med geo-grid-spårning. Resultaten finns dokumenterade på vår resultatsida.",
      },
    ],
    whyItMatters:
      "Jönköping har låg konkurrens i förhållande till sin storlek och många lokala företag med ofullständiga profiler. Det gör att grundarbetet ofta räcker långt. Vi har dessutom mätbara resultat i staden: RS Bilvård förbättrade sin Google Maps-synlighet med verifierad geo-grid-mätning, vilket ger oss faktisk erfarenhet av hur den här marknaden beter sig.",
    expectations:
      "Topp 3 i kartan är realistiskt inom 30–60 dagar i flera branscher tack vare den milda konkurrensen. Den geografiska avgränsningen mellan Jönköping, Huskvarna och Gränna är dock avgörande, och vi mäter var din synlighet faktiskt faller bort innan vi bestämmer var insatsen ska ligga.",
    mistakes: [
      {
        h: "Behandlar Jönköping och Huskvarna som en marknad",
        p: "Google gör inte det. En profil rankar sällan jämnt i båda, och den som försöker täcka allt syns ofta svagt i båda i stället för starkt i en.",
      },
      {
        h: "Saknar bilder på utfört arbete",
        p: "I branscher som bilvård och hantverk är bilder på faktiska resultat en av de starkaste konverteringsfaktorerna. Profiler med bara en logotyp presterar mätbart sämre.",
      },
      {
        h: "Recensioner kommer i skurar i stället för löpande",
        p: "Tio omdömen på en vecka och sedan tyst i ett halvår signalerar svagare än ett jämnt inflöde. Google värderar färskhet, inte bara antal.",
      },
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllCities(): City[] {
  return cities;
}

import type { Post } from "@/lib/posts";

export const post: Post = {
  slug: "ai-sokning-och-lokal-seo",
  title: "AI-sökning och lokal SEO — så syns du i Googles AI-svar 2026",
  description:
    "Google svarar allt oftare med AI-genererade sammanfattningar. Lär dig vad AEO och GEO betyder för lokala företag och hur du optimerar för att synas i AI-svaren.",
  publishedAt: "2026-06-05",
  readingTime: 10,
  tags: ["AI-sökning", "AEO", "Lokal SEO"],
  excerpt:
    "AI Overviews, AEO och GEO förändrar hur lokala företag hittas på Google. Här är vad du behöver veta — och göra — redan nu.",
  content: `
<p>Du har säkert sett det: du söker något på Google och istället för en lista med blå länkar får du en AI-genererad sammanfattning högst upp på sidan. Google kallar det <strong>AI Overviews</strong>. Det är inte en test längre — det rullas ut globalt och påverkar lokal sökning mer än de flesta tror.</p>

<p>För dig som lokalt företag är frågan inte <em>om</em> AI-sökning förändrar spelplanen, utan <em>hur fort</em> — och vad du gör åt det nu.</p>

<h2>Vad är AI-sökning, AEO och GEO?</h2>

<p>Tre begrepp dyker upp allt oftare, och de är viktiga att förstå:</p>

<h3>AI Overviews (AIO)</h3>
<p>Googles AI-genererade svar som visas ovanför de vanliga sökresultaten. Google sammanfattar information från flera källor och presenterar ett direktsvar. För lokala sökningar kan det se ut som: <em>"De bästa VVS-firmorna i Helsingborg är…"</em> — med ditt företag inkluderat eller exkluderat.</p>

<h3>AEO — Answer Engine Optimization</h3>
<p><strong>AEO</strong> handlar om att optimera ditt innehåll så att AI-system och sökmotorer kan använda det som källa för direkta svar. Tänk på det som att skriva innehåll som är så tydligt strukturerat och faktabaserat att en AI väljer att citera dig. Det är en vidareutveckling av klassisk SEO där "ranka på sida 1" ersätts av "bli svaret".</p>

<h3>GEO — Generative Engine Optimization</h3>
<p><strong>GEO</strong> är det bredare begreppet — att optimera för generativa AI-system som inte bara söker (Google) utan svarar direkt (ChatGPT, Perplexity, Google Gemini). Skillnaden mot traditionell SEO: du optimerar inte för att dyka upp i en lista, utan för att ditt företag ska nämnas i ett genererat svar.</p>

<h2>Varför är det viktigt för dig som lokalt företag?</h2>

<p>Du kanske tänker: <em>"Det här låter som framtid, inte nutid."</em> Men siffrorna talar emot det:</p>

<ul>
  <li>AI Overviews visas nu för uppskattningsvis <strong>15–25&nbsp;% av alla sökningar</strong> i engelskspråkiga marknader, och andelen ökar i Sverige.</li>
  <li>En studie från Search Engine Land visar att klickfrekvensen (CTR) på vanliga organiska resultat minskar med upp till <strong>34&nbsp;%</strong> när AI Overviews visas ovanför dem.</li>
  <li>Enligt Merchynts analys är <strong>on-page-faktorer (24&nbsp;%) och recensioner (16&nbsp;%)</strong> de tyngst vägande signalerna för synlighet i AI-svar — inte bakåtlänkar.</li>
</ul>

<p>Det betyder: det du gör för din lokala SEO idag formar direkt hur synlig du är i morgondagens AI-svar.</p>

<h2>Bevis: hur AI-sökning förändrar lokal synlighet</h2>

<p>Rankningsfaktorerna för AI-sökning ser annorlunda ut jämfört med klassisk Local Pack:</p>

<table>
  <thead>
    <tr><th>Faktor</th><th>Local Pack (Maps)</th><th>AI-sökning (AIO/GEO)</th></tr>
  </thead>
  <tbody>
    <tr><td>On-page SEO</td><td>15 %</td><td>24 %</td></tr>
    <tr><td>Recensioner</td><td>20 %</td><td>16 %</td></tr>
    <tr><td>Kataloglistningar</td><td>6 %</td><td>13 %</td></tr>
    <tr><td>Bakåtlänkar</td><td>8 %</td><td>13 %</td></tr>
    <tr><td>Google Business Profile</td><td>32 %</td><td>12 %</td></tr>
    <tr><td>Personalisering</td><td>6 %</td><td>9 %</td></tr>
    <tr><td>Sociala signaler</td><td>4 %</td><td>9 %</td></tr>
    <tr><td>Beteendesignaler</td><td>9 %</td><td>8 %</td></tr>
  </tbody>
</table>

<p>Den stora takeawayen: on-page-innehållet på din hemsida spelar en mycket större roll för AI-synlighet än för Maps-ranking. GBP tappar relativ tyngd — men försvinner inte. Och kataloglistningar (citations) med korrekt NAP blir viktigare, inte mindre.</p>

<div class="callout">
  <strong>Viktigt:</strong> Det finns ingen "AI SEO" som är skild från vanlig SEO. Att optimera för AI-svar är att göra grunderna ännu bättre — tydligare innehåll, fler trovärdiga omnämnanden, starkare strukturerad data.
</div>

<h2>Hur fungerar det? Så väljer AI vilka företag som nämns</h2>

<p>Googles AI läser inte bara din hemsida — den aggregerar signaler från hela webben:</p>

<h3>Strukturerad data (schema markup)</h3>
<p>JSON-LD-schema för <code>LocalBusiness</code>, <code>FAQPage</code> och <code>Service</code> ger AI-system maskinläsbar information om vem du är, vad du erbjuder och var du finns. Utan schema får AI:n gissa — med schema vet den. Det är den mest direkta tekniska åtgärden du kan ta.</p>

<h3>E-E-A-T — trovärdighet som AI-signal</h3>
<p>Google bedömer innehåll efter <strong>Experience, Expertise, Authoritativeness, Trustworthiness</strong>. För ett lokalt företag betyder det: recensioner med specifika detaljer, omnämnanden i lokala medier, konsekvent NAP och innehåll som faktiskt visar branschkunnighet — inte generiska beskrivningar.</p>

<h3>Entiteter, inte bara nyckelord</h3>
<p>AI-modeller förstår <em>entiteter</em> (företag, platser, tjänster, personer) och relationer mellan dem — inte bara exakta sökordsmatchningar. Det innebär att din hemsida måste etablera tydliga kopplingar: ditt företagsnamn + din stad + dina tjänster + dina recensioner = en sammanhängande entitet som AI:n kan referera till med förtroende.</p>

<h3>Direkta svar och FAQ-format</h3>
<p>AI Overviews plockar gärna svar från innehåll som är strukturerat som fråga-svar. En FAQ-sektion på din hemsida, optimerad med <code>FAQPage</code>-schema, ökar chansen markant att ditt innehåll används som källmaterial.</p>

<h2>Steg-för-steg: hur du optimerar för AI-sökning och GEO</h2>

<h3>Steg 1: Säkerställ komplett strukturerad data</h3>
<ol>
  <li>Implementera <code>LocalBusiness</code>-schema med namn, adress, telefon, öppettider, serviceområde och prisklass.</li>
  <li>Lägg till <code>FAQPage</code>-schema för de vanligaste frågorna om dina tjänster.</li>
  <li>Använd <code>Service</code>-schema för varje tjänst du erbjuder med pris och beskrivning.</li>
  <li>Validera allt i Googles <strong>Rich Results Test</strong> och Search Consoles schemaflik.</li>
</ol>

<h3>Steg 2: Skriv innehåll som svarar direkt på frågor</h3>
<ol>
  <li>Identifiera de 10 vanligaste frågorna dina kunder ställer — och skriv tydliga, faktabaserade svar på din hemsida.</li>
  <li>Strukturera varje svar som: <strong>fråga som H3 → direkt svar i första meningen → fördjupning i resten av stycket</strong>.</li>
  <li>Undvik fluffiga inledningar. AI plockar det mest direkta svaret.</li>
</ol>

<h3>Steg 3: Bygg trovärdiga omnämnanden (citations)</h3>
<ol>
  <li>Se till att du finns på Eniro, Hitta, Yelp och minst 10 branschrelevanta kataloger med exakt samma NAP.</li>
  <li>Sök aktivt efter pressomtalar eller gästinlägg i lokala medier — ett omnämnande i en lokal tidning är en stark E-E-A-T-signal.</li>
  <li>Svara på recensioner med specifika detaljer om uppdraget — det ökar innehållsrikedomen i dina recensionssvar.</li>
</ol>

<h3>Steg 4: Optimera din Google Business Profile för AI</h3>
<ol>
  <li>Skriv en <strong>detaljerad företagsbeskrivning</strong> — 750 tecken, inkludera tjänster, stad och unik värdeerbjudande.</li>
  <li>Publicera regelbundna <strong>GBP-inlägg</strong> med lokal kontext (nämn stad och bransch).</li>
  <li>Besvara alla Q&amp;A-frågor med faktabaserade, specifika svar.</li>
</ol>

<h3>Steg 5: Stärk ditt innehålls E-E-A-T</h3>
<ol>
  <li>Inkludera <strong>case-studier eller kundresultat</strong> med specifika siffror — AI premierar verifierbar information.</li>
  <li>Nämn din erfarenhet, certifieringar och team — inte som bragging, utan som faktauppgifter.</li>
  <li>Länka till relevanta auktoritativa källor (branschorganisationer, forskning) — det stärker trovärdigheten.</li>
</ol>

<h3>Steg 6: Mät din AI-synlighet</h3>
<ol>
  <li>Sök manuellt på dina primära sökord och notera om AI Overviews visas — och om du nämns.</li>
  <li>Använd Search Console för att följa förändringar i CTR — en minskning kan indikera att AI Overviews "stjäl" klick.</li>
  <li>Testa Perplexity och ChatGPT: sök <em>"bästa [din tjänst] i [din stad]"</em> — nämns du?</li>
</ol>

<div class="summary-box">
  <h4>Sammanfattning</h4>
  <ul>
    <li><strong>AI Overviews</strong> förändrar hur lokala företag hittas — och påverkar redan klickfrekvenser</li>
    <li><strong>AEO</strong> = optimera för att bli svaret, inte bara ranka i listan</li>
    <li><strong>GEO</strong> = synas i generativa AI-system (Gemini, ChatGPT, Perplexity)</li>
    <li>On-page-innehåll (24&nbsp;%) är den viktigaste faktorn för AI-synlighet</li>
    <li>Strukturerad data (JSON-LD schema) är den mest direkta tekniska åtgärden</li>
    <li>Starka recensioner + konsekvent NAP + FAQ-format = AI-redo innehåll</li>
  </ul>
</div>

<p>Vill du veta om din hemsida är redo för AI-sökning? <a href="/boka">Boka ett gratis analyssamtal</a> — vi går igenom din nuvarande synlighet och ger dig en konkret plan.</p>

<p>Läs även: <a href="/blogg/hur-du-rankar-pa-google-maps-2026">Hur du rankar på Google Maps 2026 — rankningsfaktorerna förklarade</a> och <a href="/blogg/hur-du-far-fler-google-recensioner">Hur du får fler Google-recensioner</a>.</p>
`,
};

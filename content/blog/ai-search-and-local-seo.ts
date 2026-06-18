import type { Post } from "@/lib/posts";

export const post: Post = {
  slug: "ai-search-and-local-seo",
  title: "AI Search and Local SEO — How to Show Up in Google's AI Answers 2026",
  description:
    "Google is increasingly answering with AI-generated summaries. Learn what AEO and GEO mean for local businesses and how to optimise for AI search visibility.",
  publishedAt: "2026-06-05",
  readingTime: 10,
  tags: ["AI Search", "AEO", "Local SEO"],
  excerpt:
    "AI Overviews, AEO and GEO are changing how local businesses are found on Google. Here's what you need to know — and do — right now.",
  content: `
<p>You've probably noticed it: you search something on Google and instead of a list of blue links you get an AI-generated summary at the top of the page. Google calls it <strong>AI Overviews</strong>. It's no longer a test — it's rolling out globally and affecting local search more than most people realise.</p>

<p>For you as a local business, the question isn't <em>whether</em> AI search changes the playing field, but <em>how fast</em> — and what you do about it now.</p>

<h2>What are AI search, AEO and GEO?</h2>

<h3>AI Overviews (AIO)</h3>
<p>Google's AI-generated answers shown above the regular search results. Google summarises information from multiple sources and presents a direct answer. For local searches, it might look like: <em>"The best plumbers in Helsingborg are…"</em> — with your business included or excluded.</p>

<h3>AEO — Answer Engine Optimisation</h3>
<p><strong>AEO</strong> is about optimising your content so that AI systems and search engines can use it as a source for direct answers. Think of it as writing content that's so clearly structured and factual that an AI chooses to cite you. It's an evolution of classic SEO where "rank on page 1" is replaced by "become the answer".</p>

<h3>GEO — Generative Engine Optimisation</h3>
<p><strong>GEO</strong> is the broader concept — optimising for generative AI systems that don't just search (Google) but answer directly (ChatGPT, Perplexity, Google Gemini). The difference from traditional SEO: you're not optimising to appear in a list, but for your business to be mentioned in a generated answer.</p>

<h2>Why does this matter for your local business?</h2>

<p>You might think: <em>"This sounds like the future, not the present."</em> But the numbers say otherwise:</p>

<ul>
  <li>AI Overviews now appear for an estimated <strong>15–25% of all searches</strong> in English-speaking markets, with the proportion growing in Sweden.</li>
  <li>A Search Engine Land study shows click-through rates on regular organic results drop by up to <strong>34%</strong> when AI Overviews appear above them.</li>
  <li>According to Merchynt's analysis, <strong>on-page factors (24%) and reviews (16%)</strong> are the heaviest signals for AI answer visibility — not backlinks.</li>
</ul>

<h2>Evidence: how AI search changes local visibility</h2>

<p>The ranking factors for AI search look different compared to classic Local Pack:</p>

<table>
  <thead>
    <tr><th>Factor</th><th>Local Pack (Maps)</th><th>AI Search (AIO/GEO)</th></tr>
  </thead>
  <tbody>
    <tr><td>On-page SEO</td><td>15%</td><td>24%</td></tr>
    <tr><td>Reviews</td><td>20%</td><td>16%</td></tr>
    <tr><td>Directory listings</td><td>6%</td><td>13%</td></tr>
    <tr><td>Backlinks</td><td>8%</td><td>13%</td></tr>
    <tr><td>Google Business Profile</td><td>32%</td><td>12%</td></tr>
    <tr><td>Personalisation</td><td>6%</td><td>9%</td></tr>
    <tr><td>Social signals</td><td>4%</td><td>9%</td></tr>
    <tr><td>Behavioural signals</td><td>9%</td><td>8%</td></tr>
  </tbody>
</table>

<div class="callout">
  <strong>Important:</strong> There is no separate "AI SEO" distinct from regular SEO. Optimising for AI answers means doing the fundamentals even better — clearer content, more credible mentions, stronger structured data.
</div>

<h2>Step-by-step: how to optimise for AI search and GEO</h2>

<h3>Step 1: Ensure complete structured data</h3>
<ol>
  <li>Implement <code>LocalBusiness</code> schema with name, address, phone, opening hours, service area and price range.</li>
  <li>Add <code>FAQPage</code> schema for the most common questions about your services.</li>
  <li>Use <code>Service</code> schema for each service you offer with price and description.</li>
  <li>Validate everything in Google's <strong>Rich Results Test</strong>.</li>
</ol>

<h3>Step 2: Write content that answers questions directly</h3>
<ol>
  <li>Identify the 10 most common questions your customers ask — and write clear, factual answers on your website.</li>
  <li>Structure each answer as: <strong>question as H3 → direct answer in first sentence → deeper explanation in the rest of the paragraph</strong>.</li>
  <li>Avoid fluffy introductions. AI picks the most direct answer.</li>
</ol>

<h3>Step 3: Build credible mentions (citations)</h3>
<ol>
  <li>Make sure you're on the most important directories with exactly the same NAP.</li>
  <li>Actively seek press mentions or guest posts in local media — a mention in a local newspaper is a strong E-E-A-T signal.</li>
  <li>Respond to reviews with specific details about the job — it increases the content richness of your review responses.</li>
</ol>

<h3>Step 4: Optimise your Google Business Profile for AI</h3>
<ol>
  <li>Write a <strong>detailed business description</strong> — 750 characters, include services, city and unique value proposition.</li>
  <li>Publish regular <strong>GBP posts</strong> with local context (mention city and industry).</li>
  <li>Answer all Q&amp;A questions with factual, specific answers.</li>
</ol>

<h3>Step 5: Strengthen your content's E-E-A-T</h3>
<ol>
  <li>Include <strong>case studies or customer results</strong> with specific numbers — AI favours verifiable information.</li>
  <li>Mention your experience, certifications and team — not as bragging, but as factual statements.</li>
  <li>Link to relevant authoritative sources — it strengthens credibility.</li>
</ol>

<div class="summary-box">
  <h4>Summary</h4>
  <ul>
    <li><strong>AI Overviews</strong> are changing how local businesses are found — already affecting click-through rates</li>
    <li><strong>AEO</strong> = optimise to become the answer, not just rank in the list</li>
    <li><strong>GEO</strong> = show up in generative AI systems (Gemini, ChatGPT, Perplexity)</li>
    <li>On-page content (24%) is the most important factor for AI visibility</li>
    <li>Structured data (JSON-LD schema) is the most direct technical action you can take</li>
    <li>Strong reviews + consistent NAP + FAQ format = AI-ready content</li>
  </ul>
</div>

<p>Want to know if your website is ready for AI search? <a href="/en/book">Book a free analysis call</a> — we'll review your current visibility and give you a concrete plan.</p>

<p>Read also: <a href="/en/blog/how-to-rank-on-google-maps-2026">How to Rank on Google Maps in 2026</a> and <a href="/en/blog/how-to-get-more-google-reviews">How to Get More Google Reviews</a>.</p>
`,
};

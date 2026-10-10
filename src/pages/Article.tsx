import { Link, useParams } from "react-router-dom";
import { getArticleBySlug } from "../data/articles";
import { getProductBySlug } from "../data/products";
import type { Product } from "../data/products";
import type { ReactNode } from "react";

/**
 * Internal links from buyer guides to the product pages they describe —
 * anchor text is the (Custom…) product name so relevance passes through.
 */
const RELATED: Record<string, string[]> = {
  "custom-cosmetic-bags-guide": [
    "custom-pvc-bags",
    "custom-velvet-pouches",
  ],
  "custom-soap-packaging-guide": [
    "kraft-paper-shopping-bag",
    "magnetic-closure-gift-box",
  ],
  "custom-shopping-bags-guide": [
    "kraft-paper-shopping-bag",
    "luxury-gift-box-ribbon",
  ],
  "how-to-vet-a-packaging-manufacturer": [
    "custom-velvet-pouches",
    "magnetic-closure-gift-box",
  ],
  "custom-printed-boxes-guide": [
    "magnetic-closure-gift-box",
    "custom-ring-boxes",
  ],
  "custom-rigid-boxes-guide": [
    "magnetic-closure-gift-box",
    "custom-ring-boxes",
  ],
  "packaging-inserts-guide": [
    "magnetic-closure-gift-box",
    "custom-watch-boxes",
  ],
  "custom-tissue-paper-guide": [
    "magnetic-closure-gift-box",
    "custom-ring-boxes",
  ],
  "custom-jewelry-packaging-guide": [
    "custom-velvet-pouches",
    "magnetic-closure-gift-box",
  ],
  "magnetic-gift-boxes-guide": [
    "magnetic-closure-gift-box",
    "custom-watch-boxes",
  ],
  "velvet-satin-muslin-pouches-compared": [
    "custom-velvet-pouches",
    "custom-satin-pouches",
    "custom-muslin-drawstring-pouch",
  ],
  "custom-candle-boxes-guide": [
    "magnetic-closure-gift-box",
    "luxury-gift-box-ribbon",
  ],
  "jewelry-display-trays-guide": [
    "stackable-jewelry-tray",
    "velvet-jewelry-display-set",
    "velvet-necklace-display",
  ],
  "custom-logo-pouches-guide": [
    "custom-cotton-pouches",
    "custom-velvet-pouches",
  ],
  "custom-gift-card-boxes-guide": [
    "magnetic-closure-gift-box",
    "luxury-gift-box-ribbon",
  ],
  "surface-finishes-compared-guide": [
    "magnetic-closure-gift-box",
    "custom-ring-boxes",
  ],
  "custom-printed-ribbon-guide": [
    "luxury-gift-box-ribbon",
    "magnetic-closure-gift-box",
  ],
  "custom-muslin-bags-guide": [
    "custom-muslin-drawstring-pouch",
    "custom-cotton-pouches",
  ],
  "custom-ring-boxes-guide": [
    "custom-ring-boxes",
    "magnetic-closure-gift-box",
    "luxury-gift-box-ribbon",
  ],
  "die-cutting-and-dielines-guide": [
    "magnetic-closure-gift-box",
    "custom-perfume-boxes",
  ],
  "magnetic-closure-vs-ribbon-tie-gift-boxes": [
    "magnetic-closure-gift-box",
    "luxury-gift-box-ribbon",
  ],
  "compare-multi-component-gift-set-packaging-quotes": [
    "magnetic-closure-gift-box",
    "custom-cotton-pouches",
    "luxury-gift-box-ribbon",
  ],
  "how-to-choose-a-custom-jewelry-pouch": [
    "custom-velvet-pouches",
    "custom-cotton-pouches",
    "leather-envelope-pouch",
  ],
  "how-to-choose-custom-drawstring-bags": [
    "custom-velvet-pouches",
    "custom-cotton-pouches",
  ],
  "custom-hair-extension-packaging-guide": [
    "custom-satin-wig-bag",
    "custom-velvet-pouches",
    "custom-cotton-envelope-pouches",
  ],
  "custom-clothing-apparel-packaging-guide": ["kraft-paper-shopping-bag", "luxury-gift-box-ribbon"],
  "custom-gift-packaging-guide": [
    "magnetic-closure-gift-box",
    "luxury-gift-box-ribbon",
    "velvet-jewelry-display-set",
  ],
  "how-to-read-a-packaging-specification-sheet": [
    "magnetic-closure-gift-box",
    "custom-velvet-pouches",
  ],
  "packaging-colour-tolerance-explained": [
    "luxury-gift-box-ribbon",
    "custom-velvet-pouches",
  ],
  "how-to-customize-eyelash-boxes": [
    "custom-eyelash-packaging-boxes",
    "custom-press-on-nail-boxes",
    "magnetic-closure-gift-box",
  ],
  "hair-extension-packaging-ideas": [
    "custom-hair-extension-boxes",
    "custom-satin-wig-bag",
    "custom-cotton-envelope-pouches",
  ],
  "custom-packaging-moq-oem-odm-logo-guide": [
    "custom-velvet-pouches",
    "magnetic-closure-gift-box",
    "custom-pvc-bags",
  ],
  "how-to-choose-custom-jewelry-boxes": [
    "custom-ring-boxes",
    "black-leather-jewelry-box",
    "custom-white-jewelry-box",
  ],
  "custom-cosmetic-packaging-guide": [
    "custom-eyelash-packaging-boxes",
    "custom-press-on-nail-boxes",
    "custom-perfume-boxes",
  ],
  "custom-perfume-packaging-guide": [
    "custom-perfume-boxes",
    "custom-perfume-sample-card-boxes",
    "custom-satin-pouches",
  ],
  "press-on-nail-packaging-guide": [
    "custom-press-on-nail-boxes",
    "custom-eyelash-packaging-boxes",
    "custom-pvc-bags",
  ],
  "custom-wig-packaging-guide": [
    "custom-satin-wig-bag",
    "custom-hair-extension-boxes",
    "custom-cotton-envelope-pouches",
  ],
  "custom-packaging-samples-guide": [
    "custom-velvet-pouches",
    "magnetic-closure-gift-box",
    "custom-eyelash-packaging-boxes",
  ],
  "valentines-day-packaging-timeline": [
    "magnetic-closure-gift-box",
    "custom-velvet-pouches",
    "luxury-gift-box-ribbon",
  ],
  "subscription-box-packaging-cost": [
    "magnetic-closure-gift-box",
    "custom-velvet-pouches",
    "custom-cotton-pouches",
  ],
  "subscription-box-packaging-buyers-guide": [
    "magnetic-closure-gift-box",
    "custom-velvet-pouches",
    "custom-muslin-drawstring-pouch",
  ],
  "candle-subscription-box-packaging": [
    "magnetic-closure-gift-box",
    "custom-cotton-pouches",
    "luxury-gift-box-ribbon",
  ],
  "beauty-subscription-box-contents": [
    "custom-velvet-pouches",
    "custom-pvc-bags",
    "custom-perfume-boxes",
  ],
};

/**
 * Curated in-text anchors: article slug → { phrase: product slug }.
 * The first occurrence of each phrase in a body paragraph becomes a text
 * link to that product page; headings, lists and later occurrences stay
 * plain so links read naturally and never cluster.
 */
const ANCHORS: Record<string, Record<string, string>> = {
  "surface-finishes-compared-guide": {
    "magnetic flip-top": "magnetic-closure-gift-box",
  },
  "custom-packaging-moq-sample-lead-times-2026": {
    "custom drawstring bags": "custom-muslin-drawstring-pouch",
    "custom eyelash packaging": "custom-eyelash-packaging-boxes",
    "custom perfume boxes": "custom-perfume-boxes",
    "Jewellery pouches": "custom-velvet-pouches",
  },
  "how-to-choose-a-custom-jewelry-pouch": {
    "velvet and suede": "custom-velvet-pouches",
    "cotton, muslin and linen": "custom-cotton-pouches",
  },
  "how-to-choose-custom-drawstring-bags": {
    "muslin bags": "custom-muslin-drawstring-pouch",
    "velvet and suede": "custom-velvet-pouches",
    "cotton, muslin and linen": "custom-cotton-pouches",
  },
  "custom-hair-extension-packaging-guide": {
    "drawstring pouch": "custom-satin-wig-bag",
    "velvet and suede": "custom-velvet-pouches",
  },
  "custom-clothing-apparel-packaging-guide": {
    "velvet and suede": "custom-velvet-pouches",
  },
  "how-to-read-a-packaging-specification-sheet": {
    "a shopping bag": "kraft-paper-shopping-bag",
    "a ribbon or textile closure": "luxury-gift-box-ribbon",
  },
  "how-to-customize-eyelash-boxes": {
    "eyelash boxes": "custom-eyelash-packaging-boxes",
    "magnetic flip-top": "magnetic-closure-gift-box",
  },
  "hair-extension-packaging-ideas": {
    "hair extension packaging": "custom-hair-extension-boxes",
  },
  "how-to-choose-custom-jewelry-boxes": {
    "magnetic flip-top": "magnetic-closure-gift-box",
    "ribbon tie": "luxury-gift-box-ribbon",
    "faux leather wrap": "black-leather-jewelry-box",
  },
  "custom-cosmetic-packaging-guide": {
    "clear PVC zip bags": "custom-pvc-bags",
    "magnetic flip-tops": "magnetic-closure-gift-box",
  },
  "custom-perfume-packaging-guide": {
    "rigid perfume boxes": "custom-perfume-boxes",
    "printed sample cards": "custom-perfume-sample-card-boxes",
    "satin pouch": "custom-satin-pouches",
  },
  "press-on-nail-packaging-guide": {
    "press-on nail box": "custom-press-on-nail-boxes",
  },
  "custom-wig-packaging-guide": {
    "satin drawstring wig bag": "custom-satin-wig-bag",
    "magnetic flip-top": "magnetic-closure-gift-box",
  },
  "valentines-day-packaging-timeline": {
    "subscription box packaging": "/subscription-box-packaging",
  },
  "subscription-box-packaging-cost": {
    "subscription box packaging": "/subscription-box-packaging",
  },
  "subscription-box-packaging-buyers-guide": {
    "subscription box packaging": "/subscription-box-packaging",
    "magnetic flip-top": "magnetic-closure-gift-box",
    "cotton 200–400 gsm": "custom-cotton-pouches",
  },
  "candle-subscription-box-packaging": {
    "candle subscription box": "/subscription-box-packaging",
    "velvet pouch": "custom-velvet-pouches",
  },
  "beauty-subscription-box-contents": {
    "beauty subscription box": "/subscription-box-packaging",
    "velvet pouch": "custom-velvet-pouches",
    "clear PVC zip bag": "custom-pvc-bags",
  },
};

function relatedProducts(slug: string | undefined): Product[] {
  if (!slug) return [];
  return (RELATED[slug] ?? [])
    .map((s) => getProductBySlug(s))
    .filter((p): p is Product => p !== undefined);
}

/** In-text anchor context: phrase → product slug map plus which phrases already linked. */
type AnchorCtx = { anchors: Record<string, string>; used: Set<string> };

/** Link the earliest unused anchor phrase in `text`, then recurse over the rest. */
function linkify(text: string, keyPrefix: string, ctx: AnchorCtx): ReactNode[] {
  const hit = Object.entries(ctx.anchors)
    .filter(([phrase]) => !ctx.used.has(phrase) && text.includes(phrase))
    .sort((a, b) => text.indexOf(a[0]) - text.indexOf(b[0]) || b[0].length - a[0].length)[0];
  if (!hit) return [text];
  const [phrase, slug] = hit;
  const at = text.indexOf(phrase);
  ctx.used.add(phrase);
  return [
    ...(at > 0 ? [text.slice(0, at)] : []),
    <Link key={`${keyPrefix}-a`} to={slug.startsWith("/") ? slug : `/products/${slug}`} className="text-link">
      {phrase}
    </Link>,
    ...linkify(text.slice(at + phrase.length), `${keyPrefix}-r`, ctx),
  ];
}

/** Render **bold** and *italic* inline markup, plus in-text anchors when ctx is given. */
function inline(text: string, keyPrefix: string, ctx?: AnchorCtx): ReactNode[] {
  const nodes: ReactNode[] = [];
  const push = (segment: string, key: string) => {
    if (ctx) nodes.push(...linkify(segment, key, ctx));
    else nodes.push(segment);
  };
  const re = /\[([^\]]+)\]\((https?:\/\/[^)]+|\/[^)]+)\)|\*\*(.+?)\*\*|\*(.+?)\*/g;
  let last = 0;
  let m: RegExpExecArray | null = null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) push(text.slice(last, m.index), `${keyPrefix}-t${i}`);
    if (m[1] !== undefined) nodes.push(<a key={`${keyPrefix}-a${i}`} href={m[2]} className="text-link">{m[1]}</a>);
    else if (m[3] !== undefined) nodes.push(<strong key={`${keyPrefix}-b${i}`}>{m[3]}</strong>);
    else nodes.push(<em key={`${keyPrefix}-i${i}`}>{m[4]}</em>);
    last = m.index + m[0].length;
    i++;
  }
  if (last < text.length) push(text.slice(last), `${keyPrefix}-t`);
  return nodes;
}

/** URL-safe anchor id for a heading: lowercase, non-alphanumerics to dashes. */
const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

/** Extract `## H2` headings (excluding h3) for the table of contents. */
function tocEntries(body: string): { id: string; text: string }[] {
  return body
    .split("\n")
    .filter((l) => l.startsWith("## "))
    .map((l) => {
      const text = l.slice(3).replace(/\*\*|\*/g, "");
      return { id: slugify(text), text };
    });
}

/** True for a markdown pipe-table row like `| a | b |`. */
const isTableRow = (line: string) => /^\|.*\|$/.test(line.trim());
/** True for the separator row like `| --- | --- |`. */
const isTableDivider = (line: string) => /^\|(\s*:?-{3,}:?\s*\|)+$/.test(line.trim());
const splitRow = (line: string) =>
  line.trim().slice(1, -1).split("|").map((c) => c.trim());

function renderBody(body: string, anchors: Record<string, string> = {}): ReactNode[] {
  const ctx: AnchorCtx = { anchors, used: new Set() };
  const lines = body.split("\n");
  const out: ReactNode[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;

  const flush = () => {
    if (!list) return;
    const Tag = list.ordered ? "ol" : "ul";
    out.push(
      <Tag key={`l${out.length}`}>
        {list.items.map((item, i) => (
          <li key={i}>{inline(item, `li${out.length}-${i}`)}</li>
        ))}
      </Tag>
    );
    list = null;
  };

  const flushTable = () => {
    const rows = tableRows.map(splitRow);
    tableRows = [];
    out.push(
      <div className="article-table-wrap" key={`tw${out.length}`}>
        <table className="article-table">
          <thead>
            <tr>{rows[0].map((h, i) => <th key={i}>{inline(h, `th${out.length}-${i}`)}</th>)}</tr>
          </thead>
          <tbody>
            {rows.slice(1).map((r, ri) => (
              <tr key={ri}>{r.map((c, ci) => <td key={ci}>{inline(c, `td${out.length}-${ri}-${ci}`)}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  let tableRows: string[] = [];
  let quote: string[] | null = null;

  const flushQuote = () => {
    if (!quote) return;
    out.push(
      <blockquote key={`q${out.length}`} className="article-quote">
        {quote.map((q, i) => (
          <p key={i}>{inline(q, `q${out.length}-${i}`)}</p>
        ))}
      </blockquote>
    );
    quote = null;
  };


  lines.forEach((raw) => {
    const line = raw.trimEnd();
    if (isTableRow(line)) {
      if (tableRows.length === 1 && isTableDivider(line)) return; // header divider consumed
      if (isTableDivider(line)) return;
      flushQuote();
      flush();
      tableRows.push(line);
      return;
    }
    if (tableRows.length) flushTable();
    if (!line.trim()) {
      flushQuote();
      flush();
      return;
    }
    const bq = line.match(/^>\s?(.*)$/);
    if (bq) {
      quote = quote ?? [];
      quote.push(bq[1]);
      return;
    }
    flushQuote();
    const ol = line.match(/^(\d+)\.\s+(.*)$/);
    const ul = line.match(/^-\s+(.*)$/);
    if (ol) {
      if (!list || !list.ordered) {
        flush();
        list = { ordered: true, items: [] };
      }
      list.items.push(ol[2]);
      return;
    }
    if (ul) {
      if (!list || list.ordered) {
        flush();
        list = { ordered: false, items: [] };
      }
      list.items.push(ul[1]);
      return;
    }
    flush();
    const figure = line.match(/^!\[([^\]]*)\]\((\/[^)\s]+)\)$/);
    if (figure) {
      out.push(
        <figure key={`fig${out.length}`} className="article-figure">
          <img src={figure[2]} alt={figure[1]} width={1200} height={675} loading="lazy" />
          {figure[1] ? <figcaption>{figure[1]}</figcaption> : null}
        </figure>
      );
    } else if (line.startsWith("### ")) out.push(<h3 key={out.length} id={slugify(line.slice(4).replace(/\*\*|\*/g, ""))}>{inline(line.slice(4), `h3${out.length}`)}</h3>);
    else if (line.startsWith("## ")) out.push(<h2 key={out.length} id={slugify(line.slice(3).replace(/\*\*|\*/g, ""))}>{inline(line.slice(3), `h2${out.length}`)}</h2>);
    else out.push(<p key={out.length}>{inline(line, `p${out.length}`, ctx)}</p>);
  });
  if (tableRows.length) flushTable();
  flushQuote();
  flush();
  return out;
}

export default function Article() {
  const { slug } = useParams();
  const article = slug ? getArticleBySlug(slug) : undefined;
  const related = relatedProducts(slug);

  if (!article) {
    return (
      <section className="section">
        <div className="container">
          <h1 className="section-title">Article not found</h1>
          <p style={{ textAlign: "center" }}>
            <Link to="/news" className="text-link">Back to News &amp; Insights <span className="text-link-arrow">→</span></Link>
          </p>
        </div>
      </section>
    );
  }

  const fontClass = article.fontFamily === "Arial" ? " article-font-arial" : "";
  const toc = tocEntries(article.body);

  return (
    <>
      <section className={`page-header${fontClass}`}>
        <div className="container">
          <p className="eyebrow reveal">{article.category}</p>
          <h1 className="page-title reveal reveal-delay-1">{article.title}</h1>
          <div className="news-meta reveal reveal-delay-2" style={{ justifyContent: "center" }}>
            <span>{article.date}</span>
            <span className="news-meta-dot" />
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      <section className={`section article-section${fontClass}`}>
        <div className="container article-container">
          <figure className="landing-hero">
            <img src={article.image} alt={article.imageAlt} width={article.imageWidth ?? 1600} height={article.imageHeight ?? 1000} />
          </figure>
          {toc.length >= 3 && (
            <nav className="article-toc" aria-label="Table of contents">
              <p className="article-toc-title">In this guide</p>
              <ol>
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="text-link">{t.text}</a>
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <div className="article-body">{renderBody(article.body, ANCHORS[article.slug])}</div>
          {related.length > 0 && (
            <div className="article-related reveal">
              <h2>Related products</h2>
              <ul className="spec-list">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link to={`/products/${p.slug}`} className="text-link">
                      {p.name} <span className="text-link-arrow">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p className="article-back">
            <Link to="/news" className="text-link">Back to News &amp; Insights <span className="text-link-arrow">→</span></Link>
          </p>
        </div>
      </section>
    </>
  );
}

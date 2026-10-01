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
};

function relatedProducts(slug: string | undefined): Product[] {
  if (!slug) return [];
  return (RELATED[slug] ?? [])
    .map((s) => getProductBySlug(s))
    .filter((p): p is Product => p !== undefined);
}

/** Render **bold** and *italic* inline markup. */
function inline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\*(.+?)\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1] !== undefined) nodes.push(<strong key={`${keyPrefix}-b${i}`}>{m[1]}</strong>);
    else nodes.push(<em key={`${keyPrefix}-i${i}`}>{m[2]}</em>);
    last = m.index + m[0].length;
    i++;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function renderBody(body: string): ReactNode[] {
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

  lines.forEach((raw) => {
    const line = raw.trimEnd();
    if (!line.trim()) {
      flush();
      return;
    }
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
    if (line.startsWith("### ")) out.push(<h3 key={out.length}>{inline(line.slice(4), `h3${out.length}`)}</h3>);
    else if (line.startsWith("## ")) out.push(<h2 key={out.length}>{inline(line.slice(3), `h2${out.length}`)}</h2>);
    else out.push(<p key={out.length}>{inline(line, `p${out.length}`)}</p>);
  });
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

  return (
    <>
      <section className="page-header">
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

      <section className="section article-section">
        <div className="container article-container">
          <figure className="landing-hero reveal">
            <img src={article.image} alt={article.imageAlt} width={1600} height={1000} />
          </figure>
          <div className="article-body reveal">{renderBody(article.body)}</div>
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

import { useEffect } from "react";

const sections: { heading: string; paragraphs: string[]; bullets?: string[] }[] = [
  {
    heading: "1. Information you share with us",
    paragraphs: [
      "When you send an inquiry through our contact form, or write to us by email or WhatsApp, we receive the information you provide — typically your name, email address, and, if you choose to share them, your phone or WhatsApp number, company or brand name, and the details of your packaging request (product type, quantity, dimensions, materials, logo artwork and destination). The form's required fields are your name, email address and message; all other fields are optional.",
    ],
  },
  {
    heading: "2. Information collected automatically",
    paragraphs: [
      "We use Google Analytics 4 to understand how visitors use this website — for example, which pages are visited and how visitors reach them. In our GA4 settings, event data and user data are each retained for 14 months.",
    ],
  },
  {
    heading: "3. How we use your information",
    paragraphs: ["We use the information you share only to:"],
    bullets: [
      "reply to your inquiry and prepare a written quotation (within one business day, Monday–Friday, China time);",
      "discuss structure, materials, samples and production for your specification;",
      "arrange samples and delivery for your order.",
    ],
  },
  {
    heading: "4. Who we share it with",
    paragraphs: [
      "We share your information only where needed to answer your inquiry or fulfil your order — for example, with Web3Forms, the form service that delivers this website's contact-form submissions to our email inbox, and with the analytics provider named in section 2.",
    ],
  },
  {
    heading: "5. International transfers",
    paragraphs: [
      "ELAPACK operates from China. If you contact us from Europe or the United Kingdom, the information you send us will be processed in China so that we can reply to your inquiry.",
    ],
  },
  {
    heading: "6. How long we keep it",
    paragraphs: [
      "We keep inquiry records for up to 24 months. If an inquiry does not lead to an order, we delete the record once 24 months have passed. If you place an order, the records relating to that order are kept with our order files for as long as needed for fulfilment, after-sales service and our legal obligations.",
    ],
  },
  {
    heading: "7. Your rights",
    paragraphs: [
      "If you are in Europe or the United Kingdom, you may ask us to provide a copy of the personal information we hold about you, correct it, delete it, restrict how we use it, or object to our use of it. To make a request, write to tina@elapack.com. You also have the right to complain to your local data protection authority.",
    ],
  },
  {
    heading: "8. Children",
    paragraphs: [
      "This website is for business buyers. We do not knowingly collect information from anyone under 18.",
    ],
  },
  {
    heading: "9. Changes to this policy",
    paragraphs: [
      "We will update this page when how we handle information changes, and change the “Last updated” date above.",
    ],
  },
  {
    heading: "10. Contact us",
    paragraphs: [
      "For any question about this policy or your information, contact: ELAPACK — Wuxi Magic Packaging Co., Ltd., Wuxi, Jiangsu, China · Email: tina@elapack.com · Phone / WhatsApp: +86 186 2635 2096",
    ],
  },
];

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | ELAPACK";
  }, []);

  return (
    <>
      <section className="page-header page-header-alt">
        <div className="container">
          <p className="eyebrow reveal">Legal</p>
          <h1 className="page-title reveal reveal-delay-1">Privacy Policy</h1>
          <p className="page-subtitle reveal reveal-delay-2">
            {/* Publication date is filled in at release time. */}
            Last updated: [publication date — to be filled in at release]
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "820px" }}>
          <p className="about-text reveal">
            ELAPACK is the custom packaging brand of{" "}
            <strong>Wuxi Magic Packaging Co., Ltd.</strong>, based in Wuxi,
            Jiangsu, China. This policy explains what information we collect
            when you use elapack.com, how we use it, and the choices you have.
            It applies to this website only.
          </p>
          {sections.map((section) => (
            <div key={section.heading}>
              <h2
                className="section-title"
                style={{ marginTop: "2rem", fontSize: "1.35rem" }}
              >
                {section.heading}
              </h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 32)} className="about-text">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="about-text" style={{ paddingLeft: "1.25rem" }}>
                  {section.bullets.map((b) => (
                    <li key={b.slice(0, 32)}>{b}</li>
                  ))}
                </ul>
              )}
              {section.heading === "3. How we use your information" && (
                <p className="about-text">
                  We do not sell your personal information, and we do not
                  publish inquiry details.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

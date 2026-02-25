import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Partnership Program - Join Entrext Core Team | Non-Tech Founders, Creators & Builders",
  description: "Join Entrext's core team formation model as a non-tech founder, content creator, or technical builder. Co-own and co-create AI-powered products with zero upfront cost. Expert team support, long-term equity partnership, and scalability focused growth.",
  keywords: [
    "partnership program",
    "core team formation",
    "non-tech founder partnership",
    "content creator collaboration",
    "technical co-founder",
    "startup equity partnership",
    "zero upfront cost",
    "co-founder opportunity",
    "startup core team",
    "product partnership",
    "AI product partnership",
    "tech startup collaboration",
    "founder matching",
    "startup incubator partnership"
  ],
  openGraph: {
    title: "Partnership Program - Join Entrext Core Team",
    description: "Co-own and co-create innovative AI-powered products. Join as a non-tech founder, content creator, or technical builder with zero upfront cost.",
    url: "https://www.entrext.com/partnerships",
    type: "website",
    images: [
      {
        url: "/1.png",
        width: 1200,
        height: 630,
        alt: "Entrext Partnership Program"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partnership Program - Join Entrext Core Team",
    description: "Co-create AI products with expert team support. Zero upfront cost, long-term equity.",
    images: ["/1.png"],
  },
  alternates: {
    canonical: "https://www.entrext.com/partnerships",
  },
};

export default function PartnershipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Partnership-specific structured data
  const partnershipSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Partnership Program - Entrext",
    "description": "Join Entrext's core team formation model. Partner as a non-tech founder, content creator, or technical builder to co-create AI-powered products.",
    "url": "https://www.entrext.com/partnerships",
    "mainEntity": {
      "@type": "Product",
      "name": "Entrext Partnership Program",
      "description": "Core team formation model for building AI-powered tech products",
      "offers": [
        {
          "@type": "Offer",
          "name": "Non-Tech Founder Partnership",
          "description": "You have a clear idea or sharp problem insight. Strong in sales, distribution, or brand but lack a tech team. We'll co-build the product with you.",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "Content Creator Partnership",
          "description": "Natural communicator with loyal audience. Be the face or voice of a product co-created around your community.",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "Technical Builder Partnership",
          "description": "Engineer, designer, or product mind looking to co-create meaningful tech at the founding stage.",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Entrext Product Partnership Model?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's a builder-first partnership model. We work with people who have strong ideas, unique reach, or deep skills — and want to co-create something meaningful. Whether you're from sales, branding, marketing, content, or tech, we partner to build real products together."
        }
      },
      {
        "@type": "Question",
        "name": "Who do you partner with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with three kinds of people: Non-tech founders with clear problems or ideas who bring strengths in branding, sales, or distribution; Content creators who are great at storytelling and connecting with audiences; Tech builders who are strong in development, product, or engineering."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to invest money to partner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually, no upfront money is needed. But if your product idea has fixed third-party costs (like external APIs or cloud services), you may need to cover those. We keep it transparent and figure it out together."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a product?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We aim to launch a working first version (MVP) in 2 to 4 months. If the idea is super focused, we might move even faster. We believe in building quickly, learning from users, and improving as we go."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="partnership-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnershipSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}

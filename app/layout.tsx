import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./(components)/Header";
import { Footer } from "./(components)/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.entrext.com'), // Replace with actual domain
  title: {
    default: "Entrext - AI-Powered Product Studio | Build Tech Products with Core Team Partners",
    template: "%s | Entrext"
  },
  description: "Entrext is a product studio building micro & macro tech products for the next decade. Partner with us to build AI-powered apps and tools. Join as a non-tech founder, content creator, or technical builder. Zero upfront cost, long-term equity partnership.",
  keywords: [
    "product studio",
    "AI product development",
    "tech startup partnership",
    "non-tech founder",
    "content creator partnership",
    "technical co-founder",
    "startup equity partnership",
    "AI-powered applications",
    "tech product development",
    "micro SaaS",
    "startup incubator",
    "product development studio",
    "co-founder matching",
    "startup core team",
    "zero upfront cost startup",
    "entrepreneur partnership",
    "AI-powered tools",
    "tech product studio"
  ],
  authors: [{ name: "Entrext Team" }],
  creator: "Entrext",
  publisher: "Entrext",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.entrext.com",
    title: "Entrext - AI-Powered Product Studio for Entrepreneurs",
    description: "Build the next generation of tech products with Entrext. Partner as a non-tech founder, content creator, or technical builder. Zero upfront cost, full equity partnership.",
    siteName: "Entrext",
    images: [
      {
        url: "/1.png",
        width: 1200,
        height: 630,
        alt: "Entrext - Entrepreneur's Next Product Studio"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrext - AI-Powered Product Studio",
    description: "Build tech products with core team partnerships. Zero upfront cost, long-term equity.",
    images: ["/1.png"],
    creator: "@entrext", // Add your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/1.png",
    shortcut: "/1.png",
    apple: "/1.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.entrext.com",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for Organization (for AI/AEO)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Entrext",
    "alternateName": "Entrepreneur's Next",
    "url": "https://www.entrext.com",
    "logo": "https://www.entrext.com/1.png",
    "description": "AI-powered product studio building micro and macro tech products. We partner with non-tech founders, content creators, and technical builders to co-create innovative applications and tools.",
    "foundingDate": "2024",
    "slogan": "Entrepreneur's Next - Building Tomorrow's Tech Products",
    "sameAs": [
      // Add your social media URLs here
      "https://twitter.com/entrext",
      "https://linkedin.com/company/entrext",
      "https://discord.gg/entrext"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Business Inquiries",
      "availableLanguage": ["English"]
    },
    "knowsAbout": [
      "AI Product Development",
      "Startup Partnerships",
      "Product Studio Services",
      "Tech Product Development",
      "Micro SaaS",
      "Co-founder Matching"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Entrext",
    "url": "https://www.entrext.com",
    "description": "A product studio that turns everyday problems into smart, useful apps and tools. Powered by AI, Community & People.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.entrext.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Product Development Studio",
    "provider": {
      "@type": "Organization",
      "name": "Entrext"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Partnership Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Non-Tech Founder Partnership",
            "description": "Partner with us as a non-tech founder to build your product idea with zero upfront cost and equity ownership"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Creator Partnership",
            "description": "Collaborate as a content creator or marketer to co-create and promote innovative tech products"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical Builder Partnership",
            "description": "Join as a technical builder or operator to lead product development from day one"
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DQPBVC4XKN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DQPBVC4XKN');
          `}
        </Script>

        {/* Structured Data for AI/SEO */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

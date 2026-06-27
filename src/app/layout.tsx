import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const siteUrl = "https://parighar.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pari Ghar Guest House — Gilung, Lamjung, Nepal",
    template: "%s | Pari Ghar Guest House",
  },
  description:
    "Book mountain view rooms at Pari Ghar Guest House in Gilung, Lamjung, Nepal. Homestay with Himalayan views, home-grown food, free WiFi, and authentic Nepali village life. Family-friendly guest house near Pokhara.",
  keywords: [
    "Pari Ghar",
    "Pari Ghar Guest House",
    "Gilung guest house",
    "Lamjung homestay",
    "Nepal mountain guest house",
    "Gilung Lamjung",
    "homestay near Pokhara",
    "Nepal village stay",
    "Lamjung accommodation",
    "mountain view room Nepal",
    "parighar",
    "parighar gilung",
    "Kwholasothar",
    "budget guest house Nepal",
    "Himalayan view guest house",
  ],
  authors: [{ name: "Pari Ghar Guest House" }],
  creator: "Pari Ghar Guest House",
  publisher: "Pari Ghar Guest House",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Pari Ghar Guest House",
    title: "Pari Ghar Guest House — Gilung, Lamjung, Nepal",
    description:
      "Book mountain view rooms at Pari Ghar Guest House in Gilung, Lamjung. Himalayan views, home-grown food, and authentic Nepali village life.",
    url: siteUrl,
    images: [
      {
        url: "/images/booking-1.jpg",
        width: 1024,
        height: 768,
        alt: "Pari Ghar Guest House mountain view",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pari Ghar Guest House — Gilung, Lamjung, Nepal",
    description:
      "Mountain guest house in Gilung, Lamjung with Himalayan views, home-grown food, and authentic Nepali hospitality.",
    images: ["/images/booking-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${cormorant.variable} antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <link rel="icon" href="/logo.jpg" sizes="any" type="image/jpeg" />
        <meta name="theme-color" content="#0f4a23" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Pari Ghar Guest House",
              alternateName: "Pari Ghar Homestay",
              description:
                "A cozy mountain guest house in Gilung, Lamjung, Nepal. Enjoy Himalayan views, home-grown food, free WiFi, and authentic Nepali village life.",
              url: siteUrl,
              telephone: "+977-9816614735",
              email: "parighar@gmail.com",
              image: [
                `${siteUrl}/images/booking-1.jpg`,
                `${siteUrl}/images/booking-2.jpg`,
                `${siteUrl}/images/booking-3.jpg`,
                `${siteUrl}/images/booking-4.jpg`,
                `${siteUrl}/images/booking-5.jpg`,
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Gilung-9, Kwholasothar Rural Municipality",
                addressLocality: "Lamjung",
                addressRegion: "Gandaki Province",
                postalCode: "33606",
                addressCountry: "NP",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 28.212,
                longitude: 84.256,
              },
              priceRange: "NPR 2,659+ per night",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "10",
                bestRating: "10",
                ratingCount: "3",
              },
              amenity: [
                "Free WiFi",
                "Free Parking",
                "Private Bathroom",
                "Mountain View",
                "Terrace",
                "Room Service",
                "Vegetarian Breakfast",
                "Bicycle Hire",
              ],
              checkinTime: "14:00",
              checkoutTime: "12:00",
              sameAs: [
                "https://web.facebook.com/parighar.gilung",
                "https://www.instagram.com/parighar_gilung/",
              ],
              knowsAbout: [
                "Ishaneshwor Mahadev Temple",
                "Begnas Lake",
                "Lamjung Hiking Trails",
                "Nepali Village Life",
                "Home-grown Food",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}

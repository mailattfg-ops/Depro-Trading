import React from 'react';

export default function JsonLd() {
    const businessData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Depro Trading",
        "image": "https://deprotrading.com/Images/logo.svg",
        "@id": "https://deprotrading.com",
        "url": "https://deprotrading.com",
        "telephone": "+91 80861 88200",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "NK Complex, Chattiparamba, Kodur PO",
            "addressLocality": "Malappuram",
            "postalCode": "676504",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 10.999454,
            "longitude": 76.087224
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://facebook.com/deprotrading",
            "https://instagram.com/deprotrading"
        ],
        "priceRange": "$$"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
        />
    );
}

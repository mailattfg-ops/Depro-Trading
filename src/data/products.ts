export interface Product {
    id: number;
    name: string;
    category: string;
    price: string;
    image: string;
}

export const categories = [
    "All",
    "Door & Window Hardware",
    "Architectural Metals & Sections",
    "Furniture Fittings & Joinery",
    "Fasteners & Consumables",
    "Specialty Tools & Adhesives",
    "Safety & Workshop Supplies"
];

export const products: Product[] = [
    // 1. Door & Window Hardware
    { 
        id: 1, 
        name: "Mortise Lock Sets", 
        category: "Door & Window Hardware", 
        price: "Professional Grade", 
        image: "/Images/Mortise Lock Sets_11zon.jpg" 
    },
    { 
        id: 2, 
        name: "Hydraulic Door Closers", 
        category: "Door & Window Hardware", 
        price: "Heavy Duty", 
        image: "/Images/Hydraulic Door Closers_16_11zon.jpg" 
    },
    { 
        id: 3, 
        name: "Concealed/Butt Hinges", 
        category: "Door & Window Hardware", 
        price: "Multi-Weight", 
        image: "/Images/Concealed Butt Hinges2_11zon.jpg" 
    },
    { 
        id: 4, 
        name: "Tower Bolts (Flush & Surface)", 
        category: "Door & Window Hardware", 
        price: "Surface/Flush", 
        image: "/Images/Tower Bolts_40_11zon.jpg" 
    },
    { 
        id: 5, 
        name: "Magnetic/Roller Catches", 
        category: "Door & Window Hardware", 
        price: "High Stability", 
        image: "/Images/Magnetic Roller Catches_25_11zon.jpg" 
    },
    { 
        id: 6, 
        name: "Aluminum Window Rollers/Tracks", 
        category: "Door & Window Hardware", 
        price: "Sliding Systems", 
        image: "/Images/Aluminum Window Rollers Tracks_4_11zon.jpg" 
    },

    // 2. Architectural Metals & Sections
    { 
        id: 7, 
        name: "Aluminum Hollow Sections", 
        category: "Architectural Metals & Sections", 
        price: "Standard Profile", 
        image: "/Images/Aluminum Hollow Sections_2_11zon.jpg" 
    },
    { 
        id: 8, 
        name: "Stainless Steel (SS) Pipes/Tubes", 
        category: "Architectural Metals & Sections", 
        price: "Structural Grade", 
        image: "/Images/Stainless Steel Pipes Tubes_39_11zon.jpg" 
    },
    { 
        id: 9, 
        name: "Tharss (Brass) Decorative Inlay Strips", 
        category: "Architectural Metals & Sections", 
        price: "Premium Aesthetic", 
        image: "/Images/SS Flat Bars_37_11zon.webp" 
    },
    { 
        id: 10, 
        name: "Aluminum Angle Sections", 
        category: "Architectural Metals & Sections", 
        price: "Edge Protection", 
        image: "/Images/Aluminum Angle Sections_1_11zon.webp" 
    },
    { 
        id: 11, 
        name: "SS Flat Bars", 
        category: "Architectural Metals & Sections", 
        price: "Mounting Grade", 
        image: "/Images/SS Flat Bars_37_11zon.webp" 
    },
    { 
        id: 12, 
        name: "Aluminum Sliding Profiles", 
        category: "Architectural Metals & Sections", 
        price: "Partition System", 
        image: "/Images/Aluminum Sliding Profiles_3_11zon.jpg" 
    },

    // 3. Furniture Fittings & Joinery
    { 
        id: 13, 
        name: "Soft-Close Drawer Slides", 
        category: "Furniture Fittings & Joinery", 
        price: "Precision Motion", 
        image: "/Images/Soft-Close Drawer Slides_36_11zon.jpg" 
    },
    { 
        id: 14, 
        name: "Cabinet Handles", 
        category: "Furniture Fittings & Joinery", 
        price: "Bespoke Design", 
        image: "/Images/Cabinet Handles_7_11zon.webp" 
    },
    { 
        id: 15, 
        name: "Ball-Bearing Slides", 
        category: "Furniture Fittings & Joinery", 
        price: "Budget Friendly", 
        image: "/Images/Ball-Bearing Slides_5_11zon.jpg" 
    },
    { 
        id: 16, 
        name: "Shelf Pins/Supports", 
        category: "Furniture Fittings & Joinery", 
        price: "Multi-Fit", 
        image: "/Images/Shelf Pins Supports_34_11zon.jpg" 
    },
    { 
        id: 17, 
        name: "Furniture Cam Locks", 
        category: "Furniture Fittings & Joinery", 
        price: "Secure Storage", 
        image: "/Images/furniture Cam Locks_13_11zon.jpg" 
    },
    { 
        id: 18, 
        name: "Adjustable Furniture Levellers", 
        category: "Furniture Fittings & Joinery", 
        price: "Heavy Load", 
        image: "/Images/Hybrid Flooring_15_11zon.jpeg" 
    },

    // 4. Fasteners & Consumables
    { 
        id: 19, 
        name: "Drywall/Wood Screws (Black/Zinc)", 
        category: "Fasteners & Consumables", 
        price: "Black/Zinc Finish", 
        image: "/Images/Drywall Wood Screws_11_11zon.jpeg" 
    },
    { 
        id: 20, 
        name: "Self-Tapping Screws", 
        category: "Fasteners & Consumables", 
        price: "Fabrication Essential", 
        image: "/Images/Self-Tapping Screws_33_11zon.jpg" 
    },
    { 
        id: 21, 
        name: "Expansion Anchor Bolts", 
        category: "Fasteners & Consumables", 
        price: "Concrete Fixing", 
        image: "/Images/Expansion Anchor Bolts_12_11zon.jpg" 
    },
    { 
        id: 22, 
        name: "Stainless Steel Bolts & Nuts", 
        category: "Fasteners & Consumables", 
        price: "Corrosion Resistant", 
        image: "/Images/Stainless Steel Bolts & Nuts_38_11zon.jpg" 
    },
    { 
        id: 23, 
        name: "Blind Rivets (Aluminum)", 
        category: "Fasteners & Consumables", 
        price: "Permanent Fix", 
        image: "/Images/Blind Rivets Aluminum_6_11zon.webp" 
    },
    { 
        id: 24, 
        name: "Wall Plugs (PVC/Nylon)", 
        category: "Fasteners & Consumables", 
        price: "Bulk Pack", 
        image: "/Images/Wall Plugs_41_11zon.jpg" 
    },

    // 5. Specialty Tools & Adhesives
    { 
        id: 25, 
        name: "Instant Adhesives", 
        category: "Specialty Tools & Adhesives", 
        price: "Quick Bond", 
        image: "/Images/Instant Adhesives_17_11zon.jpg" 
    },
    { 
        id: 26, 
        name: "Silicone Sealants", 
        category: "Specialty Tools & Adhesives", 
        price: "Neutral/Weatherproof", 
        image: "/Images/Silicone Sealants_35_11zon.jpg" 
    },
    { 
        id: 27, 
        name: "HSS Drill Bits", 
        category: "Specialty Tools & Adhesives", 
        price: "Precision Drilling", 
        image: "/Images/HSS Drill Bits_14_11zon.jpg" 
    },
    { 
        id: 28, 
        name: "PU Expansion Foam", 
        category: "Specialty Tools & Adhesives", 
        price: "Gap Filling", 
        image: "/Images/PU Expansion Foam_31_11zon.jpg" 
    },
    { 
        id: 29, 
        name: "Professional Measuring Tapes", 
        category: "Specialty Tools & Adhesives", 
        price: "5m/8m Field Tool", 
        image: "/Images/Professional Measuring Tapes_29_11zon.jpg" 
    },
    { 
        id: 30, 
        name: "Contact Adhesive/Glue", 
        category: "Specialty Tools & Adhesives", 
        price: "Laminate Grade", 
        image: "/Images/Contact Adhesive Glu_9_11zon.jpg" 
    },

    // 6. Safety & Workshop Supplies
    { 
        id: 31, 
        name: "Cut-Resistant Safety Gloves", 
        category: "Safety & Workshop Supplies", 
        price: "Essential Safety", 
        image: "/Images/Cut-Resistant Safety Gloves_10_11zon.webp" 
    },
    { 
        id: 32, 
        name: "Safety Goggles", 
        category: "Safety & Workshop Supplies", 
        price: "High Impact", 
        image: "/Images/Safety Goggles_32_11zon.jpg" 
    },
    { 
        id: 33, 
        name: "Masking Tape", 
        category: "Safety & Workshop Supplies", 
        price: "Pro Protection", 
        image: "/Images/Masking Tape_27_11zon.jpg" 
    },
    { 
        id: 34, 
        name: "Abrasive Sanding Discs/Paper", 
        category: "Safety & Workshop Supplies", 
        price: "Finishing Grade", 
        image: "/Images/set-abrasive-tools-grinding-discs-600nw-2151197351-e1728305091443_11zon.webp" 
    },
    { 
        id: 35, 
        name: "Precision Spirit Levels", 
        category: "Safety & Workshop Supplies", 
        price: "Crucial Accuracy", 
        image: "/Images/Precision Spirit Levels_28_11zon.jpg" 
    },
    { 
        id: 36, 
        name: "Professional Work Belts", 
        category: "Safety & Workshop Supplies", 
        price: "Tool Management", 
        image: "/Images/Professional Work Belts_30_11zon.jpg" 
    },
];

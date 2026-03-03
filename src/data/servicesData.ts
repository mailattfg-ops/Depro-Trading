import { Hammer, Home, Construction, DoorClosed, Grid, ArrowRight } from "lucide-react";

export const servicesHeroData = {
    subtitle: "Premium Hardware Solutions",
    title: "Technical Expertise.",
    highlight: "Expertise.",
    description: "Comprehensive hardware solutions designed for durability, precision, and modern infrastructure needs. We supply premium materials that set the standard for quality.",
    image: {
        src: "https://images.unsplash.com/photo-1504148455328-4972fefebfee?q=80&w=2000&auto=format&fit=crop",
        alt: "Technical Expertise"
    }
};

export const featuredPackageData = {
    title: "Complete Interior Hardware Package",
    highlight: "Hardware Package",
    description: "Our most popular service for new homeowners and offices. A bundled approach to all your interior hardware needs with professional consultation and installation.",
    features: ["Premium Quality", "Expert Installers", "2-Year Warranty", "Free Consultation"],
    cta: "INQUIRE NOW",
    priceLevel: "Premium",
    priceNote: "Custom pricing based on project scope"
};

export const allServices = [
    {
        icon: Grid,
        title: "Carpet Hardware",
        description: "Our carpet hardware range includes everything from specialized kickers and cutters to high-grade adhesives and transition strips. We ensure your flooring is laid with precision.",
        details: ["Carpet Kickers", "Seam Tape", "Tack Strips", "Carpet Shears", "Trimmers"],
        id: "carpet-hardware",
    },
    {
        icon: Home,
        title: "Interior Works",
        description: "We provide comprehensive interior hardware for residential and commercial transformations. Our products combine aesthetics with long-lasting durability.",
        details: ["Decorative Trims", "Mounting Hardware", "Curtain Rods", "Wall Fixings", "Cabinet Hardware"],
        id: "interior-works",
    },
    {
        icon: Construction,
        title: "Aluminum Fabrication",
        description: "Premium aluminum hardware for modern fabrications. We supply profiles, connectors, and specialized tools for windows, doors, and partition walls.",
        details: ["Aluminum Profiles", "Corner Connectors", "Glass Channels", "Weather Stripping", "Hinges & Handles"],
        id: "aluminum-fabrication",
    },
    {
        icon: DoorClosed,
        title: "Door Fixer Services",
        description: "Specialized in door hardware and professional fixing. We supply and install high-quality locks, closers, and security fittings for all door types.",
        details: ["Door Closers", "Deadbolts", "Security Hinges", "Door Stops", "Emergency Exit Hardware"],
        id: "door-fixer-services",
    },
    {
        icon: Hammer,
        title: "Hardware Retail",
        description: "Our retail outlet offers a curated selection of premium hardware for DIY enthusiasts and homeowners seeking quality tools and fittings.",
        details: ["Hand Tools", "Power Tool Accessories", "Screws & Nails", "General Fittings", "Safety Gear"],
        id: "hardware-retail",
    },
    {
        icon: Grid,
        title: "Wholesale Supply",
        description: "Dedicated wholesale division for bulk hardware requirements. We offer competitive pricing and reliable logistics for large-scale procurement.",
        details: ["Bulk Fasteners", "Contractor Kits", "Industrial Hardware", "Building Materials", "Logistical Support"],
        id: "wholesale-supply",
    },
];

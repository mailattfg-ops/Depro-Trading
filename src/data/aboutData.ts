import { Target, Eye, Shield, Users, Award } from "lucide-react";

export const aboutHeroData = {
    subtitle: "Our Story",
    title: "Building Trust with Excellence.",
    highlight: "Excellence.",
    description: "Founded with a vision to revolutionize the hardware supply chain in Kerala, Depro Trading has grown into a premier destination for specialized interior and infrastructure hardware. We believe that quality materials are the foundation of every great space.",
    stats: [
        { label: "Years in Business", value: "10+" },
        { label: "Hardware Lines", value: "500+" }
    ],
    image: {
        src: "/Images/aboutus.webp",
        alt: "Professional Infrastructure"
    }
};

export const missionVisionData = {
    mission: {
        icon: Target,
        title: "Our Mission",
        description: "To provide high-quality, durable hardware solutions that empower contractors and homeowners to build reliable and aesthetically beautiful spaces. We strive to be the most trusted name in hardware retail and wholesale supply."
    },
    vision: {
        icon: Eye,
        title: "Our Vision",
        description: "To expand our footprint across national markets while maintaining local excellence, sets new standards in material quality, customer service, and technical innovation within the interior hardware industry."
    }
};

export const coreValuesData = {
    title: "Core Values.",
    highlight: "Values.",
    description: "The principles that guide every interaction and project at Depro Trading.",
    values: [
        { icon: Shield, title: "Quality", desc: "We source only ISO-certified and field-tested hardware components." },
        { icon: Users, title: "Customer Centric", desc: "Your project success is our priority, with personalized technical support." },
        { icon: Award, title: "Reliability", desc: "Timely delivery and consistent supply for even the largest wholesale orders." },
    ]
};

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services",
    description: "Explore our range of specialized hardware solutions, from carpet hardware and interior works to aluminum fabrication and wholesale supply.",
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

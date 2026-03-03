import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Depro Trading's journey, our mission to revolutionize the hardware supply chain in Kerala, and our core values of quality and excellence.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Depro Trading for technical consultation or premium hardware inquiries. Visit our HQ in Malappuram or contact our 24/7 support.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

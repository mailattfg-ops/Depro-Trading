import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { footerLinks } from "@/data/navigation";

export default function Footer() {
    const { quickLinks, services, contactInfo } = footerLinks;

    return (
        <footer className="bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand & About */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative w-48 h-12 overflow-hidden">
                                <Image
                                    src="/Images/logo.svg"
                                    alt="Depro Trading Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                            Premium supplier of hardware for carpets, interiors, aluminum fabrication, and door fixing solutions. Quality you can trust.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-slate-600 hover:text-primary transition-colors shadow-sm">
                                <Facebook size={18} />
                            </a>
                            <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-slate-600 hover:text-primary transition-colors shadow-sm">
                                <Instagram size={18} />
                            </a>
                            <a href={contactInfo.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-slate-600 hover:text-primary transition-colors shadow-sm">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-slate-900">Quick Links</h4>
                        <ul className="flex flex-col gap-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-slate-600 hover:text-primary transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-slate-900">Our Services</h4>
                        <ul className="flex flex-col gap-3">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link href={service.href} className="text-sm text-slate-600 hover:text-primary transition-colors">
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-slate-900">Contact Info</h4>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-primary shrink-0" size={18} />
                                <span className="text-sm text-slate-600 leading-snug">
                                    {contactInfo.address}
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-primary shrink-0" size={18} />
                                <span className="text-sm text-slate-600">{contactInfo.phone}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="text-primary shrink-0" size={18} />
                                <span className="text-sm text-slate-600">{contactInfo.email}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500 font-medium">
                        © {new Date().getFullYear()} Depro Trading. All rights reserved. GSTIN: 32AARFD3192M1Z1
                    </p>
                    <p className="text-xs text-slate-400">
                        Designed for Excellence
                    </p>
                </div>
            </div>
        </footer>
    );
}

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { footerLinks } from "@/data/navigation";

export default function Footer() {
    const { quickLinks, services, contactInfo } = footerLinks;

    return (
        <footer className="bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 py-6 lg:py-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
                    {/* Brand & About */}
                    <div className="col-span-2 lg:col-span-1 flex flex-col gap-2 md:gap-4 lg:gap-6">
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
                            Premium supplier of hardware for interiors, aluminum fabrication, and door fixing solutions. Quality you can trust.
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
                    <div className="col-span-1 flex flex-col gap-6">
                        <h4 className="font-bold text-slate-900 border-b-2 border-primary/20 pb-2 w-fit">Quick Links</h4>
                        <ul className="flex flex-col gap-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-slate-600 hover:text-primary transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-primary/20 rounded-full group-hover:w-2 group-hover:bg-primary transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="col-span-1 flex flex-col gap-6">
                        <h4 className="font-bold text-slate-900 border-b-2 border-primary/20 pb-2 w-fit">Our Services</h4>
                        <ul className="flex flex-col gap-3">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link href={service.href} className="text-sm text-slate-600 hover:text-primary transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-primary/20 rounded-full group-hover:w-2 group-hover:bg-primary transition-all" />
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="col-span-2 lg:col-span-1 flex flex-col gap-6">
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

                <div className="mt-4 md:mt-8 lg:mt-16 pt-2 md:pt-4 lg:pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500 font-medium text-center md:text-left">
                        © {new Date().getFullYear()} Depro Trading. All rights reserved.
                    </p>
                    <p className="text-xs text-slate-400 font-medium">
                        Designed & Developed by <Link href="https://thinkforgeglobal.com/" target="_blank" className="text-primary hover:underline font-bold transition-all">Think Forge Global</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}

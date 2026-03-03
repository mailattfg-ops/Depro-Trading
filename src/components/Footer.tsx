import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, MessageSquare } from "lucide-react";

export default function Footer() {
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
                            <a href="#" className="p-2 bg-white rounded-full text-slate-600 hover:text-primary transition-colors shadow-sm">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="p-2 bg-white rounded-full text-slate-600 hover:text-primary transition-colors shadow-sm">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="p-2 bg-white rounded-full text-slate-600 hover:text-primary transition-colors shadow-sm">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-slate-900">Quick Links</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link href="/" className="text-sm text-slate-600 hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/services" className="text-sm text-slate-600 hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/catalog" className="text-sm text-slate-600 hover:text-primary transition-colors">Catalog</Link></li>
                            <li><Link href="/about" className="text-sm text-slate-600 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="text-sm text-slate-600 hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-slate-900">Our Services</h4>
                        <ul className="flex flex-col gap-3">
                            <li className="text-sm text-slate-600">Carpet Hardware</li>
                            <li className="text-sm text-slate-600">Interior Works</li>
                            <li className="text-sm text-slate-600">Aluminum Fabrication</li>
                            <li className="text-sm text-slate-600">Door Fixer Services</li>
                            <li className="text-sm text-slate-600">Hardware Retail/Wholesale</li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-slate-900">Contact Info</h4>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-primary shrink-0" size={18} />
                                <span className="text-sm text-slate-600 leading-snug">
                                    Room No: 286C, NK Complex, Chattiparamba,<br />
                                    Kodur PO, Malappuram - 676504, Kerala
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-primary shrink-0" size={18} />
                                <span className="text-sm text-slate-600">+91 80861 88200</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="text-primary shrink-0" size={18} />
                                <span className="text-sm text-slate-600">info@deprotrading.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500 font-medium">
                        © 2026 Depro Trading. All rights reserved. GSTIN: 32AARFD3192M1Z1
                    </p>
                    <p className="text-xs text-slate-400">
                        Designed for Excellence
                    </p>
                </div>
            </div>
        </footer>
    );
}

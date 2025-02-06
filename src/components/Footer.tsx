"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Script from "next/script";

const people = [
  {
    id: 1,
    name: "Adi Nugroho",
    designation: "WhatsApp",
    image: "/wa.png",
  },
  {
    id: 2,
    name: "@adi_twist",
    designation: "Instagram",
    image: "/ig.png",
  },
  {
    id: 3,
    name: "hello.diss",
    designation: "Tik - Tok",
    image: "/tiktok.png",
  },
];

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo dan Deskripsi */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">ADN-ZETA</h2>
            <p className="mt-2 text-gray-400">
              Build innovative and interactive digital experiences.
            </p>
          </div>

          {/* Sosial Media */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-400">
              Contact
            </h3>
            <div className="flex justify-center md:justify-start">
              <AnimatedTooltip items={people} />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          &copy; 2025 ADN-ZETA. All Rights Reserved.
        </div>
      </div>

      {/* Tambahkan FontAwesome dengan Next.js Script */}
      <Script
        src="https://kit.fontawesome.com/your-kit-code.js"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />
    </footer>
  );
}

export default Footer;

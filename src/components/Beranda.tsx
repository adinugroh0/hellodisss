"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ColourfulText from "@/components/ui/colourful-text";
import Image from "next/image";
import Link from "next/link";
import Pengalaman from "./Pengalaman";

export function ColourfulTextDemo() {
  // Referensi untuk bagian Pengalaman
  const refPengalaman = useRef(null);
  const isPengalamanInView = useInView(refPengalaman);

  return (
    <div className="bg-[#0C2D47]">
      <div>
        {/* Bagian Hero */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-around px-6 py-10 md:p-10">
          {/* Bagian Kiri (Teks dan Tombol) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex flex-col gap-6 md:gap-7">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#FDFFFC] font-sans">
              <ColourfulText text="Adi Nugroho" /> <br /> Informatics Students
            </h1>
            <p className="max-w-2xl text-base md:text-lg text-[#FDFFFC] font-sans">
              I&apos;m an enthusiastic developer, focusing on creating dynamic
              user interfaces with ReactJS. As a front-end engineer, I create
              attractive visual designs and ensure the highest code quality and
              seamless user experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/A4 - 2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-2 rounded-md bg-[#B2E173] text-black font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                Curriculum Vitae
              </Link>
              <Link
                href="https://wa.me/+62895372273080"
                target="_blank"
                rel="noopener noreferrer">
                <button className="px-8 py-2 rounded-md bg-white border-2 border-teal-500 text-black font-bold transition duration-200 hover:bg-[#B2E173] hover:text-black hover:border-[#B2E173]">
                  Contact
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Bagian Kanan (Gambar) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex items-center justify-center md:justify-end mb-6 md:mb-0">
            <Image
              src="/foto.png"
              alt="Background Image"
              className="object-cover"
              width={500}
              height={600}
            />
          </motion.div>
        </motion.div>

        {/* Bagian Pengalaman: Muncul Saat Terlihat, Menghilang Saat Keluar */}
        <div className="bg-[#0C2D47]">
          {/* Bagian Pengalaman: Muncul Saat Terlihat, Menghilang Saat Keluar */}
          <motion.div
            ref={refPengalaman}
            initial={{ opacity: 0, y: 50 }}
            animate={
              isPengalamanInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
            id="pengalaman">
            <Pengalaman />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ColourfulTextDemo;

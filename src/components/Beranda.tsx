"use client;";
import React from "react";
import ColourfulText from "@/components/ui/colourful-text";
import Image from "next/image";
import Link from "next/link";
import { Timeline } from "@/components/ui/timeline";

export function ColourfulTextDemo() {
  const data = [
    {
      title: "SMP MUHAMMADIYAH",
      content: (
        <div>
          <p className="text-[#011627] dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Saya menjadi siswa di SMP Muhammadiyah Purwodadi pada tahun 2017 -
            2019
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/smp.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "SMK ASTAMITRA",
      content: (
        <div>
          <p className="text-[#011627] dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Saya menjadi siswa jurusan Teknik Komputer dan Jaringan di
            Astramitra Purwodadi pada tahun 2019 - 2022
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/logosmk.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/postersmk.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "UNIVERSITAS MUHAMMADIYAH SEMARANG",
      content: (
        <div>
          <p className="text-[#011627] dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Saya menjadi Mahasiswa Fakultas Teknik dan Ilmu Komputer prodi S1
            Informatika pada tahun 2022 - sekarang
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/logounimus.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/BUKBER.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/upgrading.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/sosma.JPG"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div>
        <div className="min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-around relative overflow-hidden px-6 py-10 md:p-10">
          {/* Bagian Kiri (Teks dan Tombol) */}
          <div className="flex-1 flex flex-col gap-6 md:gap-7">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#011627] font-sans">
              <ColourfulText text="Adi Nugroho" /> <br /> Informatics Students
            </h1>
            <p className="max-w-2xl text-base md:text-lg text-[#011627] font-sans">
              Saya seorang pengembang JavaScript yang antusias, berfokus pada
              pembuatan antarmuka pengguna dinamis dengan ReactJS. Sebagai
              insinyur front-end, saya menciptakan desain visual yang menarik
              dan memastikan kualitas kode tertinggi serta pengalaman pengguna
              yang mulus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/A4 - 2.pdf"
                target="_blank"
                rel="noopener noreferrer">
                <button className="px-8 py-2 rounded-md bg-[#B2E173] text-black font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                  Curriculum Vitae
                </button>
              </Link>
              <Link
                href="https://wa.me/+62895372273080"
                target="_blank"
                rel="noopener noreferrer">
                <button className="px-8 py-2 rounded-md bg-white border-2 border-teal-500 text-black font-bold transition duration-200 hover:bg-[#B2E173] hover:text-black   hover:border-[#B2E173]">
                  Contact
                </button>
              </Link>
            </div>
          </div>

          {/* Bagian Kanan (Gambar) */}
          <div className="flex-1 flex items-center justify-center md:justify-end mb-6 md:mb-0">
            <Image
              src="/foto.png"
              alt="Background Image"
              className="object-cover"
              width={500}
              height={600}
            />
          </div>
        </div>
      </div>
      <div className="w-full pt-20" id="academik">
        <Timeline data={data} />
      </div>
    </div>
  );
}
export default ColourfulTextDemo;

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Definisi tipe perusahaan
type Company = "Smart_Computer" | "UNIMUS" | "HIMAFOR" | "BALKESMAS";

// Data pengalaman kerja
const experiences: Record<
  Company,
  { title: string; date: string; location: string; details: string[] }
> = {
  Smart_Computer: {
    title: "Become a Smart Computer Field Work Practice student",
    date: "3 months",
    location: "Purwodadi",
    details: [
      "Laptop Installation and Dismantling Technician",
      "Problem solving on laptop",
    ],
  },
  UNIMUS: {
    title: "Public Relations of Informatics Study Program",
    date: "2023 - 2024",
    location: "University of Muhammadiyah Semarang",
    details: ["Handle TikTok and Instagram account"],
  },
  HIMAFOR: {
    title: "HIMAFOR UNIMUS",
    date: "2023 - 2025",
    location: "University of Muhammadiyah Semarang",
    details: [
      "Member of the Social Affairs Department of the Student Association UNIMUS Informatics for the 2023 - 2024 period",
      "Head of the Department of Puskominfo Student Association UNIMUS Informatics for the period 2024 - 2025",
    ],
  },
  BALKESMAS: {
    title: "Become an intern in the IT department",
    date: "September 2024 - January 2025",
    location:
      "Balai Kesehatan Masyarakat Semarang, Semarang Public Health Center",
    details: ["Web Developer", "UI/UX Design", "IT Support"],
  },
};

export default function Page() {
  const [selectedCompany, setSelectedCompany] =
    useState<Company>("Smart_Computer");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Halaman mulai dari opacity 0 dan turun sedikit
      animate={{ opacity: 1, y: 0 }} // Animasi muncul naik ke posisi semula
      transition={{ duration: 0.1, ease: "easeOut" }} // Waktu animasi
      className="bg-[#091e2e] text-[#FE7702] min-h-screen p-6 flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="text-4xl font-bold text-[#FE7702] text-center">
        My Experience
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="text-[#FDFFFC] mt-2 text-center">
        My experience in various fields
      </motion.p>

      <div
        id="pengalaman"
        className="mt-6 flex flex-col md:flex-row w-full max-w-4xl">
        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:w-1/3 w-full pb-4 md:pb-0 md:pr-6 flex md:flex-col flex-wrap justify-center gap-3">
          {Object.keys(experiences).map((company) => (
            <motion.button
              key={company}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group flex items-center justify-center md:justify-start w-full md:w-auto p-3 text-lg font-semibold rounded-md transition-all duration-500 ease-in-out ${
                selectedCompany === company
                  ? "text-[#FE7702] bg-[#011627] shadow-lg"
                  : "hover:bg-[#011627] hover:text-[#FE7702]"
              }`}
              onClick={() => setSelectedCompany(company as Company)}>
              <span>{company.replace("_", " ")}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Experience Details dengan Animasi */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="md:w-2/3 w-full p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCompany}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-bold text-[#FDFFFC]">
                {experiences[selectedCompany].title}
              </h2>
              <p className="text-[#FDFFFC]">
                {experiences[selectedCompany].date} |{" "}
                {experiences[selectedCompany].location}
              </p>
              <ul className="mt-4 space-y-2">
                {experiences[selectedCompany].details.map((detail, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start text-[#FDFFFC]">
                    <span className="text-[#FE7702] mr-2">✔</span> {detail}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}

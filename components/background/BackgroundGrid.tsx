"use client";

import { motion, Variants } from "framer-motion";
import { cardData } from "./card";
import { PersonCard, BrandCard } from "./FeatureCards";


const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function BackgroundGrid() {
  const columns = [
    cardData.slice(0, 4),
    cardData.slice(4, 7),
    cardData.slice(7, 11),
    cardData.slice(11, 14),
    cardData.slice(14, 18),
  ];

  return (
    <div className="fixed inset-0 overflow-hidden from-slate-50 to-slate-100">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="
          absolute inset-0
          grid
          lg:grid-cols-5
          md:grid-cols-4
          sm:grid-cols-3
          grid-cols-2
          gap-2
          px-1
          scale-y-[1.2]
        "
      >
        {columns.map((column, colIndex) => (
          <div
            key={colIndex}
            className={`flex flex-col gap-2 ${
              colIndex % 2 === 1 ? "mt-12" : ""
            }`}
          >
            {column.map((card, cardIndex) => (
              <motion.div
                key={`${colIndex}-${cardIndex}`}
                variants={cardVariants}
              >
                {card.type === "company" ? (
                  <BrandCard
                    name={card.name}
                    subtitle={card.subtitle}
                    bg={card.bg!}
                    blockBg={card.blockBg!}
                    logoSrc={card.logoSrc!}
                  />
                ) : (
                  <PersonCard
                    name={card.name}
                    subtitle={card.subtitle}
                    personSrc={card.personSrc!}
                    blockBg={card.blockBg!}
                  />
                )}
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

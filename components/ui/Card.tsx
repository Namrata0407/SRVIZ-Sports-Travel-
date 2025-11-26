"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

interface PackageCardProps {
  image: string;
  title: string;
  category: string;
  price: string;
  currency?: string;
  onClick?: () => void;
}

interface ItineraryCardProps {
  image: string;
  title: string;
  type: string;
  tag: string;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      className={`bg-white rounded-2xl overflow-hidden card-shadow ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function PackageCard({
  image,
  title,
  category,
  price,
  currency = "₹",
  onClick,
}: PackageCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden card-shadow cursor-pointer group min-w-[280px]"
      onClick={onClick}
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-3">Starting from</p>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-primary-600">
            {currency}{price}
          </span>
          <span className="text-gray-400 text-sm">/ person</span>
        </div>
      </div>
    </motion.div>
  );
}

export function ItineraryCard({ image, title, type, tag }: ItineraryCardProps) {
  const tagColors: Record<string, string> = {
    Premium: "bg-primary-500",
    VIP: "bg-purple-500",
    Private: "bg-blue-500",
    Guided: "bg-green-500",
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl overflow-hidden card-shadow min-w-[200px] sm:min-w-[240px]"
    >
      <div className="relative h-32 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">{type}</span>
          <span
            className={`text-xs text-white px-2 py-0.5 rounded-full ${
              tagColors[tag] || "bg-gray-500"
            }`}
          >
            {tag}
          </span>
        </div>
      </div>
    </motion.div>
  );
}


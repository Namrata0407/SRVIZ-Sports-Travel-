"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";
import { ArrowRight } from "lucide-react";

interface ItineraryItem {
  id: string;
  title: string;
  type: string;
  tag: string;
  image: string;
}

interface ItinerarySliderProps {
  items: ItineraryItem[];
}

const tagColors: Record<string, string> = {
  Premium: "bg-primary-500",
  VIP: "bg-purple-500",
  Private: "bg-blue-500",
  Guided: "bg-green-500",
};

export default function ItinerarySlider({ items }: ItinerarySliderProps) {
  return (
    <section id="itinerary" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="SAMPLE ITINERARY"
          action={
            <motion.a
              href="#"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-1 text-primary-500 font-medium hover:text-primary-600 transition-colors"
            >
              Explore
              <ArrowRight size={18} />
            </motion.a>
          }
        />

        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex-shrink-0 w-[220px] sm:w-[260px] bg-white rounded-2xl overflow-hidden card-shadow snap-start"
            >
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">{item.type}</span>
                  <span
                    className={`text-xs text-white px-2.5 py-0.5 rounded-full ${
                      tagColors[item.tag] || "bg-gray-500"
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


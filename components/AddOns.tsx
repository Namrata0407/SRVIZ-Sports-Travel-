"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";

interface AddOn {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface AddOnsProps {
  addons: AddOn[];
}

export default function AddOns({ addons }: AddOnsProps) {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="ADD-ONS & VIP EXPERIENCES"
          subtitle="Enhance your trip with exclusive experiences"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {addons.map((addon, index) => (
            <motion.div
              key={addon.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white rounded-2xl overflow-hidden card-shadow cursor-pointer group"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={addon.image}
                  alt={addon.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
                <h4 className="absolute bottom-3 left-4 right-4 font-bold text-white text-lg">
                  {addon.title}
                </h4>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 line-clamp-2">
                  {addon.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


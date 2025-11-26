"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";
import { ArrowRight } from "lucide-react";

interface Package {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  startingPrice: number;
  currency: string;
  duration: string;
}

interface PackagesProps {
  packages: Package[];
}

export default function Packages({ packages }: PackagesProps) {
  return (
    <section id="packages" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="TOP PACKAGES"
          action={
            <motion.a
              href="#"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-1 text-primary-500 font-medium hover:text-primary-600 transition-colors"
            >
              Show us more
              <ArrowRight size={18} />
            </motion.a>
          }
        />

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="flex-shrink-0 w-[280px] sm:w-[300px] bg-white rounded-2xl overflow-hidden card-shadow cursor-pointer group snap-start"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {pkg.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {pkg.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{pkg.location}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Starting:</p>
                    <span className="text-lg font-bold text-gray-900">
                      {pkg.currency}
                      {pkg.startingPrice.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {pkg.duration}
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


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./ui/Button";
import { MessageCircle, MapPin, Calendar } from "lucide-react";

interface FeaturedEventProps {
  event: {
    title: string;
    venue: string;
    location: string;
    date: string;
    image: string;
    price: string;
    priceNote: string;
    description: string;
  };
}

export default function FeaturedEvent({ event }: FeaturedEventProps) {
  return (
    <section className="relative py-8 -mt-32 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden card-shadow"
        >
          <div className="relative h-[400px] sm:h-[450px]">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                  {event.title}
                </h2>

                <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-4">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={16} />
                    <span className="text-sm">{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    <span className="text-sm">{event.date}</span>
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl sm:text-3xl font-bold text-primary-500">
                    {event.price}
                  </span>
                  <span className="text-gray-400">{event.priceNote}</span>
                </div>

                <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-xl">
                  {event.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Request the Itinerary</Button>
                  <motion.a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle size={20} />
                    WhatsApp
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


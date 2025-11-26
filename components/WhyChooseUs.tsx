"use client";

import { motion } from "framer-motion";
import { CheckCircle, Globe, Users, Award } from "lucide-react";

interface Stats {
  travelers: string;
  satisfaction: string;
  transfers: string;
  partners: string;
  partnersLabel: string;
}

interface WhyChooseUsProps {
  stats: Stats;
}

const steps = [
  {
    number: "1",
    title: "Choose your event",
    description: "Browse our curated selection of global sporting events",
  },
  {
    number: "2",
    title: "We arrange your travel + tickets",
    description: "Full package including flights, hotels, and premium tickets",
  },
  {
    number: "3",
    title: "Enjoy a seamless sports experience",
    description: "Sit back and enjoy while we handle all the details",
  },
];

export default function WhyChooseUs({ stats }: WhyChooseUsProps) {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              WHY CHOOSE US
            </h2>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white rounded-2xl card-shadow"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-6 h-6 text-primary-500" />
                  <span className="text-3xl font-bold text-primary-500">
                    {stats.travelers}
                  </span>
                </div>
                <p className="text-sm text-gray-500">Happy Travelers</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white rounded-2xl card-shadow"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="w-6 h-6 text-primary-500" />
                  <span className="text-3xl font-bold text-primary-500">
                    {stats.satisfaction}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{stats.transfers}</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white rounded-2xl card-shadow"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Globe className="w-6 h-6 text-primary-500" />
                  <span className="text-3xl font-bold text-primary-500">
                    {stats.partners}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{stats.partnersLabel}</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white rounded-2xl card-shadow"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle className="w-6 h-6 text-primary-500" />
                  <span className="text-3xl font-bold text-primary-500">
                    {stats.partners}
                  </span>
                </div>
                <p className="text-sm text-gray-500">World Experiences</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-500">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


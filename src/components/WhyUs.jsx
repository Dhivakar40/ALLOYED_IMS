import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Clock, Award } from 'lucide-react';

const reasons = [
    {
        icon: <ShieldCheck size={40} />,
        title: "Uncompromising Quality",
        description: "Every component undergoes rigorous stress-testing to ensure zero-failure operation in critical environments."
    },
    {
        icon: <Cpu size={40} />,
        title: "Technological Edge",
        description: "We utilize proprietary algorithms and next-gen sensors to give your machinery cognitive capabilities."
    },
    {
        icon: <Clock size={40} />,
        title: "Rapid Deployment",
        description: "Our modular frameworks allow for installation and calibration in 40% less time than industry standards."
    },
    {
        icon: <Award size={40} />,
        title: "Award Winning Design",
        description: " Recognized globally not just for function, but for the elegance of our engineering solutions."
    }
];

export default function WhyUs() {
    return (
        <section id="why-us" className="section-padding bg-[var(--color-alabaster)]">
            <div className="container">
                <div className="mb-20 text-center">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[var(--color-sandal)] text-sm uppercase tracking-widest font-semibold mb-4"
                    >
                        The Advantage
                    </motion.h4>
                    <h2 className="font-serif text-5xl">Why Integrity?</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
                            className="bg-[var(--color-off-white)] p-8 border border-transparent hover:border-[var(--color-sandal)]/30 transition-all duration-300 group"
                        >
                            <div className="text-[var(--color-sandal)] mb-6 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="font-serif text-2xl mb-4 group-hover:text-[var(--color-sandal-dark)] transition-colors">{item.title}</h3>
                            <p className="text-[var(--color-text-light)] text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

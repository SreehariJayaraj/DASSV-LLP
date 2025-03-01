
import { motion } from "framer-motion";
import {
  Calculator,
  FileText,
  BarChart3,
  Briefcase,
  Scale,
  Building2
} from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive financial and business advisory services tailored to meet your specific needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors duration-300"
            >
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    title: "Tax Planning & Compliance",
    description: "Strategic tax planning and compliance services to optimize your tax position while ensuring full regulatory compliance.",
    icon: <Calculator className="w-6 h-6 text-primary" />,
  },
  {
    title: "Audit & Assurance",
    description: "Comprehensive audit services that provide reliable assurance and valuable insights into your business operations.",
    icon: <FileText className="w-6 h-6 text-primary" />,
  },
  {
    title: "Financial Advisory",
    description: "Expert financial advisory services to help you make informed decisions and achieve your business objectives.",
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
  },
  {
    title: "Business Consulting",
    description: "Strategic business consulting to help you optimize operations, improve efficiency, and drive growth.",
    icon: <Briefcase className="w-6 h-6 text-primary" />,
  },
  {
    title: "Legal & Regulatory",
    description: "Guidance on legal and regulatory matters to ensure compliance and protect your business interests.",
    icon: <Scale className="w-6 h-6 text-primary" />,
  },
  {
    title: "Corporate Services",
    description: "Comprehensive corporate services including company formation, secretarial services, and compliance support.",
    icon: <Building2 className="w-6 h-6 text-primary" />,
  }
];

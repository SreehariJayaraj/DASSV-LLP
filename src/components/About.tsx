
import { motion } from "framer-motion";
import { Award, BookOpen, Users } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Das SV LLP</h2>
          <p className="text-lg text-gray-600 mb-8">
            We are a leading chartered accountancy firm committed to delivering exceptional financial services 
            and innovative solutions to businesses across industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="mb-4 inline-block p-3 bg-primary/5 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    title: "Expert Team",
    description: "Our team of certified professionals brings years of experience and expertise to every client engagement.",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    title: "Professional Excellence",
    description: "We maintain the highest standards of professional ethics and deliver exceptional quality in all our services.",
    icon: <Award className="w-6 h-6 text-primary" />,
  },
  {
    title: "Continuous Learning",
    description: "We stay updated with the latest industry trends and regulations to provide cutting-edge solutions.",
    icon: <BookOpen className="w-6 h-6 text-primary" />,
  },
];

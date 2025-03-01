import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated team of professionals committed to delivering excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md group"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover object-center"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-white hover:text-secondary" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-6 h-6" />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="text-white hover:text-secondary" target="_blank" rel="noopener noreferrer">
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`} className="text-white hover:text-secondary">
                      <Mail className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const teamMembers = [
  {
    name: "John Smith",
    role: "Managing Partner",
    description: "Over 15 years of experience in tax planning and business advisory.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "john@example.com"
    }
  },
  {
    name: "Sarah Johnson",
    role: "Senior Partner",
    description: "Specializes in audit and assurance services with a focus on financial institutions.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "sarah@example.com"
    }
  },
  {
    name: "Michael Chen",
    role: "Tax Director",
    description: "Expert in international tax planning and corporate restructuring.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "michael@example.com"
    }
  }
];


import { motion } from "framer-motion";
import { Building, Phone } from "lucide-react";

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Building className="h-8 w-8 text-secondary" />
            <span className="ml-2 text-2xl font-bold text-primary">Das SV LLP</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#team">Team</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <div className="flex items-center">
            <a href="tel:+919999999999" className="flex items-center text-primary hover:text-secondary transition-colors">
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-semibold">+91 9999999999</span>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-primary hover:text-secondary transition-colors font-medium"
  >
    {children}
  </a>
);

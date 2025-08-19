import { Link } from 'react-router-dom';
import { Leaf, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { companyConfig } from '@/config/company';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-earth border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt={`${companyConfig.shortName} Logo`}
                className="h-8 w-8"
              />
              <span className="font-heading font-bold text-lg text-primary">
                {companyConfig.shortName}
              </span>
            </div>
            <p className="text-muted-foreground">
              {companyConfig.story.legacy.substring(0, 120)}...
            </p>
            <div className="flex items-center space-x-1 text-primary">
              <Leaf className="h-4 w-4" />
              <span className="text-sm font-medium">{companyConfig.philosophy.motto}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Products</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">Fresh Vegetables</li>
              <li className="text-muted-foreground">Organic Fruits</li>
              <li className="text-muted-foreground">Dairy Products</li>
              <li className="text-muted-foreground">Grains & Pulses</li>
              <li className="text-muted-foreground">Wellness Products</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-muted-foreground">
                  <p>{companyConfig.contact.address.street}</p>
                  <p>{companyConfig.contact.address.city}, {companyConfig.contact.address.state}</p>
                  <p>{companyConfig.contact.address.country} - {companyConfig.contact.address.pincode}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">{companyConfig.contact.phone}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">{companyConfig.contact.email}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href={companyConfig.social.facebook} className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={companyConfig.social.instagram} className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={companyConfig.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-center md:text-left">
              © {currentYear} {companyConfig.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
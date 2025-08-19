import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Leaf, Heart, Users, Truck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '@/config/company';
import farmHero from '@/assets/farm-hero.jpg';
import BookVisit from './BookVisit';

export function Hero() {
  const features = [
    {
      icon: Leaf,
      title: 'Organic Certified',
      description: 'Grown without harmful pesticides'
    },
    {
      icon: Heart,
      title: 'Farm Fresh',
      description: 'Harvested daily for maximum freshness'
    },
    {
      icon: Users,
      title: 'Family Owned',
      description: 'Three generations of farming expertise'
    },
    {
      icon: Truck,
      title: 'Direct Delivery',
      description: 'From our farm to your kitchen'
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${farmHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <Badge variant="secondary" className="mb-6 animate-fade-in">
            <Leaf className="h-4 w-4 mr-2" />
            {companyConfig.philosophy.approach} - {companyConfig.philosophy.values.join(' • ')}
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 animate-slide-up">
            {companyConfig.story.heritage.split('.')[0]}
            <span className="text-primary-light">.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {companyConfig.tagline}
          </p>
          
          <p className="text-lg text-white/80 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Experience the taste of authentic organic produce from the fertile lands of Punjab. 
            Our commitment to quality and sustainability brings nature's best directly to your table.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Link to="/products">
              <Button variant="hero" size="xl" className="text-lg px-8">
                Shop Fresh Produce
              </Button>
            </Link>
            <Button variant="outline" size="xl" className="flex text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
            <a
                href="https://maps.app.goo.gl/ve6KBL725LeuG3wTA"
                target="_blank"
                rel="noopener noreferrer"
                className='flex items-center'
              >
                <MapPin className="h-5 w-5 mr-2" />
                Visit Us
              </a>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-1 text-sm md:text-base">{feature.title}</h3>
                <p className="text-white/70 text-xs md:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
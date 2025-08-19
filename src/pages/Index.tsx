import { Hero } from '@/components/Hero';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Leaf, Users, Award, Truck, Heart, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '@/config/company';
import BookVisit from '@/components/BookVisit';
const Index = () => {

  const stats = [
    { icon: Users, label: 'Happy Customers', value: '2000+' },
    { icon: Leaf, label: 'Organic Products', value: '100+' },
    { icon: Award, label: 'Years of Experience', value: '25+' },
    { icon: Truck, label: 'Daily Deliveries', value: '150+' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Quality Promise',
      description: 'Every product meets our strict organic and freshness standards'
    },
    {
      icon: Leaf,
      title: 'Sustainable Farming',
      description: 'We practice eco-friendly farming methods that protect our environment'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Supporting local farmers and bringing communities together'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* About Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                {companyConfig.story.heritage}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {companyConfig.story.legacy}
              </p>
              <p className="text-muted-foreground mb-8">
                Our journey spans three generations of agricultural excellence. From our grandfather's 
                humble beginnings to our father's scientific contributions at Punjab Agricultural 
                University, we've combined traditional wisdom with modern innovation.
              </p>
              <Link to="/about">
                <Button variant="hero" size="lg">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="space-y-6">
              {values.map((value, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg gradient-earth flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Visit Our Farm in {companyConfig.contact.address.city}
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Experience farm life firsthand! Join us for tours, workshops, and hands-on farming experiences. 
            See where your food comes from and connect with nature.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* External maps link (opens in new tab) */}
            <Button asChild variant="secondary" size="lg" className="hover-lift">
              <a
                href="https://maps.app.goo.gl/ve6KBL725LeuG3wTA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="h-5 w-5 mr-2" />
                Get Directions
              </a>
            </Button>

            <BookVisit />
                </div>
              </div>
            </section>
          </div>
  );
};

export default Index;

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Leaf, 
  Users, 
  Heart, 
  BookOpen, 
  Sprout, 
  Share2, 
  Award,
  MapPin,
  Calendar,
  Camera
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '@/config/company';

const About = () => {
  const philosophyPoints = [
    {
      icon: BookOpen,
      title: 'Learn',
      description: 'Agriculture is ever-evolving. We remain curious students of the soil, exploring new techniques while honoring time-tested practices.'
    },
    {
      icon: Sprout,
      title: 'Grow',
      description: 'Every seed planted is a step toward self-reliance, sustainability, and health.'
    },
    {
      icon: Share2,
      title: 'Share',
      description: 'From knowledge to produce, we believe in giving back — to the land, to the people, and to the future.'
    }
  ];

  const farmValues = [
    {
      icon: Leaf,
      title: 'Fresh',
      description: 'Harvested at peak ripeness for maximum nutrition and flavor'
    },
    {
      icon: Heart,
      title: 'Ethical',
      description: 'Grown with sustainable practices that respect the environment'
    },
    {
      icon: Award,
      title: 'Home-Grown',
      description: 'Cultivated with care on our family farm in Punjab'
    }
  ];

  const farmExperiences = [
    {
      icon: BookOpen,
      title: 'Educational Tours',
      description: 'Learn about sustainable farming practices and traditional agriculture'
    },
    {
      icon: Users,
      title: 'Farming Workshops',
      description: 'Hands-on learning experiences for all ages and skill levels'
    },
    {
      icon: Camera,
      title: 'Family Picnics',
      description: 'Peaceful rural escape perfect for family bonding'
    },
    {
      icon: Sprout,
      title: 'Hands-on Experiences',
      description: 'Get your hands dirty and experience farm life firsthand'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-primary-foreground border-white/30">
            🌾 About Us
          </Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
            Our Journey
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            {companyConfig.story.heritage}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Heritage that Inspires. A Future we Cultivate.
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {companyConfig.story.legacy}
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our story begins with our grandfather's humble beginnings in agriculture and blossoms through 
                the scientific contributions of our father, who served as Director at the Sugarcane Research 
                Station of Punjab Agricultural University.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                After inheriting not just land but a legacy, we chose to continue the journey post-retirement — 
                not as a profession, but as a purpose. Narain Farms represents the bridge between tradition and 
                modernity, between inherited wisdom and continuous learning.
              </p>
              
              <div className="text-center py-8">
                <blockquote className="text-2xl md:text-3xl font-heading font-semibold text-primary italic">
                  "We grow, so we can share. We farm, so we can give back."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              🌱 Our Philosophy
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              {companyConfig.philosophy.motto}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We believe farming is not just a livelihood — it's a way of life. At Narain Farms, 
              our philosophy is simple but profound:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {philosophyPoints.map((point, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-earth flex items-center justify-center">
                    <point.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our goal is to foster a space where visitors feel welcome, inspired, and connected — 
              to the food they eat and the hands that grow it.
            </p>
          </div>
        </div>
      </section>

      {/* Farm to Kitchen Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                🧺 Farm to Kitchen
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                The Narain Way
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We follow a "{companyConfig.philosophy.approach}" approach that reflects our commitment 
                to quality, transparency, and sustainability. Every product we grow is nurtured with care 
                and delivered with integrity — free from harmful chemicals and packed with natural goodness.
              </p>
              <p className="text-muted-foreground mb-8">
                Whether it's fruits, vegetables, or traditional produce, our goal is to bring the farm 
                directly to your table — ensuring freshness, traceability, and trust.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg mb-8">
                <p className="text-sm text-muted-foreground">
                  <strong>Coming soon:</strong> Direct ordering, seasonal produce calendar, and subscription boxes.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {farmValues.map((value, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
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

      {/* Visit Us Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              🧭 Visit Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Feel at Home on the Farm
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              More than a farm — it's an experience. Narain Farms is open to visitors who want to connect 
              with nature, learn about sustainable farming, or simply enjoy a peaceful rural escape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {farmExperiences.map((experience, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg gradient-earth flex items-center justify-center">
                    <experience.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">{experience.title}</h3>
                  <p className="text-sm text-muted-foreground">{experience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We believe that a farm should feel like home — and we strive to offer that warmth 
              to everyone who steps through our gate.
            </p>
            
            <blockquote className="text-xl md:text-2xl font-heading font-semibold text-primary italic mb-8">
              "{companyConfig.story.mission}"
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="hover-lift">
                  <MapPin className="h-5 w-5 mr-2" />
                  Plan Your Visit
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="hover-lift">
                <Calendar className="h-5 w-5 mr-2" />
                Book a Farm Tour
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
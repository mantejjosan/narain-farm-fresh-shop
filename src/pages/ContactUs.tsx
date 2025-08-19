import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Facebook,
  Instagram,
  Twitter,
  MessageSquare
} from 'lucide-react';
import { companyConfig } from '@/config/company';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual endpoint later
    try {
      console.log('Form data:', formData);
      // TODO: Replace with actual API call
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      value: companyConfig.contact.phone,
      action: `tel:${companyConfig.contact.phone}`,
      buttonText: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your questions',
      value: companyConfig.contact.email,
      action: `mailto:${companyConfig.contact.email}`,
      buttonText: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Come see our farm',
      value: `${companyConfig.contact.address.city}, ${companyConfig.contact.address.state}`,
      action: `https://maps.google.com/?q=${encodeURIComponent(`${companyConfig.contact.address.street}, ${companyConfig.contact.address.city}, ${companyConfig.contact.address.state}, ${companyConfig.contact.address.country}`)}`,
      buttonText: 'Get Directions'
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: 'Facebook',
      url: companyConfig.social.facebook,
      color: 'text-blue-600'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: companyConfig.social.instagram,
      color: 'text-pink-600'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: companyConfig.social.twitter,
      color: 'text-blue-400'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-primary-foreground border-white/30">
            📞 Contact Us
          </Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to us for farm visits, orders, or just to say hello!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Ways to Reach Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Choose Your Preferred Method
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-earth flex items-center justify-center">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <p className="font-medium text-primary mb-6">{method.value}</p>
                  <Button 
                    variant="hero" 
                    size="sm" 
                    className="w-full hover-lift"
                    onClick={() => window.open(method.action, '_blank')}
                  >
                    {method.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Badge variant="secondary" className="mb-4">
                Send a Message
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                We're Here to Help
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible. 
                Whether you have questions about our products, want to schedule a farm visit, 
                or need assistance with an order, we're here to help.
              </p>

              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your full name"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Your phone number"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="What's this about?"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        className="mt-2"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full hover-lift"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Farm Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Farm Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">{companyConfig.name}</p>
                    <p className="text-muted-foreground">
                      {companyConfig.contact.address.street}<br />
                      {companyConfig.contact.address.city}, {companyConfig.contact.address.state}<br />
                      {companyConfig.contact.address.country} - {companyConfig.contact.address.pincode}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Farm Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Farm Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Saturday</span>
                      <span className="font-medium">6:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">7:00 AM - 5:00 PM</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      We currently don't offer farm visits but in the near future you may please call ahead to schedule farm tours and visits.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Follow Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Stay connected and follow our daily farm life, seasonal updates, and fresh produce availability.
                  </p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="hover-lift"
                        onClick={() => window.open(social.url, '_blank')}
                      >
                        <social.icon className={`h-4 w-4 mr-2 ${social.color}`} />
                        {social.name}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response */}
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <MessageSquare className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="font-semibold text-green-800">Quick Response Promise</h3>
                  </div>
                  <p className="text-green-700 text-sm">
                    We typically respond to all inquiries within 24 hours during business days. 
                    For urgent matters, please call us directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
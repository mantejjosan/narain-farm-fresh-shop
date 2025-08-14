import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';
import tomatoesImg from '@/assets/tomatoes.jpg';
import carrotsImg from '@/assets/carrots.jpg';

export function FeaturedProducts() {
  const { addToCart } = useCart();

  // Get featured products (first 6 products)
  const featuredProducts = products.slice(0, 6).map((product, index) => ({
    ...product,
    image: index === 0 ? tomatoesImg : index === 1 ? carrotsImg : product.image,
    rating: 4.5 + (Math.random() * 0.5), // Add random rating for demo
    reviews: Math.floor(Math.random() * 50) + 10
  }));

  const handleAddToCart = (product: any) => {
    addToCart(product);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-fresh">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Fresh Arrivals
          </Badge>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Farm Fresh Favorites
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hand-picked selections from our organic farm, delivered fresh to your doorstep
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover-lift cursor-pointer border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.organic && (
                  <Badge className="absolute top-3 left-3 bg-success text-success-foreground">
                    Organic
                  </Badge>
                )}
                {!product.inStock && (
                  <Badge variant="destructive" className="absolute top-3 right-3">
                    Out of Stock
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>
                
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">
                      ₹{product.price}
                    </span>
                    <span className="text-sm text-muted-foreground ml-1">
                      {product.unit}
                    </span>
                  </div>
                  
                  <Button 
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    variant={product.inStock ? "default" : "secondary"}
                    size="sm"
                    className="hover-lift"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button variant="hero" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
import { useEffect, useState } from "react";

export default function Blog() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.WC_API_URL}/products?consumer_key=${import.meta.env.WC_CONSUMER_READ_PRODUCTS}&consumer_secret=${import.meta.env.WC_CONSUMER_READ_PRODUCTS_SECRET}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products}
        or nothing
      </ul>
    </div>
  );
}

import PageHeading from "./PageHeading";
import ProductListing from "./ProductListing";
import apiClient from "../api/apiClient";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [locading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Run once when the component mounts
  //Mounting os the process of creating and adding the component into DOM
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get("/products"); // Axos get request to /products endpoint
      setProducts(response.data); // Update the products state with the fetched data
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to fetch products. Please try again"
      ); // Extract error message if available
    } finally {
      setLoading(false);
    }
  };

  if (locading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span>Loading products...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl text-red-500">Error:{error}</span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <PageHeading title="Explore Eazy Stickers">
        Add a touch of creativity to your space with outr wide range of fun and
        unique stickers. Perfect for any occasion!
      </PageHeading>
      <ProductListing products={products} />
    </div>
  );
}

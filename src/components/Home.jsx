import PageHeading from "./PageHeading";
import ProductListing from "./productListing";
import apiClient from "../api/apiClient";
import { useEffect, useState } from "react";

export default function Home() {

  const [products, setProducts] = useState([]);

  //Run once when the component mounts
  //Mounting os the process of creating and adding the component into DOM
  useEffect(() => {
    fetchProducts();
  } , []);

  const fetchProducts = async () => {
    const response = await apiClient.get("/products");
    setProducts(response.data);
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

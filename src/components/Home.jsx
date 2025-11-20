import PageHeading from "./PageHeading";
import ProductListing from "./productListing";
import products from "../data/product";

export default function Home() {
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

import PropTypes from "prop-types";
import ProductCard from "../Cards/ProductCard";

const ProductsList = ({ catName }) => {
  const Products = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      category: "Electronics",
      categoryId: 1,
      image: "https://picsum.photos/200/200",
    },
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      category: "Electronics",
      categoryId: 2,
      image: "https://picsum.photos/200/200",
    },
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      category: "Electronics",
      categoryId: 3,
      image: "https://picsum.photos/200/200",
    },
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      category: "Electronics",
      categoryId: 4,
      image: "https://picsum.photos/200/200",
    },
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      category: "Electronics",
      categoryId: 5,
      image: "https://picsum.photos/200/200",
    },
    {
      id: 2,
      name: "Product 2",
      price: 9.99,
      category: "Electronics",
      categoryId: 6,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Product 2",
      price: 9.99,
      category: "Electronics",
      categoryId: 7,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Product 2",
      price: 9.99,
      category: "Electronics",
      categoryId: 8,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Product 2",
      price: 9.99,
      category: "Electronics",
      categoryId: 9,
      image: "https://picsum.photos/200/300",
    },
  ];
  return (
    <div className="container max-w-[1300px] mx-auto px-4 py-8">
      {/* Header */}
      <div className="textHeader font-bold text-primary text-xl mb-4">
        <h1>{catName}</h1>
      </div>

      {/* Responsive Grid with minmax */}
      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        {Products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

ProductsList.propTypes = {
  catName: PropTypes.string.isRequired,
};

export default ProductsList;

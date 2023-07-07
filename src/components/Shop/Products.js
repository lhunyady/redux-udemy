import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "My First Book I Ever wrote",
  },
  {
    id: "p2",
    price: 6,
    title: "My Second Book",
    description: "My Second Book I Ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((iter) => (
          <ProductItem
            id={iter.id}
            title={iter.title}
            price={iter.price}
            description={iter.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

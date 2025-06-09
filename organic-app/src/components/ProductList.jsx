import ProductCard from "./ProductCard";

const products = [
    {id:1, name: "Organic Rice", price: 120},
    { id: 2, name: "Natural Honey", price: 200 },
  { id: 3, name: "Fresh Turmeric", price: 80 },
];

function ProductList(){
    return (
    <div className="product-list">
      {products.map((item) => (
        <ProductCard key={item.id} name={item.name} price={item.price} />
      ))}
    </div>
  );
}

export default ProductList;
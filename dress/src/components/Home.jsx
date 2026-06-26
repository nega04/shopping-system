import { useContext } from "react";
import { CartContext } from "../App";

const products = [
  {
    id: 1,
    name: "Garden Pink Salwar",
    price: 1599,
    category: "Salwar",
    badge: "New",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Ivory Silk Salwar",
    price: 1899,
    category: "Salwar",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Mint Luxe Salwar",
    price: 1749,
    category: "Salwar",
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Rose Embroidered Salwar",
    price: 2099,
    category: "Salwar",
    badge: "Limited",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Sunset Co-ord Set",
    price: 2299,
    category: "Co-ord Set",
    badge: "New",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Lavender Co-ord Set",
    price: 2499,
    category: "Co-ord Set",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    name: "Ocean Co-ord Set",
    price: 2199,
    category: "Co-ord Set",
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    name: "Peach Co-ord Set",
    price: 2399,
    category: "Co-ord Set",
    badge: "Limited",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    name: "Velvet Pyjama Set",
    price: 1499,
    category: "Pyjamas",
    badge: "New",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 10,
    name: "Soft Cotton Pyjamas",
    price: 1299,
    category: "Pyjamas",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 11,
    name: "Floral Pyjama Set",
    price: 1399,
    category: "Pyjamas",
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 12,
    name: "Tie-Dye Pyjamas",
    price: 1199,
    category: "Pyjamas",
    badge: "Limited",
    image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 13,
    name: "Royal Kanjivaram Saree",
    price: 5999,
    category: "Saree",
    badge: "New",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 14,
    name: "Draped Organza Saree",
    price: 5499,
    category: "Saree",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 15,
    name: "Mehendi Printed Saree",
    price: 4699,
    category: "Saree",
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 16,
    name: "Pearl Silk Saree",
    price: 6299,
    category: "Saree",
    badge: "Limited",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 17,
    name: "Midnight Maxi Dress",
    price: 2799,
    category: "Maxi",
    badge: "New",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 18,
    name: "Sunlit Floral Maxi",
    price: 2599,
    category: "Maxi",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 19,
    name: "Champagne Maxi",
    price: 2899,
    category: "Maxi",
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 20,
    name: "Citrus Wrap Maxi",
    price: 2699,
    category: "Maxi",
    badge: "Limited",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  },
];

const categories = ["Salwar", "Co-ord Set", "Pyjamas", "Saree", "Maxi"];

function Home() {
  const { addToCart } = useContext(CartContext);
  const newArrivals = products.filter((product) => product.badge === "New");

  return (
    <div className="page-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Welcome to Ilamai</p>
          <h1>Curated ethnic fashion for every celebration.</h1>
          <p className="hero-text">
            Discover elegant salwars, statement co-ord sets, cozy pyjamas, graceful sarees, and flowing maxis in one joyful edit.
          </p>
          <div className="hero-actions">
            <a href="#collection" className="btn btn-accent">
              Shop collection
            </a>
            <a href="/cart" className="btn btn-outline">
              View cart
            </a>
          </div>
        </div>

        <div className="hero-card">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80"
            alt="Woman in an elegant dress"
          />
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Fresh drops</p>
          <h2>New arrivals</h2>
        </div>

        <div className="row g-4">
          {newArrivals.map((product) => (
            <div className="col-lg-3 col-md-6" key={product.id}>
              <div className="product-card">
                <img src={product.image} alt={product.name} />
                <div className="card-body">
                  <div className="badge-row">
                    <span className="pill">{product.badge}</span>
                    <span className="pill muted">{product.category}</span>
                  </div>
                  <h4>{product.name}</h4>
                  <p>₹{product.price}</p>
                  <button className="btn btn-accent" onClick={() => addToCart(product)}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block" id="collection">
        <div className="section-heading">
          <p className="eyebrow">Our edit</p>
          <h2>Explore every style</h2>
        </div>

        {categories.map((category) => {
          const categoryItems = products.filter((product) => product.category === category);

          return (
            <div className="category-block" key={category}>
              <div className="category-title-row">
                <h3>{category}</h3>
                <span>{categoryItems.length} styles</span>
              </div>

              <div className="row g-4">
                {categoryItems.map((product) => (
                  <div className="col-lg-3 col-md-6" key={product.id}>
                    <div className="product-card">
                      <img src={product.image} alt={product.name} />
                      <div className="card-body">
                        <div className="badge-row">
                          <span className="pill">{product.badge}</span>
                        </div>
                        <h4>{product.name}</h4>
                        <p>₹{product.price}</p>
                        <button className="btn btn-accent" onClick={() => addToCart(product)}>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Home;


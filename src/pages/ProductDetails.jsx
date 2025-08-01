import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';


function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct(id);
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    

    navigate('/checkout');
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="row g-4">
      <div className="col-12 col-md-6 mb-4 mb-md-0">
        <div className="text-center">
          <img 
            src={product.image} 
            alt={product.title} 
            className="img-fluid" 
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <h2 className="mb-3">{product.title}</h2>
        <p className="fs-4 text-primary">${product.price}</p>
        <p className="badge bg-secondary mb-3">{product.category}</p>
        <p className="mb-4">{product.description}</p>
        <div className="d-grid gap-2">
          <button className="btn btn-success" type="button" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <Link to="/home" className="btn btn-outline-secondary">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getProduct(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  return await response.json();
}


export default ProductDetails;

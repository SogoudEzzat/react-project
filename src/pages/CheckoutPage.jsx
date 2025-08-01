import { useEffect, useState } from 'react';

function CheckoutPage() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  // حساب المجموع الكلي
  const calculateTotal = (items) => {
    const totalPrice = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(totalPrice.toFixed(2));
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    // تأكد أن كل منتج لديه quantity، لو مش موجود نخليه 1
    const initializedCart = storedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));

    setCartItems(initializedCart);
    calculateTotal(initializedCart);
  }, []);

  // ➕ زيادة الكمية
  const increaseQty = (index) => {
    const newCart = [...cartItems];
    newCart[index].quantity += 1;
    updateCart(newCart);
  };

  // ➖ تقليل الكمية
  const decreaseQty = (index) => {
    const newCart = [...cartItems];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
      updateCart(newCart);
    }
  };

  // ❌ حذف منتج
  const removeItem = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    updateCart(newCart);
  };

  // تحديث السلة في الواجهة وفي localStorage
  const updateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    calculateTotal(newCart);
  };

  if (cartItems.length === 0) {
    return <div className="alert alert-info text-center">Your cart is empty.</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Checkout</h2>
      <div className="row g-3">
        {cartItems.map((item, index) => (
          <div key={index} className="col-12 border rounded p-3 d-flex justify-content-between align-items-center flex-wrap">
            <div className="d-flex align-items-center">
              <img 
                src={item.image} 
                alt={item.title} 
                style={{ width: '80px', height: '80px', objectFit: 'contain', marginRight: '15px' }} 
              />
              <div>
                <h5>{item.title}</h5>
                <p className="mb-1 text-primary">${item.price}</p>
                <div className="d-flex align-items-center">
                  <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => decreaseQty(index)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="btn btn-sm btn-outline-secondary ms-2" onClick={() => increaseQty(index)}>+</button>
                </div>
              </div>
            </div>
            <div className="text-end mt-3 mt-md-0">
              <p className="mb-1"><strong>Total: ${(item.price * item.quantity).toFixed(2)}</strong></p>
              <button className="btn btn-sm btn-danger" onClick={() => removeItem(index)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 border-top">
        <h4>Total: <span className="text-success">${total}</span></h4>
        <button className="btn btn-success mt-2" onClick={() => alert('Order placed!')}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;

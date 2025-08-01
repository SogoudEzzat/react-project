import React from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import './Product2.css'

const Product = ({ Product }) => {
  const { id, image, category, title, price } = Product;

  return (
    <div className="card mb-5 product-card">
      <div className="text-center p-3 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="img-fluid product-image"
          style={{ maxHeight: '200px', objectFit: 'contain' }}
        />
      </div>
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${price}</p>
        <div className="d-flex justify-content-between">
          <Link to={`/product/${id}`} className="btn btn-outline-primary btn-sm">
            <BsEyeFill /> Detail
          </Link>
          <button className="btn btn-outline-success btn-sm">
            <BsPlus /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

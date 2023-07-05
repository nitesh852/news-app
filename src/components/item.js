import React from "react";

function Item({ item }) {
  return (
    <div className="col-12 col-md-12 col-lg-12 mb-3">
      <div className="card h-100 border-0">
        <div className="card-img-top">
          <a
            href={item.url}
            className="font-weight-bold text-dark text-uppercase small"
            target="_blank"
          >
            <img
              className="listImage"
              src={item.urlToImage}
              alt="Card image cap"
            />
          </a>
        </div>
        <div className="card-body text-center">
          <h4 className="card-title">
            <a
              href={item.url}
              className="font-weight-bold text-dark text-uppercase small no-underline"
              target="_blank"
            >
              {item.title}
            </a>
          </h4>
          <h5 className="card-price small text-warning">
            <i>{item.author}</i>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Item;

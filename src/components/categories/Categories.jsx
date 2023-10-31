import React from "react";
import "./Categories.css";

const Categories = ({ allCategories }) => {
  return (
    <div className="cats-wrapper">
      <div className="cats-header">Categories</div>
      <div>
        {allCategories.map((cat, i) => {
          return (
            <div key={i} className="cats">
              {cat}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;

import React from 'react';

const AdsItem = (props) => {
  const {title, createAt, description, authorName} = props.ad;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <span className="card-subtitle mb-2 text-muted">{authorName}</span>
        <p className="card-text">{description}</p>
        <span>{createAt}</span>
      </div>
    </div>
  );
};

export default AdsItem;

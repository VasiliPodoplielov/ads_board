import React from 'react';
import {Link} from "react-router-dom";

const AdsItem = (props) => {
  const {title, createAt, description, authorName, id} = props.ad;
  const currentUser = props.currentUser;
  const onDelete = props.onDeleteCallback;

  let actionsBlock;

  if (currentUser === authorName) {
    actionsBlock = (
        <div className="card__actions d-flex">

            <Link to={`/edit/${id}`}>
              <button type="button" className="btn btn-outline-secondary btn-sm" style={{marginRight: '10px'}}>
                Изменить
              </button>
            </Link>

          <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => onDelete(id)}>Удалить</button>
        </div>
    )
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          <Link to={`/${id}`}>{title}</Link>
        </h5>
        <span className="card-subtitle mb-2 text-muted">{authorName}</span>
        <p className="card-text">{description}</p>
        <span>{createAt}</span>
        {actionsBlock}
      </div>
    </div>
  );
};

export default AdsItem;

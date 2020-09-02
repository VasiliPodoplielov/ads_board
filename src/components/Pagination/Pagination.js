import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
  const splittedAds = props.ads;
  let activePage = props.activePage ? Number(props.activePage) : '';
  const setPaginationPage = props.setPaginationPageCallback;

  function onPageNumberClick(e) {
    let clickedPage = e.target.getAttribute('data-page');

    if (clickedPage === 'prev') {
      clickedPage = --activePage;
    } else if (clickedPage === 'next') {
      clickedPage = ++activePage;
    }

    setPaginationPage(Number(clickedPage));
  }


  function renderPaginationItem(itemsCount, activeItem) {
    let paginationItems = [];

    for (let i = 1; i <= itemsCount; i++ ) {
      paginationItems.push(i);
    }

    return paginationItems.map((item, index) => {
      return (
          <li className={`page-item ${activeItem === item ? 'active' : ''}`} key={index}>
            <span
                className="page-link"
                href="#"
                onClick={(e) => onPageNumberClick(e)}
                data-page={item}
            >
              {item}
            </span>
            {activeItem === item ? <span className="sr-only">(current)</span> : null}

          </li>
      )
    });
  }


  return (
      <div className='ads__pagination'>
        <nav aria-label="...">
          <ul className="pagination">
            <li className={`page-item ${activePage === 1 ? 'disabled' : ''}`}>
              <span className="page-link" data-page="prev" onClick={(e) => onPageNumberClick(e)}>Предыдущая</span>
            </li>
            {renderPaginationItem(splittedAds.length, activePage)}
            <li className={`page-item ${activePage === splittedAds.length ? 'disabled' : ''}`}>
              <span className="page-link" href="#" data-page="next" onClick={(e) => onPageNumberClick(e)}>Следующая</span>
            </li>
          </ul>
        </nav>
      </div>
  );
};



export default Pagination;

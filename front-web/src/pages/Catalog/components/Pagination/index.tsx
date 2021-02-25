import React from 'react';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import './styles.scss';

const Pagination = () => {
  return (
    <div className="pagination-container">
        <ArrowIcon className="pagination-previous active" />
        <div className="pagination-item">
            1
        </div>
        <div className="pagination-item active">
            3
        </div>
        <div className="pagination-item">
            3
        </div>
        <ArrowIcon className="pagination-next active"/>
    </div>
  );
}

export default Pagination;

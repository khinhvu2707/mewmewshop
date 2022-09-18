import React, { useState, memo, useEffect } from 'react'
import "./Pagination.css"
import PropTypes from "prop-types";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};
function Pagination(props) {
  const { total, pagination, onPageChange, executeScroll } = props;
  const { limit, page } = pagination;

  const handlePageChange = async (newPage) => {
    await onPageChange({ ...pagination, page: newPage });
    console.log(pagination);
  }

  return (
    <div className="d-flex justify-content-end m-3">
      <button className={`${total <= 0 || pagination.page <= 1 ? " button m-1 h-5 disabled" : "button m-1 h-5"}`}> <span onClick={() => handlePageChange(pagination.page - 1)}> Previous </span></button>
      <button className="button m-1"><span>{pagination.page}</span></button>
      <button className="button m-1"><span>/</span></button>
      <button className="button m-1"><span>{total}</span></button>
      <button className={`${pagination.page >= total ? " button m-1 disabled" : "button m-1"}`}><span onClick={() => handlePageChange(pagination.page + 1)}> Next </span></button>
    </div>
  )
}
export default memo(Pagination)
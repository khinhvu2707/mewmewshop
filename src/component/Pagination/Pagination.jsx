import React, { useState, memo, useEffect } from 'react'
import "./Pagination.css"
import PropTypes from "prop-types";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};
function Pagination(props) {
  const { total, pagination, onPageChange ,executeScroll} = props;
  const { limit, page } = pagination;
  const [filters, setFilters] = useState({
    limit: limit,
    page: page,
  });
  console.log(filters);

  useEffect(() => {
    async function fetchMyAPI() {
      await onPageChange(filters);
    }
    
    fetchMyAPI(executeScroll)
  }, [filters])

 
  const handlePageChange = (newPage) => {
    setFilters(previousState => {
      return { ...previousState, page: newPage }
    });
    console.log(filters);
  }

  return (
    <div className="d-flex justify-content-end m-3">
      <button className={`${total <=0 || filters.page <=1 ? " button m-1 h-5 disabled" : "button m-1 h-5"}`}> <span onClick={() => handlePageChange(filters.page - 1)}> Previous </span></button>
      <button className="button m-1"><span>{filters.page}</span></button>
      <button className="button m-1"><span>/</span></button>
      <button className="button m-1"><span>{total}</span></button>
      <button className={`${filters.page >= total ? " button m-1 disabled" : "button m-1"}`}><span onClick={() => handlePageChange(filters.page + 1)}> Next </span></button>
    </div>
  )
}
export default memo(Pagination)
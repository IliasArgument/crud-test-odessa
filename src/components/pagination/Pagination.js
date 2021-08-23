import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/actions';


const PaginationComponent = () => {
    const pagination = [];
    const { data, per_page } = useSelector(state => state)
    const dispatch = useDispatch()
    for (let i = 1; i <= Math.ceil(data.length / per_page); i++) {
        pagination.push(i)
    }
    return (
        <div className='pagintion-container'>
            {
                pagination.map((page, i) => (
                    <button className='pagination-btn' key={i} onClick={() => dispatch(setCurrentPage(page))}>{page}</button>
                ))
            }
        </div>
    );
}
export default PaginationComponent;
import React from 'react';
import { Link } from 'react-router-dom';

const ExpensListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <Link  to={`${id}/edit`} ><h3> {description} </h3></Link>
        <p> {amount}- {createdAt} </p>
    </div>
)
export default ExpensListItem;
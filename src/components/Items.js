import React from 'react';
import './Items.css';
import Item from './Item';

const Items = ({items, totalCount, setTotalCount, setItems}) => {
    return(
        <div className='items-container'>
                {
                    items.map((item) => <Item item={item} totalCount={totalCount} setTotalCount={setTotalCount} items={items} setItems={setItems}/>)
                }
            <span>Total : {totalCount}</span>
        </div>
    )
}

export default Items;
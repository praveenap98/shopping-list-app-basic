import React, { useState } from 'react';
import './Item.css';

const Item = ({item, totalCount, setTotalCount, items, setItems}) => {
    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(count - 1);
        setTotalCount(totalCount - 1);
    }

    const increment = () => {
        setCount(count + 1);
        setTotalCount(totalCount + 1); 
    }

    const checked = () => {
        setItems(
            items.map((i) => {
                if(i.id === item.id)
                return {...i, isChecked:!item.isChecked}
                return i;
            })
        )
        
    }

    return(
        <div className='item-container'>
            <div>
                <input type='checkbox' onClick={checked} className='checkbox'/>
                <span className={`${item.isChecked ? 'strikeout' : ''}`}>{item.itemName}</span>
            </div>
            <div className='count'>
                <button className='orange' disabled={`${count < 1 ? 'disbaled' : ''}`} onClick={decrement}>&lt;</button>
                <span className='orange'>{count}</span>
                <button className='orange' onClick={increment}>&gt;</button>
            </div>
        </div>
    )
}

export default Item;
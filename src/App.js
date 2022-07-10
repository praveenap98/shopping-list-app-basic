import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Items from './components/Items';

const App = () => {
    const [inputText, setInputText] = useState('');
    const [items, setItems] = useState([]);
    const [totalCount, setTotalCount] = useState(0);

    return(
        <div className='main-container'>
            <Form 
            inputText={inputText} 
            setInputText={setInputText}
            items={items}
            setItems={setItems}
            />
            <Items 
            items={items} 
            totalCount={totalCount}
            setTotalCount = {setTotalCount}
            setItems={setItems}
            />
        </div>
    )
}

export default App;
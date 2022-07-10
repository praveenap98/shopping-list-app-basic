import React from 'react';
import './Form.css';

const Form = ({inputText, setInputText, items, setItems}) => {

    const changeHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const clickHandler = (e) => {
        e.preventDefault();
        if(inputText === ''){
            alert('Add an item...');
        }
        else {
        setItems([...items, {itemName: inputText, isChecked:false, id:Math.random()*1000}]);
        setInputText('');
        }
    }

    return(
        <div>
            <form className='form-container'>
                <input onChange={changeHandler} type='text' value={inputText} placeholder='Add an item...'/> 
                <input onClick={clickHandler} type='submit' value='+'/>
            </form>
        </div>
    )
}

export default Form;
import React from 'react';
import './Form.css';

const Form = (props) => {
  return (
    <form className='form-wrapper'>
      <div className='input-wrapper'>
        <input
          type='htmlText'
          placeholder='Top text'/>
        
        <input
          type='htmlText'
          placeholder='Bottom text'/>
      </div>

      <button type='submit'>Get a new meme image 🖼️ </button>
    </form>
  );
};

export default Form;

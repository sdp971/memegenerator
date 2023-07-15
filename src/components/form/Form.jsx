import React, { useState,useEffect } from 'react';
import './Form.css';


const Form = (props) => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });
  
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllMemes(data.data.memes);
      });
  }, []);

  const getMemeImage = () => {
    const memesArray = allMemes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage:url
    }))
  }

  



  function handleChange(event) {
     const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
  

  return (
    <div>
      <form className='form-wrapper'>
        <div className='input-wrapper'>
          <input
            type='htmlText'
            placeholder='Texte du haut'
            aria-label='string'
            name='topText'
            value={meme.topText}
            onChange={handleChange}
          />

          <input
            type='htmlText'
            placeholder='Texte du bas'
            aria-label='string'
            name='bottomText'
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>

        <button type='button' onClick={getMemeImage}>
          Obtenir une nouvelle image 🖼️
        </button>
      </form>
      <div className='meme'>
        <img src={meme.randomImage} alt="" className='meme--image' />

        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
      </div>
    </div>
  );
};

export default Form;

import React, { useState, useEffect } from 'react';
import './styles/search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 575px)');
    setIsMobile(mediaQuery.matches);

    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <div className='search'>
      <div className='search-form__content'>
        <input
          className='search-form__input'
          type="text"
          name="query"
          placeholder="Search books by title, author or genre"
          value={props.query}
          onChange={props.onChange}
        />
        {props.query.length > 0 && <div class="tooltip">
          <input className='remove-form_button' type="reset" value="X" alt="Clear the search form" onClick={props.clearText} />
          <span class="tooltiptext">clear</span>
        </div>}
      </div>
      {isMobile ?
        <button type="submit" className='search-form__button'>
          <FontAwesomeIcon className='fa-icons faMagnifyingGlass' icon={faMagnifyingGlass} />
        </button> :
        <button type="submit" className='search-form__button'>
          Search...&nbsp; <FontAwesomeIcon className='fa-icons faMagnifyingGlass' icon={faMagnifyingGlass} />
        </button>}
    </div>
  )
}

export default Search
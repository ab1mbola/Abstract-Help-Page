import './Searchbar.css';
import React from 'react';

export default function Searchbar() {
  return (
    <div className="container">
      <div className="heading">How can we help?</div>
      <form className="form">
        {/* <label htmlFor="search">How can we help?</label> */}
        <input type="text" id="search" placeholder="Search" />
        <img
          src="/assets/bx-right-arrow-alt.svg"
          alt="long right arrow"
          className="arrow"
        />
      </form>
    </div>
  );
}

import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";

export default function Header() {
  return (
    <div className='header'>
        <div className='headerLeft'>
            <Link to="/"><img className="header__icon" src="https://i.pinimg.com/originals/c5/09/94/c5099477fc460ee76942be91d3510c32.png"/></Link>
            <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
        </div>
    </div>
  )
}


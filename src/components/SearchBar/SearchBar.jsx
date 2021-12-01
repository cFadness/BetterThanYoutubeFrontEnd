import './SearchBar.css';
import React, {useState, useEffect} from 'react';

function SearchBar() {
    return (
        <div className="searchBar-container">
            <div className="searchBar-block"
                <input
                type="text"
                placeholder="Search for a Video"
                value=""
                // onChange=
                className="searchInput"/>
            </div>
        </div>
    )
}
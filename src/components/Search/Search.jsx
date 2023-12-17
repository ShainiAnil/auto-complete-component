import React, { useEffect, useState } from "react";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchList } from "./SearchList/SearchList";
import axios from "axios";
import "./Search.css";

const API_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";
const places = [
  "Munnar",
  "Kumarakom",
  "Vagamon",
  "Wayanadu",
  "Poovar",
  "Thrissur",
  "Alappey",
  "Banasura Sagar Dam",
  "Cochin",
  "Devikulam",
  "Aluva",
];

export const Search = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchList, setSearchList] = useState(places);
  const [filteredList, setFilteredList] = useState([]);

  const handleChange = (event) => {
    setSearchInputValue(event.target.value);

    const newFilteredItems = searchList.filter((data) => {
      return data
        .toLowerCase()
        .startsWith(`${event.target.value.toLowerCase()}`);
    });
    
    setFilteredList(newFilteredItems);
  };

  const clearSearch = () => {
    setSearchInputValue("");
    setFilteredList([]);
  };

  return (
    <div className="search-container">
      <div className="heading-section">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png"
          alt=""
        />
        <h1>Where to Next?</h1>
      </div>
      <SearchInput
        searchList={searchList}
        searchInputValue={searchInputValue}
        handleChange={handleChange}
        clearSearch={clearSearch}
      />

      <SearchList searchList={filteredList} />
    </div>
  );
};

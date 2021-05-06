import React from "react";

const SearchBox = ({ search }) => {
  return (
    <div>
      <h1>Reseptit:</h1>
      <input
        type="text"
        className="searchBox"
        onChange={search}
        placeholder="Etsi kategoria tai reseptin nimi"
      ></input>
    </div>
  );
};

export default SearchBox;

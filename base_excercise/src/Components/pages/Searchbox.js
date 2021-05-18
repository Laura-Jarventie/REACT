import React from "react";

import Dropdown from "react-bootstrap/Dropdown";

const SearchBox = ({ search }) => {
  return (
    <>
      <div>
        <h1>Reseptit:</h1>
        <input
          type="text"
          className="searchBox"
          onChange={search}
          placeholder="Etsi reseptin nimellä"
        ></input>
      </div>

      <input
        class="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Etsi kategorialla..."
        onChange={search}
      />
      <datalist id="datalistOptions">
        <option value="Ruokia" />
        <option value="Leivonnainen" />
        <option value="Suolaiset" />
        <option value="Sekalaiset" />
      </datalist>
    </>
  );
};

export default SearchBox;

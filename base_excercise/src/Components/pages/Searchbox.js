import React from "react";

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

        <input
          className="secondSearchBox"
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
      </div>
    </>
  );
};

export default SearchBox;

import React from "react";

const SearchBox = (props) => {
  return (
    <div>
      <input type="text" onChange={props.ihme} placeholder="Search animals" />
    </div>
  );
};

export default SearchBox;

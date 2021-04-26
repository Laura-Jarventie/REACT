import React from "react";

const RecepyAdd = ({ change, submit }) => {
  return (
    <form onSubmit={submit}>
      <label>Lisää resepti: </label>
      <br></br>
      <input type="text" name="name" onChange={change} required />
      <br></br>
      <label>Kategoria:</label>
      <br></br>
      <input type="text" name="category" onChange={change} required></input>
      <br></br>

      <label>Kenen luottoresepti:</label>
      <br></br>
      <input type="text" name="niceToKnow" onChange={change}></input>
      <br></br>

      <label>Ainekset, erota pilkulla</label>
      <br></br>
      <input
        type="text"
        name="ingredients"
        cols="30"
        rows="20"
        maxLength="500"
        onChange={change}
        required
      ></input>
      <br></br>

      <label>Valmistus ohjeet</label>
      <br></br>

      <br></br>
      <textarea
        name="text"
        cols="30"
        rows="20"
        maxLength="3000"
        onChange={change}
        required
      ></textarea>
      <br></br>

      <button type="submit">Lisää resepti</button>
    </form>
  );
};

export default RecepyAdd;

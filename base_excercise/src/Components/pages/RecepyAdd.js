import React from "react";

const RecepyAdd = () => {
  return (
    <div className="addRecipe">
      <div className="card">
        <h1>Lisää resepti:</h1>
        <form method="post" enctype="multipart/form-data">
          <label htmlFor="name">Reseptin nimi</label>
          <br></br>
          <input type="text" name="name" required></input>
          <br></br>

          <label htmlFor="category">Kategoria</label>
          <br></br>
          <input type="text" name="description" required></input>
          <br></br>

          <label htmlFor="ingredients">Ainekset, erota pilkulla</label>
          <br></br>
          <textarea
            name="ingredients"
            cols="30"
            rows="20"
            maxLength="500"
            required
          ></textarea>
          <br></br>

          <label htmlFor="instructions">Valmistus ohjeet</label>
          <br></br>

          <br></br>
          <textarea
            name="text"
            cols="30"
            rows="20"
            maxLength="3000"
            required
          ></textarea>
          <br></br>

          <button type="submit">Lähetä</button>
        </form>
      </div>
    </div>
  );
};

export default RecepyAdd;

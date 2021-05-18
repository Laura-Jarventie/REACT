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
/*
<RecepyAdd change={valueChangeHandler} submit={submitRecepy} />;

const Recepypage = () => {
  const [recepies, setRecepty] = useState([]);
  const [newRecepy, setNewRecepy] = useState({
    name: "",
    recipeCategory: "",
    niceToKnow: "",
    recipeIngredient: "",
    recipeInstruction: "",
    link: "",
    searchInput: "",
  });

  const valueChangeHandler = (e) => {
    setNewRecepy({ ...newRecepy, [e.target.name]: e.target.value });
  }; 

    const submitRecepy = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/recepies", newRecepy)
      .then(() => {
        return axios.get("http://localhost:3001/recepies");
      })
      .then((res) => setRecepty(res.data));
    e.target.reset();
  };
  */

/* Margitin
  import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RecipeForm = () => {
  const [data, setData] = useState({
    name: "",
    desc: "",
    inc: [],
    dir: "",
  });

  const [ingredients, setIngredients] = useState([
    { id: 1, incName: "", quantity: "" },
  ]);

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const changeIncData = (e, i) => {
    const { name, value } = e.target;
    const list = [...ingredients];
    list[i][name] = value;
    setIngredients(list);
    setData({ ...data, inc: ingredients });
  };

  const addMore = (e, i) => {
    e.preventDefault();
    const newInc = { id: ingredients.length + 1, incName: "", quantity: "" };
    setIngredients([...ingredients, newInc]);
  };

  const submitData = (e) => {
    axios.post("http://localhost:3001/recipies", data);
  };

  return (
    <Form onSubmit={submitData}>
      <Form.Group>
        <Form.Label htmlFor="">Name</Form.Label>
        <Form.Control type="text" name="name" onChange={changeData} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="">Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          type="text"
          name="desc"
          onChange={changeData}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="">Image</Form.Label>
        <Form.Control type="text" name="image" onChange={changeData} />
      </Form.Group>
      <p>Ingredients</p>
      {ingredients.map((_, i) => {
        return (
          <div key={i}>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label htmlFor="">Quantity</Form.Label>
                  <Form.Control
                    type="text"
                    name="quantity"
                    onChange={(e) => changeIncData(e, i)}
                  />
                </Col>
                <Col>
                  <Form.Label htmlFor="">Ingredient</Form.Label>
                  <Form.Control
                    type="text"
                    name="incName"
                    onChange={(e) => changeIncData(e, i)}
                  />
                </Col>
              </Row>
            </Form.Group>
          </div>
        );
      })}

      <Button variant="outline-success" onClick={addMore}>
        add more
      </Button>
      <Form.Group>
        <Form.Label>Directions</Form.Label>
        <Form.Control as="textarea" rows={3} name="dir" onChange={changeData} />
      </Form.Group>
      <Button type="submit" variant="success" value="Send data">
        Post recipe
      </Button>
    </Form>
  );
};

export default RecipeForm;
*/
<Form.Control
  type="text"
  name="recipeCategory"
  onChange={changeData}
  option
  value="Ruokia/Leivonnainen/Suolaiset/Sekalaiset"
/>;
<>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Etsi kategorialla
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Ruokia</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Leivonnainen</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Suolaiset</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Sekalaiset</Dropdown.Item>
            <input className="searchBox" onChange={search}></input>
          </Dropdown.Menu>
        </Dropdown>
      </>
    </>

    <>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Etsi kategorialla
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Ruokia</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Leivonnainen</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Suolaiset</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Sekalaiset</Dropdown.Item>
            <input className="searchBox" onChange={search}></input>
          </Dropdown.Menu>
        </Dropdown>
      </>

<label for="exampleDataList" class="form-label">
Kategoria
</label>
<input
class="form-control"
list="datalistOptions"
id="exampleDataList"
placeholder="Valitse kategoria..."
/>
<datalist id="datalistOptions">
<option value="Ruokia" />
<option value="Leivonnainen" />
<option value="Suolaiset" />
<option value="Sekalaiset" />
</datalist>
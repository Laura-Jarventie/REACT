import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MargitinRecipeForm = () => {
  const [data, setData] = useState({
    name: "",
    recipeCategory: "",
    niceToKnow: "",
    recipeIngredient: [],
    recipeInstructions: "",
  });

  const [ingredients, setIngredients] = useState([{ id: 1 }]);

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const changeIncData = (e, i) => {
    const { name, value } = e.target;
    const list = [...ingredients];
    list[i][name] = value;
    setIngredients(list);
    setData({ ...data, recipeIngredient: ingredients });
  };

  const addMore = (e, i) => {
    e.preventDefault();
    const newInc = { id: ingredients.length + 1 };
    setIngredients((prevState) => [...prevState, newInc]);
  };

  const submitData = (e) => {
    axios.post("http://localhost:3001/recepies", data);
  };

  return (
    <Form onSubmit={submitData}>
      <Form.Group>
        <Form.Label htmlFor="">Reseptin nimi:</Form.Label>
        <Form.Control type="text" name="name" onChange={changeData} />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="">Kategoria:</Form.Label>
        <Form.Control type="text" name="recipeCategory" onChange={changeData} />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="">Kenen luottoresepti:</Form.Label>
        <Form.Control type="text" name="niceToKnow" onChange={changeData} />
      </Form.Group>

      {ingredients.map((_, i) => {
        return (
          <Form.Group>
            <Row>
              <Col>
                <Form.Label htmlFor="">Ainekset:</Form.Label>
                <Form.Control
                  type="text"
                  name="recipeIngredient"
                  onChange={(e) => changeIncData(e, i)}
                />
              </Col>
            </Row>
          </Form.Group>
        );
      })}
      <Button variant="outline-success" onClick={addMore}>
        Lisää aines
      </Button>
      <Form.Group>
        <Form.Label htmlFor="">Valmistus ohjeet:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          type="text"
          name="recipeInstructions"
          onChange={changeData}
        />
      </Form.Group>

      <Button type="submit" variant="success" value="Send data">
        Lisää resepti
      </Button>
    </Form>
  );
};

export default MargitinRecipeForm;

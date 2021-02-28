import React, { useState } from "react";
import BaseForm from "../../BaseForm";
import "./styles.scss";

const Form = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
const handleOnChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };
  const handleOnChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  return (
    <BaseForm title="cadastrar um produto">
      <h1 className="my-5">
        Nome: {name} <br />
        Categoria: {category} <br />
        Preço: {price}
      </h1>
      <div className="row">
        <div className="col-6">
          <input
            value={name}
            type="text"
            className="form-control mb-5"
            onChange={handleOnChangeName}
            placeholder="Nome do produto"
          />
          <select value={category} className="form-control mb-5" onChange={handleOnChangeCategory}>
              <option value="livros">Livros</option>
              <option value="computadores">Computadores</option>
              <option value="eletrônicos">Eletrônicos</option>
          </select>
          <input
            value={price}
            type="text"
            className="form-control"
            onChange={handleOnChangePrice}
            placeholder="Insira o valor do produto"
          />
        </div>
      </div>
    </BaseForm>
  );
};

export default Form;

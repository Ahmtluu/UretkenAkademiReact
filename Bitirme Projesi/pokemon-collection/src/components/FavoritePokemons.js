import React, { useEffect, useState } from "react";
import { db } from "../service/firebase";
import {
  query,
  getDocs,
  collection,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FavoritePokemons(props) {
  const columnsPerRow = 4;
  const [favPokemon, setFavPokemon] = useState([]);

  const removeFav = async (pokemon) => {
    const { name } = pokemon._document.data.value.mapValue.fields;

    const q = query(
      collection(db, "favPokemons"),
      where("uid", "==", props.user.uid),
      where("name", "==", name.stringValue)
    );
    const docs = await getDocs(q);

    try {
      docs.forEach(async (pokemonDoc) => {
        await deleteDoc(doc(db, "favPokemons", pokemonDoc.id)).then(() =>
          window.location.reload()
        );
      });
    } catch (e) {
      console.log(e);
    }
  };

  const fetchFavPokemons = async () => {
    const q = query(
      collection(db, "favPokemons"),
      where("uid", "==", props.user.uid)
    );
    const docs = await getDocs(q);
    setFavPokemon(docs.docs);
  };

  useEffect(() => {
    fetchFavPokemons();
  });

  return (
    <div className=" mt-3">
      <div className="row">
        <div className="col-md-12 grid-margin">
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <h5 className="px-3">Your Favorite Pokemon(s)</h5>
                <div className="buttons">
                  <button className="btn btn-outline-primary px-4">
                    Export
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Row xs={1} md={columnsPerRow}>
            {favPokemon &&
              favPokemon.map((pokemon, idx) => {
                const { name, pokemonId } =
                  pokemon._document.data.value.mapValue.fields;
                return (
                  <Col key={idx}>
                    <Card className="mt-2">
                      <Link to={`/pokemon/${pokemonId.integerValue}`}>
                        <Card.Header>
                          <Card.Img
                            src={`https://img.pokemondb.net/artwork/large/${name.stringValue}.jpg`}
                            alt="talkie"
                            className="card-img-top"
                          />
                        </Card.Header>
                      </Link>

                      <Card.Body className="d-flex justify-content-around">
                        <Card.Title>
                          {name.stringValue[0].toUpperCase() +
                            name.stringValue.slice(1)}
                        </Card.Title>
                        <button
                          className="btn btn-danger"
                          onClick={(e) => removeFav(pokemon)}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { getSuperHeroList, customDecr } from "./../../actions";

function ListSuperHeroes(props) {
  console.log('props11');
  console.log(props);

  const { superHeroList } = props;

  useEffect(() => {
    props.getSuperHeroList();
  }, []);

  return (
    <>
      <div>
        <h1>New SuperHero</h1>
        <p>VALUEEEEE: {props.value}</p>
        <button onClick={props.customDecr}>-</button>
        <Formik
          initialValues={{
            Name: "",
            Image: "",
            Superpowers: ""
          }}
          onSubmit={async (values) => {
            await new Promise((r) =>
              console.log(JSON.stringify(values, null, 2))
            );
          }}
        >
          <Form>
            <label htmlFor="Name">Name</label>
            <Field id="Name" name="Name" />

            <label htmlFor="Image">Imge</label>
            <Field id="Image" name="Image" />

            <label htmlFor="Superpowers">Superpowers</label>
            <Field id="Superpowers" name=" Superpowers" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>

      {superHeroList.map((data) => {
        return (
          <div key={data.name}>
            {data.name}
            <img src={data.image} />
            <p>
              Способности:{" "}
              {data.superpowers.map((info) => {
                return (
                  <p key={info.first}>
                    {info.first}
                    {info.second}
                  </p>
                );
              })}
            </p>
          </div>
        );
      })}
    </>
  );
}

const mapStateToProps = (state) => {
  return {...state.superHeroReducer, ...state.customCounter }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getSuperHeroList: () => {
      dispatch(getSuperHeroList());
    },
    customDecr: () => {
      dispatch(customDecr());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListSuperHeroes);

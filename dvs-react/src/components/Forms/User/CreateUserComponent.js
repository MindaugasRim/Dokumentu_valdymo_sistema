import React, { Component } from "react";
import PropTypes from "prop-types";

const CreateUserComponent = props => {
  return (
    <div>
      <div className="container-fluid m-2">
        <h3 className="display-6 ">Naujo vartotojo kūrimas</h3>
        {/* <h5>Dokumento tipo pavadinimas</h5> */}
        <div className="row mt-2 mb-2 ">
          <div className="col ">
            <h5>Vardas</h5>
            <input
              type="text"
              className="form-control"
              placeholder="Įveskite vartotojo vardą"
              // value={this.state.value.imageUrl}
              onChange={props.onFirstNameChange}
            />
          </div>
          <div className="col">
            <h5>Pavardė</h5>

            <input
              type="text"
              className="form-control"
              placeholder="Įveskite vartotojo pavardę"
              onChange={props.onLastNameChange}
            />
          </div>
        </div>{" "}
        <div className="row mt-2 mb-2 ">
          <div className="col ">
            <h5>Unikalus vardas sistemoje</h5>
            <input
              type="text"
              className="form-control"
              placeholder="Įveskite prisijungimo vardą"
              // value={this.state.value.imageUrl}
              onChange={props.onUsernameChange}
            />
          </div>
          <div className="col">
            <h5>Elektroninoi pašto adresas</h5>

            <input
              type="email"
              className="form-control"
              placeholder="Įveskite vartotojo el. pašto adresą"
              onChange={props.onEmailAddressChange}
            />
          </div>
        </div>{" "}
        <div className="row mt-2 mb-2 ">
          <div className="col ">
            <h5>Įdarbinimo data</h5>
            <input
              type="date"
              className="form-control"
              placeholder="Įveskite vartotojo įdarbinimo datą"
              // value={this.state.value.imageUrl}
              onChange={props.onHireDateChange}
            />
          </div>
          <div className="col">
            <h5>Prisijungimo slaptažodis</h5>

            <input
              type="text"
              className="form-control"
              placeholder="Įveskite vartotojo prisijungimo slaptažodį"
              onChange={props.onPasswordChange}
            />
          </div>
        </div>
        <div className="row mt-2 mb-2 ">
          <div className="col-6 ">
            <h5>Administratoriaus rolė</h5>
            {/* <input
              type="text"
              className="form-control"
              placeholder="Pasirinkite, ar vartotojas yra admministratorius"
              // value={this.state.value.imageUrl}
              onChange={props.onAdministratorChange}
            /> */}

            <select
              onChange={props.onAdministratorChange}
              className="form-control "
              id="documentTypeSelect"
            >
              <option value="false">Ne</option>
              <option value="true">Taip</option>
            </select>
          </div>
        </div>
        {/* <div className="form-group" /> */}
        <button onClick={props.onSubmit} className="btn btn-info mt-2">
          Kurti
        </button>
      </div>
      <div className="container">{props.launchAlert}</div>

      {/* Name{props.propertiesObject.value.title}:
        <br />
        <input
          type="text"
          value={props.propertiesObject.value.title}
          onChange={props.onTitleChange}
        /> */}
    </div>
  );
};

export default CreateUserComponent;

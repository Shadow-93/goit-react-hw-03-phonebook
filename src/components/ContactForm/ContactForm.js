import React, { Component } from "react";
import PropTypes from "prop-types";

import s from "./ContactForm.module.css";

export default class Input extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  onInputSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;

    this.props.onAddContact(name, number);

    this.setState({ name: "", number: "" });
  };

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <section className={s.section}>
        <form className={s.form} onSubmit={this.onInputSubmit}>
          <label className={s.lable}>
            Name
            <input
              className={s.input}
              type="text"
              value={name}
              onChange={this.onInputChange}
              name="name"
            ></input>
            Number
            <input
              className={s.input}
              type="number"
              value={number}
              onChange={this.onInputChange}
              name="number"
            ></input>
          </label>

          <button className={s.button} type="submit">
            Add contact
          </button>
        </form>
      </section>
    );
  }
}

import React from "react";

import CharacterSearch from "../components/CharacterSearch";
import CharacterList from "../components/CharacterList";

import "./styles/Index.css";

class Index extends React.Component {
  state = {
    loading: true,
    error: null,
    results: [],
    page: 1,
  };

  componentDidMount = () => {
    this.getCharacters();
  };

  getCharacters = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${this.state.page}`
    );

    if (response.ok) {
      const json = await response.json();

      this.setState({
        loading: false,
        error: null,
        results: json.results,
        page: this.state.page + 1,
      });
    } else {
      this.setState({
        error: "Not found!",
      });
    }
  };

  handleClick = (event) => {
    event.preventDefault();

    this.getCharacters();
  };

  handleChange = async (event) => {
    const query = event.target.value;

    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${query}`
    );

    if (response.ok) {
      const json = await response.json();

      this.setState({
        loading: false,
        error: null,
        results: json.results,
      });
    } else {
      this.setState({
        error: "Not found!",
      });
    }
  };

  render() {
    const { loading, error, results } = this.state;

    if (loading && error === null) {
      return <h1>Loading...</h1>;
    }

    if (error) {
      return (
        <h1>
          Not found!{" "}
          <span role="img" aria-label="emoji">
            😢
          </span>
        </h1>
      );
    }

    return (
      <React.Fragment>
        <CharacterSearch onChange={this.handleChange} />
        <section className="Character__List">
          <CharacterList data={results} />
        </section>
        <div className="Button">
          <a href="/" onClick={this.handleClick}>
            Load more...
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;

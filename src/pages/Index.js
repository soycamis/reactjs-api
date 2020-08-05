import React from "react";

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
    const json = await response.json();

    this.setState({
      loading: false,
      error: null,
      results: this.state.results.concat(json.results),
      page: this.state.page + 1,
    });
  };

  handleClick = (event) => {
    event.preventDefault();

    this.getCharacters();
  };

  render() {
    const { loading, error, results } = this.state;

    if (loading && error === null) {
      return <h1>Loading...</h1>;
    }

    if (error) {
      return <h1>Error</h1>;
    }

    if (loading === false) {
      return (
        <React.Fragment>
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
}

export default Index;

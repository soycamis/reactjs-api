import React from "react";

import "./styles/CharacterSearch.css";

class CharacterSearch extends React.Component {
  render() {
    return (
      <section className="CharacterSearch__container">
        <form>
          <div>
            <input
              onChange={this.props.onChange}
              type="search"
              name="query"
              id="query"
              placeholder="Search"
            />
          </div>
        </form>
      </section>
    );
  }
}

export default CharacterSearch;

import React from "react";

class Character extends React.Component {
  render() {
    const character = this.props.info;

    return (
      <React.Fragment>
        <article className="Character__Item">
          <div className="Character__Item-Photo">
            <img src={character.image} alt={character.name} />
          </div>
          <div className="Character__Item-Info">
            <h2>{character.name}</h2>
            <span>{character.status}</span> - <span>{character.species}</span>
          </div>
        </article>
      </React.Fragment>
    );
  }
}

export default Character;

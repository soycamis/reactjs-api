import React from "react";

import Character from "./Character";

class CharacterList extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <React.Fragment>
        {data.map((character) => {
          return (
            <div key={character.id}>
              <Character info={character} />
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default CharacterList;

const React = require("react");
const Layout = require("./Layout.jsx");

class Edit extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    const index = this.props.index;
    return (
      <Layout>
        <h1 class="first-element">Edit: {pokemon.name}</h1>
        <form
          class="embedded"
          action={`/pokedex/${index}?_method=PUT`}
          method="POST"
        >
          Name: <input type="text" name="name" value={pokemon.name} />
          <br />
          Image: <input type="text" name="img" value={pokemon.img} />
          <br />
          ID: <input type="text" name="id" value={pokemon.id} />
          <br />
          HP: <input type="text" name="hp" value={pokemon.stats.hp} />
          <br />
          ATTACK:{" "}
          <input type="text" name="stats.attack" value={pokemon.stats.attack} />
          <br />
          DEFENSE:{" "}
          <input
            type="text"
            name="stats.defense"
            value={pokemon.stats.defense}
          />
          <br />
          SP-ATTACK:{" "}
          <input
            type="text"
            name="stats.spattack"
            value={pokemon.stats.spattack}
          />
          <br />
          SP-DEFENSE:{" "}
          <input
            type="text"
            name="stats.spdefense"
            value={pokemon.stats.spdefense}
          />
          <br />
          SPEED:{" "}
          <input type="text" name="stats.speed" value={pokemon.stats.speed} />
          <br />
          TYPE(S): <input type="text" name="type" value={pokemon.type} />
          <br />
          <input
            id="submit-edits"
            class="submit-button"
            type="submit"
            name=""
            value="Submit Edits"
          />
        </form>
      </Layout>
    );
  }
}

module.exports = Edit;

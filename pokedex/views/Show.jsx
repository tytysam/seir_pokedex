const React = require("react");
const Layout = require("./Layout.jsx");

class Show extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
      <Layout>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.img} />
        <h3>ID: {pokemon.id}</h3>
        {/* <h3>STATS:</h3>
        <p>HP: {pokemon.stats.hp}</p>
        <p>ATTACK: {pokemon.stats.attack}</p>
        <p>DEFENSE: {pokemon.stats.defense}</p>
        <p>SP-ATTACK: {pokemon.stats.spattack}</p>
        <p>SP-DEFENSE: {pokemon.stats.spdefense}</p>
        <p>SPEED: {pokemon.stats.speed}</p> */}

        <p>TYPE: {pokemon.type}</p>
      </Layout>
    );
  }
}

module.exports = Show;

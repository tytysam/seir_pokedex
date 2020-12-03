const React = require("react");
const Layout = require("./Layout.jsx");

class Index extends React.Component {
  render() {
    const pokemonData = this.props.pokemon;
    return (
      <Layout>
        <h1>My Pokedex</h1>
        <nav>
          <a href="/pokedex/new">Discover a new Pokemon!</a>
        </nav>
        <ul>
          {pokemonData.map((pokemon, index) => {
            return (
              <div className="pokemon-container">
                <img src={pokemonData.img} />
                <h2>{pokemonData.name}</h2>
                <p>{pokemonData.type}</p>
              </div>
            );
          })}
        </ul>
      </Layout>
    );
  }
}

module.exports = Index;

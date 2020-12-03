const React = require("react");
const Layout = require("./Layout.jsx");

class Index extends React.Component {
  render() {
    const pokemonData = this.props.pokemon;
    return (
      <Layout>
        <div>
          <img src="/images/my-pokedex-header.png" />
        </div>
        <nav>
          <a href="/pokedex/new">Discover a new Pokemon!</a>
        </nav>
        <ul>
          {pokemonData.map((pokemon, index) => {
            return (
              <li>
                <a href={`/pokedex/${index}`}>
                  <div className="pokemon-container">
                    <img src={pokemon.img} />
                    <h2>
                      {pokemon.id} - {pokemon.name}
                    </h2>
                    <p>{pokemon.type}</p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </Layout>
    );
  }
}

module.exports = Index;

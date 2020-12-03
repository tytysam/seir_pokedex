const React = require("react");
const Layout = require("./Layout.jsx");

class Index extends React.Component {
  render() {
    const pokemonData = this.props.pokemon;
    return (
      <Layout>
        <div class="header-image-container">
          <img src="/images/my-pokedex-header.png" />
        </div>
        <ul>
          {pokemonData.map((pokemon, index) => {
            return (
              <li>
                <a href={`/pokedex/${index}`}>
                  <div className="pokemon-container">
                    <img src={pokemon.img} />
                    <h2>
                      {pokemon.id}
                      <br />
                      {pokemon.name}
                    </h2>
                    <p>{pokemon.type}</p>
                  </div>
                </a>
                <div class="buttons">
                  <form
                    action={`/pokedex/${index}?_method=DELETE`}
                    method="POST"
                  >
                    <input class="submit-button" type="submit" value="REMOVE" />
                  </form>
                  <a className="edit-button" href={`/pokedex/${index}/edit`}>
                    Edit {pokemon.name}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </Layout>
    );
  }
}

module.exports = Index;

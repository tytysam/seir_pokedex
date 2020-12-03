const React = require("react");
const Layout = require("./Layout.jsx");

class New extends React.Component {
  render() {
    return (
      <Layout>
        <h1 class="first-element">Create a new Pokedex Entry!</h1>
        <form class="embedded" action="/pokedex/" method="POST">
          Name: <input type="text" name="name" />
          <br />
          Image: <input type="text" name="img" />
          <br />
          ID: <input type="text" name="id" />
          <br />
          HP: <input type="text" name="stats.hp" />
          <br />
          ATTACK: <input type="text" name="stats.attack" />
          <br />
          DEFENSE: <input type="text" name="stats.defense" />
          <br />
          SP-ATTACK: <input type="text" name="stats.spattack" />
          <br />
          SP-DEFENSE: <input type="text" name="stats.spdefense" />
          <br />
          SPEED: <input type="text" name="stats.speed" />
          <br />
          TYPE(S): <input type="text" name="type" />
          <br />
          <input
            id="submit-new"
            class="submit-button"
            type="submit"
            name=""
            value="New Pokedex Entry"
          />
        </form>
      </Layout>
    );
  }
}

module.exports = New;

const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Gotta' Catch 'Em All!</title>
          <link rel="stylesheet" href="/css/style.css" />
        </head>
        <body>
          <nav class="static-layout-buttons">
            <a href="/pokedex">Back to My Pokedex</a>

            <a href="/pokedex/new">Discover a new Pokemon!</a>
          </nav>
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = Layout;

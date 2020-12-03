const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Gotta' Catch 'Em All!</title>
          <link rel="stylesheet" href="/public/css/style.css" />
        </head>
        <body>
          <nav>
            <a href="/pokedex">Back to My Pokedex</a>
          </nav>
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = Layout;

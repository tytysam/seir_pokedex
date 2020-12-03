// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const app = express();
const PORT = 3000;
const methodOverride = require("method-override");
// const router = require("./controllers/pokedexController.js");

// =======================================
//                DATABASE
// =======================================
const pokemonData = require("./models/pokemon.js");

// =======================================
//               MIDDLEWARE
// =======================================
app.set("view engine", "jsx"); // use the .set method to create a key/value pair... our Key = "view engine" and our Value ="jsx"
app.engine("jsx", require("express-react-views").createEngine()); // Creates our engine
app.use(express.urlencoded({ extended: false })); // * note: <== THIS (.urlencoded) is what gives us access to req.body
app.use(express.static("public")); // tells express to look in our public folder by default for static files
app.use(methodOverride("_method")); // gives us the ability to overwrite a POST or GET method with DELETE or PUT or...?

// =======================================
//             CONTROLLERS
// =======================================
// *** REFACTOR INTO CONTROLLERS AFTER YOU GET THE CRUD APP WORKING
// const pokedexController = require("./controllers/pokedexController.js");
// app.use("/pokedex", pokedexController);

// =======================================
//                ROUTES
// =======================================
// --> I.N.D.U.C.E.S. ... Index, New, Destroy, Update, Create, Edit, Show

// INDEX | ==> GET request
app.get("/pokedex", (req, res) => {
  res.render("Index", {
    pokemon: pokemonData,
  });
});

// NEW | ==> GET request
app.get("/pokedex/new", (req, res) => {
  res.render("New");
});

// Destroy | ==> DELETE request
app.delete("/pokedex/:indexOfPokemonDataArray", (req, res) => {
  pokemonData.splice(req.params.indexOfPokemonDataArray, 1); // remove one single item from the array, at the location of the index we're passing through...
  res.redirect("/pokedex"); // redirect back to our index
});

// Update | ==> PUT request
app.put("/pokedex/:indexOfPokemonDataArray", (req, res) => {
  pokemonData[req.params.indexOfPokemonDataArray] = req.body;
  res.redirect("/pokedex/");
});

// Create | ==> POST request
app.post("/pokedex/", (req, res) => {
  pokemonData.push(req.body); // push our data to our model (pokemon.js)
  res.redirect("/pokedex/"); // then redirect the user to the index
});

// Edit | ==> GET request
app.get("/pokedex/:indexOfPokemonDataArray/edit", (req, res) => {
  res.render(
    "Edit", // renders views/edit.ejs
    {
      pokemon: pokemonData[req.params.indexOfPokemonDataArray], // the pokemonData object...
      index: req.params.indexOfPokemonDataArray, // and its index in the array...
    }
  );
});

// Show | ==> GET request
app.get("/pokedex/:indexOfPokemonDataArray", (req, res) => {
  res.render("Show", {
    pokemon: pokemonData[req.params.indexOfPokemonDataArray],
  });
});

// =======================================
//              LISTENER
// =======================================
app.listen(PORT, () => {
  console.log(`Pokedex App is listening on port: ${PORT}`);
});

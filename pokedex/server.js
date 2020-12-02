// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const app = express();
const PORT = 3000;

// const methodOverride = require("method-override");
// const router = require("./controllers/pokedexController.js");

// =======================================
//                DATABASE
// =======================================
const pokeData = require("./models/pokemon.js");

// =======================================
//               MIDDLEWARE
// =======================================
app.set("view engine", "jsx"); //
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

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

// NEW | ==> GET request

// Destroy | ==> DELETE request

// Update | ==> PUT request

// Create | ==> POST request

// Edit | ==> GET request

// Show | ==> GET request

// =======================================
//              LISTENER
// =======================================
app.listen(PORT, () => {
  console.log(`Pokedex App is listening on port: ${PORT}`);
});

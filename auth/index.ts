import express from "express";
import passport from "passport";
import { UniqueTokenStrategy } from "passport-unique-token";
import { Strategy as LocalStrategy } from "passport-local";
import FabricaRepositorioSQLite from "./fabricas/fabricaRepositorioSqlite";
import Gerenciador from "./manager/gerenciador";
import ControladorAuth from "./controladores/controladorAuth";

const app = express();
app.use(express.json());
app.use(passport.initialize());

// Passport Middlewares
passport.use(
  new UniqueTokenStrategy(async (token, done) => {
    try {
      const usuario = await gerenciador.repositorioUsuario.getUsuario(token);
      return done(null, usuario);
    } catch (error) {
      return done(null, false);
    }
  })
);

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "senha", session: false },
    (username, password, done) => {
      try {
        const usuario =
          gerenciador.repositorioUsuario.getUsuarioByEmail(username);
        return done(null, usuario);
      } catch (error) {
        return done(error);
      }
    }
  )
);

const PORT = 8100;
const fabricaRepositorio = new FabricaRepositorioSQLite();
const gerenciador = new Gerenciador(fabricaRepositorio);
const controladorAuth = new ControladorAuth(gerenciador);

app.get(
  "/check",
  passport.authenticate("token", { session: false }),
  controladorAuth.checarUsuario
);
app.post(
  "/login",
  passport.authenticate("local", { session: false }),
  controladorAuth.login
);
app.post(
  "/logout",
  passport.authenticate("token", { session: false }),
  controladorAuth.logout
);
app.post("/cadastro", controladorAuth.cadastrar);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

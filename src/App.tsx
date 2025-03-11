import "./App.css";
import { Header } from "@codegouvfr/react-dsfr/Header";

function App() {
  return (
    <>
      <Header
        brandTop={
          <>
            INTITULE
            <br />
            OFFICIEL
          </>
        }
        homeLinkProps={{
          href: "/",
          title: "Accueil",
        }}
      />

      <div>Ceci est un test</div>
    </>
  );
}

export default App;

import "./App.css";
import { useState } from "react";

function App() {
  const [routes, setRoutes] = useState([]);
  const [err, setErr] = useState(false);
  function addRoute() {
    setRoutes((routes) => [...routes, { isim: "", enlem: "", boylam: "" }]);
  }

  function changeField(event, index) {
    const field = event.target.name;
    const allRoutes = [...routes];
    allRoutes[index][field] = event.target.value;

    setRoutes(() => {
      return allRoutes;
    });
  }

  function isEnabledButton() {
    const last = routes.at(routes.length - 1);

    console.log("wqweqwe");
    return (
      routes.length < 1 ||
      last.isim === "" ||
      last.boylam === "" ||
      last.enlem === ""
    );
  }

  function onSave() {
    const names = new Set();
    routes.forEach((item) => {
      names.add(item.isim);
    });

    if (names.size < routes.length) {
      setErr(true);
    } else {
      setErr(false);
    }
  }
  return (
    <div className="App">
      <input type="text" placeholder="Güzergah" />
      <button onClick={addRoute}>Yeni Güzergah Ekle</button>

      {routes.map((item, index) => {
        return (
          <div key={index}>
            <input
              name="isim"
              type="text"
              value={routes[index].isim}
              placeholder="Durak"
              onChange={(event) => {
                changeField(event, index);
              }}
            />
            {err ? "Durak Adları Aynı olamaz!" : null}
            <input
              name="enlem"
              type="text"
              placeholder="Enlem"
              value={routes[index].enlem}
              onChange={(event) => {
                changeField(event, index);
              }}
            />
            <input
              name="boylam"
              type="text"
              placeholder="Boylam"
              value={routes[index].boylam}
              onChange={(event) => {
                changeField(event, index);
              }}
            />
          </div>
        );
      })}
      <button onClick={onSave} disabled={isEnabledButton()}>
        Kaydet
      </button>
    </div>
  );
}

export default App;

import React, { useState } from "react";

import "./sass/main.sass";

import sections from "./sass/sections.sass";

import Card from "./components/Card";
import NavMenu from "./components/NavMenu";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className={sections.nav}>
        <button onClick={() => setOpen(!open)}>Open Nav</button>
        <NavMenu open={open} onClose={() => setOpen(!open)} />
      </section>
      <section className={sections["cards-clip"]}>
        <Card
          type="circular"
          title="Hey"
          description="Aliquip proident amet exercitation consequat elit magna ea do commodo nulla cillum ut incididunt."
        />
        <Card
          type="slide"
          title="Hello"
          description="Laborum exercitation ad mollit ullamco qui."
        />
      </section>
    </>
  );
}

export default App;

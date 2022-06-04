import React, { useState, useEffect } from "react";

import { Layout } from "../components/molecules/Layout";

import { useLoggedIn } from "../helpers/useLoggedIn";

export const Example = () => {
  const [date, setDate] = useState("7");
  return (
    <Layout className="Example" title="Example" setDate={setDate}>
      <section>
        <h2>Dit is een voorbeeld</h2>
      </section>
    </Layout>
  );
};

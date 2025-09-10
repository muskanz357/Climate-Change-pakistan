import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      {/* Hero Section */}
      {page === "home" && (
        <div>
          <header className="hero">
            <h1>🌍 Climate Awareness</h1>
            <p>Understanding Climate Change & its Effects on Pakistan</p>
          </header>

          <section className="section">
            <h2>What is Climate Change?</h2>
            <p>
              Climate change means long-term shifts in temperatures and weather
              patterns, mainly due to human activities like burning fossil fuels
              and deforestation.
            </p>
          </section>

          <section className="section">
            <h2>Effects on Pakistan</h2>
            <ul className="effects-list">
              <li onClick={() => setPage("floods")}>🌊 Increased Floods</li>
              <li onClick={() => setPage("heatwaves")}>🔥 Extreme Heatwaves</li>
              <li onClick={() => setPage("glaciers")}>❄️ Melting Glaciers</li>
              <li onClick={() => setPage("agriculture")}>🌾 Agriculture Issues</li>
            </ul>
          </section>

          <section className="section">
            <h2>Possible Solutions</h2>
            <ul>
              <li>🌳 Plant more trees</li>
              <li>⚡ Use renewable energy</li>
              <li>🚯 Reduce pollution</li>
              <li>📢 Awareness campaigns</li>
            </ul>
          </section>

          <footer className="footer">
            <p>Made with ❤️ by [Muskan Naqvi(s2023266142)] — BSCS student Pak. studies Project</p>
          </footer>
        </div>
      )}

      {/* Floods Page */}
      {page === "floods" && (
        <div className="detail-page">
          <h2>🌊 Increased Floods</h2>
          <p>
            Pakistan experiences devastating floods due to heavy rainfall and
            melting glaciers. Millions are displaced every year.
          </p>
          <button onClick={() => setPage("home")}>⬅ Back</button>
        </div>
      )}

      {/* Heatwaves Page */}
      {page === "heatwaves" && (
        <div className="detail-page">
          <h2>🔥 Extreme Heatwaves</h2>
          <p>
            Cities like Karachi face deadly heatwaves causing thousands of
            deaths and serious health issues.
          </p>
          <button onClick={() => setPage("home")}>⬅ Back</button>
        </div>
      )}

      {/* Glaciers Page */}
      {page === "glaciers" && (
        <div className="detail-page">
          <h2>❄️ Melting Glaciers</h2>
          <p>
            Northern Pakistan glaciers are melting fast, creating water
            shortages and dangerous glacial lake floods.
          </p>
          <button onClick={() => setPage("home")}>⬅ Back</button>
        </div>
      )}

      {/* Agriculture Page */}
      {page === "agriculture" && (
        <div className="detail-page">
          <h2>🌾 Agriculture Issues</h2>
          <p>
            Changing rainfall patterns reduce crop yields, threatening food
            security and farmer incomes.
          </p>
          <button onClick={() => setPage("home")}>⬅ Back</button>
        </div>
      )}
    </div>
  );
}

export default App;

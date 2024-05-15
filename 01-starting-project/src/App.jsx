// import componentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";

// props
// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

function App() {
  return (
    <div>
      {/* reuse component */}
      <Header />

      <main>
        {/* props */}
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* spread operator: built in javascript to pull out that's built-in to JavaScript to pull out 
              all the key value pairs of an object */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>

      {/* <main>
        <h2>Time to get started!</h2>
      </main> */}
    </div>
  );
}

export default App;

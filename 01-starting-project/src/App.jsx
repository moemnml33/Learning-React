// rule of thumb: only call hooks inside of component functions - only call hooks on the top level (beginning of function)
import { useState } from "react";
// import componentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";

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
  // Please click a button: selectedTopic's default value
  // setSelectedTopic will carry the value that will be passed to selectedTopic as its new updated value
  const [selectedTopic, setSelectedTopic] = useState("Please click a button");
  // trigger function on selecting component
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedButton);
  }
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* event handling as a prop - if we dont define this as an anonymous function 
            then it will be executed as soon as we load the page*/}
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {/* output updated value */}
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;

// rule of thumb: only call hooks inside of component functions - only call hooks on the top level (beginning of function)
import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";

export default function Examples() {
  // Please click a button: selectedTopic's default value
  // setSelectedTopic will carry the value that will be passed to selectedTopic as its new updated value
  const [selectedTopic, setSelectedTopic] = useState("");
  // trigger function on selecting component
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedButton);
  }
  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {/* event handling as a prop - if we dont define this as an anonymous function 
      then it will be executed as soon as we load the page*/}
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {/* output updated value */}
      {/* {selectedTopic} */}

      {/* if selected topic is not true (null) output this message */}
      {/* {!selectedTopic && <p>Please select a topic.</p>} */}
      {/* if selected topic is true (not null) output the content  */}
      {/* {selectedTopic && (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )} */}

      {/* for conditional rendering we could just do this instead */}
      {tabContent}
    </section>
  );
}

import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "../CoreConcept/CoreConcept";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem, index) => {
          return <CoreConcept {...conceptItem} key={index} />;
        })}
      </ul>
    </section>
  );
}

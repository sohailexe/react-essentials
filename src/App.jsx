import reactImg from "/src/assets/react-core-concepts.png";
import componentImg from "/src/assets/components.png";
const reactDescriptions = ["Fundamentals", "Crucials", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcept({ img, title, description }) {
  return (
    <li>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[getRandomInt(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="The core UI building block"
              img={componentImg}
            />
            <CoreConcept
              title="Components"
              description="The core UI building block"
              img={componentImg}
            />
            <CoreConcept
              title="Components"
              description="The core UI building block"
              img={componentImg}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

import CardList from "./components/cardList";
import Title from "./components/Title";
import "./App.css";

export default function App() {
  return (
    <main>
      <div className="container">
        <Title />
        <CardList />
      </div>
    </main>
  );
}

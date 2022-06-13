import Costs from "./components/Costs/Costs";

function App() {
  const costs = [
    {
      date: new Date(2022, 5, 6),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      date: new Date(2022, 5, 7),
      description: "Lenovo Legion 7",
      amount: 1399.99,
    },
    {
      date: new Date(2022, 5, 8),
      description: "AKG K140",
      amount: 249.99,
    },
  ];

  return (
    <div>
      <h1> Start</h1>
      <Costs costs={costs} />
    </div>
  );
}

export default App;

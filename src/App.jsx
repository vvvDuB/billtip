import { useState } from "react";

const App = () => {
  return (
    <div className="w-screen h-screen bg-zinc-400">
      <Title />
      <Form />
    </div>
  );
};

const Title = () => {
  return (
    <header className="h-36 flex justify-center items-center">
      <div className="w-3/4 text-center">
        <h1 className="text-6xl font-bold text-zinc-800">Bill Tip</h1>
      </div>
    </header>
  );
};

const Form = () => {
  const [price, setPrice] = useState(0);
  const [firstTip, setFirstTip] = useState(10);
  const [secondTip, setSecondTip] = useState(10);

  return (
    <section className="h-3/5 flex justify-center">
      <div className="w-5/6">
        <form className="max-w-fit flex flex-col my-4 py-4 space-y-4">
          <div>
            <label className="text-md my-2">How much was the bill?</label>
            <input
              className="bg-transparent border-b border-zinc-900 py-1"
              type="number"
              onChange={(e) => setPrice(Number(e.target.event))}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-md my-2">
              How did you like the services?
            </label>
            <select
              value={firstTip}
              onChange={(e) => setFirstTip(Number(e.target.event))}
              className="bg-transparent border-b border-zinc-900"
            >
              <option value={10}>Perfect 10%</option>
              <option value={5}>Good 5%</option>
              <option value={2.5}>Avarage 2.5%</option>
              <option value={1}>Bad 0%</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-md my-2">
              How did your friend like the service?
            </label>
            <select
              value={secondTip}
              onChange={(e) => setSecondTip(Number(e.target.event))}
              className="bg-transparent border-b border-zinc-900"
            >
              <option value={10}>Perfect 10%</option>
              <option value={5}>Good 5%</option>
              <option value={2.5}>Avarage 2.5%</option>
              <option value={1}>Bad 0%</option>
            </select>
          </div>
          <button type="reset">Reset</button>
        </form>
        <h2 className="text-center text-3xl">You will pay:</h2>
        {price > 0 && (
          <h1 className="text-center text-3xl">
            {price + (price * firstTip) / 100}$
          </h1>
        )}
        <h1>{firstTip}</h1>
      </div>
    </section>
  );
};

export default App;

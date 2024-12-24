import { useState } from 'react';
import { Button } from "/components/ui/button";
import { Input } from "/components/ui/input";
import { Label } from "/components/ui/label";

export default function App() {
  const [number, setNumber] = useState('');
  const [tracingResult, setTracingResult] = useState('');

  const handleTrace = () => {
    if (!number) return;
    const num = parseInt(number);
    if (isNaN(num)) return;

    let result = '';
    for (let i = 1; i <= 10; i++) {
      result += `${num} x ${i} = ${num * i}\n`;
    }
    setTracingResult(result);
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Number Tracing App</h1>
      <div className="flex flex-col mb-4">
        <Label htmlFor="number">Enter a number:</Label>
        <Input
          id="number"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="mt-2"
        />
      </div>
      <Button onClick={handleTrace} className="mb-4">Trace Number</Button>
      <div className="bg-gray-100 p-4 rounded-lg">
        <pre className="text-lg">{tracingResult}</pre>
      </div>
    </div>
  );
}
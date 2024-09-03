"use client";
import Counter from "@/components/Counter";
import React, { useState } from "react";

function CounterPage() {
  const [counter, setCounter] = useState(0);
  return (
    <section className="text-6xl mb-16">
      <h1 className="text-5xl font-bold pb-10">Counter Client Component</h1>
      <Counter />
    </section>
  );
}

export default CounterPage;

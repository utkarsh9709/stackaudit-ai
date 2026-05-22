"use client";

import { useState } from "react";

export default function Home() {

  const [savings, setSavings] = useState<number | null>(null);
  const [recommendation, setRecommendation] = useState("");
  const [risk, setRisk] = useState("");
  const [breakdown, setBreakdown] = useState<string[]>([]);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Glow Effect */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">
        <h1 className="text-2xl font-bold">StackAudit AI</h1>

        <button className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:scale-105 transition">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">

        <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-sm text-zinc-400 mb-6">
          Save up to 40% on AI tools
        </div>

        <h1 className="text-6xl md:text-7xl font-bold max-w-4xl leading-tight">
          Find Where Your
          <span className="text-zinc-400"> AI Budget </span>
          Is Leaking
        </h1>

        <p className="mt-8 text-zinc-400 max-w-2xl text-lg">
          Audit your ChatGPT, Claude, Cursor, Copilot, and Gemini spending in minutes.
        </p>

        <div className="flex gap-4 mt-10">
          <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
            Start Free Audit
          </button>

          <button className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-zinc-900 transition">
            View Demo
          </button>
        </div>

      </section>

      {/* Features Section */}
      <section className="px-6 pb-24">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Instant AI Audit
            </h3>

            <p className="text-zinc-400">
              Analyze ChatGPT, Claude, Cursor, Gemini, and Copilot spending in seconds.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Save More Money
            </h3>

            <p className="text-zinc-400">
              Discover cheaper plans and smarter AI tooling recommendations.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Shareable Reports
            </h3>

            <p className="text-zinc-400">
              Generate beautiful public audit links with savings breakdowns.
            </p>
          </div>

        </div>

      </section>

      {/* Audit Form */}
      <section className="px-6 pb-32">

        <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

          <h2 className="text-4xl font-bold mb-8 text-center">
            Start Your Free Audit
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {/* AI Tool */}
            <div>
              <label className="block mb-2 text-zinc-400">
                AI Tool
              </label>

              <select
                id="tool"
                className="w-full bg-black border border-zinc-700 rounded-xl p-4"
              >
                <option>ChatGPT</option>
                <option>Claude</option>
                <option>Cursor</option>
                <option>Copilot</option>
                <option>Gemini</option>
              </select>
            </div>

            {/* Monthly Spend */}
            <div>
              <label className="block mb-2 text-zinc-400">
                Monthly Spend ($)
              </label>

              <input
                type="number"
                placeholder="500"
                id="spend"
                className="w-full bg-black border border-zinc-700 rounded-xl p-4"
              />
            </div>

            {/* Seats */}
            <div>
              <label className="block mb-2 text-zinc-400">
                Number of Seats
              </label>

              <input
                type="number"
                placeholder="10"
                className="w-full bg-black border border-zinc-700 rounded-xl p-4"
              />
            </div>

            {/* Use Case */}
            <div>
              <label className="block mb-2 text-zinc-400">
                Primary Use Case
              </label>

              <select className="w-full bg-black border border-zinc-700 rounded-xl p-4">
                <option>Coding</option>
                <option>Writing</option>
                <option>Research</option>
                <option>Data Analysis</option>
              </select>
            </div>

          </div>

          {/* Button */}
          <button
            onClick={() => {

              const spendInput = document.getElementById("spend") as HTMLInputElement;
              const toolInput = document.getElementById("tool") as HTMLSelectElement;

              const spend = Number(spendInput.value);
              const tool = toolInput.value;

              if (tool === "ChatGPT" && spend > 200) {
                setSavings(spend * 0.3);
                setRecommendation("Switch to ChatGPT Plus yearly plan");
                setRisk("HIGH RISK");

                setBreakdown([
                  "Unused seats: $80",
                  "Duplicate AI tools: $40",
                  "Overpriced subscription: $30",
                ]);
              }

              else if (tool === "Claude" && spend > 150) {
                setSavings(spend * 0.25);
                setRecommendation("Reduce unused Claude seats");
                setRisk("MEDIUM RISK");

                setBreakdown([
                  "Inactive users: $50",
                  "Unused premium features: $20",
                ]);
              }

              else if (tool === "Cursor") {
                setSavings(spend * 0.2);
                setRecommendation("Use Cursor Pro instead of Team plan");
                setRisk("LOW RISK");

                setBreakdown([
                  "Extra team seats: $15",
                  "Unused AI credits: $10",
                ]);
              }

              else {
                setSavings(spend * 0.1);
                setRecommendation("Optimize your AI subscriptions");
                setRisk("LOW RISK");

                setBreakdown([
                  "Minor unused spend detected",
                ]);
              }

            }}
            className="w-full mt-8 bg-white text-black py-4 rounded-2xl font-semibold hover:scale-[1.02] transition"
          >
            Generate Audit Report
          </button>

          {/* Results */}
          {savings !== null && (

            <div className="mt-8 bg-black border border-zinc-800 rounded-2xl p-6 text-center">

              <h3 className="text-3xl font-bold">
                Potential Savings
              </h3>

              <p className="text-5xl font-bold mt-4 text-green-400">
                ${savings.toFixed(0)}/month
              </p>

              <p className="text-zinc-400 mt-2">
                Estimated yearly savings: ${(savings * 12).toFixed(0)}
              </p>

              <p className="text-blue-400 mt-4 font-medium">
                Recommendation: {recommendation}
              </p>

              <p className="text-red-400 mt-2 font-semibold">
                {risk}
              </p>

              <div className="mt-6 text-left max-w-md mx-auto">
                <h4 className="text-white font-semibold mb-3">
                  Waste Breakdown
                </h4>

                <ul className="space-y-2 text-zinc-400">
                  {breakdown.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}
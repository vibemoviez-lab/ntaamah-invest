import React, { useState } from "react";

export default function NtaamahInvest() {
  const [page, setPage] = useState("home");

  const marketCards = [
    {
      title: "Gold (XAU/USD)",
      value: "$2,080",
      change: "+1.25%",
    },
    {
      title: "EUR/USD",
      value: "1.09",
      change: "+0.44%",
    },
    {
      title: "Tesla",
      value: "$182",
      change: "+2.11%",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-5 border-b border-zinc-800 sticky top-0 bg-black/90 backdrop-blur z-50">
        <div>
          <h1 className="text-2xl font-bold text-yellow-400 tracking-wide">
            NTAAMAH Invest
          </h1>
        </div>

        <div className="hidden md:flex gap-4">
          {["home", "markets", "stocks", "learn"].map((item) => (
            <button
              key={item}
              onClick={() => setPage(item)}
              className={`capitalize transition ${
                page === item
                  ? "text-yellow-400"
                  : "text-zinc-300 hover:text-yellow-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="px-6 py-20 text-center max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1 rounded-full border border-yellow-500 text-yellow-400 text-sm mb-6">
          Built for African Investors
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          Learn Markets.
          <br />
          Build Wealth.
        </h1>

        <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
          NTAAMAH Invest helps beginners understand Forex, Gold,
          Commodities and Stock Investing through simple education and
          modern market tools.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
            Start Learning
          </button>

          <button className="border border-zinc-700 px-8 py-4 rounded-2xl hover:border-yellow-400 transition">
            Explore Markets
          </button>
        </div>
      </section>

      {/* MARKET CARDS */}
      <section className="px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-24">
        {marketCards.map((card) => (
          <div
            key={card.title}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-yellow-400 transition"
          >
            <p className="text-zinc-400 mb-2">{card.title}</p>
            <h2 className="text-3xl font-bold mb-2">{card.value}</h2>
            <span className="text-green-400">{card.change}</span>
          </div>
        ))}
      </section>

      {/* FOREX & COMMODITIES */}
      <section className="px-6 max-w-6xl mx-auto mb-24">
        <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800">
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">
            Markets
          </h2>

          <p className="text-zinc-400 text-lg max-w-3xl mb-8">
            Follow Gold, Forex pairs and Commodities with simplified
            explanations designed for beginners and future traders.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black rounded-2xl p-6 border border-zinc-800">
              <h3 className="text-xl font-bold mb-2">Gold Trading</h3>
              <p className="text-zinc-400">
                Understand XAU/USD movement and market reactions.
              </p>
            </div>

            <div className="bg-black rounded-2xl p-6 border border-zinc-800">
              <h3 className="text-xl font-bold mb-2">Forex</h3>
              <p className="text-zinc-400">
                Learn major currency pairs and risk management.
              </p>
            </div>

            <div className="bg-black rounded-2xl p-6 border border-zinc-800">
              <h3 className="text-xl font-bold mb-2">Commodities</h3>
              <p className="text-zinc-400">
                Explore Oil, Silver and global market opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STOCKS SECTION */}
      <section className="px-6 max-w-6xl mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800">
            <h2 className="text-3xl font-bold mb-4">US Stocks</h2>
            <p className="text-zinc-400 mb-6">
              Discover companies like Apple, Tesla, Amazon and Microsoft.
            </p>
            <div className="flex gap-3 flex-wrap">
              {["Apple", "Tesla", "Amazon", "Microsoft"].map((item) => (
                <span
                  key={item}
                  className="bg-black border border-zinc-700 px-4 py-2 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800">
            <h2 className="text-3xl font-bold mb-4">Ghana Stocks</h2>
            <p className="text-zinc-400 mb-6">
              Learn how local investing works through the Ghana Stock
              Exchange.
            </p>
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition">
              Explore GSE
            </button>
          </div>
        </div>
      </section>

      {/* ACADEMY */}
      <section className="px-6 max-w-6xl mx-auto mb-24">
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-black rounded-3xl p-10">
          <h2 className="text-4xl font-black mb-4">NTAAMAH Academy</h2>
          <p className="text-lg max-w-3xl mb-6">
            Learn investing step-by-step without complicated financial
            language.
          </p>

          <div className="grid md:grid-cols-2 gap-4 font-semibold">
            <div>• What is Forex?</div>
            <div>• What are Stocks?</div>
            <div>• Gold Trading Basics</div>
            <div>• Risk Management</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 px-6 py-10 text-center text-zinc-500">
        © 2026 NTAAMAH Invest — Built for future investors.
      </footer>
    </div>
  );
}

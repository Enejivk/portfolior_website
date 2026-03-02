import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PortfolioV1 from "./variants/PortfolioV1";
import PortfolioV2 from "./variants/PortfolioV2";
import PortfolioV3 from "./variants/PortfolioV3";
import PortfolioV4 from "./variants/PortfolioV4";
import PortfolioV5 from "./variants/PortfolioV5";
import PortfolioV6 from "./variants/PortfolioV6";
import PortfolioV7 from "./variants/PortfolioV7";
import PortfolioV8 from "./variants/PortfolioV8";
import PortfolioV9 from "./variants/PortfolioV9";
import PortfolioV10 from "./variants/PortfolioV10";
import PortfolioV11 from "./variants/PortfolioV11";
import PortfolioV12 from "./variants/PortfolioV12";
import PortfolioV13 from "./variants/PortfolioV13";
import PortfolioV14 from "./variants/PortfolioV14";
import PortfolioV15 from "./variants/PortfolioV15";
import PortfolioV16 from "./variants/PortfolioV16";
import PortfolioV17 from "./variants/PortfolioV17";
import PortfolioV18 from "./variants/PortfolioV18";
import PortfolioV19 from "./variants/PortfolioV19";
import PortfolioV20 from "./variants/PortfolioV20";
import PortfolioV21 from "./variants/PortfolioV21";
import PortfolioV22 from "./variants/PortfolioV22";
import PortfolioV23 from "./variants/PortfolioV23";
import PortfolioV24 from "./variants/PortfolioV24";
import PortfolioV25 from "./variants/PortfolioV25";
import PortfolioV26 from "./variants/PortfolioV26";
import PortfolioV27 from "./variants/PortfolioV27";
import PortfolioV28 from "./variants/PortfolioV28";
import PortfolioV29 from "./variants/PortfolioV29";
import PortfolioV30 from "./variants/PortfolioV30";

// Homepage with links to all variants
const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white flex items-center justify-center p-6">
    <div className="max-w-4xl w-full py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Portfolio{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            Variants
          </span>
        </h1>
        <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
          Explore 30 unique portfolio designs for Eneji Victor. Each variant offers a
          different visual experience while showcasing the same professional content.
        </p>
      </div>

      <div className="grid gap-6">
        {[
          {
            id: 1,
            name: "Minimal Dark",
            description: "Clean, minimalist design with violet accents and smooth animations",
            gradient: "from-violet-600 to-fuchsia-600",
          },
          {
            id: 2,
            name: "Warm Creative",
            description: "Bold, warm gradients with amber and orange tones, split-screen hero",
            gradient: "from-amber-500 to-orange-500",
          },
          {
            id: 3,
            name: "Clean Light",
            description: "Professional light theme with emerald accents, modern and fresh",
            gradient: "from-emerald-500 to-teal-500",
          },
          {
            id: 4,
            name: "Bento Grid",
            description: "Modern bento-style layout with lime accents, card-based design",
            gradient: "from-lime-400 to-green-500",
          },
          {
            id: 5,
            name: "Editorial",
            description: "Magazine-inspired with bold typography and dramatic layouts",
            gradient: "from-zinc-400 to-white",
          },
          {
            id: 6,
            name: "Neon Flux",
            description: "Cyberpunk-inspired experience with neon lighting and system stats",
            gradient: "from-[#33ffcc] to-[#7c3bff]",
          },
          {
            id: 7,
            name: "Editorial Warmth",
            description: "Serif typography, earthy palette, and magazine storytelling cues",
            gradient: "from-[#e3c6ad] to-[#f6ede3]",
          },
          {
            id: 8,
            name: "Glass Aurora",
            description: "Frosted glass cards floating on aurora gradients and soft light",
            gradient: "from-sky-400 to-fuchsia-500",
          },
          {
            id: 9,
            name: "Kinetic Stripes",
            description: "High-contrast duotone stripes with energetic typography",
            gradient: "from-[#ff0055] to-[#ffd200]",
          },
          {
            id: 10,
            name: "Monochrome Modular",
            description: "Grid-based black and white system with editorial spacing",
            gradient: "from-black to-zinc-600",
          },
          {
            id: 11,
            name: "Brutalist Mono",
            description: "Low-fi aesthetic, high-contrast orange, and industrial typography",
            gradient: "from-[#ff6b00] to-black",
          },
          {
            id: 12,
            name: "Editorial Space",
            description: "Expansive layout using Space Grotesk and large-scale imagery",
            gradient: "from-[#e4e4e7] to-[#18181b]",
          },
          {
            id: 13,
            name: "Cyber Portal",
            description: "High-tech terminal interface with modular UI components",
            gradient: "from-indigo-900 to-blue-600",
          },
          {
            id: 14,
            name: "Raw Mastery",
            description: "Heavy-hitting typography and rose-neon accents on deep charcoal",
            gradient: "from-rose-600 to-zinc-900",
          },
          {
            id: 15,
            name: "Neo-Aesthetic",
            description: "Ultra-modern fluid layouts with high-fidelity gradients",
            gradient: "from-blue-600 to-purple-600",
          },
          {
            id: 16,
            name: "Root System",
            description: "ASCII-inspired terminal aesthetic with hacker-green accents",
            gradient: "from-green-600 to-black",
          },
          {
            id: 17,
            name: "Outrun Oasis",
            description: "Vaporwave / Retrowave experience with neon purples and cyans",
            gradient: "from-[#f6019d] to-[#2de2e6]",
          },
          {
            id: 18,
            name: "Pure Swiss",
            description: "Mathematical precision, red accents, and high-impact typography",
            gradient: "from-red-600 to-white",
          },
          {
            id: 19,
            name: "Shadow Tactile",
            description: "Soft Neumorphic depth with tactile UI elements and pastel slates",
            gradient: "from-slate-400 to-indigo-400",
          },
          {
            id: 20,
            name: "Obsidian Slate",
            description: "High-end immersive dark mode with sophisticated layering",
            gradient: "from-zinc-200 to-zinc-800",
          },
          {
            id: 21,
            name: "Abstract Canvas",
            description: "Art gallery aesthetic using profile1 and kinetic lowercase type",
            gradient: "from-[#f1efe7] to-[#3b4ecc]",
          },
          {
            id: 22,
            name: "Kinetic Flow",
            description: "High-energy motion typography and deep neon purple vibes",
            gradient: "from-[#7d3aff] to-black",
          },
          {
            id: 23,
            name: "Industrial Monolith",
            description: "Brutalist concrete design with neon orange construction cues",
            gradient: "from-[#ff6b00] to-[#111111]",
          },
          {
            id: 24,
            name: "Ethereal Glass",
            description: "Lightweight frosted glass with organic glows and mint accents",
            gradient: "from-[#c2f3e8] to-[#ffe4e1]",
          },
          {
            id: 25,
            name: "Geometric Depth",
            description: "3D layered shadows with electric yellow and slate precision",
            gradient: "from-[#e2ff3b] to-[#0f172a]",
          },
          {
            id: 26,
            name: "Noir Cinema",
            description: "Film noir cinematic widescreen with moody gold-on-black tones",
            gradient: "from-[#c9a84c] to-[#0a0a0a]",
          },
          {
            id: 27,
            name: "Topographic",
            description: "Cartography-inspired earth tones with contour line patterns",
            gradient: "from-[#7b9971] to-[#f5f0e8]",
          },
          {
            id: 28,
            name: "Neon Tokyo",
            description: "Japanese cyberpunk with hot pink neon and deep navy grids",
            gradient: "from-[#ff2d7b] to-[#0a0e27]",
          },
          {
            id: 29,
            name: "Paper Fold",
            description: "Origami-inspired warm cream stationery with terracotta accents",
            gradient: "from-[#c46843] to-[#faf7f0]",
          },
          {
            id: 30,
            name: "Quantum Grid",
            description: "Data-dense system dashboard with teal HUD and matrix precision",
            gradient: "from-[#14b8a6] to-[#111827]",
          },
        ].map((variant) => (
          <Link
            key={variant.id}
            to={`/${variant.id}`}
            className="group relative overflow-hidden rounded-2xl bg-zinc-800/50 border border-zinc-700/50 hover:border-zinc-600 transition-all p-6 flex items-center justify-between"
          >
            <div className="flex items-center gap-6">
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${variant.gradient} flex items-center justify-center text-2xl font-bold text-white shadow-lg`}
              >
                {variant.id}
              </div>
              <div>
                <h2 className="text-xl font-bold group-hover:text-violet-400 transition-colors">
                  {variant.name}
                </h2>
                <p className="text-zinc-500 text-sm mt-1">{variant.description}</p>
              </div>
            </div>
            <div className="text-zinc-600 group-hover:text-violet-400 group-hover:translate-x-2 transition-all">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      <p className="text-center text-zinc-600 mt-12 text-sm">
        Built with React, TypeScript, Tailwind CSS & Framer Motion
      </p>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/1" element={<PortfolioV1 />} />
        <Route path="/2" element={<PortfolioV2 />} />
        <Route path="/3" element={<PortfolioV3 />} />
        <Route path="/4" element={<PortfolioV4 />} />
        <Route path="/5" element={<PortfolioV5 />} />
        <Route path="/6" element={<PortfolioV6 />} />
        <Route path="/7" element={<PortfolioV7 />} />
        <Route path="/8" element={<PortfolioV8 />} />
        <Route path="/9" element={<PortfolioV9 />} />
        <Route path="/10" element={<PortfolioV10 />} />
        <Route path="/11" element={<PortfolioV11 />} />
        <Route path="/12" element={<PortfolioV12 />} />
        <Route path="/13" element={<PortfolioV13 />} />
        <Route path="/14" element={<PortfolioV14 />} />
        <Route path="/15" element={<PortfolioV15 />} />
        <Route path="/16" element={<PortfolioV16 />} />
        <Route path="/17" element={<PortfolioV17 />} />
        <Route path="/18" element={<PortfolioV18 />} />
        <Route path="/19" element={<PortfolioV19 />} />
        <Route path="/20" element={<PortfolioV20 />} />
        <Route path="/21" element={<PortfolioV21 />} />
        <Route path="/22" element={<PortfolioV22 />} />
        <Route path="/23" element={<PortfolioV23 />} />
        <Route path="/24" element={<PortfolioV24 />} />
        <Route path="/25" element={<PortfolioV25 />} />
        <Route path="/26" element={<PortfolioV26 />} />
        <Route path="/27" element={<PortfolioV27 />} />
        <Route path="/28" element={<PortfolioV28 />} />
        <Route path="/29" element={<PortfolioV29 />} />
        <Route path="/30" element={<PortfolioV30 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

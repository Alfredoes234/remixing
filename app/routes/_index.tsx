import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Remaux" },
    { name: "description", content: "We remixing" },
  ];
};

export default function Index() {
  return (
    <main>
        <div className="bg-blue-500 p-10 text-white text-center ">
          <h1 className="text-6xl font-bold mt-40 ">Dan moment</h1>
          <div className="mb-80">
            <p className="m-2">balls</p>
            <p className="m-2">thing</p>
            <button className="bg-white py-2 px-10 m-2 rounded-3xl text-black text-2xl">Button</button>
          </div>
        </div>
        <div>
          <h2 className="m-5 text-4xl font-bold">Featured</h2>
          <div className="container mx-10 w-96 rounded p-5 bg-slate-400">
            <h2 className="text-2xl font-semibold">Game</h2>
            <img src="/asa.webp" alt="game" />
            <p className="text-xl mt-5">£37.99</p>
            <Link to="/asa" className="mt-2 mb-2 text-blue-600 underline text-xl">Go to product page&gt;</Link>
          </div>
        </div>
    </main>
  );
}

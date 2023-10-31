import type { MetaFunction } from "@remix-run/node";

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
        <div className="container mx-10 w-96 rounded bg-slate-400">
          <p>Thang</p>
        </div>
      </div>
    </main>
  );
}

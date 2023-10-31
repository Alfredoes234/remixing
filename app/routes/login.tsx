import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Remaux" },
    { name: "description", content: "We remixing" },
  ];
};

export default function Login() {
    return(
        <main>
            <p>bepsi</p>
        </main>
    )
}
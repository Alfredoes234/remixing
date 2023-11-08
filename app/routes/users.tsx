import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { prisma } from "~/lib/prisma.server";

export async function loader() {
    return json(await prisma.user.findMany());
}

export default function Users() {
    const data = useLoaderData<typeof loader>();
    return (
        <ul>
            {data.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

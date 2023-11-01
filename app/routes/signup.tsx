import { redirect, type ActionFunctionArgs } from "@remix-run/node";
import { prisma } from "~/lib/prisma.server";
import { z } from "zod";
import { Form } from "@remix-run/react";

export const signupSchema = z.object({
    name: z.string().min(1).max(8),
    email: z.string().email(),
    password: z.string().min(5).max(12)
});

export async function action({
    request,
}: ActionFunctionArgs) {
    const formData = await request.formData();
    const body = Object.fromEntries(formData.entries());
    const result = await signupSchema.safeParseAsync(body);
    
    if (result.success) {
        const data = result.data;
        console.log(data)
    } else {
        const error = result.error;
        console.log(error)
    }

    if (!result.success) {
        return
    } 

    await prisma.user.create({
        data: result.data
    })
    

    return redirect("/")
}




export default function Signup() {
    return (
        <Form preventScrollReset method="POST" className="m-5">
            <p>
                <input type="name" name="name" id="name" placeholder="  Name" className="border-black ml-2 rounded border" />
            </p>
            <p>
                <input type="email" name="email" id="email" placeholder="  Email" required className="border-black ml-2 rounded border" />
            </p>
            <p>
                <input type="password" name="password" id="password" placeholder="  Password"  className="border-black m-2 rounded border" />
            </p>
            <button type="submit" className="bg-cyan-400 m-2 rounded px-4 py-2">Sign Up</button>
        </Form>
    );
}
import { redirect, type ActionFunctionArgs, json } from "@remix-run/node";
import { prisma } from "~/lib/prisma.server";
import { Prisma as pris} from "@prisma/client";
import { z } from "zod";
import { Form, useActionData } from "@remix-run/react";

export const signupSchema = z.object({
    name: z.string().min(1).max(8).trim(),
    email: z.string().email().trim(),
    password: z.string().min(5).max(12).trim()
});

export async function action({
    request,
}: ActionFunctionArgs) {
    const formData = await request.formData();
    const body = Object.fromEntries(formData.entries());
    const result = await signupSchema.safeParseAsync(body);
    
    if (!result.success) {
        return json({ error: result.error.format() });
    } 
    
    try {
        await prisma.user.create({
            data: result.data
        })  
    } catch (e: any) {
        if (e instanceof pris.PrismaClientKnownRequestError) {
            // The .code property can be accessed in a type-safe manner
            if (e.code === 'P2002') {
                // Replace console log with custom json error (try & reconstruct with same format as zod error)
                console.error(
                    'There is a unique constraint violation, a new user cannot be created with this email'
                )
            }
        }
    }
    
    
    return redirect("/signup")
}



export default function Signup() {
    const data = useActionData<typeof action>();
    return (
        <Form preventScrollReset method="POST" className="m-5">
            <div>
                <input type="name" name="name" id="name" placeholder="  Name" className="border-black ml-2 rounded border" />
                {data && data.error.name && <p className="ml-2 text-red-600">{data.error.name._errors[0]}</p>}
            </div>
            <div>
                <input type="email" name="email" id="email" placeholder="  Email" required className="border-black ml-2 rounded border" />
                {data && data.error.email && <p className="ml-2 text-red-600">{data.error.email._errors[0]}</p>}
            </div>
            <div>
                <input type="password" name="password" id="password" placeholder="  Password"  className="border-black m-2 rounded border" />
                {data && data.error.password && <p className="ml-2 text-red-600">{data.error.password._errors[0]}</p>}
            </div>
            <button type="submit" className="bg-cyan-400 m-2 rounded px-4 py-2">Sign Up</button>
        </Form>
    );
}

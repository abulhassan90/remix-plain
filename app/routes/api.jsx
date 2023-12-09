import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({request}) => {
    return json({
        data: {
            first_name: "Mohamed",
            last_name: "Abul Hassan"
        }
    })
}



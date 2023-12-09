import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
    const response = await fetch("http://localhost:3000/api");
    const data = await response.json();
    return json({ data })
}

export default function FetchData() {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <div>Fetch Data</div>
    )
}



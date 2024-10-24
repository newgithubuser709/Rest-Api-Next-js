import { NextResponse } from "next/server";

import api_array from "./apiArray";

async function authenticate(request) {
    const API_KEY = "123";
    const reqWithKey = request.headers.get("x-api-key");

    if (reqWithKey !== API_KEY) {
        return NextResponse.json({ success: false, error: "unauthorized access or invalid API key" }, { status: 401 });
    }
    return null;
}

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        let filteredData = api_array;

        searchParams.forEach((value, key) => {
            filteredData = filteredData.filter(
                (el) => el[key] && el[key].toLowerCase().includes(value.toLowerCase())
            );
        });

        if (filteredData.length > 0) {
            return NextResponse.json(filteredData);
        } else {
            return NextResponse.json({ success: false, error: "No data found matching the criteria" }, { status: 404 });
        }
    } catch (error) {
        return NextResponse.json({ success: false, error: "Something went wrong" }, { status: 500 });
    }
}

export async function POST(req) {
    const AuthErorr = await authenticate(req);
    if (AuthErorr) {
        return AuthErorr;
    }

    try {
        const RequestBody = await req.json();

        const body = {
            ...RequestBody,
            id: (api_array.length + 1).toString(),
        };
        api_array.push(body);

        return NextResponse.json(api_array, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Something went wrong" }, { status: 500 });
    }
}
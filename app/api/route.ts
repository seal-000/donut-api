import { NextResponse } from "next/server";

// Method:Request, StatusCode:Response
export async function GET() {
    return NextResponse.json({
        hello: 'world'

    });
}


export async function POST(req : Request){
    const data = await req.json()
    return NextResponse.json({
        data, 
    });
}
import data from "@/data.json"
import { NextResponse } from "next/server"
import { Data } from "@/types"
import fs from 'fs';
import path from 'path';

export async function GET(req: Request, context: any) {
    const { params } = context
    const donutId =  params.donutId;

    const donutData: Data = data;
    const donut = donutData.find((x) => donutId === x.id);

    if (donut) {
        return NextResponse.json(donut);
    } else {
        return NextResponse.json({ message: "Donut id not found" }, { status: 404 });
    }

}

// Path to JSON file
const dataPath = path.join(process.cwd(), 'data.json');

export async function POST(req : Request){
    const newDonut = await req.json() //Parse 
    const donutData: Data[] = JSON.parse(fs.readFileSync(dataPath, 'utf8')) //Read data
    donutData.push(newDonut) // Push data
    fs.writeFileSync(dataPath, JSON.stringify(donutData,  null, 2), 'utf8') // Write 
    return NextResponse.json({message: "New donut added successfully"})
}

//TODO: Make method PUT and DELETE 
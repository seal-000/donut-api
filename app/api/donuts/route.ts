import { NextResponse } from "next/server"
import { Data } from "@/types"
import fs from 'fs';
import path from 'path';

// Method:Request, StatusCode:Response

// Path to JSON file
const dataPath = path.join(process.cwd(), 'data.json');

export async function POST(req : Request){
    const newDonut = await req.json() //Parse 
    const donutData: Data[] = JSON.parse(fs.readFileSync(dataPath, 'utf8')) //Read data
    donutData.push(newDonut) // Push data
    fs.writeFileSync(dataPath, JSON.stringify(donutData,  null, 2), 'utf8') // Write 
    return NextResponse.json({message: "New donut added successfully"})
}
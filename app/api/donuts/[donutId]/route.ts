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



//TODO: Make method PUT and DELETE 
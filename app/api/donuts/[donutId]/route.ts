import data from "@/data.json"
import { NextResponse } from "next/server"
import { Data, Donut } from "@/types"
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


export async function PUT(req: Request, context: any) {
    const { params } = context;
    const donutId = params.donutId;

    const donutData: Data = data;
    const donut = donutData.find((x) => donutId === x.id);

    if (!donut) {
        return NextResponse.json({ message: "Donut id not found" }, { status: 404 });
    }

    const updatedData = await req.json();
    const updatedDonut: Donut = {
        ...donut,
        ...updatedData
    };

    const donutIndex = donutData.findIndex((x) => donutId === x.id);
    donutData[donutIndex] = updatedDonut;

    fs.writeFileSync(path.resolve('./data.json'), JSON.stringify(donutData, null, 2), 'utf8');

    return NextResponse.json(updatedDonut);
}



export async function DELETE(req: Request, context: any) {
    
    const { params } = context;
    const donutId = params.donutId;

    const donutData: Data = data;
    const donut = donutData.find((x) => donutId === x.id);

    if (!donut) {
        return NextResponse.json({ message: "Donut id not found" }, { status: 404 });
    }

    const donutIndex = donutData.findIndex((x) => donutId === x.id);
    
    //splice --> start, deleteCount
    donutData.splice(donutIndex, 1);

    fs.writeFileSync(path.resolve('./data.json'), JSON.stringify(donutData, null, 2), 'utf8');

    return NextResponse.json({ message: "Donut deleted successfully" });

}


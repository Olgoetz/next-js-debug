import jsPDF from "jspdf";

import { NextRequest, NextResponse } from "next/server";
export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const doc = new jsPDF();

    doc.setFontSize(10);
    doc.text(`Summe Live: `, 14, 20);

    const output = doc.output("datauristring");

    return NextResponse.json(output, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}

import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import cleanHtml from "./utils";

export async function POST(req: NextRequest) {
  const { url } = await req.json();
  const response = await axios.get(url);

  console.log(response.data);
  const text = cleanHtml(response.data);
  const returnData = {
    message: "Scraped data successfully",
    data: text,
  };

  return NextResponse.json(returnData, { status: 200 });
}

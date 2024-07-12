import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
export async function POST(req: NextRequest) {
  const payload = await req.text();
  const res = JSON.parse(payload);

  const sig = req.headers.get("Stripe-Signature")!;

  const datetime = new Date(res?.created * 1000).toLocaleDateString();
  const timeString = new Date(res?.created * 1000).toLocaleDateString();

  try {
    let event = stripe.webhooks.constructEvent(
      payload,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    // there is where all you do

    // charge.succeeded;
    // charge.updated;
    // charge.failed;
    // charge.pending;
    // charge.captured;

    // console.log("Event", event);
    console.log("Response", res);
    return NextResponse.json({
      status: "success",
      event: event.type,
      datetime,
      timeString,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ status: "fail", error });
  }
}

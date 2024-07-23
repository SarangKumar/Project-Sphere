import { lemonSqueezyApiInstance } from "@/lib/payment";
import { Description } from "@radix-ui/react-toast";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const reqData = await req.json();

    if (!reqData.productId)
      return Response.json(
        { message: "productId is required" },
        { status: 400 }
      );

    const response = await lemonSqueezyApiInstance.post("/checkouts", {
      data: {
        type: "checkouts",
        attributes: {
          checkout_data: {
            custom: {
              user_id: "123",
            },
          },
        },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: process.env.LEMON_SQUEEZY_STORE_ID!.toString(),
            },
          },
          variant: {
            data: {
              type: "variants",

              id: reqData.productId.toString(),
            },
          },
        },
      },
    });

    const checkoutUrl = response.data.data.attributes.url;

    console.log(response.data);

    return Response.json({ checkoutUrl });
  } catch (error: any) {
    console.error(error);
    return Response.json(
      { message: "An error occured", description: error.message },
      { status: 500 }
    );
  }
}

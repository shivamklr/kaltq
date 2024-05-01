// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
/// <reference types="https://esm.sh/v135/@supabase/functions-js@2.3.1/src/edge-runtime.d.ts" />

import Stripe from "npm:stripe@^15.4.0";
import { setCorsHeaders } from "../_shared/cors.ts";

const stripeKey = Deno.env.get("STRIPE_API_KEY")!;
const priceApiId = Deno.env.get("STRIPE_PRICE_API_ID")!;

const stripe = new Stripe(stripeKey, {
  // This is needed to use the Fetch API rather than relying on the Node http
  // package.
  httpClient: Stripe.createFetchHttpClient(),
});
// This handler will be called for every incoming request.
async function handler(req: Request) {
  if (req.method === "OPTIONS") {
    return setCorsHeaders(new Response("ok"));
  }
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: [
        "card",
      ],
      line_items: [
        {
          price: priceApiId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "https://example.com/success",
      cancel_url: "https://example.com/cancel",
    });
    if (!session.url) {
      throw new Error("No session URL");
    }
    return setCorsHeaders(
      new Response(JSON.stringify({ url: session.url })),
    );
  } catch (error) {
    console.log("Error creating checkout session:", error);
    return setCorsHeaders(
      new Response("Error creating checkout session", { status: 500 }),
    );
  }
}
Deno.serve(handler);

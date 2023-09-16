import { Webhook, WebhookRequiredHeaders } from "svix";
import { headers } from "next/headers";
import { IncomingHttpHeaders } from "http";
import { NextResponse } from "next/server";
import { EventTypeApi } from "svix/dist/openapi";

const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || "";

if (!WEBHOOK_SECRET) {
  throw new Error(
    "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
  );
}

async function handler(req: Request, res: Response) {
  const payload = await req.json();
  const headerList = headers();

  const heads = {
    "svix-id": headerList.get("svix-id"),
    "svix-timestamp": headerList.get("svix-timestamp"),
    "svix-signature": headerList.get("svix-signature"),
  };

  const wh = new Webhook(WEBHOOK_SECRET);
  let event: Event | null = null;

  try {
    event = wh.verify(
      JSON.stringify(payload),
      heads as IncomingHttpHeaders & WebhookRequiredHeaders
    ) as Event; //this need a string
  } catch (err) {
    console.error((err as Error).message);
    return NextResponse.json({}, { status: 400 });
  }

  // Do something with the message...
  const eventType: EventType = event.type ;
  if(eventType==='user.created' ||eventType==='user.updated'){
    const {id, ...attributes}=event.data

    console.log({id, attributes, },eventType, "api endpoint")
    // now we add it to db
  }


}

type EventType = "user.created" | "user.updated" | "*"
type Event = {
  data: Record<string, string | number>,
  object:'event',
  type:EventType

}

export const GET = handler;
export const POST = handler;
export const PUT = handler;

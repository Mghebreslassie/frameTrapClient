import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";
export function middleware(req: NextRequest, ev: NextFetchEvent) {
  //   return new Response("Hello, world!");
  return "";
}

import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const { error } = await getSupabase().from("waitlist").insert({
      email: email.toLowerCase().trim(),
      source: "landing_page",
    });

    // Duplicate emails: return success to user
    if (error && error.code === "23505") {
      return NextResponse.json({ success: true });
    }

    if (error) {
      console.error("Waitlist insert error:", error);
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}

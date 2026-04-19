import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { first_name, last_name, email, role, privacy_consent } = body;

    if (!first_name || !last_name || !email || !role || !privacy_consent) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const { error } = await getSupabase().from("beta_applications").insert({
      first_name: first_name.trim(),
      last_name: last_name.trim(),
      email: email.toLowerCase().trim(),
      phone: body.phone?.trim() || null,
      role,
      uses_loupes: body.uses_loupes ?? null,
      loupe_brand: body.loupe_brand?.trim() || null,
      magnification: body.magnification?.trim() || null,
      excitement: body.excitement?.trim() || null,
      privacy_consent,
    });

    // Duplicate email: return success
    if (error && error.code === "23505") {
      return NextResponse.json({ success: true });
    }

    if (error) {
      console.error("Beta application insert error:", error);
      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
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

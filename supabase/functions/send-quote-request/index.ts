import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface QuoteRequest {
  name: string;
  phone: string;
  location: string;
  date: string;
  time: string;
  childrenCount: string;
  duration: string;
  eventType: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const payload: QuoteRequest = await req.json();

    // Validate required fields
    if (!payload.name || !payload.phone || !payload.location || !payload.date || !payload.time || !payload.childrenCount || !payload.duration || !payload.eventType) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Get Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Missing Supabase configuration");
    }

    // Insert quote request into database
    const response = await fetch(`${supabaseUrl}/rest/v1/quote_requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${supabaseServiceKey}`,
        "apikey": supabaseServiceKey,
      },
      body: JSON.stringify({
        name: payload.name,
        phone: payload.phone,
        location: payload.location,
        date: payload.date,
        time: payload.time,
        children_count: parseInt(payload.childrenCount),
        duration: parseFloat(payload.duration),
        event_type: payload.eventType,
        status: "pending",
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Database error:", error);
      throw new Error("Failed to save quote request");
    }

    // TODO: Send email notification to admin
    // For now, just log the request
    console.log("Quote request saved:", payload.name, payload.phone);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Quote request received. We will contact you soon!",
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing quote request:", error);

    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Internal server error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
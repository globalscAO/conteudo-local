export async function POST(req: Request) {
  const apiKey = "e8615f289cd345d2eae0d8adb726c5faf586bd633510d90f";

  if (!apiKey) {
    return new Response(JSON.stringify({ message: "API key not found" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const {
    email,
    phoneNumber,
    whatsApp = true,
    whatsAppConsent = true,
    subject = "Ticket",
    fromName = "Global Services Corporation",
    header_1,
    value_1,
    body = "Verifique sempre seu WhatsApp ou caixa de e-mail.",
  } = await req.json();

  if (!email || !phoneNumber || !header_1 || !value_1) {
    return new Response(
      JSON.stringify({ message: "Missing required fields, verify all fields" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const url =
    process.env.TICKET_GENERATOR_API_URL ||
    "https://apis.ticket-generator.com/client/v1/ticket/send/?eventId=682dd320b762b5310aca0d74&ticketCategoryId=682dd320b762b5310aca0d76";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        accept: "application/json",
        "x-api-key": apiKey,
      },
      body: new URLSearchParams({
        email,
        phoneNumber,
        whatsApp: String(whatsApp),
        whatsAppConsent: String(whatsAppConsent),
        subject,
        fromName,
        header_1,
        value_1,
        body,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return new Response(
        JSON.stringify({ message: "Failed to generate ticket", data }),
        {
          status: response.status,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ data, message: "Ticket sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error sending email:", error);

    return new Response(
      JSON.stringify({
        message: "Failed to send ticket",
        error: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

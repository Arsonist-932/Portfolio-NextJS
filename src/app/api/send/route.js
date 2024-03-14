import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
const myMail = "alexandrefortun@free.fr";

export async function POST(req, res) {
  const { lastname, firstname, email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Contact portfolio <contact@alexandre-fortune.dev>",
      to: [myMail],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>
            De : {lastname} {firstname}
          </p>
          <p>Email : {email}</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

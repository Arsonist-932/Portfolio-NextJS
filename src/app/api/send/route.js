import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const myMail = "alexandrefortun@free.fr";

export async function POST(req, res) {
  const { lastname, firstname, email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
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

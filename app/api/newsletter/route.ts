import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json(
      { error: 'Email is required' },
      { status: 400 }
    );
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = API_KEY?.split('-')[1];
    
    console.log('Using API_KEY:', API_KEY?.substring(0, 10) + '...');
    console.log('Using AUDIENCE_ID:', AUDIENCE_ID);
    console.log('Using DATACENTER:', DATACENTER);

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
        }),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    );

    if (response.status >= 400) {
      const text = await response.text();
      console.log('Mailchimp error:', text);
      
      if (text.includes('already a list member')) {
        return NextResponse.json(
          { message: 'You are already subscribed!' },
          { status: 200 }
        );
      }

      return NextResponse.json(
        { error: 'There was an error subscribing to the newsletter.', debug: text },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Success! You have been subscribed.' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'There was an error subscribing to the newsletter.' },
      { status: 500 }
    );
  }
}
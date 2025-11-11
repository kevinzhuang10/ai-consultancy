import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { fullName, email, needs } = body;

    // Validate input
    if (!fullName || !email || !needs) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Setup Google Sheets authentication
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive.file",
      ],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Prepare the row data
    const timestamp = new Date().toISOString();
    const values = [[timestamp, fullName, email, needs]];

    // Append the data to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "Sheet1!A:D", // A=Timestamp, B=Full Name, C=Email, D=Needs
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json(
      {
        success: true,
        updatedRange: response.data.updates?.updatedRange,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Google Sheets submission error:", error);

    // Don't expose internal errors to clients
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

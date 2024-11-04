import { google } from "googleapis";
import { NextResponse } from "next/server";

type SheetForm = {
     date: string;
     name: string;
     phone: string;
     request?: string;
     lng: string;
     url: string;
     referrer: string;
     utm: string;
};

const CLIENT_EMAIL = "";
const PRIVATE_KEY = "";
const SHEET_ID = "";
const RANGE = "A1:D1";

export async function POST(req: Request) {
     const data: SheetForm = await req.json();
     const product = data.request ? data.request : "Главная страница";
     const value = [[data.date, data.name, data.phone, product, data.lng, data.referrer, data.utm, data.url]];

     try {
          const auth = new google.auth.GoogleAuth({
               credentials: {
                    client_email: CLIENT_EMAIL,
                    private_key: PRIVATE_KEY.replace(/\\n/g, "\n"),
               },
               scopes: ["https://www.googleapis.com/auth/drive", "https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/spreadsheets"],
          });

          const sheets = google.sheets({
               auth,
               version: "v4",
          });

          const response = await sheets.spreadsheets.values.append({
               spreadsheetId: SHEET_ID,
               range: RANGE,
               valueInputOption: "USER_ENTERED",
               requestBody: {
                    values: value,
               },
          });
          return NextResponse.json({
               data,
          });
     } catch (e: any) {
          return NextResponse.error();
     }
}

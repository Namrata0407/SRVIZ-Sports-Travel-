import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

interface LeadData {
  name: string;
  email: string;
  phone: string;
  addon: string;
  message: string;
  timestamp: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, phone, addon, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length !== 10) {
      return NextResponse.json(
        { error: "Phone must be 10 digits" },
        { status: 400 }
      );
    }

    const leadData: LeadData = {
      name,
      email,
      phone,
      addon: addon || "",
      message: message || "",
      timestamp: new Date().toISOString(),
    };

    console.log("New Lead Submitted:", leadData);

    const dataDir = path.join(process.cwd(), "data");
    const leadsFile = path.join(dataDir, "leads.json");

    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir, { recursive: true });
    }

    let leads: LeadData[] = [];
    try {
      const existingData = await fs.readFile(leadsFile, "utf-8");
      leads = JSON.parse(existingData);
    } catch {
      leads = [];
    }

    leads.push(leadData);

    await fs.writeFile(leadsFile, JSON.stringify(leads, null, 2));

    return NextResponse.json(
      { success: true, message: "Lead submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Lead API endpoint. Use POST to submit leads." },
    { status: 200 }
  );
}


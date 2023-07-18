import admin from "@firebase";
import { NextResponse } from "next/server";

// Get a reference to the Firebase Realtime Database

export async function GET(request) {
  const db = admin.database();
  const dataRef = db.ref("storage");
  const snapshot = await dataRef.once("value");
  const data = snapshot.val();

  return NextResponse.json(data);
}
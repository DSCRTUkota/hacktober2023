import { NextResponse } from 'next/server'
import fs from 'fs';
export async function GET(request) {
  const jsonData = fs.readFileSync('../../../contributors/profiles.json', 'utf8');
  const profiles = await JSON.parse(jsonData);
 
  return NextResponse.json({ message: 'Hello World' })
}
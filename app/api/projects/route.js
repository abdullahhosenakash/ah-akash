import projectsCollection from '@/app/utils/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  const projects = await projectsCollection.find({}).toArray();
  return NextResponse.json(projects);
}

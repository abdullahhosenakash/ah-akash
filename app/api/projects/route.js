import collection from '@/app/utils/mongodb';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { projectsCollection } = collection;
  const projects = await projectsCollection.find({}).toArray();
  return NextResponse.json(projects);
}

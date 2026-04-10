// ============================================================
// Route Handler — Users (list + create)
// ============================================================
// Used with Pattern 2 (Route Handlers + ORM) or Pattern 3 (BFF).
//
// Fullstack (ORM): Replace fakeUsers calls with your ORM
//   const users = await db.query.users.findMany({ ... })
//
// BFF (proxy): Replace with fetch to your external backend
//   const res = await fetch(`${BACKEND_URL}/users?${searchParams}`, {
//     headers: { Authorization: `Bearer ${token}` }
//   })
//   return NextResponse.json(await res.json())
//
// Current: Mock (in-memory fake data for demo/prototyping)
// ============================================================

import { createClient } from '@/lib/supabase/server';
import { fakeUsers } from '@/constants/mock-api-users';
import { NextRequest, NextResponse } from 'next/server';

async function authenticateRequest() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return null;
  }
  return user;
}

export async function GET(request: NextRequest) {
  const user = await authenticateRequest();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = request.nextUrl;

  const page = Number(searchParams.get('page') ?? 1);
  const limit = Number(searchParams.get('limit') ?? 10);
  const roles = searchParams.get('roles') ?? undefined;
  const search = searchParams.get('search') ?? undefined;
  const sort = searchParams.get('sort') ?? undefined;

  const data = await fakeUsers.getUsers({
    page,
    limit,
    roles,
    search,
    sort
  });

  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const user = await authenticateRequest();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const data = await fakeUsers.createUser(body);
  return NextResponse.json(data, { status: 201 });
}

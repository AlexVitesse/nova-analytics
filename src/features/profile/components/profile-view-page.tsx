'use client';

import { useAuth } from '@/hooks/use-auth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserAvatarProfile } from '@/components/user-avatar-profile';

export default function ProfileViewPage() {
  const { user } = useAuth();

  const fullName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || '';
  const email = user?.email || '';

  return (
    <div className='flex w-full flex-col p-4'>
      <Card className='mx-auto w-full max-w-lg'>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Your account information</CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='flex items-center gap-4'>
            <UserAvatarProfile className='h-16 w-16 rounded-full' user={user} />
            <div>
              <p className='text-lg font-semibold'>{fullName}</p>
              <p className='text-muted-foreground text-sm'>{email}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

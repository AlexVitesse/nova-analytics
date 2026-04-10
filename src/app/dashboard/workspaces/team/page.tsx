import PageContainer from '@/components/layout/page-container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/icons';

export default function TeamPage() {
  return (
    <PageContainer
      pageTitle='Team Management'
      pageDescription='Manage your workspace team and members.'
    >
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Icons.employee className='h-5 w-5' />
            Team Members
          </CardTitle>
          <CardDescription>Manage who has access to your Nova Analytics workspace.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className='text-muted-foreground text-sm'>
            Team management features are coming soon.
          </p>
        </CardContent>
      </Card>
    </PageContainer>
  );
}

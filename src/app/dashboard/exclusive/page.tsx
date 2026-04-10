import PageContainer from '@/components/layout/page-container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/icons';

export default function ExclusivePage() {
  return (
    <PageContainer
      pageTitle='Exclusive Area'
      pageDescription='Premium features for Nova Analytics users'
    >
      <div className='space-y-6'>
        <div>
          <h1 className='flex items-center gap-2 text-3xl font-bold tracking-tight'>
            <Icons.badgeCheck className='h-7 w-7 text-green-600' />
            Exclusive Area
          </h1>
          <p className='text-muted-foreground'>
            Welcome to the exclusive features section of Nova Analytics.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Premium Features</CardTitle>
            <CardDescription>
              Access advanced analytics and exclusive tools.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-lg'>Thank you for being a Nova Analytics user!</p>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}

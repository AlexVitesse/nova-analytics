import PageContainer from '@/components/layout/page-container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'For individuals getting started',
    features: ['Up to 1,000 events/day', '1 dashboard', 'Community support', '7-day retention'],
    current: true
  },
  {
    name: 'Pro',
    price: '$49',
    description: 'For growing teams',
    features: ['Unlimited events', '10 dashboards', 'Priority support', '90-day retention', 'API access'],
    current: false
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: ['Everything in Pro', 'Unlimited dashboards', 'Dedicated support', 'Unlimited retention', 'SSO & SAML', 'Custom integrations'],
    current: false
  }
];

export default function BillingPage() {
  return (
    <PageContainer
      pageTitle='Billing & Plans'
      pageDescription='Manage your subscription and usage limits'
    >
      <div className='grid gap-6 md:grid-cols-3'>
        {plans.map((plan) => (
          <Card key={plan.name} className={plan.current ? 'border-primary' : ''}>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <CardTitle>{plan.name}</CardTitle>
                {plan.current && <Badge>Current</Badge>}
              </div>
              <CardDescription>{plan.description}</CardDescription>
              <div className='text-3xl font-bold'>
                {plan.price}
                {plan.price !== 'Custom' && <span className='text-muted-foreground text-sm font-normal'>/month</span>}
              </div>
            </CardHeader>
            <CardContent>
              <ul className='space-y-2'>
                {plan.features.map((feature) => (
                  <li key={feature} className='flex items-center gap-2 text-sm'>
                    <Icons.check className='text-primary h-4 w-4' />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className='mt-6 w-full' variant={plan.current ? 'outline' : 'default'} disabled={plan.current}>
                {plan.current ? 'Current Plan' : plan.price === 'Custom' ? 'Contact Sales' : 'Upgrade'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}

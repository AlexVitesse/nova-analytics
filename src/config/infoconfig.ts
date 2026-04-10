import type { InfobarContent } from '@/components/ui/infobar';

export const workspacesInfoContent: InfobarContent = {
  title: 'Workspaces Management',
  sections: [
    {
      title: 'Overview',
      description:
        'The Workspaces page allows you to manage your workspaces. Nova Analytics supports workspace-based organization for managing different projects and teams.',
      links: []
    },
    {
      title: 'Workspace Features',
      description:
        'Each workspace operates independently with its own team members, roles, and settings. This allows you to manage multiple projects within a single account.',
      links: []
    }
  ]
};

export const teamInfoContent: InfobarContent = {
  title: 'Team Management',
  sections: [
    {
      title: 'Overview',
      description:
        'The Team Management page allows you to manage your workspace team, including members, roles, and access levels.',
      links: []
    },
    {
      title: 'Managing Team Members',
      description:
        'Add, remove, and manage team members. Invite new members by email, assign roles, and control their access levels.',
      links: []
    },
    {
      title: 'Roles and Permissions',
      description:
        'Configure roles and permissions for your team. Roles define what actions team members can perform within the workspace.',
      links: []
    }
  ]
};

export const billingInfoContent: InfobarContent = {
  title: 'Billing & Plans',
  sections: [
    {
      title: 'Overview',
      description:
        'The Billing page allows you to manage your subscription and usage limits. Choose from Free, Pro, or Enterprise plans.',
      links: []
    },
    {
      title: 'Available Plans',
      description:
        'View and subscribe to available plans. Plans include different levels of features, event limits, dashboard counts, and support tiers.',
      links: []
    }
  ]
};

export const productInfoContent: InfobarContent = {
  title: 'Product Management',
  sections: [
    {
      title: 'Overview',
      description:
        'The Products page allows you to manage your product catalog. View all products in a table with sorting, filtering, pagination, and search.',
      links: []
    },
    {
      title: 'Adding Products',
      description:
        'Click "Add New" to create new products with name, description, price, category, and images.',
      links: []
    },
    {
      title: 'Table Features',
      description:
        'Sort columns, filter products, navigate pages, and search to manage large catalogs efficiently.',
      links: []
    }
  ]
};

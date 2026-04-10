'use client';

import { useMemo } from 'react';
import type { NavItem, NavGroup } from '@/types';

/**
 * Hook to return navigation items (RBAC removed — all items visible)
 */
export function useFilteredNavItems(items: NavItem[]) {
  return useMemo(() => {
    return items.map((item) => {
      if (item.items && item.items.length > 0) {
        return { ...item, items: [...item.items] };
      }
      return item;
    });
  }, [items]);
}

/**
 * Hook to return navigation groups (RBAC removed — all groups visible)
 */
export function useFilteredNavGroups(groups: NavGroup[]) {
  const allItems = useMemo(() => groups.flatMap((g) => g.items), [groups]);
  const filteredItems = useFilteredNavItems(allItems);

  return useMemo(() => {
    const filteredSet = new Set(filteredItems.map((item) => item.title));
    return groups
      .map((group) => ({
        ...group,
        items: filteredItems.filter((item) =>
          group.items.some((gi) => gi.title === item.title && filteredSet.has(gi.title))
        )
      }))
      .filter((group) => group.items.length > 0);
  }, [groups, filteredItems]);
}

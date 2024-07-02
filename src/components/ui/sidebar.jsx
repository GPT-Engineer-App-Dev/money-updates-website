import React from 'react';
import { cn } from '@/lib/utils';

export const Sidebar = ({ children, className, ...props }) => {
  return (
    <aside className={cn('sidebar', className)} {...props}>
      {children}
    </aside>
  );
};
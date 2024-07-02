import React from 'react';
import { cn } from '@/lib/utils';

const Sidebar = ({ children, className, ...props }) => {
  return (
    <aside
      className={cn(
        'w-full md:w-64 lg:w-80 bg-white border-r border-gray-200 p-4',
        className
      )}
      {...props}
    >
      {children}
    </aside>
  );
};

export default Sidebar;
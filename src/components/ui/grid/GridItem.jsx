import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@/lib/utils';

const GridItem = ({ children, className, ...props }) => {
  return (
    <div className={cn('col-span-1', className)} {...props}>
      {children}
    </div>
  );
};

GridItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default GridItem;
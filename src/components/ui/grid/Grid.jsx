import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@/lib/utils';

const Grid = ({ children, className, ...props }) => {
  return (
    <div className={cn('grid gap-4', className)} {...props}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Grid;
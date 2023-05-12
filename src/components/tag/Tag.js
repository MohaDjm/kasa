import './tag.scss';
import React from 'react';
import classNames from 'classnames';

const Tag = ({ value, className }) => {
  const tagClass = classNames('tag', className);

  return <span className={tagClass}>{value}</span>;
};

export default Tag;

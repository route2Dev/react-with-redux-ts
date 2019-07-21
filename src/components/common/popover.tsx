import React from 'react';

interface IPopoverProps {
  content: string;
}

const Popover = ({ content }: IPopoverProps) => {
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        style={{ paddingLeft: '10px' }}
        data-toggle="popover"
        data-container="body"
        data-placement="top"
        data-content={content}
        data-trigger="hover"
      >
        <i className="fa fa-info-circle" aria-hidden="true"></i>
      </a>
    </>
  );
};

export default Popover;

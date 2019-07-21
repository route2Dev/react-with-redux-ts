import React, { useEffect } from 'react';

const ButtonWithPopover = () => {
  useEffect(() => {
    window.createPopover();
  }, []);

  /* use data-placement="auto top" for Bootstrap 3.x */

  return (
    <div className="row">
      <div className="col-md-12">
        <button className="btn btn-secondary">Copy to All</button>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          href="#"
          style={{ paddingLeft: '10px' }}
          data-toggle="popover"
          data-container="body"
          data-placement="top"
          data-content="My top popover content"
          data-trigger="hover"
        >
          <i className="fa fa-info-circle" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default ButtonWithPopover;

import React from 'react';
import 'assets/styles/NoTask.scss';
import illustEmpty from 'assets/images/illust_empty.png';

const NoTask = () => {
  return (
    <div className="notask">
      <img src={illustEmpty} alt="illust_empty.png" />
      <div>There is no task registered.</div>
    </div>
  );
};

export default NoTask;

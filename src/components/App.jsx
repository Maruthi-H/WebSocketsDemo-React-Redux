import React from 'react';

import Button from '../containers/Button';
import Loading from '../containers/Loading';
import WorkflowTable from '../containers/WorkflowTable';


let App = () => (
  <div>
    <Button />
    <Loading />
    <WorkflowTable />
  </div>
);


export default App;

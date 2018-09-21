export const getWorkflows = () => ({
  type: "GET_WORKFLOWS"
});

export const updateWorkflowStatus = (workflows) => ({
  type: "UPDATE_WORKFLOW_STATUS",
  payload: {
    workflows: workflows
  }
});

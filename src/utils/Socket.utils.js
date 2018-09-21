import React from "react";
import { connect } from "react-redux";
import EventBus from "vertx3-eventbus-client/vertx-eventbus";

import { updateWorkflowStatus } from "../actions";

export class Socket {
  constructor() {}
  connect(store) {
    this.eb = new EventBus("http://localhost:9090/eventbus");
    this.eb.onopen = () => {
      this.eb.registerHandler("address-workflowStatus", function(
        error,
        message
      ) {
        store.dispatch(updateWorkflowStatus(JSON.parse(message.body)));
        console.log(
          "received a workflow status update: " + JSON.parse(message.body)
        );
      });
    };
  }
}

import React from "react";
import { connect } from "react-redux";
import ReactTable from "react-table";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  table: {
    minWidth: 700
  }
});

let WorkflowTable = ({ workflows }) => {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell numeric>Name</TableCell>
            <TableCell numeric>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workflows.map(wf => {
            return (
              <TableRow key={wf.id}>
                <TableCell numeric>{wf.id}</TableCell>
                <TableCell numeric>{wf.name}</TableCell>
                <TableCell numeric>{wf.status}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

const mapStateToProps = state => ({
  workflows: state.workflows || []
});

WorkflowTable = connect(
  mapStateToProps,
  null
)(WorkflowTable);

export default WorkflowTable;

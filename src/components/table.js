import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export const SbyTable = ({ children, ...rest }) => (
	<Table component="div" {...rest}>
		{children}
	</Table>
);

export const SbyTableHead = ({ children }) => (
	<TableHead component="div">
		{children}
	</TableHead>
);

export const SbyTableBody = ({ children }) => (
	<TableBody component="div">
		{children}
	</TableBody>
);

export const SbyTableRow = ({ children }) => (
	<TableRow component="div">
		{children}
	</TableRow>
);

export const SbyTableCell = ({ children }) => (
	<TableCell component="div">
		{children}
	</TableCell>
);
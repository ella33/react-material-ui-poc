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

export const SbyTableHead = ({ children, ...rest }) => (
	<TableHead component="div" {...rest}>
		{children}
	</TableHead>
);

export const SbyTableBody = ({ children, ...rest }) => (
	<TableBody component="div" {...rest}>
		{children}
	</TableBody>
);

export const SbyTableRow = ({ children, ...rest }) => (
	<TableRow component="div" {...rest}>
		{children}
	</TableRow>
);

export const SbyTableCell = ({ children, ...rest }) => (
	<TableCell component="div" {...rest}>
		{children}
	</TableCell>
);
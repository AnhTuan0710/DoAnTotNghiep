import React from "react";
import { TextField } from "@mui/material";

interface Props {
	name: string;
	label: string;
	value: string;
	onChange: (e: any) => void;
	inputProps?: any;
	row: number;
}

export default function InputFieldMultiline(props: Props) {
	const { name, label, value, onChange, row, ...inputProps } = props;

	return (
		<TextField
      variant="outlined"
      fullWidth
      margin="normal"
			size="small"
			multiline
			rows={row}
			name={name}
      label={label}
      value={value}
      onChange={onChange}
      InputProps={inputProps}
    />
	)
}
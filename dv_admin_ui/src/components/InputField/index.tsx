import React from "react";
import { TextField } from "@mui/material";

interface Props {
	name: string;
	label: string;
	value: string;
	onChange: (e: any) => void;
	inputProps?: any;
}

export default function InputField(props: Props) {
	const { name, label, value, onChange, inputProps } = props;

	return (
		<TextField
      variant="outlined"
      fullWidth
      margin="normal"
			size="small"
			name={name}
      label={label}
      value={value}
      onChange={onChange}
      InputProps={inputProps}
    />
	)
}
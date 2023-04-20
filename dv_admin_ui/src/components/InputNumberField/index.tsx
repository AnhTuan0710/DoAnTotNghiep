import React from "react";
import { TextField } from "@mui/material";

interface Props {
  name: string;
  label: string;
  value: string;
  onChange: (e: any) => void;
  inputProps?: any;
  style?: any
}

export default function InputNumberField(props: Props) {
  const { name, label, style, value, onChange, ...inputProps } = props;

  return (
    <TextField
      variant="outlined"
      fullWidth
      margin="normal"
      size="small"
      type="number"
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      InputProps={inputProps}
      sx={style && style}
    />
  )
}
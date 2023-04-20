import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface Props {
  name: string;
  label: string;
  value: string;
  onChange: (e: any) => void;
  options: any;
  style?: any
}

export default function SelectField(props: Props) {
  const { name, label, value, onChange, options ,style } = props;
  return (
    <FormControl margin="normal" variant="outlined" size="small" fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
				id="demo-simple-select"
				name={name}
        label={label}
        value={value}
        onChange={onChange}
        sx= {style && style}
      >
        {options.map((option, index) => {
          return (
            <MenuItem key={option.value || index} value={option.value}>
              {option.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

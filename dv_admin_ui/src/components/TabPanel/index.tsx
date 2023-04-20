import { Box } from '@mui/system';
import React from 'react';

interface Props {
  value: number;
  index: number;
  children: React.ReactNode;
}

export default function TabPanel(props: Props) {
  const { value, index, children } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

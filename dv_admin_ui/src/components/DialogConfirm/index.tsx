import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type Props = {
  title: string,
  open: boolean,
  close: any,
  handleYes: any,
  handleNo: any,
  content?: string,
  children?: React.ReactNode,
  className?: string
  style?:any
}

export default function AlertDialog(props: Props) {
  const { title, open, close, handleYes, handleNo, content, children, className, style} = props
  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={className}
      sx={style && style}
    >
      <DialogTitle id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleNo} className='cancel-button' color='error'>Hủy</Button>
        <Button onClick={handleYes} autoFocus className='active-button' color='primary'>Đồng ý</Button>
      </DialogActions>
    </Dialog>
  );
}

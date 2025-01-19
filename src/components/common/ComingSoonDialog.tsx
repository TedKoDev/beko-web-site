import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";

interface ComingSoonDialogProps {
  open: boolean;
  onClose: () => void;
}

const ComingSoonDialog: React.FC<ComingSoonDialogProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Coming Soon</DialogTitle>
      <DialogContent>
        <Typography variant="body1">Web version is under development. Please wait a little longer! why don't you try the app version? Please download from the link below.</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="contained">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ComingSoonDialog;

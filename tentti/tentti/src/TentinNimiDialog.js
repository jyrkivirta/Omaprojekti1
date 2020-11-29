// import React from 'react';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import { useState } from 'react';

// export default function TentinNimiDialog(props) {
//   const [open, setOpen] = useState(true);

// //   const handleClickOpen = () => {
// //     setOpen(true);
// //   };

//   const handleClose = () => {
//     setOpen(false);
//     // tässä pitäisi myös saada suljettua app.js:ssä sijaitseva naytaDialogi-lippu
//     props.tuoLippu
//   };

//   return (
//     <div>
//       {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         Open form dialog
//       </Button> */}
//       <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
//         <DialogTitle id="form-dialog-title">Nimeä tentti</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Kirjoita uuden tentin nimi ja paina "Tallenna".
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Tentin nimi"
//             type="email"
//             fullWidth
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Tallenna
//           </Button>
//           {/* Tässä kohtaa pitäisi lähettää app.js:n aktiivisen tentin tiettyyn kenttään tieto uudesta nimestä */}
//           {/* <Button onClick={handleClose} color="primary">
//             Subscribe
//           </Button> */}
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
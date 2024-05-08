import "../assets/stylesheets/Card.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid black",
  boxShadow: 24,
  p: 4,
  outline: "none",
};

// eslint-disable-next-line react/prop-types
export const Card = ({ img, title, description }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="card-container my-10">
      <img src={img} alt="" onClick={handleOpen} />
      <h4>{title}</h4>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="text-center">
          <Typography id="modal-modal-title" variant="h5" component="h1">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <img src={img} alt="" />
            {description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

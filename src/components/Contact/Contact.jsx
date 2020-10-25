import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./contact.styles.scss";
import SendIcon from "@material-ui/icons/Send";
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    height: "100%",
  },

  form: {
    width: "70%", // Fix IE 11 issue.
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateY(-50%) translateX(-50%) ",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    float: "right",
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <div className="contact__container">
      <div className="contact__form">
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <Typography component="h1" variant="h3">
              Contact Me
            </Typography>
            <p>
              If you want to contact me regarding anything I am more than happy
              to receive your message. Please fill up the form and I will try to
              reply as soon as possible.
            </p>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="Name"
                  variant="outlined"
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="subject"
                  label="Subject"
                  name="Subject"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="Message"
                  label="Message"
                  type="Message"
                  id="Message"
                  multiline
                  rows={5}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              className={classes.submit}
            >
              <SendIcon />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

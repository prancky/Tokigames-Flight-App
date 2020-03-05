import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/moment";
import moment from "moment";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  margin: theme.spacing(11),
  paper: {
    padding: theme.spacing(2)
  },
  buttonStyles: {
    padding: theme.spacing(1.9)
  }
}));

function FormADdd(props) {
  const classes = useStyles();
  const [depatureTime, setDepatureTime] = useState(null);
  const [arrivalTime, setArrivalTime] = useState(null);
  const [provider, setProvider] = useState(null);
  const [depature, setDepature] = useState(null);
  const [arrival, setArrival] = useState(null);

  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    if (
      provider === null ||
      depature === null ||
      arrival === null ||
      depatureTime === null ||
      arrivalTime === null
    ) {
      setErrors({
        provider: provider === null ? true : false,
        depature: depature === null ? true : false,
        arrival: arrival === null ? true : false,
        depatureTime: depatureTime === null ? true : false,
        arrivalTime: arrivalTime === null ? true : false
      });
    } else {
      let submitForm = {
        provider: provider,
        depature: depature,
        arrival: arrival,
        depatureTime: moment(depatureTime),
        arrivalTime: moment(arrivalTime)
      };
      props.handleSubmit(submitForm);
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={10}></Grid>
        <Grid item xs={12} lg={2}>
          <FormControl fullWidth variant="outlined">
            <Button
              className={classes.buttonStyles}
              variant="contained"
              size="large"
              onClick={() => {
                props.navigateHome();
              }}
            >
              HOME
            </Button>
          </FormControl>
        </Grid>
      </Grid>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Providers
              </InputLabel>
              <Select
                native
                variant="outlined"
                label="Search field"
                className={classes.root}
                error={
                  errors.provider ? (provider != null ? false : true) : false
                }
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple"
                }}
                onChange={e => {
                  if (e.target.value) {
                    setProvider(e.target.value);
                  } else {
                    setProvider(null);
                  }
                }}
              >
                <option value="" />
                <option value={"cheap"}>Cheap</option>
                <option value={"business"}>Business</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={12}>
            <FormControl fullWidth variant="outlined">
              <TextField
                id="outlined-search"
                label="Departure"
                type="text"
                variant="outlined"
                className={classes.root}
                onChange={e => {
                  if (e.target.value) {
                    setDepature(e.target.value);
                  } else {
                    setDepature(null);
                  }
                }}
                error={
                  errors.depature ? (depature != null ? false : true) : false
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={12}>
            <FormControl fullWidth variant="outlined">
              <TextField
                id="outlined-search"
                label="Arrival"
                type="text"
                variant="outlined"
                className={classes.root}
                onChange={e => {
                  if (e.target.value) {
                    setArrival(e.target.value);
                  } else {
                    setArrival(null);
                  }
                }}
                error={
                  errors.arrival ? (arrival != null ? false : true) : false
                }
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <FormControl fullWidth variant="outlined">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker
                  label="Departure Time"
                  inputVariant="outlined"
                  value={depatureTime}
                  onChange={e => {
                    setDepatureTime(new Date(e._d));
                  }}
                  error={
                    errors.depatureTime
                      ? depatureTime != null
                        ? false
                        : true
                      : false
                  }
                />
              </MuiPickersUtilsProvider>
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={6}>
            <FormControl fullWidth variant="outlined">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker
                  label="Arrival Time"
                  inputVariant="outlined"
                  value={arrivalTime}
                  minDate={depatureTime}
                  onChange={e => {
                    if (new Date(depatureTime) < new Date(e._d)) {
                      setArrivalTime(new Date(e._d));
                    } else {
                      setArrivalTime(depatureTime);
                    }
                  }}
                  error={
                    errors.arrivalTime
                      ? arrivalTime != null
                        ? false
                        : true
                      : false
                  }
                />
              </MuiPickersUtilsProvider>
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={12}>
            <FormControl fullWidth variant="outlined">
              <Button
                className={classes.buttonStyles}
                variant="contained"
                size="large"
                color="primary"
                onClick={() => {
                  handleSubmit();
                }}
              >
                ADD NEW
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default FormADdd;

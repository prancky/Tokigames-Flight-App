import React from "react";
// import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import _ from "lodash";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  buttonStyles: {
    padding: theme.spacing(1.9)
  }
}));

const CenteredGrid = props => {
  const classes = useStyles();

  const handleChange = event => {
    props.providerCallBack(event.target.value);
  };

  const checkdata = para => {
    let list = _.filter(
      props.data,
      item =>
        item.departure.toUpperCase().indexOf(para.toUpperCase()) > -1 ||
        item.arrival.toUpperCase().indexOf(para.toUpperCase()) > -1 ||
        item.departureTime.toUpperCase().indexOf(para.toUpperCase()) > -1 ||
        item.arrivalTime.toUpperCase().indexOf(para.toUpperCase()) > -1
    );
    props.callBackData(list);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={2}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-age-native-simple">
              Providers
            </InputLabel>
            <Select
              native
              variant="outlined"
              label="Search field"
              className={classes.root}
              inputProps={{
                name: "age",
                id: "outlined-age-native-simple"
              }}
              onChange={handleChange}
            >
              <option value={"all"}>All</option>
              <option value={"cheap"}>Cheap</option>
              <option value={"business"}>Business</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={4}>
          <FormControl fullWidth variant="outlined">
            <TextField
              id="outlined-search searchFeild"
              label="Search field"
              type="search"
              variant="outlined"
              className={classes.root}
              onChange={event => {
                checkdata(event.target.value);
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={2}></Grid>
        <Grid item xs={12} lg={2}>
          <FormControl fullWidth variant="outlined">
            <Button
              className={classes.buttonStyles}
              variant="contained"
              size="large"
              onClick={() => {
                props.reloadTable();
              }}
            >
              REFRESH
            </Button>
          </FormControl>
        </Grid>

        <Grid item xs={12} lg={2}>
          <FormControl fullWidth variant="outlined">
            <Button
              className={classes.buttonStyles}
              variant="contained"
              size="large"
              color="primary"
              component={RouterLink}
              to="/add-flight"
            >
              ADD NEW FLIGHT
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default CenteredGrid;

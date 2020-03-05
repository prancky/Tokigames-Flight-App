import React from "react";
import Banner from "../component/reusable/banner";
import ContainerLayout from "../component/reusable/containerLayout";
import FormAdd from "../component/reusable/formAdd";

import { addCheapFLights, addBusinessFLights } from "../redux/actions/flight";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function AddFlight(props) {
  const handleSubmit = para => {
    if (para.provider === "cheap") {
      let cheapFlightData = {
        route: para.depature + "-" + para.arrival,
        departure: para.depatureTime,
        arrival: para.arrivalTime
      };
      props.addCheapFLights(cheapFlightData);
    } else {
      let businessFlightData = {
        arrival: para.arrival,
        arrivalTime: para.arrivalTime,
        departure: para.depature,
        departureTime: para.departureTime
      };
      props.addBusinessFLights(businessFlightData);
    }
  };

  const navigateBack = () => {
    props.history.goBack();
  };

  return (
    <div>
      <ContainerLayout>
        <Banner route="Add New Flight"></Banner>
      </ContainerLayout>
      <ContainerLayout container="md">
        <FormAdd
          handleSubmit={para => {
            handleSubmit(para);
          }}
          navigateHome={() => {
            navigateBack();
          }}
        />
      </ContainerLayout>
    </div>
  );
}

const mapStateToProps = ({ flight }) => ({
  flight: flight
});

const mapDispatchToProps = disptach => ({
  addCheapFLights: para => disptach(addCheapFLights(para)),
  addBusinessFLights: para => disptach(addBusinessFLights(para))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddFlight)
);

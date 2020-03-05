import React, { useState, useEffect } from "react";
import Banner from "../component/reusable/banner";
import ContainerLayout from "../component/reusable/containerLayout";

import Filters from "../component/reusable/filters";
import FlightTable from "../component/reusable/flightTable";

// import { Link as RouterLink } from "react-router-dom";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  fetchBusinessFLights,
  fetchCheapFLights
} from "../redux/actions/flight";
import moment from "moment";
import _ from "lodash";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Home = props => {
  const { business, fetching, cheap } = props.flight;
  const [mount, setMount] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [tempTableData, setTempTableData] = useState([]);
  const [provider, setProvider] = useState("all");

  useEffect(() => {
    if (
      provider === "all" &&
      cheap.length === 0 &&
      business.length === 0 &&
      !mount
    ) {
      setMount(true);
      props.fetchCheapFLights();
      props.fetchBusinessFLights();
    }

    if (business.length > 0 && provider === "business") {
      let businessData = businessProviderData(business);
      setTableData(businessData);
      setTempTableData(businessData);
    }

    if (cheap.length > 0 && provider === "cheap") {
      let cheapData = cheapProviderData(cheap);
      setTableData(cheapData);
      setTempTableData(cheapData);
    }

    if (business.length > 0 && cheap.length > 0 && provider === "all") {
      let businessData = businessProviderData(business);
      let cheapData = cheapProviderData(cheap);
      let bothProvidersArray = _.concat(businessData, cheapData);
      setTableData(bothProvidersArray);
      setTempTableData(bothProvidersArray);
    }
  }, [provider, cheap, business, mount, props]);

  const businessProviderData = data => {
    return data.map((obj, k) => {
      // obj.arrivalTime = moment(obj.arrivalTime).format("MMM DD h:mm A");
      // obj.departureTime = moment(obj.departureTime).format("MMM DD h:mm A");
      // obj.provider = "Business";
      let data_obj = {
        arrival: obj.arrival,
        departure: obj.departure,
        arrivalTime: moment(obj.arrivalTime).format("MMM DD h:mm A"),
        departureTime: moment(obj.departureTime).format("MMM DD h:mm A"),
        provider: "Business"
      };

      return data_obj;
    });
  };

  const cheapProviderData = data => {
    return data.map((obj, k) => {
      let route = obj.route.split("-");
      let data_obj = {
        arrival: route[0],
        departure: route[1],
        arrivalTime: moment(obj.arrival).format("MMM DD h:mm A"),
        departureTime: moment(obj.departure).format("MMM DD h:mm A"),
        provider: "Cheap"
      };
      return data_obj;
    });
  };

  const providerChangeCallBack = para => {
    setProvider(para);
  };

  const reloadTable = () => {
    if (provider === "all") {
      props.fetchCheapFLights();
      props.fetchBusinessFLights();
    } else if (provider === "cheap") {
      props.fetchCheapFLights();
    } else if (provider === "business") {
      props.fetchBusinessFLights();
    }
  };

  const updateData = para => {
    setTableData(para);
  };

  return (
    <div>
      <ContainerLayout>
        <Banner route="Search Flight"></Banner>
        <Filters
          providerCallBack={e => {
            providerChangeCallBack(e);
          }}
          data={tempTableData}
          callBackData={e => {
            updateData(e);
          }}
          reloadTable={e => {
            reloadTable();
          }}
        />
        {!fetching && tableData && tableData.length > 0 && (
          <FlightTable data={tableData} />
        )}
        {fetching && (
          <div style={{ marginTop: "12%" }}>
            <Loader color="#00BFFF" type="Plane" height={500} width={500} />
          </div>
        )}
      </ContainerLayout>
    </div>
  );
};

const mapStateToProps = ({ flight }) => ({
  flight: flight
});

const mapDispatchToProps = disptach => ({
  fetchBusinessFLights: () => disptach(fetchBusinessFLights()),
  fetchCheapFLights: () => disptach(fetchCheapFLights())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);

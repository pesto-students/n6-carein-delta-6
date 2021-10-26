import React, { useEffect } from "react";
import AssistanceServiceCard from "../../common/AssistanceServiceCard";
import { useDispatch, useSelector } from "react-redux";
import { listServices } from "../../../actions/serviceActions";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@material-ui/core";
import Skeleton from "@mui/material/Skeleton";
const Services = () => {
  const serviceData = useSelector((state) => state.apiRes.services);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listServices());
  }, []);

  return serviceData.data.length
    ? serviceData.data.map((text, index) => <AssistanceServiceCard service={text} key={index} />)
    : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((data, index) => (
      <Grid item xs={12} md={4} lg={4} sm={6}>
        <Card key={index} style={{ padding: "3px", margin: "10px" }}>
          <Skeleton
            sx={{ height: 190 }}
            animation="wave"
            variant="rectangular"
          />

          <CardContent>
            <React.Fragment>
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation="wave" height={10} width="80%" />
            </React.Fragment>
          </CardContent>
        </Card>
      </Grid>
    ));;
};

export default Services;

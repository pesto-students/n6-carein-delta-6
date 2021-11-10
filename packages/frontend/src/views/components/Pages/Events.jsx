import React, { useEffect } from "react";
import WalkCard from "../../common/WalkCard";
import { useDispatch, useSelector } from "react-redux";
import { listEvents } from "../../../actions/eventActions";
import Card from "@mui/material/Card";
//import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@material-ui/core";
import Skeleton from "@mui/material/Skeleton";
const Events = () => {
  const eventData = useSelector((state) => state.apiRes.events);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listEvents());
  }, []);

  return eventData.data.length
    ? eventData.data.map((text, index) => <WalkCard key={index} event={text} />)
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
      ));
};

export default Events;

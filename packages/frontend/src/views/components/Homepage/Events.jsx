import React, { useEffect } from "react";
import WalkCard from "../../common/WalkCard";
import { useDispatch, useSelector } from "react-redux";
import { listEvents } from "../../../actions/eventActions";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

import Skeleton from "@mui/material/Skeleton";
const Events = () => {
  const eventData = useSelector((state) => state.apiRes.events);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listEvents());
  }, []);

  console.log(eventData);
  return eventData.data
    ? eventData.data.map((text, index) => <WalkCard key={index} event={text} />)
    : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((data, id) => (
        // <FeedCard user={user} key={id} feed={data} />
        <Card style={{ marginTop: 20 }}>
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
      ));
};

export default Events;

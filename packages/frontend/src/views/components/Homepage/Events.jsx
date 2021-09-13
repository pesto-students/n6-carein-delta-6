import React, { useEffect } from "react";
import WalkCard from "../../common/WalkCard";
import { useDispatch, useSelector } from "react-redux";
import { listEvents } from "../../../actions/eventActions";

const Events = () => {
  const eventData = useSelector((state) => state.apiRes.events);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listEvents());
  }, []);

  console.log(eventData);
  return eventData.data.length
    ? eventData.data.map((text, index) => <WalkCard key={index} event={text}  />)
    : "";
  
};

export default Events;

import React from "react";
import DashboardLayout from "../../../containers/TheLayout";
import SideNav from "../../common/SideNav";
import SubscriptionCard from "../../common/SubscriptionCard";
import SubscriptionHead from "../../common/SubscriptionHead";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import WalkCard from "../../common/WalkCard";
const Subscription = () => {
  return (
    <DashboardLayout rightDrawer={true}>
      <SubscriptionCard />
       
    </DashboardLayout>
  );
};

export default Subscription;

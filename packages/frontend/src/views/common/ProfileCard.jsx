import React from "react";
import { Button, Grid } from "@material-ui/core";
import randomColor from "randomcolor";
function ProfileCard(props) {
  let color = randomColor();
  return (
    <Grid item xs={12} md={4} lg={4} sm={6} className="card-container">
      <Grid className="cardInner">
        <div
          className="cardheader"
          style={{
            background: `linear-gradient(45deg, ${color}, transparent)`,
          }}
        >
          <img
            className="cardProfileimg"
            src="./assets/media/bg/profile.jpg"
            alt={props.name}
          />
        </div>
        <h1 className="cbold-text">
          {props.user.firstName} {props.user.lastName}{" "}
        </h1>
        <h2 className="cnormal-text">{props.user.city}</h2>
        <div className="csocial-container">
          <div className="cfollowers">
            <h1 className="cbold-text">{props.user.friends?.length}</h1>
            <h2 className="csmaller-text">Team Size</h2>
          </div>
          <div className="clikes">
            <h2 style={{ fontWeight: "600" }} className="csmaller-text">
              In Your Team
            </h2>
            <Button
              size="small"
              type="submit"
              fullWidth
              variant="outlined"
              color="primary"
              style={{ borderRadius: "5px 5px 14px 5px" }}
            >
              Profile
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default ProfileCard;

import React from "react";
import { Button, Grid } from "@material-ui/core";
import randomColor from "randomcolor";
import { Link } from "react-router-dom";
function FriendRequestCard(props) {
  var user = {};
  if (props.request.toMe) {
    user = props.request.from;
  } else {
    user = props.request.to;
  }
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
            src={user.media ? user.media.url : `./assets/media/bg/profile.jpg`}
            alt={props.name}
          />
        </div>
        <h1 className="cbold-text">
          {user.firstName} {user.lastName}{" "}
        </h1>
        <h2 className="cnormal-text">{user.city}</h2>
        {props.request.toMe ? (
          <div className="csocial-container">
            <div className="clikes">
              <Button
                size="small"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ borderRadius: "0px 0px 0px 14px" }}
              >
                Reject
              </Button>
            </div>

            <div className="clikes">
              <Button
                size="small"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ borderRadius: "0px 0px 14px 0px" }}
              >
                Confirm
              </Button>
            </div>
          </div>
        ) : (
          <div className="csocial-container">
            <div className="clikes">
              <Button
                size="small"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ borderRadius: "0px ​0px 14px 14px" }}
              >
                <Link
                  style={{ color: "white", borderRadius: "0px ​0px 14px 14px" }}
                  to={`/profile/${user.id}`}
                >
                  Profile
                </Link>
              </Button>
            </div>
          </div>
        )}
      </Grid>
    </Grid>
  );
}

export default FriendRequestCard;

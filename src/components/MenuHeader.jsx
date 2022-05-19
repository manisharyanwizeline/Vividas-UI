import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="contained"
            {...bindTrigger(popupState)}
            style={{ margin: "20px" }}
          >
            Encode Live
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Muxer CLI</MenuItem>
            <MenuItem onClick={popupState.close}>Stream Source</MenuItem>
            <MenuItem onClick={popupState.close}>More</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

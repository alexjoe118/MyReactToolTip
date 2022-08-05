import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import MaterialTooltip from "@material-ui/core/Tooltip";

// Watch the tutorial
// http://react.school/ui/tooltip

const Container = styled.div`
  background-color: lightblue;
  width: 300px;
  margin: 40px auto;
  padding: 10px;
  text-align: center;
`;

const StyledReactTooltip = styled(ReactTooltip)`
  background-color: black !important;
  color: black !important;
  box-shadow: 0px 2px 20px lightgray;
  &:after {
    border-top-color: black !important;
  }
`;

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11
  },
  arrow: {
    color: "white"
  }
}))(MaterialTooltip);

export default function App() {
  const [enabledThing, setEnabledThing] = useState(false);
  return (
    <div>
      <Container data-tip data-for="happyFace">
        react-tooltip default
      </Container>
      <ReactTooltip id="happyFace">
        <span>Show happy face</span>
      </ReactTooltip>
      <Container data-tip data-for="sadFace">
        react-tooltip styled
      </Container>
      <StyledReactTooltip id="sadFace" effect="solid">
        <span>Show sad face</span>
      </StyledReactTooltip>
      <MaterialTooltip title="Tooltip text">
        <Container>Material UI default</Container>
      </MaterialTooltip>
      <LightTooltip
        interactive
        arrow
        PopperProps={{
          modifiers: {
            offset: {
              enabled: true,
              offset: "0px, -10px"
            }
          }
        }}
        title={
          <label>
            Set thing
            <input
              onChange={(e) => {
                setEnabledThing(e.target.checked);
              }}
              checked={enabledThing}
              type="checkbox"
            />
          </label>
        }
      >
        <Container>
          Material UI interactive
          <div>Thing set? {enabledThing ? "yes" : "no"} </div>
        </Container>
      </LightTooltip>
    </div>
  );
}

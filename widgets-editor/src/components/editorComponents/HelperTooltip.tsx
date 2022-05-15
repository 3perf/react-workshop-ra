import React from "react";
import { Popover, PopoverInteractionKind } from "@blueprintjs/core";
import styled, { createGlobalStyle } from "styled-components";
import { Colors } from "constants/Colors";

const TooltipStyles = createGlobalStyle`
 .helper-tooltip{
  .bp4-popover {
    box-shadow: none;
    max-width: 258px;
    .bp4-popover-arrow {
      display: block;
      fill: none;
    }
    .bp4-popover-arrow-fill {
      fill:  ${Colors.BLUE_CHARCOAL};
    }
    .bp4-popover-content {
      padding: 15px;
      background-color: ${Colors.BLUE_CHARCOAL};
      color: #fff;
      text-align: left;
      border-radius: 4px;
      text-transform: initial;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
    }
  }
 }
`;

const IconContainer = styled.div`
  .bp4-icon {
    border-radius: 4px 0 0 4px;
    margin: 0;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eef2f5;
    svg {
      height: 20px;
      width: 20px;
      path {
        fill: #979797;
      }
    }
  }
  .bp4-popover-target {
    padding-right: 10px;
  }
`;

interface Props {
  description?: string;
  // TODO(Hetu): Fix the banned type here
  // eslint-disable-next-line @typescript-eslint/ban-types
  rightIcon: Function;
}

const HelperTooltip = (props: Props) => {
  return (
    <React.Fragment>
      <TooltipStyles />
      <Popover
        autoFocus={true}
        canEscapeKeyClose={true}
        content={props.description}
        position="bottom"
        defaultIsOpen={false}
        interactionKind={PopoverInteractionKind.HOVER}
        usePortal
        portalClassName="helper-tooltip"
      >
        <IconContainer>
          <props.rightIcon width={22} height={22} />
        </IconContainer>
      </Popover>
    </React.Fragment>
  );
};

export default HelperTooltip;

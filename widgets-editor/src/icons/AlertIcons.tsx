import React, { JSXElementConstructor } from "react";
import { IconProps, IconWrapper } from "constants/IconConstants";
import InfoIcon from "assets/icons/alert/info.svg";
import SuccessIcon from "assets/icons/alert/success.svg";
import ErrorIcon from "assets/icons/alert/error.svg";
import WarningIcon from "assets/icons/alert/warning.svg";

/* eslint-disable react/display-name */

export const AlertIcons: {
  [id: string]: JSXElementConstructor<IconProps>;
} = {
  INFO: (props: IconProps) => (
    <IconWrapper {...props}>
      <InfoIcon />
    </IconWrapper>
  ),
  SUCCESS: (props: IconProps) => (
    <IconWrapper {...props}>
      <SuccessIcon />
    </IconWrapper>
  ),
  ERROR: (props: IconProps) => (
    <IconWrapper {...props}>
      <ErrorIcon />
    </IconWrapper>
  ),
  WARNING: (props: IconProps) => (
    <IconWrapper {...props}>
      <WarningIcon />
    </IconWrapper>
  ),
};

export type AlertIconName = keyof typeof AlertIcons;

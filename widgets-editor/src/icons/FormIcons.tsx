import React, { CSSProperties, JSXElementConstructor } from "react";
import { Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { IconProps, IconWrapper } from "constants/IconConstants";
import InfoIcon from "assets/icons/form/info-outline.svg";
import DeleteIcon from "assets/icons/form/trash.svg";
import AddNewIcon from "assets/icons/form/add-new.svg";
import LockIcon from "assets/icons/form/lock.svg";

/* eslint-disable react/display-name */

export const FormIcons: {
  [id: string]: JSXElementConstructor<IconProps & { style?: CSSProperties }>;
} = {
  INFO_ICON: (props: IconProps) => (
    <IconWrapper {...props}>
      <InfoIcon />
    </IconWrapper>
  ),
  HOME_ICON: (props: IconProps) => (
    <IconWrapper {...props}>
      <Icon icon={IconNames.HOME} color={props.color} iconSize={props.height} />
    </IconWrapper>
  ),
  DELETE_ICON: (props: IconProps) => (
    <IconWrapper {...props}>
      <DeleteIcon />
    </IconWrapper>
  ),
  ADD_NEW_ICON: (props: IconProps) => (
    <IconWrapper {...props}>
      <AddNewIcon />
    </IconWrapper>
  ),
  CREATE_NEW_ICON: (props: IconProps) => (
    <IconWrapper {...props}>
      <Icon icon={IconNames.PLUS} />
    </IconWrapper>
  ),
  PLUS_ICON: (props: IconProps) => (
    <IconWrapper {...props}>
      <Icon icon={IconNames.PLUS} color={props.color} iconSize={props.height} />
    </IconWrapper>
  ),
  SLASH_ICON: (props: IconProps) => (
    <IconWrapper {...props}>
      <Icon
        icon={IconNames.SLASH}
        color={props.color}
        iconSize={props.height}
      />
    </IconWrapper>
  ),
  LOCK_ICON: (props: IconProps) => (
    <IconWrapper {...props}>
      <LockIcon />
    </IconWrapper>
  ),
};

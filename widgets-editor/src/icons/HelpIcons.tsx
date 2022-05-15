import React, { JSXElementConstructor } from "react";
import { IconProps, IconWrapper } from "constants/IconConstants";
import OpenLinkIcon from "assets/icons/help/openlink.svg";
import DocumentIcon from "assets/icons/help/document.svg";
import HelpIcon from "assets/icons/help/help.svg";
import GithubIcon from "assets/icons/help/github-icon.svg";
import DiscordIcon from "assets/icons/help/discord.svg";
import UpdatesIcon from "assets/icons/help/updates.svg";
import { Icon } from "@blueprintjs/core";

/* eslint-disable react/display-name */

export const HelpIcons: {
  [id: string]: JSXElementConstructor<IconProps>;
} = {
  OPEN_LINK: (props: IconProps) => (
    <IconWrapper {...props}>
      <OpenLinkIcon />
    </IconWrapper>
  ),
  DOCUMENT: (props: IconProps) => (
    <IconWrapper {...props}>
      <DocumentIcon />
    </IconWrapper>
  ),
  HELP_ICON: (props: IconProps) => (
    <IconWrapper {...props}>
      <HelpIcon />
    </IconWrapper>
  ),
  CLOSE_ICON: (props: IconProps) => (
    <IconWrapper {...props}>
      <Icon icon={"cross"} />
    </IconWrapper>
  ),
  GITHUB: (props: IconProps) => (
    <IconWrapper {...props}>
      <GithubIcon />
    </IconWrapper>
  ),
  CHAT: (props: IconProps) => (
    <IconWrapper {...props}>
      <Icon icon={"chat"} />
    </IconWrapper>
  ),
  DISCORD: (props: IconProps) => (
    <IconWrapper {...props}>
      <DiscordIcon />
    </IconWrapper>
  ),
  UPDATES: (props: IconProps) => (
    <IconWrapper {...props}>
      <UpdatesIcon />
    </IconWrapper>
  ),
};

export type HelpIconName = keyof typeof HelpIcons;

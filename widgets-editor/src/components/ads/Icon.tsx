import React, { forwardRef, Ref } from "react";
import DeleteIcon from "assets/icons/ads/delete.svg";
import BookIcon from "assets/icons/ads/book.svg";
import UserIcon from "assets/icons/ads/user.svg";
import GeneralIcon from "assets/icons/ads/general.svg";
import BillingIcon from "assets/icons/ads/billing.svg";
import EditIcon from "assets/icons/ads/edit.svg";
import ErrorIcon from "assets/icons/ads/error.svg";
import ShineIcon from "assets/icons/ads/shine.svg";
import SuccessIcon from "assets/icons/ads/success.svg";
import SearchIcon from "assets/icons/ads/search.svg";
import CloseIcon from "assets/icons/ads/close.svg";
import WarningIcon from "assets/icons/ads/warning.svg";
import DownArrow from "assets/icons/ads/down_arrow.svg";
import ShareIcon from "assets/icons/ads/share.svg";
import RocketIcon from "assets/icons/ads/launch.svg";
import WorkspaceIcon from "assets/icons/ads/workspace.svg";
import CreateNewIcon from "assets/icons/ads/create-new.svg";
import InviteUserIcon from "assets/icons/ads/invite-users.svg";
import ViewAllIcon from "assets/icons/ads/view-all.svg";
import ViewLessIcon from "assets/icons/ads/view-less.svg";
import ContextMenuIcon from "assets/icons/ads/context-menu.svg";
import DuplicateIcon from "assets/icons/ads/duplicate.svg";
import LogoutIcon from "assets/icons/ads/logout.svg";
import ManageIcon from "assets/icons/ads/manage.svg";
import ArrowLeft from "assets/icons/ads/arrow-left.svg";
import Fork from "assets/icons/ads/fork.svg";
import ChevronLeft from "assets/icons/ads/chevron_left.svg";
import ChevronRight from "assets/icons/ads/chevron_right.svg";
import LinkIcon from "assets/icons/ads/link.svg";
import HelpIcon from "assets/icons/help/help.svg";
import CloseModalIcon from "assets/icons/ads/close-modal.svg";
import NoResponseIcon from "assets/icons/ads/no-response.svg";
import LightningIcon from "assets/icons/ads/lightning.svg";
import AddMoreIcon from "assets/icons/ads/add-more.svg";
import RightArrowIcon from "assets/icons/ads/right-arrow.svg";
import DatasourceIcon from "assets/icons/ads/datasource.svg";
import PlayIcon from "assets/icons/ads/play.svg";
import DesktopIcon from "assets/icons/ads/desktop.svg";
import MobileIcon from "assets/icons/ads/mobile.svg";
import TabletIcon from "assets/icons/ads/tablet.svg";
import FluidIcon from "assets/icons/ads/fluid.svg";

import styled from "styled-components";
import { CommonComponentProps, Classes } from "./common";
import { noop } from "lodash";
import { theme } from "constants/DefaultTheme";
import Spinner from "./Spinner";
import { ControlIcons } from "icons/ControlIcons";

export enum IconSize {
  XXS = "extraExtraSmall",
  XS = "extraSmall",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  XL = "extraLarge",
  XXL = "extraExtraLarge",
  XXXL = "extraExtraExtraLarge",
}

export const sizeHandler = (size?: IconSize) => {
  let iconSize = 0;
  switch (size) {
    case IconSize.XXS:
      iconSize = theme.iconSizes.XXS;
      break;
    case IconSize.XS:
      iconSize = theme.iconSizes.XS;
      break;
    case IconSize.SMALL:
      iconSize = theme.iconSizes.SMALL;
      break;
    case IconSize.MEDIUM:
      iconSize = theme.iconSizes.MEDIUM;
      break;
    case IconSize.LARGE:
      iconSize = theme.iconSizes.LARGE;
      break;
    case IconSize.XL:
      iconSize = theme.iconSizes.XL;
      break;
    case IconSize.XXL:
      iconSize = theme.iconSizes.XXL;
      break;
    case IconSize.XXXL:
      iconSize = theme.iconSizes.XXXL;
      break;
    default:
      iconSize = theme.iconSizes.SMALL;
      break;
  }
  return iconSize;
};

export const IconCollection = [
  "book",
  "delete",
  "user",
  "general",
  "billing",
  "edit",
  "error",
  "shine",
  "danger",
  "success",
  "search",
  "close",
  "share",
  "rocket",
  "workspace",
  "plus",
  "invite-user",
  "view-all",
  "view-less",
  "warning",
  "downArrow",
  "context-menu",
  "duplicate",
  "logout",
  "manage",
  "arrow-left",
  "fork",
  "chevron-left",
  "chevron-right",
  "link",
  "help",
  "close-modal",
  "no-response",
  "lightning",
  "add-more",
  "right-arrow",
  "datasource",
  "play",
  "desktop",
  "mobile",
  "tablet",
  "fluid",
  "HEADING_ONE",
  "HEADING_TWO",
  "HEADING_THREE",
  "PARAGRAPH",
  "PARAGRAPH_TWO",
] as const;

export type IconName = typeof IconCollection[number];

export const IconWrapper = styled.span<IconProps>`
  &:focus {
    outline: none;
  }
  display: flex;
  align-items: center;
  svg {
    width: ${(props) => sizeHandler(props.size)}px;
    height: ${(props) => sizeHandler(props.size)}px;
    path {
      fill: ${(props) => props.fillColor || props.theme.colors.icon.normal};
    }
  }
  ${(props) => (props.invisible ? `visibility: hidden;` : null)};

  &:hover {
    cursor: pointer;
    path {
      fill: ${(props) => props.theme.colors.icon.hover};
    }
  }

  &:active {
    cursor: pointer;
    path {
      fill: ${(props) => props.theme.colors.icon.active};
    }
  }
`;

export type IconProps = {
  size?: IconSize;
  name?: IconName;
  invisible?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  fillColor?: string;
};

const Icon = forwardRef(
  (props: IconProps & CommonComponentProps, ref: Ref<HTMLSpanElement>) => {
    let returnIcon;
    switch (props.name) {
      case "book":
        returnIcon = <BookIcon />;
        break;
      case "delete":
        returnIcon = <DeleteIcon />;
        break;
      case "user":
        returnIcon = <UserIcon />;
        break;
      case "general":
        returnIcon = <GeneralIcon />;
        break;
      case "billing":
        returnIcon = <BillingIcon />;
        break;
      case "edit":
        returnIcon = <EditIcon />;
        break;
      case "error":
        returnIcon = <ErrorIcon />;
        break;
      case "danger":
        returnIcon = <ErrorIcon />;
        break;
      case "shine":
        returnIcon = <ShineIcon />;
        break;
      case "success":
        returnIcon = <SuccessIcon />;
        break;
      case "search":
        returnIcon = <SearchIcon />;
        break;
      case "close":
        returnIcon = <CloseIcon />;
        break;
      case "downArrow":
        returnIcon = <DownArrow />;
        break;
      case "share":
        returnIcon = <ShareIcon />;
        break;
      case "rocket":
        returnIcon = <RocketIcon />;
        break;
      case "workspace":
        returnIcon = <WorkspaceIcon />;
        break;
      case "plus":
        returnIcon = <CreateNewIcon />;
        break;
      case "invite-user":
        returnIcon = <InviteUserIcon />;
        break;
      case "view-all":
        returnIcon = <ViewAllIcon />;
        break;
      case "view-less":
        returnIcon = <ViewLessIcon />;
        break;
      case "context-menu":
        returnIcon = <ContextMenuIcon />;
        break;
      case "duplicate":
        returnIcon = <DuplicateIcon />;
        break;
      case "logout":
        returnIcon = <LogoutIcon />;
        break;
      case "manage":
        returnIcon = <ManageIcon />;
        break;
      case "warning":
        returnIcon = <WarningIcon />;
        break;
      case "arrow-left":
        returnIcon = <ArrowLeft />;
        break;
      case "fork":
        returnIcon = <Fork />;
        break;
      case "chevron-left":
        returnIcon = <ChevronLeft />;
        break;
      case "chevron-right":
        returnIcon = <ChevronRight />;
        break;
      case "link":
        returnIcon = <LinkIcon />;
        break;
      case "help":
        returnIcon = <HelpIcon />;
        break;
      case "close-modal":
        returnIcon = <CloseModalIcon />;
        break;
      case "no-response":
        returnIcon = <NoResponseIcon />;
        break;
      case "lightning":
        returnIcon = <LightningIcon />;
        break;
      case "add-more":
        returnIcon = <AddMoreIcon />;
        break;
      case "right-arrow":
        returnIcon = <RightArrowIcon />;
        break;
      case "datasource":
        returnIcon = <DatasourceIcon />;
        break;
      case "play":
        returnIcon = <PlayIcon />;
        break;
      case "desktop":
        returnIcon = <DesktopIcon />;
        break;
      case "mobile":
        returnIcon = <MobileIcon />;
        break;
      case "tablet":
        returnIcon = <TabletIcon />;
        break;
      case "fluid":
        returnIcon = <FluidIcon />;
        break;

      case "HEADING_ONE":
      case "HEADING_TWO":
      case "HEADING_THREE":
      case "PARAGRAPH":
      case "PARAGRAPH_TWO":
        const ControlIcon = ControlIcons[props.name];
        returnIcon = <ControlIcon width={24} height={24} />;
        break;

      default:
        returnIcon = null;
        break;
    }
    return returnIcon && !props.isLoading ? (
      <IconWrapper
        className={Classes.ICON}
        data-cy={props.cypressSelector}
        ref={ref}
        {...props}
        onClick={props.onClick || noop}
      >
        {returnIcon}
      </IconWrapper>
    ) : props.isLoading ? (
      <Spinner size={props.size} />
    ) : null;
  },
);

Icon.displayName = "Icon";

export default Icon;

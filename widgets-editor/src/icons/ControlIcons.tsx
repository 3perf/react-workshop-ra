import React, { JSXElementConstructor } from "react";
import { IconProps, IconWrapper } from "constants/IconConstants";
import DeleteIcon from "assets/icons/control/delete.svg";
import MoveIcon from "assets/icons/control/move.svg";
import EditIcon from "assets/icons/control/edit.svg";
import ViewIcon from "assets/icons/control/view.svg";
import MoreVerticalIcon from "assets/icons/control/more-vertical.svg";
import OverflowMenuIcon from "assets/icons/menu/overflow-menu.svg";
import JsToggleIcon from "assets/icons/control/js-toggle.svg";
import IncreaseIcon from "assets/icons/control/increase.svg";
import DecreaseIcon from "assets/icons/control/decrease.svg";
import DraggableIcon from "assets/icons/control/draggable.svg";
import CloseIcon from "assets/icons/control/close.svg";
import HelpIcon from "assets/icons/control/help.svg";
import CollapseIcon from "assets/icons/control/collapse.svg";
import PickMyLocationSelectedIcon from "assets/icons/control/pick-location-selected.svg";
import SettingsIcon from "assets/icons/control/settings.svg";
import RemoveIcon from "assets/icons/control/remove.svg";
import DragIcon from "assets/icons/control/drag.svg";
import SortIcon from "assets/icons/control/sort-icon.svg";
import EditWhiteIcon from "assets/icons/control/edit-white.svg";
import LaunchIcon from "assets/icons/control/launch.svg";
import BackIcon from "assets/icons/control/back.svg";
import ShowColumnIcon from "assets/icons/control/hide-column.svg";
import HideColumnIcon from "assets/icons/control/columns-visibility.svg";
import DeleteColumnIcon from "assets/icons/control/delete-column.svg";
import BoldFontIcon from "assets/icons/control/bold.svg";
import ItalicsFontIcon from "assets/icons/control/italics.svg";
import LeftAlignIcon from "assets/icons/control/left-align.svg";
import CenterAlignIcon from "assets/icons/control/center-align.svg";
import RightAlignIcon from "assets/icons/control/right-align.svg";
import VerticalAlignBottom from "assets/icons/control/vertical_align_bottom.svg";
import VerticalAlignCenter from "assets/icons/control/vertical_align_center.svg";
import VerticalAlignTop from "assets/icons/control/vertical_align_top.svg";
import CopyIcon from "assets/icons/control/copy.svg";
import HeadingOneIcon from "assets/icons/control/heading_1.svg";
import HeadingTwoIcon from "assets/icons/control/heading_2.svg";
import HeadingThreeIcon from "assets/icons/control/heading_3.svg";
import ParagraphIcon from "assets/icons/control/paragraph.svg";
import ParagraphTwoIcon from "assets/icons/control/paragraph_2.svg";
import BulletsIcon from "assets/icons/control/bullets.svg";
import PlayIcon from "assets/icons/control/play-icon.png";

/* eslint-disable react/display-name */

export const ControlIcons: {
  [id: string]: JSXElementConstructor<IconProps>;
} = {
  DELETE_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <DeleteIcon />
    </IconWrapper>
  ),
  MOVE_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <MoveIcon />
    </IconWrapper>
  ),
  EDIT_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <EditIcon />
    </IconWrapper>
  ),
  VIEW_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <ViewIcon />
    </IconWrapper>
  ),
  MORE_VERTICAL_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <MoreVerticalIcon />
    </IconWrapper>
  ),
  MORE_HORIZONTAL_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <OverflowMenuIcon />
    </IconWrapper>
  ),
  JS_TOGGLE: (props: IconProps) => (
    <IconWrapper {...props}>
      <JsToggleIcon />
    </IconWrapper>
  ),
  INCREASE_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <IncreaseIcon />
    </IconWrapper>
  ),
  DECREASE_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <DecreaseIcon />
    </IconWrapper>
  ),
  DRAGGABLE_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <DraggableIcon />
    </IconWrapper>
  ),
  CLOSE_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <CloseIcon />
    </IconWrapper>
  ),
  PICK_MY_LOCATION_SELECTED_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <PickMyLocationSelectedIcon />
    </IconWrapper>
  ),
  SETTINGS_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <SettingsIcon />
    </IconWrapper>
  ),
  HELP_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <HelpIcon />
    </IconWrapper>
  ),
  PLAY_VIDEO: (props: IconProps) => (
    <IconWrapper {...props}>
      <img
        src={PlayIcon}
        style={{ height: "30px", width: "30px" }}
        alt="Datasource"
      />
    </IconWrapper>
  ),
  REMOVE_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <RemoveIcon />
    </IconWrapper>
  ),
  DRAG_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <DragIcon />
    </IconWrapper>
  ),
  COLLAPSE_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <CollapseIcon />
    </IconWrapper>
  ),
  SORT_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <SortIcon />
    </IconWrapper>
  ),
  EDIT_WHITE: (props: IconProps) => (
    <IconWrapper {...props}>
      <EditWhiteIcon />
    </IconWrapper>
  ),
  LAUNCH_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <LaunchIcon />
    </IconWrapper>
  ),
  BACK_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <BackIcon />
    </IconWrapper>
  ),
  SHOW_COLUMN: (props: IconProps) => (
    <IconWrapper {...props}>
      <ShowColumnIcon />
    </IconWrapper>
  ),
  HIDE_COLUMN: (props: IconProps) => (
    <IconWrapper {...props}>
      <HideColumnIcon />
    </IconWrapper>
  ),
  DELETE_COLUMN: (props: IconProps) => (
    <IconWrapper {...props}>
      <DeleteColumnIcon />
    </IconWrapper>
  ),
  BOLD_FONT: (props: IconProps) => (
    <IconWrapper {...props}>
      <BoldFontIcon />
    </IconWrapper>
  ),
  ITALICS_FONT: (props: IconProps) => (
    <IconWrapper {...props}>
      <ItalicsFontIcon />
    </IconWrapper>
  ),
  LEFT_ALIGN: (props: IconProps) => (
    <IconWrapper {...props}>
      <LeftAlignIcon />
    </IconWrapper>
  ),
  CENTER_ALIGN: (props: IconProps) => (
    <IconWrapper {...props}>
      <CenterAlignIcon />
    </IconWrapper>
  ),
  RIGHT_ALIGN: (props: IconProps) => (
    <IconWrapper {...props}>
      <RightAlignIcon />
    </IconWrapper>
  ),
  VERTICAL_TOP: (props: IconProps) => (
    <IconWrapper {...props}>
      <VerticalAlignTop />
    </IconWrapper>
  ),
  VERTICAL_CENTER: (props: IconProps) => (
    <IconWrapper {...props}>
      <VerticalAlignCenter />
    </IconWrapper>
  ),
  VERTICAL_BOTTOM: (props: IconProps) => (
    <IconWrapper {...props}>
      <VerticalAlignBottom />
    </IconWrapper>
  ),
  COPY_CONTROL: (props: IconProps) => (
    <IconWrapper {...props}>
      <CopyIcon />
    </IconWrapper>
  ),
  HEADING_ONE: (props: IconProps) => (
    <IconWrapper {...props}>
      <HeadingOneIcon />
    </IconWrapper>
  ),
  HEADING_TWO: (props: IconProps) => (
    <IconWrapper {...props}>
      <HeadingTwoIcon />
    </IconWrapper>
  ),
  HEADING_THREE: (props: IconProps) => (
    <IconWrapper {...props}>
      <HeadingThreeIcon />
    </IconWrapper>
  ),
  PARAGRAPH: (props: IconProps) => (
    <IconWrapper {...props}>
      <ParagraphIcon />
    </IconWrapper>
  ),
  PARAGRAPH_TWO: (props: IconProps) => (
    <IconWrapper {...props}>
      <ParagraphTwoIcon />
    </IconWrapper>
  ),
  BULLETS: (props: IconProps) => (
    <IconWrapper {...props}>
      <BulletsIcon />
    </IconWrapper>
  ),
};

export type ControlIconName = keyof typeof ControlIcons;

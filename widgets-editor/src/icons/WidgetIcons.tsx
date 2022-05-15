import React, { JSXElementConstructor } from "react";
import { IconProps, IconWrapper } from "constants/IconConstants";
import SpinnerIcon from "assets/icons/widget/alert.svg";
import ButtonIcon from "assets/icons/widget/button.svg";
import CollapseIcon from "assets/icons/widget/collapse.svg";
import ContainerIcon from "assets/icons/widget/container.svg";
import DatePickerIcon from "assets/icons/widget/datepicker.svg";
import TableIcon from "assets/icons/widget/table.svg";
import VideoIcon from "assets/icons/widget/video.svg";
import DropDownIcon from "assets/icons/widget/dropdown.svg";
import CheckboxIcon from "assets/icons/widget/checkbox.svg";
import RadioGroupIcon from "assets/icons/widget/radio.svg";
import InputIcon from "assets/icons/widget/input.svg";
import SwitchIcon from "assets/icons/widget/switch.svg";
import TextIcon from "assets/icons/widget/text.svg";
import ImageIcon from "assets/icons/widget/image.svg";
import FilePickerIcon from "assets/icons/widget/filepicker.svg";
import TabsIcon from "assets/icons/widget/tabs.svg";
import RichTextEditorIcon from "assets/icons/widget/rich-text.svg";
import ChartIcon from "assets/icons/widget/chart.svg";
import FormIcon from "assets/icons/widget/form.svg";
import MapIcon from "assets/icons/widget/map.svg";
import ModalIcon from "assets/icons/widget/modal.svg";
/* eslint-disable react/display-name */

export const WidgetIcons: {
  [id: string]: JSXElementConstructor<IconProps>;
} = {
  SPINNER_WIDGET: (props: IconProps) => (
    <IconWrapper {...props}>
      <SpinnerIcon />
    </IconWrapper>
  ),
  BUTTON_WIDGET: (props: IconProps) => (
    <IconWrapper {...props}>
      <ButtonIcon />
    </IconWrapper>
  ),
  CHECKBOX_WIDGET: (props: IconProps) => (
    <IconWrapper {...props}>
      <CheckboxIcon />
    </IconWrapper>
  ),
  COLLAPSE_WIDGET: (props: IconProps) => (
    <IconWrapper {...props}>
      <CollapseIcon />
    </IconWrapper>
  ),
  CONTAINER_WIDGET: (props: IconProps) => (
    <IconWrapper {...props}>
      <ContainerIcon />
    </IconWrapper>
  ),
  DATE_PICKER_WIDGET2: (props: IconProps) => (
    <IconWrapper {...props}>
      <DatePickerIcon />
    </IconWrapper>
  ),
  TABLE_WIDGET: (props: IconProps) => (
    <IconWrapper {...props}>
      <TableIcon />
    </IconWrapper>
  ),
  VIDEO_WIDGET: (props: IconProps) => (
    <IconWrapper {...props}>
      <VideoIcon />
    </IconWrapper>
  ),
  DROP_DOWN_WIDGET: (props: IconProps) => (
    <IconWrapper {...props}>
      <DropDownIcon />
    </IconWrapper>
  ),
  RADIO_GROUP_WIDGET: (props: IconProps) => (
    <IconWrapper {...props}>
      <RadioGroupIcon />
    </IconWrapper>
  ),
  INPUT_WIDGET: (props: IconProps) => (
    <IconWrapper {...props}>
      <InputIcon />
    </IconWrapper>
  ),
  RICH_TEXT_EDITOR_WIDGET: (props: IconProps) => (
    <IconWrapper {...props}>
      <RichTextEditorIcon />
    </IconWrapper>
  ),
  SWITCH_WIDGET: (props: IconProps) => (
    <IconWrapper {...props}>
      <SwitchIcon />
    </IconWrapper>
  ),
  TEXT_WIDGET: (props: IconProps) => (
    <IconWrapper {...props}>
      <TextIcon />
    </IconWrapper>
  ),
  IMAGE_WIDGET: (props: IconProps) => (
    <IconWrapper {...props}>
      <ImageIcon />
    </IconWrapper>
  ),
  FILE_PICKER_WIDGET: (props: IconProps) => (
    <IconWrapper {...props}>
      <FilePickerIcon />
    </IconWrapper>
  ),
  TABS_WIDGET: (props: IconProps) => (
    <IconWrapper {...props}>
      <TabsIcon />
    </IconWrapper>
  ),
  CHART_WIDGET: (props: IconProps) => (
    <IconWrapper {...props}>
      <ChartIcon />
    </IconWrapper>
  ),
  FORM_WIDGET: (props: IconProps) => (
    <IconWrapper {...props}>
      <FormIcon />
    </IconWrapper>
  ),
  MAP_WIDGET: (props: IconProps) => (
    <IconWrapper {...props}>
      <MapIcon />
    </IconWrapper>
  ),
  MODAL_WIDGET: (props: IconProps) => (
    <IconWrapper {...props}>
      <ModalIcon />
    </IconWrapper>
  ),
  FORM_BUTTON_WIDGET: (props: IconProps) => (
    <IconWrapper {...props}>
      <ButtonIcon />
    </IconWrapper>
  ),
};

export type WidgetIcon = typeof WidgetIcons[keyof typeof WidgetIcons];

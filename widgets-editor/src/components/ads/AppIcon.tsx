import React, { useMemo } from "react";
import BagIcon from "assets/icons/ads/app-icons/bag.svg";
import ProductIcon from "assets/icons/ads/app-icons/product.svg";
import BookIcon from "assets/icons/ads/app-icons/book.svg";
import CameraIcon from "assets/icons/ads/app-icons/camera.svg";
import FileIcon from "assets/icons/ads/app-icons/file.svg";
import ChatIcon from "assets/icons/ads/app-icons/chat.svg";
import CalenderIcon from "assets/icons/ads/app-icons/calender.svg";
import FrameIcon from "assets/icons/ads/app-icons/frame.svg";
import GlobeIcon from "assets/icons/ads/app-icons/globe.svg";
import ShopperIcon from "assets/icons/ads/app-icons/shopper.svg";
import HeartIcon from "assets/icons/ads/app-icons/heart.svg";
import FlightIcon from "assets/icons/ads/app-icons/flight.svg";
import AlienIcon from "assets/icons/ads/app-icons/alien.svg";
import BarGraphIcon from "assets/icons/ads/app-icons/bar-graph.svg";
import BasketballIcon from "assets/icons/ads/app-icons/basketball.svg";
import BicycleIcon from "assets/icons/ads/app-icons/bicycle.svg";
import BirdIcon from "assets/icons/ads/app-icons/bird.svg";
import BitcoinIcon from "assets/icons/ads/app-icons/bitcoin.svg";
import BurgerIcon from "assets/icons/ads/app-icons/burger.svg";
import BusIcon from "assets/icons/ads/app-icons/bus.svg";
import AirplaneIcon from "assets/icons/ads/app-icons/airplane.svg";
import CallIcon from "assets/icons/ads/app-icons/call.svg";
import CarIcon from "assets/icons/ads/app-icons/car.svg";
import CardIcon from "assets/icons/ads/app-icons/card.svg";
import CatIcon from "assets/icons/ads/app-icons/cat.svg";
import ChineseRemnibiIcon from "assets/icons/ads/app-icons/chinese-remnibi.svg";
import CloudIcon from "assets/icons/ads/app-icons/cloud.svg";
import CodingIcon from "assets/icons/ads/app-icons/coding.svg";
import CouplesIcon from "assets/icons/ads/app-icons/couples.svg";
import CricketIcon from "assets/icons/ads/app-icons/cricket.svg";
import DiamondIcon from "assets/icons/ads/app-icons/diamond.svg";
import DogIcon from "assets/icons/ads/app-icons/dog.svg";
import DollarIcon from "assets/icons/ads/app-icons/dollar.svg";
import EarthIcon from "assets/icons/ads/app-icons/earth.svg";
import EmailIcon from "assets/icons/ads/app-icons/email.svg";
import EurosIcon from "assets/icons/ads/app-icons/euros.svg";
import FamilyIcon from "assets/icons/ads/app-icons/family.svg";
import FlagIcon from "assets/icons/ads/app-icons/flag.svg";
import FootballIcon from "assets/icons/ads/app-icons/football.svg";
import HatIcon from "assets/icons/ads/app-icons/hat.svg";
import HeadphonesIcon from "assets/icons/ads/app-icons/headphones.svg";
import HospitalIcon from "assets/icons/ads/app-icons/hospital.svg";
import JoystickIcon from "assets/icons/ads/app-icons/joystick.svg";
import LaptopIcon from "assets/icons/ads/app-icons/laptop.svg";
import LineChartIcon from "assets/icons/ads/app-icons/line-chart.svg";
import LocationIcon from "assets/icons/ads/app-icons/location.svg";
import LotusIcon from "assets/icons/ads/app-icons/lotus.svg";
import LoveIcon from "assets/icons/ads/app-icons/love.svg";
import MedalIcon from "assets/icons/ads/app-icons/medal.svg";
import MedicalIcon from "assets/icons/ads/app-icons/medical.svg";
import MoneyIcon from "assets/icons/ads/app-icons/money.svg";
import MoonIcon from "assets/icons/ads/app-icons/moon.svg";
import MugIcon from "assets/icons/ads/app-icons/mug.svg";
import MusicIcon from "assets/icons/ads/app-icons/music.svg";
import PantsIcon from "assets/icons/ads/app-icons/pants.svg";
import PieChartIcon from "assets/icons/ads/app-icons/pie-chart.svg";
import PizzaIcon from "assets/icons/ads/app-icons/pizza.svg";
import PlantIcon from "assets/icons/ads/app-icons/plant.svg";
import RainyWeatherIcon from "assets/icons/ads/app-icons/rainy-weather.svg";
import RestaurantIcon from "assets/icons/ads/app-icons/restaurant.svg";
import RocketIcon from "assets/icons/ads/app-icons/rocket.svg";
import RoseIcon from "assets/icons/ads/app-icons/rose.svg";
import RupeeIcon from "assets/icons/ads/app-icons/rupee.svg";
import SaturnIcon from "assets/icons/ads/app-icons/saturn.svg";
import ServerIcon from "assets/icons/ads/app-icons/server.svg";
import ShakeHandsIcon from "assets/icons/ads/app-icons/shake-hands.svg";
import ShirtIcon from "assets/icons/ads/app-icons/shirt.svg";
import ShopIcon from "assets/icons/ads/app-icons/shop.svg";
import SinglePersonIcon from "assets/icons/ads/app-icons/single-person.svg";
import SmartphoneIcon from "assets/icons/ads/app-icons/smartphone.svg";
import SnowyWeatherIcon from "assets/icons/ads/app-icons/snowy-weather.svg";
import StarsIcon from "assets/icons/ads/app-icons/stars.svg";
import SunflowerIcon from "assets/icons/ads/app-icons/sunflower.svg";
import SystemIcon from "assets/icons/ads/app-icons/system.svg";
import TeamIcon from "assets/icons/ads/app-icons/team.svg";
import TreeIcon from "assets/icons/ads/app-icons/tree.svg";
import UkPoundsIcon from "assets/icons/ads/app-icons/uk-pounds.svg";
import WebsiteIcon from "assets/icons/ads/app-icons/website.svg";
import YenIcon from "assets/icons/ads/app-icons/yen.svg";
import SteamBowlIcon from "assets/icons/ads/app-icons/steam-bowl.svg";

import styled from "styled-components";
import { Size } from "./Button";
import { CommonComponentProps, Classes } from "./common";

export const AppIconCollection = [
  "bag",
  "product",
  "book",
  "camera",
  "file",
  "chat",
  "calender",
  "flight",
  "frame",
  "globe",
  "shopper",
  "heart",
  "alien",
  "bar-graph",
  "basketball",
  "bicycle",
  "bird",
  "bitcoin",
  "burger",
  "bus",
  "call",
  "car",
  "card",
  "cat",
  "chinese-remnibi",
  "cloud",
  "coding",
  "couples",
  "cricket",
  "diamond",
  "dog",
  "dollar",
  "earth",
  "email",
  "euros",
  "family",
  "flag",
  "football",
  "hat",
  "headphones",
  "hospital",
  "joystick",
  "laptop",
  "line-chart",
  "location",
  "lotus",
  "love",
  "medal",
  "medical",
  "money",
  "moon",
  "mug",
  "music",
  "pants",
  "pie-chart",
  "pizza",
  "plant",
  "rainy-weather",
  "restaurant",
  "rocket",
  "rose",
  "rupee",
  "saturn",
  "server",
  "shake-hands",
  "shirt",
  "shop",
  "single-person",
  "smartphone",
  "snowy-weather",
  "stars",
  "steam-bowl",
  "sunflower",
  "system",
  "team",
  "tree",
  "uk-pounds",
  "website",
  "yen",
  "airplane",
] as const;

export type AppIconName = typeof AppIconCollection[number];

type cssAttributes = {
  width: number;
  height: number;
  padding: number;
};

const appSizeHandler = (size: Size): cssAttributes => {
  let width, height, padding;
  switch (size) {
    case Size.small:
      width = 20;
      height = 20;
      padding = 5;
      break;
    case Size.medium:
      width = 32;
      height = 32;
      padding = 20;
      break;
    case Size.large:
      width = 50;
      height = 50;
      padding = 50;
      break;
    default:
      width = 20;
      height = 20;
      padding = 5;
      break;
  }
  return { width, height, padding };
};

const IconWrapper = styled.a<AppIconProps & { styledProps: cssAttributes }>`
  cursor: pointer;
  width: ${(props) => props.styledProps.width}px;
  height: ${(props) => props.styledProps.height}px;
  &:focus {
    outline: none;
  }
  svg {
    width: ${(props) => props.styledProps.width}px;
    height: ${(props) => props.styledProps.height}px;
    path {
      fill: ${(props) => props.theme.colors.appIcon.normal};
    }
  }
`;

export type AppIconProps = CommonComponentProps & {
  size?: Size;
  name: AppIconName;
};

const AppIcon = (props: AppIconProps) => {
  const styledProps = useMemo(() => appSizeHandler(props.size || Size.medium), [
    props,
  ]);

  let returnIcon;
  switch (props.name) {
    case "bag":
      returnIcon = <BagIcon />;
      break;
    case "product":
      returnIcon = <ProductIcon />;
      break;
    case "book":
      returnIcon = <BookIcon />;
      break;
    case "camera":
      returnIcon = <CameraIcon />;
      break;
    case "file":
      returnIcon = <FileIcon />;
      break;
    case "chat":
      returnIcon = <ChatIcon />;
      break;
    case "calender":
      returnIcon = <CalenderIcon />;
      break;
    case "frame":
      returnIcon = <FrameIcon />;
      break;
    case "globe":
      returnIcon = <GlobeIcon />;
      break;
    case "shopper":
      returnIcon = <ShopperIcon />;
      break;
    case "heart":
      returnIcon = <HeartIcon />;
      break;
    case "flight":
      returnIcon = <FlightIcon />;
      break;
    case "alien":
      returnIcon = <AlienIcon />;
      break;
    case "bar-graph":
      returnIcon = <BarGraphIcon />;
      break;
    case "basketball":
      returnIcon = <BasketballIcon />;
      break;
    case "bicycle":
      returnIcon = <BicycleIcon />;
      break;
    case "bird":
      returnIcon = <BirdIcon />;
      break;
    case "bitcoin":
      returnIcon = <BitcoinIcon />;
      break;
    case "burger":
      returnIcon = <BurgerIcon />;
      break;
    case "bus":
      returnIcon = <BusIcon />;
      break;
    case "call":
      returnIcon = <CallIcon />;
      break;
    case "car":
      returnIcon = <CarIcon />;
      break;
    case "card":
      returnIcon = <CardIcon />;
      break;
    case "cat":
      returnIcon = <CatIcon />;
      break;
    case "chinese-remnibi":
      returnIcon = <ChineseRemnibiIcon />;
      break;
    case "cloud":
      returnIcon = <CloudIcon />;
      break;
    case "coding":
      returnIcon = <CodingIcon />;
      break;
    case "couples":
      returnIcon = <CouplesIcon />;
      break;
    case "cricket":
      returnIcon = <CricketIcon />;
      break;
    case "diamond":
      returnIcon = <DiamondIcon />;
      break;
    case "dog":
      returnIcon = <DogIcon />;
      break;
    case "airplane":
      returnIcon = <AirplaneIcon />;
      break;
    case "dollar":
      returnIcon = <DollarIcon />;
      break;
    case "earth":
      returnIcon = <EarthIcon />;
      break;
    case "email":
      returnIcon = <EmailIcon />;
      break;
    case "euros":
      returnIcon = <EurosIcon />;
      break;
    case "family":
      returnIcon = <FamilyIcon />;
      break;
    case "flag":
      returnIcon = <FlagIcon />;
      break;
    case "football":
      returnIcon = <FootballIcon />;
      break;
    case "hat":
      returnIcon = <HatIcon />;
      break;
    case "headphones":
      returnIcon = <HeadphonesIcon />;
      break;
    case "hospital":
      returnIcon = <HospitalIcon />;
      break;
    case "joystick":
      returnIcon = <JoystickIcon />;
      break;
    case "laptop":
      returnIcon = <LaptopIcon />;
      break;
    case "line-chart":
      returnIcon = <LineChartIcon />;
      break;
    case "location":
      returnIcon = <LocationIcon />;
      break;
    case "lotus":
      returnIcon = <LotusIcon />;
      break;
    case "love":
      returnIcon = <LoveIcon />;
      break;
    case "medal":
      returnIcon = <MedalIcon />;
      break;
    case "medical":
      returnIcon = <MedicalIcon />;
      break;
    case "money":
      returnIcon = <MoneyIcon />;
      break;
    case "moon":
      returnIcon = <MoonIcon />;
      break;
    case "mug":
      returnIcon = <MugIcon />;
      break;
    case "music":
      returnIcon = <MusicIcon />;
      break;
    case "pants":
      returnIcon = <PantsIcon />;
      break;
    case "pie-chart":
      returnIcon = <PieChartIcon />;
      break;
    case "pizza":
      returnIcon = <PizzaIcon />;
      break;
    case "plant":
      returnIcon = <PlantIcon />;
      break;
    case "rainy-weather":
      returnIcon = <RainyWeatherIcon />;
      break;
    case "restaurant":
      returnIcon = <RestaurantIcon />;
      break;
    case "rocket":
      returnIcon = <RocketIcon />;
      break;
    case "rose":
      returnIcon = <RoseIcon />;
      break;
    case "rupee":
      returnIcon = <RupeeIcon />;
      break;
    case "saturn":
      returnIcon = <SaturnIcon />;
      break;
    case "server":
      returnIcon = <ServerIcon />;
      break;
    case "shake-hands":
      returnIcon = <ShakeHandsIcon />;
      break;
    case "shirt":
      returnIcon = <ShirtIcon />;
      break;
    case "shop":
      returnIcon = <ShopIcon />;
      break;
    case "single-person":
      returnIcon = <SinglePersonIcon />;
      break;
    case "smartphone":
      returnIcon = <SmartphoneIcon />;
      break;
    case "snowy-weather":
      returnIcon = <SnowyWeatherIcon />;
      break;
    case "stars":
      returnIcon = <StarsIcon />;
      break;
    case "sunflower":
      returnIcon = <SunflowerIcon />;
      break;
    case "steam-bowl":
      returnIcon = <SteamBowlIcon />;
      break;
    case "system":
      returnIcon = <SystemIcon />;
      break;
    case "team":
      returnIcon = <TeamIcon />;
      break;
    case "tree":
      returnIcon = <TreeIcon />;
      break;
    case "uk-pounds":
      returnIcon = <UkPoundsIcon />;
      break;
    case "website":
      returnIcon = <WebsiteIcon />;
      break;
    case "yen":
      returnIcon = <YenIcon />;
      break;
    default:
      returnIcon = null;
      break;
  }
  return returnIcon ? (
    <IconWrapper
      data-cy={props.cypressSelector}
      {...props}
      className={Classes.APP_ICON}
      styledProps={styledProps}
    >
      {returnIcon}
    </IconWrapper>
  ) : null;
};

export default AppIcon;

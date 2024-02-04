import { ISlideItem } from "../../components";

export interface IHomePageProps {}

export interface IAsideLeftContentModel {
  asideLeftMenu: IAsideLeftMenuModel[],
}

export interface IAsideLeftMenuModel {
  id: string| number;
  name: string;
  icon?: React.ReactNode;
  link?: string;
}

export interface IAsideRightContentModel {
  slides?: ISlideItem[],
  hashtags?: string[],
  leaderboard?: ILeaderboardModel[]
}

export interface ILeaderboardModel {
  id: string| number;
  name: string;
  avatar?: string;
  link?: string;
}


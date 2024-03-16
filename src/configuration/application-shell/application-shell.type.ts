import { IConfig } from '../configuration.type';

export interface IAppShellData {
  header?: {
    logoUrl?: string;
    mainNav?: [];
    externalNav?: [];
  };
  footer?: {
    footerStyle?: string;
    content?: any;
  };
  profileSetting?: {
    submenuType?: string;
    subNavLinks?: [];
  };
  profilePageConfig?: any;
  welcomeModal?: {
    isEnable?: boolean;
    isLightBox?: boolean;
    image?: string;
    content?: [];
    title?: string;
  };
  licensePaper?: {
    licenseIcon?: {
      title?: string;
      imageUrl?: string;
    };
    licenseImage?: {
      title?: string;
      imageUrl?: string;
    };
  };
}

export interface IAppShellConfig extends IConfig<IAppShellData> {}

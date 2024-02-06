import { ObservableMap } from 'mobx';
import { IToastProps } from '../../../components';

export interface IToastManagerStore {
  toast: ObservableMap<string, IToastProps>;
}

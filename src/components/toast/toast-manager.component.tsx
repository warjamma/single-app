import './toast-manager.style.scss';

import React from 'react';
import { Toast } from './toast.component';
import { observer } from 'mobx-react';
import { CoreToastManagerStore } from '../../store/store-toast-manager';

const classNamePrefix = 'toto-wui-admin-toast-manager';

export const ToastManager: React.FC = observer(() => {
  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__container top-left`}>
        {CoreToastManagerStore.toastsSelector('top-left').map((toast, index) => {
          const { id = index } = toast;
          return <Toast {...toast} key={id} />;
        })}
      </div>
      <div className={`${classNamePrefix}__container top-center`}>
        {CoreToastManagerStore.toastsSelector('top-center').map((toast, index) => {
          const { id = index } = toast;
          return <Toast {...toast} key={id} />;
        })}
      </div>
      <div className={`${classNamePrefix}__container top-right`}>
        {CoreToastManagerStore.toastsSelector('top-right').map((toast, index) => {
          const { id = index } = toast;
          return <Toast {...toast} key={id} />;
        })}
      </div>
      <div className={`${classNamePrefix}__container bottom-left`}>
        {CoreToastManagerStore.toastsSelector('bottom-left').map((toast, index) => {
          const { id = index } = toast;
          return <Toast {...toast} key={id} />;
        })}
      </div>
      <div className={`${classNamePrefix}__container bottom-center`}>
        {CoreToastManagerStore.toastsSelector('bottom-center').map((toast, index) => {
          const { id = index } = toast;
          return <Toast {...toast} key={id} />;
        })}
      </div>
      <div className={`${classNamePrefix}__container bottom-right`}>
        {CoreToastManagerStore.toastsSelector('bottom-right').map((toast, index) => {
          const { id = index } = toast;
          return <Toast {...toast} key={id} />;
        })}
      </div>
      <div className={`${classNamePrefix}__container middle-left`}>
        {CoreToastManagerStore.toastsSelector('middle-left').map((toast, index) => {
          const { id = index } = toast;
          return <Toast {...toast} key={id} />;
        })}
      </div>
      <div className={`${classNamePrefix}__container middle-center`}>
        {CoreToastManagerStore.toastsSelector('middle-center').map((toast, index) => {
          const { id = index } = toast;
          return <Toast {...toast} key={id} />;
        })}
      </div>
      <div className={`${classNamePrefix}__container middle-right`}>
        {CoreToastManagerStore.toastsSelector('middle-right').map((toast, index) => {
          const { id = index } = toast;
          return <Toast {...toast} key={id} />;
        })}
      </div>
    </div>
  );
});

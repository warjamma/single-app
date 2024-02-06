import './toast.style.scss';

import React, { useCallback, useEffect, useMemo } from 'react';
import { IToastProps } from './toast.type';
import { observer } from 'mobx-react';
import { CoreToastManagerStore } from '../../store/store-toast-manager';
import { classNameStringify } from '../../utils';

const classNamePrefix = 'toto-wui-admin-toast';

export const Toast: React.FC<IToastProps> = observer((props) => {
  const { className = '', content, duration, icon, id, onDismiss, title, type = 'default', isOpen = false } = props;

  const defaultIcon = useMemo(() => {
    switch (type) {
      case 'success':
        return <i className="bi bi-check-circle" />;
      case 'error':
        return <i className="bi bi-x-circle" />;
      case 'warning':
        return <i className="bi bi-exclamation-circle" />;
      case 'info':
        return <i className="bi bi-info-circle" />;
      case 'default':
      default:
        return <i className="bi bi-info-circle" />;
    }
  }, [type]);

  const handleClose = useCallback(() => {
    if (id) {
      CoreToastManagerStore.closeToastAction(id, true);
    }
    onDismiss?.();
  }, [id, onDismiss]);

  useEffect(() => {
    if (duration) {
      setTimeout(() => {
        handleClose();
      }, duration);
    }
  }, [duration, handleClose]);

  return (
    <div className={classNameStringify(`${classNamePrefix} ${className} ${type} ${isOpen ? 'open' : ''}`)} id={id}>
      <div className={`${classNamePrefix}__close-button`} onClick={handleClose}>
        <i className="bi bi-x-lg" />
      </div>

      <div className={`${classNamePrefix}__icon`}>{icon || defaultIcon}</div>
      <div className={`${classNamePrefix}__content-wrapper`}>
        {!!title && <div className={`${classNamePrefix}__title`}>{title}</div>}
        {!!content && <div className={`${classNamePrefix}__content`}>{content}</div>}
      </div>
    </div>
  );
});

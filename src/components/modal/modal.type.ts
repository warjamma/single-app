import React from 'react';

export interface IModal {
  placeholderUuid?: string;
  uuid?: string;
  title?: string;
  content?: React.ReactNode;
  size?: 'md' | 'lg' | 'full';

  type?: 'normal' | 'confirm';
  onConfirm?: () => Promise<void>;
  onClose?: () => Promise<void>;
  confirmValidator?: () => boolean;
  overlayColor?: string;
  closeOnOverlay?: boolean;
  isLightBox?: boolean;
  image?: string;
  fixedTop?: boolean;
  className?: string;
}

export interface IModalPlaceholder {
  uuid?: string;
}

import React from 'react';

export type TToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'middle-left'
  | 'middle-center'
  | 'middle-right';

export interface IToastProps {
  className?: string;

  id?: string;
  type?: 'success' | 'error' | 'warning' | 'info' | 'default';
  icon?: React.ReactNode;
  title?: string;
  content?: React.ReactNode;
  duration?: number;

  position: TToastPosition;

  isOpen?: boolean;

  onDismiss?: () => void;
}

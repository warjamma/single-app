import React, { useMemo } from "react";
import { IButtonProps } from "./button.type";
import { mainDomainReplace } from "../../utils/common/url";

const classNamePrefix = 'tt-button-component';

export const Button: React.FC<IButtonProps> = (props) => {
  const { title, link, className, target = '_self', disabled, type = 'button', children, ...resButtonProps } = props;

  const popupLink = useMemo(() => {
    if (!link) return '#';

    return mainDomainReplace(link).split('?')[0];
  }, [link]);

  return (
    <React.Fragment>
      {(type === 'button') ?
        <button className={`${classNamePrefix} ${className}`} disabled={disabled} {...resButtonProps}>
          {children}
          {
            title && <div className="line-clamp-1">{title}</div>
          }
        </button >
        : <a className={`${classNamePrefix} ${className}`} href={popupLink} target={target}>
          {children}
          {
            title && <div className="line-clamp-1">{title}</div>
          }
        </a >}
    </React.Fragment>
  );
};

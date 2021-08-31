import * as React from 'react';
import { useContext } from 'react';
import PortalConsumer from './PortalConsumer';
import { PortalContext, PortalMethods } from './PortalHost';

export const Portal: React.FC = (props) => {
  const portalContext = useContext(PortalContext);

  return (
    <PortalConsumer manager={portalContext as PortalMethods}>
      {props.children}
    </PortalConsumer>
  );
};

export default Portal;

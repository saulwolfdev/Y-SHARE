import * as React from 'react';
import styles from './MenuPrincipal.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { useConstCallback } from '@uifabric/react-hooks';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

// Iconos
const RingerIcon = () => <Icon iconName="Ringer" />;

// Import components
import TextoNotificaciones from './TextoNotificaciones';

export const Notificaciones: React.FunctionComponent = () => {
  const [isOpen2, setIsOpen2] = React.useState(false);
  const openPanel2 = useConstCallback(() => setIsOpen2(true));
  const dismissPanel2 = useConstCallback(() => setIsOpen2(false));

  return (
    <div className={styles.MenuPrincipal}>
      <div onClick={openPanel2}>
        <RingerIcon />
      </div>
      <Panel
        isLightDismiss
        isOpen={isOpen2}
        onDismiss={dismissPanel2}
        type={PanelType.customNear}
        closeButtonAriaLabel="Cerrar"
        className={styles.Notificaciones}
      >
        <TextoNotificaciones />
      </Panel>
    </div>
  );
};
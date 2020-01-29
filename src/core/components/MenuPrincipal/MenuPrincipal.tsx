import * as React from 'react';
import styles from './MenuPrincipal.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { useConstCallback } from '@uifabric/react-hooks';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

// Iconos
const GlobalNavButton = () => <Icon iconName="GlobalNavButton" className={styles.MenuPrincipal_GlobalNavContainer_Button} />;
const SearchIcon = () => <Icon iconName="Search" />;
const ContactIcon = () => <Icon iconName="Contact" />;
const RingerIcon = () => <Icon iconName="Ringer" />;
const ProductIcon = () => <Icon iconName="Product" />;
const DownloadIcon = () => <Icon iconName="Download" />;

// Import components
import TextoNotificaciones from './TextoNotificaciones';

export const MenuPrincipal: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const openPanel = useConstCallback(() => setIsOpen(true));
  const dismissPanel = useConstCallback(() => setIsOpen(false));

  const [isOpen2, setIsOpen2] = React.useState(false);
  const openPanel2 = useConstCallback(() => setIsOpen2(true));
  const dismissPanel2 = useConstCallback(() => setIsOpen2(false));

  return (
    <div className={styles.MenuPrincipal}>
      <div onClick={openPanel} className={styles.MenuPrincipal_GlobalNavContainer}>
        <GlobalNavButton />
      </div>

      <Panel
        isLightDismiss
        isOpen={isOpen2}
        onOpen={dismissPanel}
        onDismiss={dismissPanel2}
        type={PanelType.customNear}
        closeButtonAriaLabel="Cerrar"
        className={styles.Notificaciones}
      >
        <TextoNotificaciones />
      </Panel>

      <Panel
        isLightDismiss
        isOpen={isOpen}
        onDismiss={dismissPanel}
        type={PanelType.customNear}
        closeButtonAriaLabel="Cerrar"
        className={styles.MenuPrincipal}
      >

        <nav className={styles.MenuPrincipal_MenuContent}>

          <ul className={styles.MenuPrincipal_MenuContent_Paginas}>

            <li className={styles.MenuPrincipal_MenuContent_Paginas_Btn}>
              <a href="#" className={styles.MenuPrincipal_MenuContent_Paginas_Btn_Linkmenu}>
                <span className={styles.MenuPrincipal_MenuContent_Paginas_Btn_Linkmenu_Icon}>
                  <SearchIcon />
                </span>
                Buscar
              </a>
            </li>

            <li className={styles.MenuPrincipal_MenuContent_Paginas_Btn}>
              <a href="#" className={styles.MenuPrincipal_MenuContent_Paginas_Btn_Linkmenu}>
                <span className={styles.MenuPrincipal_MenuContent_Paginas_Btn_Linkmenu_Icon}>
                  <ContactIcon />
                </span>
                Nombre de la empresa
              </a>
            </li>

            <li className={styles.MenuPrincipal_MenuContent_Paginas_Btn + ' ' + styles.Activo}>
              <a href="#" onClick={openPanel2} className={styles.MenuPrincipal_MenuContent_Paginas_Btn_Linkmenu}>
                <span className={styles.MenuPrincipal_MenuContent_Paginas_Btn_Linkmenu_Icon}>
                  <RingerIcon />
                </span>
                Notificaciones
              </a>
            </li>

            <li className={styles.MenuPrincipal_MenuContent_Paginas_Btn}>
              <a href="#" className={styles.MenuPrincipal_MenuContent_Paginas_Btn_Linkmenu}>
                <span className={styles.MenuPrincipal_MenuContent_Paginas_Btn_Linkmenu_Icon}>
                  <ProductIcon />
                </span>
                Zip
              </a>
            </li>

            <li className={styles.MenuPrincipal_MenuContent_Paginas_Btn}>
              <a href="#" className={styles.MenuPrincipal_MenuContent_Paginas_Btn_Linkmenu}>
                <span className={styles.MenuPrincipal_MenuContent_Paginas_Btn_Linkmenu_Icon}>
                  <DownloadIcon />
                </span>
                Últimas descargas
              </a>
            </li>

          </ul>

          <ul className={styles.MenuPrincipal_MenuContent_Marcas}>

            <li className={styles.MenuPrincipal_MenuContent_Marcas_Btn}>
              <a href="#" className={styles.MenuPrincipal_MenuContent_Marcas_Btn_Linkmenu}>
                YPF
              </a>
            </li>

            <li className={styles.MenuPrincipal_MenuContent_Marcas_Btn}>
              <a href="#" className={styles.MenuPrincipal_MenuContent_Marcas_Btn_Linkmenu}>
                EESS
              </a>
            </li>

            <li className={styles.MenuPrincipal_MenuContent_Marcas_Btn}>
              <a href="#" className={styles.MenuPrincipal_MenuContent_Marcas_Btn_Linkmenu}>
                FULL
              </a>
            </li>

            <li className={styles.MenuPrincipal_MenuContent_Marcas_Btn}>
              <a href="#" className={styles.MenuPrincipal_MenuContent_Marcas_Btn_Linkmenu}>
                SC
              </a>
            </li>

            <li className={styles.MenuPrincipal_MenuContent_Marcas_Btn}>
              <a href="#" className={styles.MenuPrincipal_MenuContent_Marcas_Btn_Linkmenu}>
                ENRUTA
              </a>
            </li>

            <li className={styles.MenuPrincipal_MenuContent_Marcas_Btn}>
              <a href="#" className={styles.MenuPrincipal_MenuContent_Marcas_Btn_Linkmenu}>
                YPF AGRO
              </a>
            </li>

            <li className={styles.MenuPrincipal_MenuContent_Marcas_Btn}>
              <a href="#" className={styles.MenuPrincipal_MenuContent_Marcas_Btn_Linkmenu}>
                INFINIA
              </a>
            </li>

            <li className={styles.MenuPrincipal_MenuContent_Marcas_Btn}>
              <a href="#" className={styles.MenuPrincipal_MenuContent_Marcas_Btn_Linkmenu}>
                BOXES
              </a>
            </li>

            <li className={styles.MenuPrincipal_MenuContent_Marcas_Btn}>
              <a href="#" className={styles.MenuPrincipal_MenuContent_Marcas_Btn_Linkmenu}>
                ELAION
              </a>
            </li>

            <li className={styles.MenuPrincipal_MenuContent_Marcas_Btn}>
              <a href="#" className={styles.MenuPrincipal_MenuContent_Marcas_Btn_Linkmenu}>
                FILLER
              </a>
            </li>

            <li className={styles.MenuPrincipal_MenuContent_Marcas_Btn}>
              <a href="#" className={styles.MenuPrincipal_MenuContent_Marcas_Btn_Linkmenu}>
                YPF LUZ
              </a>
            </li>

            <li className={styles.MenuPrincipal_MenuContent_Marcas_Btn}>
              <a href="#" className={styles.MenuPrincipal_MenuContent_Marcas_Btn_Linkmenu}>
                YTEC
              </a>
            </li>

            <li className={styles.MenuPrincipal_MenuContent_Marcas_Btn}>
              <a href="#" className={styles.MenuPrincipal_MenuContent_Marcas_Btn_Linkmenu}>
                FYPF
              </a>
            </li>

            <li className={styles.MenuPrincipal_MenuContent_Marcas_Btn}>
              <a href="#" className={styles.MenuPrincipal_MenuContent_Marcas_Btn_Linkmenu}>
                OTRAS MARCAS
              </a>
            </li>

          </ul>

        </nav>

      </Panel>
    </div >
  );
};
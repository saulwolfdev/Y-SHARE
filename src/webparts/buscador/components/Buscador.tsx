import * as React from 'react';
import styles from './Buscador.module.scss';
import { IBuscadorProps } from './IBuscadorProps';
import { escape } from '@microsoft/sp-lodash-subset';

// Fix para Workbench
require('../../../core/css/fix.css');

// Import components
import { BannerPrincipal_Buscador } from '../../../core/components/BannerPrincipal/BannerPrincipal';
import Menu from '../../../core/components/Menu/Menu';
import ComponenteBuscador from '../../../core/components/Buscador/Buscador';
import { FiltroOrdenarPor } from '../../../core/components/FiltroOrdenarPor/FiltroOrdenarPor';
import ItemsDescargas from '../../../core/components/ItemsDescargas/ItemsDescargas';
import Footer from '../../../core/components/Footer/Footer';

export default class Buscador extends React.Component<IBuscadorProps, {}> {
  public render(): React.ReactElement<IBuscadorProps> {
    return (
      <div className={styles.buscador}>

        <BannerPrincipal_Buscador />
        <Menu />

        <div className={styles.buscador_Container}>
          <ComponenteBuscador />
          <div className={styles.buscador_Row}>
            <div className={styles.buscador_Row_ColLeft}>
              <div className={styles.buscador_Row_ColLeft_Cantidad}>
                <strong>53</strong> resultados
              </div>
            </div>
            <div className={styles.buscador_Row_ColRight}>
              <FiltroOrdenarPor />
            </div>
          </div>
          <ItemsDescargas />
          <ItemsDescargas />
          <ItemsDescargas />
        </div>

        <Footer />

      </div>
    );
  }
}

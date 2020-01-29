import * as React from 'react';
import styles from './UltimasDescargas.module.scss';
import { IUltimasDescargasProps } from './IUltimasDescargasProps';
import { escape } from '@microsoft/sp-lodash-subset';

// Fix para Workbench
require('../../../core/css/fix.css');

// Import components
import { BannerPrincipal_UltimasDescargas } from '../../../core/components/BannerPrincipal/BannerPrincipal';
import Menu from '../../../core/components/Menu/Menu';
import { Titulo_UltimasDescargas } from '../../../core/components/Titulo/Titulo';
import ItemsDescargas from '../../../core/components/ItemsDescargas/ItemsDescargas';
import Footer from '../../../core/components/Footer/Footer';

export default class UltimasDescargas extends React.Component<IUltimasDescargasProps, {}> {
  public render(): React.ReactElement<IUltimasDescargasProps> {
    return (
      <div className={styles.ultimasDescargas}>

        <BannerPrincipal_UltimasDescargas />
        <Menu />

        <div className={styles.ultimasDescargas_Container}>
          <Titulo_UltimasDescargas />
          <div className={styles.ultimasDescargas_FechaDescarga}>Últimos 7 días</div>
          <ItemsDescargas />
          <div className={styles.ultimasDescargas_FechaDescarga}>Último mes</div>
          <ItemsDescargas />
          <div className={styles.ultimasDescargas_FechaDescarga}>Último año</div>
          <ItemsDescargas />
          <ItemsDescargas />
        </div>

        <Footer />

      </div>
    );
  }
}
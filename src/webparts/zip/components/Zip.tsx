import * as React from 'react';
import styles from './Zip.module.scss';
import { IZipProps } from './IZipProps';
import { escape } from '@microsoft/sp-lodash-subset';

// Fix para Workbench
require('../../../core/css/fix.css');

// Import components
import { BannerPrincipal_Zip } from '../../../core/components/BannerPrincipal/BannerPrincipal';
import Menu from '../../../core/components/Menu/Menu';
import { Titulo_Zip } from '../../../core/components/Titulo/Titulo';
import ItemsDescargas from '../../../core/components/ItemsDescargas/ItemsDescargas';
import Footer from '../../../core/components/Footer/Footer';

export default class Zip extends React.Component<IZipProps, {}> {
  public render(): React.ReactElement<IZipProps> {
    return (
      <div className={styles.zip}>

        <BannerPrincipal_Zip />
        <Menu />

        <div className={styles.zip_Container}>
          <Titulo_Zip />
          <ItemsDescargas />
        </div>

        <Footer />

      </div>
    );
  }
}
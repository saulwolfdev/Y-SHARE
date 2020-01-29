import * as React from 'react';
import styles from './Perfil.module.scss';
import { IPerfilProps } from './IPerfilProps';
import { escape } from '@microsoft/sp-lodash-subset';

// Fix para Workbench
require('../../../core/css/fix.css');

// Import components
import { BannerPrincipal_EditarPerfil } from '../../../core/components/BannerPrincipal/BannerPrincipal';
import Menu from '../../../core/components/Menu/Menu';
import { Titulo_EditarPerfil } from '../../../core/components/Titulo/Titulo';
import EditarPerfil_CambiarEmail from '../../../core/components/EditarPerfil/EditarPerfil_CambiarEmail';
import EditarPerfil_CambiarContrasenia from '../../../core/components/EditarPerfil/EditarPerfil_CambiarContrasenia';
import { Titulo_AdministradorDeCuentas } from '../../../core/components/Titulo/Titulo';
import DatosUsuarios from '../../../core/components/DatosUsuarios/DatosUsuarios';
import Footer from '../../../core/components/Footer/Footer';


export default class Perfil extends React.Component<IPerfilProps, {}> {
  public render(): React.ReactElement<IPerfilProps> {
    return (
      <div className={styles.perfil}>

        <BannerPrincipal_EditarPerfil />
        <Menu />

        <div className={styles.perfil_Container}>
          <Titulo_EditarPerfil />
          <div className={styles.perfil_Row}>
            <div className={styles.perfil_Col}>
              <EditarPerfil_CambiarEmail />
            </div>
            <div className={styles.perfil_Col}>
              <EditarPerfil_CambiarContrasenia />
            </div>
          </div>
          <Titulo_AdministradorDeCuentas />
          <DatosUsuarios />
        </div>

        <Footer />

      </div>
    );
  }
}
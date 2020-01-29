import * as React from 'react';
import styles from './Titulo.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

// Import components
import { PrimaryButton_Descargar } from '../FormButton/FormButton';
import { PrimaryButtonNbackground_LogOut } from '../FormButton/FormButton';
import { PrimaryButtonNbackground_BorrarHistorial } from '../FormButton/FormButton';
import EditarPerfil_CrearCuenta from '../EditarPerfil/EditarPerfil_CrearCuenta';

// Titulo Zip
export const Titulo_Zip: React.FunctionComponent = () => {
  return (
    <section className={styles.Titulo}>
      <div className={styles.Titulo_ColLeft}>
        <div className={styles.Titulo_Texto}>
          Zip
        </div>
      </div>
      <div className={styles.Titulo_ColRight}>
        <PrimaryButton_Descargar />
      </div>
      <div className={styles.Titulo_ColBottom}>
        <div className={styles.Titulo_ColBottom_Line}></div>
      </div>
    </section >
  );
};

// Titulo Administrador de cuentas
export const Titulo_AdministradorDeCuentas: React.FunctionComponent = () => {
  return (
    <section className={styles.Titulo}>
      <div className={styles.Titulo_ColLeft}>
        <div className={styles.Titulo_Texto}>
          Administrador de cuentas
        </div>
      </div>
      <div className={styles.Titulo_ColRight}>
        <EditarPerfil_CrearCuenta />
      </div>
      <div className={styles.Titulo_ColBottom}>
        <div className={styles.Titulo_ColBottom_Line}></div>
      </div>
    </section >
  );
};

// Titulo Editar perfil
export const Titulo_EditarPerfil: React.FunctionComponent = () => {
  return (
    <section className={styles.Titulo}>
      <div className={styles.Titulo_ColLeft}>
        <div className={styles.Titulo_Texto}>
          Editar perfil de Nombre de la Empresa
        </div>
      </div>
      <div className={styles.Titulo_ColRight}>
        <PrimaryButtonNbackground_LogOut />
      </div>
      <div className={styles.Titulo_ColBottom}>
        <div className={styles.Titulo_ColBottom_Line}></div>
      </div>
    </section >
  );
};

// Titulo Ultimas descargas
export const Titulo_UltimasDescargas: React.FunctionComponent = () => {
  return (
    <section className={styles.Titulo}>
      <div className={styles.Titulo_ColLeft}>
        <div className={styles.Titulo_Texto}>
          Últimas descargas
        </div>
      </div>
      <div className={styles.Titulo_ColRight}>
        <PrimaryButtonNbackground_BorrarHistorial />
      </div>
      <div className={styles.Titulo_ColBottom}>
        <div className={styles.Titulo_ColBottom_Line}></div>
      </div>
    </section >
  );
};
import * as React from 'react';
import styles from './BannerPrincipal.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

// Import components
import { DefaultButtonSmall_EditarPerfil } from '../../../core/components/FormButton/FormButton';
import { DefaultButtonSmall_LogOut } from '../../../core/components/FormButton/FormButton';

// Banner Principal Buscador
export const BannerPrincipal_Buscador: React.FunctionComponent = () => {
  const ImgBuscador = require("img/BannerPrincipal/Buscador.jpg");
  return (
    <header className={styles.BannerPrincipal} style={{ backgroundImage: `url(${ImgBuscador})` }}>
      <div className={styles.BannerPrincipal_ContenedorDatos}>
        <div className={styles.BannerPrincipal_ContenedorDatos_Titulo}>
          Buscar
        </div>
      </div>
    </header>
  );
};

// Banner Principal Home
export const BannerPrincipal_Home: React.FunctionComponent = () => {
  const ImgHome = require("img/BannerPrincipal/Home.jpg");
  return (
    <header className={styles.BannerPrincipal} style={{ backgroundImage: `url(${ImgHome})` }}>
      <div className={styles.BannerPrincipal_ContenedorDatos}>
        <div className={styles.BannerPrincipal_ContenedorDatos_Volanta}>
          Bienvenido
        </div>
        <div className={styles.BannerPrincipal_ContenedorDatos_Titulo}>
          Nombre de la Empresa
        </div>
        <div className={styles.BannerPrincipal_ContenedorDatos_Copete}>
          <DefaultButtonSmall_EditarPerfil />
          <DefaultButtonSmall_LogOut />
        </div>
      </div>
    </header>
  );
};

// Banner Principal Zip
export const BannerPrincipal_Zip: React.FunctionComponent = () => {
  const ImgBuscador = require("img/BannerPrincipal/Zip.jpg");
  return (
    <header className={styles.BannerPrincipal} style={{ backgroundImage: `url(${ImgBuscador})` }}>
      <div className={styles.BannerPrincipal_ContenedorDatos}>
        <div className={styles.BannerPrincipal_ContenedorDatos_Titulo}>
          Zip
        </div>
      </div>
    </header>
  );
};

// Banner Principal Ultimas Descargas
export const BannerPrincipal_UltimasDescargas: React.FunctionComponent = () => {
  const ImgBuscador = require("img/BannerPrincipal/UltimasDescargas.jpg");
  return (
    <header className={styles.BannerPrincipal} style={{ backgroundImage: `url(${ImgBuscador})` }}>
      <div className={styles.BannerPrincipal_ContenedorDatos}>
        <div className={styles.BannerPrincipal_ContenedorDatos_Titulo}>
          ÚIltimas descargas
        </div>
      </div>
    </header>
  );
};

// Banner Principal Marcas
export const BannerPrincipal_Marcas: React.FunctionComponent = () => {
  const ImgBuscador = require("img/BannerPrincipal/Marcas.jpg");
  return (
    <header className={styles.BannerPrincipal} style={{ backgroundImage: `url(${ImgBuscador})` }}>
      <div className={styles.BannerPrincipal_ContenedorDatos}>
        <div className={styles.BannerPrincipal_ContenedorDatos_Titulo}></div>
      </div>
    </header>
  );
};

// Banner Principal Editar Perfil
export const BannerPrincipal_EditarPerfil: React.FunctionComponent = () => {
  const ImgHome = require("img/BannerPrincipal/Home.jpg");
  return (
    <header className={styles.BannerPrincipal} style={{ backgroundImage: `url(${ImgHome})` }}>
      <div className={styles.BannerPrincipal_ContenedorDatos}>
        <div className={styles.BannerPrincipal_ContenedorDatos_Volanta}>
          Bienvenido
        </div>
        <div className={styles.BannerPrincipal_ContenedorDatos_Titulo}>
          Nombre de la Empresa
        </div>
      </div>
    </header>
  );
};
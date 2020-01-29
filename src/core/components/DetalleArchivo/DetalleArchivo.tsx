import * as React from 'react';
import styles from './DetalleArchivo.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

// Import components
import { PrimaryButton_Descargar } from '../FormButton/FormButton';
import { DefaultButton_AgregarAlZip } from '../FormButton/FormButton';

export interface IDetalleArchivoProps {
}
export interface IDetalleArchivoState {
}

export default class DetalleArchivo extends React.Component<IDetalleArchivoProps, IDetalleArchivoState> {

  public render() {

    const ImgBuscador = require("img/BannerPrincipal/Buscador.jpg");

    return (

      <div className={styles.DetalleArchivo}>
        <div className={styles.DetalleArchivo_ContenedorImagen} style={{ backgroundImage: `url(${ImgBuscador})` }}></div>

        <div className={styles.DetalleArchivo_ContenedorDescripcion}>
          <div className={styles.DetalleArchivo_ContenedorDescripcion_NombreArchivo}>Nombre del Archivo</div>
          <ul className={styles.DetalleArchivo_ContenedorDescripcion_TagContent}>
            <li className={styles.DetalleArchivo_ContenedorDescripcion_TagContent_Tag + ' ' + styles.MediumBlue}>YPF</li>
            <li className={styles.DetalleArchivo_ContenedorDescripcion_TagContent_Tag + ' ' + styles.LightBlue}>Institucional</li>
            <li className={styles.DetalleArchivo_ContenedorDescripcion_TagContent_Tag + ' ' + styles.LightBlue}>Banners</li>
          </ul>
          <div className={styles.DetalleArchivo_Row}>
            <div className={styles.DetalleArchivo_ContenedorDescripcion_Info}>
              <div className={styles.DetalleArchivo_ContenedorDescripcion_Info_Titulo}>
                Extención:
            </div>
              <div className={styles.DetalleArchivo_ContenedorDescripcion_Info_Texto}>
                PNG
            </div>
            </div>
            <div className={styles.DetalleArchivo_ContenedorDescripcion_Info}>
              <div className={styles.DetalleArchivo_ContenedorDescripcion_Info_Titulo}>
                Tamaño
            </div>
              <div className={styles.DetalleArchivo_ContenedorDescripcion_Info_Texto}>
                130,96kb
            </div>
            </div>
          </div>
          <div className={styles.DetalleArchivo_ContenedorDescripcion_Botones}>
            <PrimaryButton_Descargar />
            <DefaultButton_AgregarAlZip />
          </div>
        </div>
      </div>

    );
  }
}
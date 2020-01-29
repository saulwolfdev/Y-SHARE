import * as React from 'react';
import styles from './ItemsDescargas.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { ITagItemProps } from 'office-ui-fabric-react';
export interface IItemsDescargasProps {
}

export interface IItemDescargaState {
}

// Fix para Workbench
require('../../../core/css/fix.css');

// Iconos

const DownloadIcon = () => <Icon iconName="Download" className="ItemDescarga_Caption_Download_Ico" />;

export default class ItemsDescargas extends React.Component<IItemsDescargasProps, IItemDescargaState> {
  public constructor(props: ItemsDescargas) {
    super(props);
    this.imageDescarga = require("img/ItemsDescargas/descarga.jpg");
    this.imageOjo = require("img/ItemsDescargas/icon-ver.svg");
  }

  private imageDescarga: string;
  private imageOjo: string;

  public render() {
    return (
      // <div className={styles.ItemsDescargas}>
        <div className={styles.ItemsDescargas + ' ' + styles.VistaDeLista}>

        {/* ITEM */}
        <article className={styles.ItemDescarga}>
          <div className={styles.ItemDescarga_FigureContent}>
            <div className={styles.ItemDescarga_FigureContent_Details}>
              <span className={styles.ItemDescarga_FigureContent_Details_New}>NEW</span>
              <div className={styles.ItemDescarga_FigureContent_Details_Peso}>
                <p className={styles.ItemDescarga_FigureContent_Details_Peso_Parrafo}>12.8MB <span className={styles.ItemDescarga_FigureContent_Details_Peso_Barra}></span>PSD</p>
              </div>
            </div>
            <a href="#" className={styles.ItemDescarga_FigureContent_Image} type="button" data-toggle="modal" data-target="#modalDescargas">
              <div className={styles.ItemDescarga_FigureContent_Image_Botones} style={{ backgroundImage: `url(${this.imageOjo})` }}></div>
              <img className={styles.ItemDescarga_FigureContent_Image_Fotos} src={this.imageDescarga} alt="" />
            </a>
          </div>
          <div className={styles.ItemDescarga_Caption}>
            <span className={styles.ItemDescarga_Caption_New}>NEW</span>
            <span className={styles.ItemDescarga_Caption_Formato}>PSD</span>
            <h3 className={styles.ItemDescarga_Caption_Title}>Nombre del Archivo largo</h3>
            <a href="#" className={styles.ItemDescarga_Caption_Download} data-toggle="modal" data-target="#modalDescargas">
              <DownloadIcon />
            </a>
            <p className={styles.ItemDescarga_Caption_Peso}>Tamaño: 11.3mb</p>
            <p className={styles.ItemDescarga_Caption_Fecha}>16/12/2018 10:55hs</p>
            <ul className={styles.ItemDescarga_Caption_TagContent}>
              <li className={styles.ItemDescarga_Caption_TagContent_Tag + ' ' + styles.ItemDescarga_Caption_TagContent_Tag_DarkGrey}>
                YTEC
              </li>
              <li className={styles.ItemDescarga_Caption_TagContent_Tag + ' ' + styles.ItemDescarga_Caption_TagContent_Tag_LightBlue}>
                Institucional
              </li>
            </ul>
          </div>
        </article>

        {/* ITEM */}
        <article className={styles.ItemDescarga}>
          <div className={styles.ItemDescarga_FigureContent}>
            <div className={styles.ItemDescarga_FigureContent_Details}>
              <span className={styles.ItemDescarga_FigureContent_Details_New}>NEW</span>
              <div className={styles.ItemDescarga_FigureContent_Details_Peso}>
                <p className={styles.ItemDescarga_FigureContent_Details_Peso_Parrafo}>12.8MB <span className={styles.ItemDescarga_FigureContent_Details_Peso_Barra}></span>PSD</p>
              </div>
            </div>
            <a href="#" className={styles.ItemDescarga_FigureContent_Image} type="button" data-toggle="modal" data-target="#modalDescargas">
              <div className={styles.ItemDescarga_FigureContent_Image_Botones} style={{ backgroundImage: `url(${this.imageOjo})` }}></div>
              <img className={styles.ItemDescarga_FigureContent_Image_Fotos} src={this.imageDescarga} alt="" />
            </a>
          </div>
          <div className={styles.ItemDescarga_Caption}>
            <span className={styles.ItemDescarga_Caption_New}>NEW</span>
            <span className={styles.ItemDescarga_Caption_Formato}>PSD</span>
            <h3 className={styles.ItemDescarga_Caption_Title}>Nombre del Archivo largo</h3>
            <a href="#" className={styles.ItemDescarga_Caption_Download} data-toggle="modal" data-target="#modalDescargas">
              <DownloadIcon />
            </a>
            <p className={styles.ItemDescarga_Caption_Peso}>Tamaño: 11.3mb</p>
            <p className={styles.ItemDescarga_Caption_Fecha}>16/12/2018 10:55hs</p>
            <ul className={styles.ItemDescarga_Caption_TagContent}>
              <li className={styles.ItemDescarga_Caption_TagContent_Tag + ' ' + styles.ItemDescarga_Caption_TagContent_Tag_DarkGrey}>
                YTEC
              </li>
              <li className={styles.ItemDescarga_Caption_TagContent_Tag + ' ' + styles.ItemDescarga_Caption_TagContent_Tag_LightBlue}>
                Institucional
              </li>
            </ul>
          </div>
        </article>

        {/* ITEM */}
        <article className={styles.ItemDescarga}>
          <div className={styles.ItemDescarga_FigureContent}>
            <div className={styles.ItemDescarga_FigureContent_Details}>
              <span className={styles.ItemDescarga_FigureContent_Details_New}>NEW</span>
              <div className={styles.ItemDescarga_FigureContent_Details_Peso}>
                <p className={styles.ItemDescarga_FigureContent_Details_Peso_Parrafo}>12.8MB <span className={styles.ItemDescarga_FigureContent_Details_Peso_Barra}></span>PSD</p>
              </div>
            </div>
            <a href="#" className={styles.ItemDescarga_FigureContent_Image} type="button" data-toggle="modal" data-target="#modalDescargas">
              <div className={styles.ItemDescarga_FigureContent_Image_Botones} style={{ backgroundImage: `url(${this.imageOjo})` }}></div>
              <img className={styles.ItemDescarga_FigureContent_Image_Fotos} src={this.imageDescarga} alt="" />
            </a>
          </div>
          <div className={styles.ItemDescarga_Caption}>
            <span className={styles.ItemDescarga_Caption_New}>NEW</span>
            <span className={styles.ItemDescarga_Caption_Formato}>PSD</span>
            <h3 className={styles.ItemDescarga_Caption_Title}>Nombre del Archivo largo</h3>
            <a href="#" className={styles.ItemDescarga_Caption_Download} data-toggle="modal" data-target="#modalDescargas">
              <DownloadIcon />
            </a>
            <p className={styles.ItemDescarga_Caption_Peso}>Tamaño: 11.3mb</p>
            <p className={styles.ItemDescarga_Caption_Fecha}>16/12/2018 10:55hs</p>
            <ul className={styles.ItemDescarga_Caption_TagContent}>
              <li className={styles.ItemDescarga_Caption_TagContent_Tag + ' ' + styles.ItemDescarga_Caption_TagContent_Tag_DarkGrey}>
                YTEC
              </li>
              <li className={styles.ItemDescarga_Caption_TagContent_Tag + ' ' + styles.ItemDescarga_Caption_TagContent_Tag_LightBlue}>
                Institucional
              </li>
            </ul>
          </div>
        </article>

        {/* ITEM */}
        <article className={styles.ItemDescarga}>
          <div className={styles.ItemDescarga_FigureContent}>
            <div className={styles.ItemDescarga_FigureContent_Details}>
              <span className={styles.ItemDescarga_FigureContent_Details_New}>NEW</span>
              <div className={styles.ItemDescarga_FigureContent_Details_Peso}>
                <p className={styles.ItemDescarga_FigureContent_Details_Peso_Parrafo}>12.8MB <span className={styles.ItemDescarga_FigureContent_Details_Peso_Barra}></span>PSD</p>
              </div>
            </div>
            <a href="#" className={styles.ItemDescarga_FigureContent_Image} type="button" data-toggle="modal" data-target="#modalDescargas">
              <div className={styles.ItemDescarga_FigureContent_Image_Botones} style={{ backgroundImage: `url(${this.imageOjo})` }}></div>
              <img className={styles.ItemDescarga_FigureContent_Image_Fotos} src={this.imageDescarga} alt="" />
            </a>
          </div>
          <div className={styles.ItemDescarga_Caption}>
            <span className={styles.ItemDescarga_Caption_New}>NEW</span>
            <span className={styles.ItemDescarga_Caption_Formato}>PSD</span>
            <h3 className={styles.ItemDescarga_Caption_Title}>Nombre del Archivo largo</h3>
            <a href="#" className={styles.ItemDescarga_Caption_Download} data-toggle="modal" data-target="#modalDescargas">
              <DownloadIcon />
            </a>
            <p className={styles.ItemDescarga_Caption_Peso}>Tamaño: 11.3mb</p>
            <p className={styles.ItemDescarga_Caption_Fecha}>16/12/2018 10:55hs</p>
            <ul className={styles.ItemDescarga_Caption_TagContent}>
              <li className={styles.ItemDescarga_Caption_TagContent_Tag + ' ' + styles.ItemDescarga_Caption_TagContent_Tag_DarkGrey}>
                YTEC
              </li>
              <li className={styles.ItemDescarga_Caption_TagContent_Tag + ' ' + styles.ItemDescarga_Caption_TagContent_Tag_LightBlue}>
                Institucional
              </li>
            </ul>
          </div>
        </article>
      </div>
    );
  }
}
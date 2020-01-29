import * as React from 'react';
import styles from './UltimasDescargas.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Dialog, DialogType } from 'office-ui-fabric-react/lib/Dialog';
import { getId } from 'office-ui-fabric-react/lib/Utilities';

// Import components
import DetalleArchivo from '../DetalleArchivo/DetalleArchivo';

export interface IUltimasDescargasProps {
}
export interface IUltimasDescargasState {
}
export interface IDialogBasicExampleState {
  hideDialog: boolean;
}

// Iconos

const ChevronRightIcon = () => <Icon iconName="ChevronRightMed" className={styles.ItemDescarga_Caption_Download_Ico} />;

export default class UltimasDescargas extends React.Component<IUltimasDescargasProps, IUltimasDescargasState, IDialogBasicExampleState> {

  public state: IDialogBasicExampleState = {
    hideDialog: true,
  };
  private _labelId: string = getId('dialogLabel');
  private _subTextId: string = getId('subTextLabel');

  public render() {

    const { hideDialog } = this.state;

    return (

      <div className={styles.UltimasDescargas}>

        <div className={styles.UltimasDescargas_Titulo}>Tus últimas descargas</div>

        {/* ITEM */}
        <article onClick={this._showDialog} className={styles.ItemDescarga}>
          <div className={styles.ItemDescarga_Caption}>
            <span className={styles.ItemDescarga_Caption_Formato}>PSD</span>
            <h3 className={styles.ItemDescarga_Caption_Title}>Nombre del Archivo más largo</h3>
            <a href="#" className={styles.ItemDescarga_Caption_Download}>
              <ChevronRightIcon />
            </a>
            <p className={styles.ItemDescarga_Caption_Fecha}>16/12/2018 10:55hs</p>
          </div>
        </article>

        {/* ITEM */}
        <article onClick={this._showDialog} className={styles.ItemDescarga}>
          <div className={styles.ItemDescarga_Caption}>
            <span className={styles.ItemDescarga_Caption_Formato}>PSD</span>
            <h3 className={styles.ItemDescarga_Caption_Title}>Nombre del Archivo más largo</h3>
            <span className={styles.ItemDescarga_Caption_Download}>
              <ChevronRightIcon />
            </span>
            <p className={styles.ItemDescarga_Caption_Fecha}>16/12/2018 10:55hs</p>
          </div>
        </article>

        {/* ITEM */}
        <article onClick={this._showDialog} className={styles.ItemDescarga}>
          <div className={styles.ItemDescarga_Caption}>
            <span className={styles.ItemDescarga_Caption_Formato}>PSD</span>
            <h3 className={styles.ItemDescarga_Caption_Title}>Nombre del Archivo más largo</h3>
            <span className={styles.ItemDescarga_Caption_Download}>
              <ChevronRightIcon />
            </span>
            <p className={styles.ItemDescarga_Caption_Fecha}>16/12/2018 10:55hs</p>
          </div>
        </article>

        <Dialog
          hidden={hideDialog}
          onDismiss={this._closeDialog}
          dialogContentProps={{
            type: DialogType.normal,
          }}
          modalProps={{
            titleAriaId: this._labelId,
            subtitleAriaId: this._subTextId,
            isBlocking: false,
			className:styles.DialogDetalleArchivo
          }}
        >
        <DetalleArchivo />
        </Dialog>

      </div>
    );
  }

  private _showDialog = (): void => {
    this.setState({ hideDialog: false });
  }

  private _closeDialog = (): void => {
    this.setState({ hideDialog: true });
  }

}
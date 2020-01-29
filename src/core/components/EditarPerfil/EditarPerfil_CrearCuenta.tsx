import * as React from 'react';
import styles from './EditarPerfil.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { Dialog, DialogType } from 'office-ui-fabric-react/lib/Dialog';
import { getId } from 'office-ui-fabric-react/lib/Utilities';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';

// Import components
import { PrimaryButton_CrearCuenta } from '../FormButton/FormButton';
import { FormInputText_NombreUsuario } from '../FormInputText/FormInputText';
import { FormInputText_EmailUsuario } from '../FormInputText/FormInputText';
import { FormInputText_Contrasenia } from '../FormInputText/FormInputText';
import { PrimaryButton_CrearUsuario } from '../FormButton/FormButton';

export interface IEditarPerfilProps {
}
export interface IEditarPerfilState {
}
export interface IDialogBasicExampleState {
  hideDialog: boolean;
}

export default class EditarPerfil_CrearCuenta extends React.Component<IEditarPerfilProps, IEditarPerfilState, IDialogBasicExampleState> {

  public state: IDialogBasicExampleState = {
    hideDialog: true,
  };
  
  // Use getId() to ensure that the IDs are unique on the page.
  // (It's also okay to use plain strings without getId() and manually ensure uniqueness.)
  private _labelId: string = getId('dialogLabel');
  private _subTextId: string = getId('subTextLabel');

  public render() {

    const { hideDialog } = this.state;

    return (
      <div className={styles.EditarPerfil}>
        <div onClick={this._showDialog}>
          <PrimaryButton_CrearCuenta />
        </div>
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
          }}
          className={styles.EditarPerfil_Dialog}
        >
          <div className={styles.EditarPerfil_Dialog_Contenido}>
            <div className={styles.EditarPerfil_Dialog_Contenido_Titulo}>Crear usuario</div>
            <FormInputText_NombreUsuario />
            <FormInputText_EmailUsuario />
            <FormInputText_Contrasenia />
            <Checkbox label="Notificar modificaciones al usuario via email" onChange={_onChange} />
            <PrimaryButton_CrearUsuario />
          </div>
        </Dialog>
      </div>
    );

    function _onChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean) {
      console.log(`The option has been changed to ${isChecked}.`);
    }

  }

  private _showDialog = (): void => {
    this.setState({ hideDialog: false });
  }

  private _closeDialog = (): void => {
    this.setState({ hideDialog: true });
  }

}
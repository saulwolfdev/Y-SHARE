import * as React from 'react';
import styles from './EditarPerfil.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { Dialog, DialogType } from 'office-ui-fabric-react/lib/Dialog';
import { getId } from 'office-ui-fabric-react/lib/Utilities';

// Import components
import { DefaultButton_CambiarEmail } from '../FormButton/FormButton';
import { FormInputText_NuevoEmail} from '../FormInputText/FormInputText';
import { PrimaryButton_GuardarCambios } from '../FormButton/FormButton';

export interface IEditarPerfilProps {
}
export interface IEditarPerfilState {
}
export interface IDialogBasicExampleState {
  hideDialog: boolean;
}

export default class EditarPerfil_CambiarContrasenia extends React.Component<IEditarPerfilProps, IEditarPerfilState, IDialogBasicExampleState> {

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
          <DefaultButton_CambiarEmail />
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
            <div className={styles.EditarPerfil_Dialog_Contenido_Titulo}>Cambiar email</div>
            <FormInputText_NuevoEmail />
            <PrimaryButton_GuardarCambios />
          </div>
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
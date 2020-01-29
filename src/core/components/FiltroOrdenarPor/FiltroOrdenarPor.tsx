import * as React from 'react';
import styles from './FiltroOrdenarPor.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { Callout, DirectionalHint, getId } from 'office-ui-fabric-react';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';

// Import components
import { PrimaryButtonNbackground_OrdenarPor } from '../FormButton/FormButton';

export interface ICalloutBasicExampleState {
  isCalloutVisible?: boolean;
}

export class FiltroOrdenarPor extends React.Component<{}, ICalloutBasicExampleState> {
  public state: ICalloutBasicExampleState = {
    isCalloutVisible: false
  };

  private _menuButtonElement = React.createRef<HTMLDivElement>();
  // Use getId() to ensure that the callout label and description IDs are unique on the page.
  // (It's also okay to use plain strings without getId() and manually ensure their uniqueness.)
  private _labelId: string = getId('callout-label');
  private _descriptionId: string = getId('callout-description');

  public render(): JSX.Element {
    const { isCalloutVisible } = this.state;
    return (
      <>
        <div className={styles.FiltroOrdenarPor_Button} ref={this._menuButtonElement} onClick={this._onShowMenuClicked}>
          < PrimaryButtonNbackground_OrdenarPor />
        </div>
        {this.state.isCalloutVisible && (
          <Callout
            className={styles.FiltroOrdenarPor_Callout}
            ariaLabelledBy={this._labelId}
            ariaDescribedBy={this._descriptionId}
            role="alertdialog"
            gapSpace={3}
            beakWidth={0}
            directionalHint={DirectionalHint.bottomRightEdge}
            target={this._menuButtonElement.current}
            onDismiss={this._onCalloutDismiss}
            setInitialFocus={true}
          >
            <div className={styles.FiltroOrdenarPor_ContenedorOpciones}>
              <div className={styles.FiltroOrdenarPor_ContenedorOpciones_Titulo}>
                Ordenar por
              </div>
              <ChoiceGroup
                className={styles.FiltroOrdenarPor_ContenedorOpciones_Opciones}
                options={[
                  {
                    key: 'nombre',
                    text: 'Nombre'
                  },
                  {
                    key: 'fecha',
                    text: 'Fecha'
                  }
                ]}
                onChange={_onChange}
              />

            </div>
          </Callout>
        )}
      </>
    );

    function _onChange(ev: React.FormEvent<HTMLInputElement>, option: IChoiceGroupOption): void {
      console.dir(option);
    }

  }

  private _onShowMenuClicked = (): void => {
    this.setState({
      isCalloutVisible: !this.state.isCalloutVisible
    });
  }

  private _onCalloutDismiss = (): void => {
    this.setState({
      isCalloutVisible: false
    });
  }
}
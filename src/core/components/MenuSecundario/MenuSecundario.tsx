import * as React from 'react';
import styles from './MenuSecundario.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { Callout, DirectionalHint, getId } from 'office-ui-fabric-react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

export interface ICalloutBasicExampleState {
  isCalloutVisible?: boolean;
}

// Import components
import { Notificaciones } from '../../../core/components/MenuPrincipal/Notificaciones';

// Iconos
const SearchIcon = () => <Icon iconName="Search" />;
const ContactIcon = () => <Icon iconName="Contact" />;

export class MenuSecundario extends React.Component<{}, ICalloutBasicExampleState> {
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
        <nav className={styles.MenuSecundario}>
          <div className={styles.MenuSecundario_Item + ' ' + styles.HiddenLG}>
            <div ref={this._menuButtonElement} onClick={this._onShowMenuClicked} className={styles.MenuSecundario_Item_BotonPrimario}>
              <div className={styles.MenuSecundario_Item_BotonPrimario_Icono}>
                <ContactIcon />
              </div>
              <div className={styles.MenuSecundario_Item_BotonPrimario_Texto}>
                Nombre de la empresa
              </div>
            </div>
            {this.state.isCalloutVisible && (
              <Callout
                className={styles.CalloutEmpresa}
                ariaLabelledBy={this._labelId}
                ariaDescribedBy={this._descriptionId}
                role="alertdialog"
                gapSpace={3}
                beakWidth={0}
                directionalHint={DirectionalHint.bottomLeftEdge}
                target={this._menuButtonElement.current}
                onDismiss={this._onCalloutDismiss}
                setInitialFocus={true}
              >
                <div className={styles.CalloutEmpresa_ContenedorOpciones}>
                  <div className={styles.CalloutEmpresa_ContenedorOpciones_Opcion}>
                    Editar Perfil
                  </div>
                  <div className={styles.CalloutEmpresa_ContenedorOpciones_Opcion}>
                    Log out
                  </div>
                </div>
              </Callout>
            )}
          </div>

          <div className={styles.MenuSecundario_Item + ' ' + styles.Activo}>
            <div className={styles.MenuSecundario_Item_Boton}>
              <Notificaciones />
            </div>
          </div>

          <div className={styles.MenuSecundario_Item}>
            <div className={styles.MenuSecundario_Item_Boton}>
              <SearchIcon />
            </div>
          </div>
        </nav>
      </>
    );
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
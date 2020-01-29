import * as React from 'react';
import styles from './Menu.module.scss';

// Import components
import { MenuPrincipal } from '../MenuPrincipal/MenuPrincipal';
import { MenuSecundario } from '../MenuSecundario/MenuSecundario';

export default class Menu extends React.Component {
  public render() {
    return (
      <div className={styles.Menu}>
          <div className={styles.Menu_Row}>
            <div className={styles.Menu_Row_ColLeft}>
              <MenuPrincipal />
            </div>
            <div className={styles.Menu_Row_ColRight}>
              <MenuSecundario />
            </div>
          </div>
      </div >
    );
  }
}
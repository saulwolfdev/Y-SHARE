import * as React from 'react';
import styles from './DatosUsuarios.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

// Iconos
const MailIcon = () => <Icon iconName="Mail" />;
const LockIcon = () => <Icon iconName="Lock" />;
const EditIcon = () => <Icon iconName="Edit" />;
const DeleteIcon = () => <Icon iconName="Delete" />;

export default class DatosUsuarioss extends React.Component {
  public render() {
    return (

      <ul className={styles.DatosUsuarios}>

        {/* User 1 */}
        <li className={styles.DatosUsuarios_Usuario}>
          <div className={styles.DatosUsuarios_Usuario_Name}>
            Nombre del Usuario
          </div>
          <ul className={styles.DatosUsuarios_Usuario_Acciones}>
            <li className={styles.DatosUsuarios_Usuario_Acciones_Icon}>
              <a href="#" className={styles.DatosUsuarios_Usuario_Acciones_Icon_Trash} data-toggle="modal" data-target="#modalEliminarUsuario">
                <DeleteIcon />
              </a>
            </li>
            <li className={styles.DatosUsuarios_Usuario_Acciones_Icon}>
              <a href="#" className={styles.DatosUsuarios_Usuario_Acciones_Icon_Edit} data-toggle="modal" data-target="#modalEditarUsuario">
                <EditIcon />
              </a>
            </li>
          </ul>
          <span className={styles.DatosUsuarios_Usuario_Linea}></span>
          <div className={styles.DatosUsuarios_Usuario_Mail}>
            <span className={styles.DatosUsuarios_Usuario_Mail_Icon}>
              <MailIcon />
            </span>
            <span className={styles.DatosUsuarios_Usuario_Mail_Text}>
              mail@usuario.com
            </span>
          </div>
          <div className={styles.DatosUsuarios_Usuario_Pass}>
            <span className={styles.DatosUsuarios_Usuario_Pass_Icon}>
              <LockIcon />
            </span>
            <span className={styles.DatosUsuarios_Usuario_Pass_Text}>
              pass1234
            </span>
          </div>
        </li>

        {/* User 2 */}
        <li className={styles.DatosUsuarios_Usuario}>
          <div className={styles.DatosUsuarios_Usuario_Name}>
            Nombre del Usuario
          </div>
          <ul className={styles.DatosUsuarios_Usuario_Acciones}>
            <li className={styles.DatosUsuarios_Usuario_Acciones_Icon}>
              <a href="#" className={styles.DatosUsuarios_Usuario_Acciones_Icon_Trash} data-toggle="modal" data-target="#modalEliminarUsuario">
                <DeleteIcon />
              </a>
            </li>
            <li className={styles.DatosUsuarios_Usuario_Acciones_Icon}>
              <a href="#" className={styles.DatosUsuarios_Usuario_Acciones_Icon_Edit} data-toggle="modal" data-target="#modalEditarUsuario">
                <EditIcon />
              </a>
            </li>
          </ul>
          <span className={styles.DatosUsuarios_Usuario_Linea}></span>
          <div className={styles.DatosUsuarios_Usuario_Mail}>
            <span className={styles.DatosUsuarios_Usuario_Mail_Icon}>
              <MailIcon />
            </span>
            <span className={styles.DatosUsuarios_Usuario_Mail_Text}>
              mail@usuario.com
            </span>
          </div>
          <div className={styles.DatosUsuarios_Usuario_Pass}>
            <span className={styles.DatosUsuarios_Usuario_Pass_Icon}>
              <LockIcon />
            </span>
            <span className={styles.DatosUsuarios_Usuario_Pass_Text}>
              pass1234
            </span>
          </div>
        </li>

        {/* User 3 */}
        <li className={styles.DatosUsuarios_Usuario}>
          <div className={styles.DatosUsuarios_Usuario_Name}>
            Nombre del Usuario
          </div>
          <ul className={styles.DatosUsuarios_Usuario_Acciones}>
            <li className={styles.DatosUsuarios_Usuario_Acciones_Icon}>
              <a href="#" className={styles.DatosUsuarios_Usuario_Acciones_Icon_Trash} data-toggle="modal" data-target="#modalEliminarUsuario">
                <DeleteIcon />
              </a>
            </li>
            <li className={styles.DatosUsuarios_Usuario_Acciones_Icon}>
              <a href="#" className={styles.DatosUsuarios_Usuario_Acciones_Icon_Edit} data-toggle="modal" data-target="#modalEditarUsuario">
                <EditIcon />
              </a>
            </li>
          </ul>
          <span className={styles.DatosUsuarios_Usuario_Linea}></span>
          <div className={styles.DatosUsuarios_Usuario_Mail}>
            <span className={styles.DatosUsuarios_Usuario_Mail_Icon}>
              <MailIcon />
            </span>
            <span className={styles.DatosUsuarios_Usuario_Mail_Text}>
              mail@usuario.com
            </span>
          </div>
          <div className={styles.DatosUsuarios_Usuario_Pass}>
            <span className={styles.DatosUsuarios_Usuario_Pass_Icon}>
              <LockIcon />
            </span>
            <span className={styles.DatosUsuarios_Usuario_Pass_Text}>
              pass1234
            </span>
          </div>
        </li>

        {/* User 4 */}
        <li className={styles.DatosUsuarios_Usuario}>
          <div className={styles.DatosUsuarios_Usuario_Name}>
            Nombre del Usuario
          </div>
          <ul className={styles.DatosUsuarios_Usuario_Acciones}>
            <li className={styles.DatosUsuarios_Usuario_Acciones_Icon}>
              <a href="#" className={styles.DatosUsuarios_Usuario_Acciones_Icon_Trash} data-toggle="modal" data-target="#modalEliminarUsuario">
                <DeleteIcon />
              </a>
            </li>
            <li className={styles.DatosUsuarios_Usuario_Acciones_Icon}>
              <a href="#" className={styles.DatosUsuarios_Usuario_Acciones_Icon_Edit} data-toggle="modal" data-target="#modalEditarUsuario">
                <EditIcon />
              </a>
            </li>
          </ul>
          <span className={styles.DatosUsuarios_Usuario_Linea}></span>
          <div className={styles.DatosUsuarios_Usuario_Mail}>
            <span className={styles.DatosUsuarios_Usuario_Mail_Icon}>
              <MailIcon />
            </span>
            <span className={styles.DatosUsuarios_Usuario_Mail_Text}>
              mail@usuario.com
            </span>
          </div>
          <div className={styles.DatosUsuarios_Usuario_Pass}>
            <span className={styles.DatosUsuarios_Usuario_Pass_Icon}>
              <LockIcon />
            </span>
            <span className={styles.DatosUsuarios_Usuario_Pass_Text}>
              pass1234
            </span>
          </div>
        </li>

        {/* User 5 */}
        <li className={styles.DatosUsuarios_Usuario}>
          <div className={styles.DatosUsuarios_Usuario_Name}>
            Nombre del Usuario
          </div>
          <ul className={styles.DatosUsuarios_Usuario_Acciones}>
            <li className={styles.DatosUsuarios_Usuario_Acciones_Icon}>
              <a href="#" className={styles.DatosUsuarios_Usuario_Acciones_Icon_Trash} data-toggle="modal" data-target="#modalEliminarUsuario">
                <DeleteIcon />
              </a>
            </li>
            <li className={styles.DatosUsuarios_Usuario_Acciones_Icon}>
              <a href="#" className={styles.DatosUsuarios_Usuario_Acciones_Icon_Edit} data-toggle="modal" data-target="#modalEditarUsuario">
                <EditIcon />
              </a>
            </li>
          </ul>
          <span className={styles.DatosUsuarios_Usuario_Linea}></span>
          <div className={styles.DatosUsuarios_Usuario_Mail}>
            <span className={styles.DatosUsuarios_Usuario_Mail_Icon}>
              <MailIcon />
            </span>
            <span className={styles.DatosUsuarios_Usuario_Mail_Text}>
              mail@usuario.com
            </span>
          </div>
          <div className={styles.DatosUsuarios_Usuario_Pass}>
            <span className={styles.DatosUsuarios_Usuario_Pass_Icon}>
              <LockIcon />
            </span>
            <span className={styles.DatosUsuarios_Usuario_Pass_Text}>
              pass1234
            </span>
          </div>
        </li>

      </ul>

    );
  }
}
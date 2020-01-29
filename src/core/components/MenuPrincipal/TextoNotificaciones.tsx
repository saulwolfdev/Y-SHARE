import * as React from 'react';
import styles from './TextoNotificaciones.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

// Iconos
const GlobalNavButton = () => <Icon iconName="GlobalNavButton" />;

export default class TextoNotificaciones extends React.Component {
  public render() {
    return (
      <section className={styles.BodyNotificaciones}>
        <div className={styles.BodyNotificaciones_Header}>
          <div className={styles.BodyNotificaciones_Header_Titulo}>
            Notificaciones
          </div>
          <div className={styles.BodyNotificaciones_Header_Accion}>
            Marcar todas como leídas
          </div>
        </div>
        <ul className={styles.BodyNotificaciones_ContenedorNotificaciones}>
          {/* Notificacion */}
          <li className={styles.BodyNotificaciones_ContenedorNotificaciones_Notificacion}>
            <div className={styles.BodyNotificaciones_ContenedorNotificaciones_Notificacion_Titulo}>
              Título de notificación
              </div>
            <div className={styles.BodyNotificaciones_ContenedorNotificaciones_Notificacion_Fecha}>
              16/12/2018 10:55hs
              </div>
            <div className={styles.BodyNotificaciones_ContenedorNotificaciones_Notificacion_DescripcionCorta}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra massa in lectus auctor, integer viverra massa in lectus auctor.
              </div>
            <div className={styles.BodyNotificaciones_ContenedorNotificaciones_Notificacion_Link}>
              Leer más
            </div>
          </li>
          {/* Notificacion */}
          <li className={styles.BodyNotificaciones_ContenedorNotificaciones_Notificacion}>
            <div className={styles.BodyNotificaciones_ContenedorNotificaciones_Notificacion_Titulo}>
              Título de notificación
              </div>
            <div className={styles.BodyNotificaciones_ContenedorNotificaciones_Notificacion_Fecha}>
              16/12/2018 10:55hs
              </div>
            <div className={styles.BodyNotificaciones_ContenedorNotificaciones_Notificacion_DescripcionCorta}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra massa in lectus auctor, integer viverra massa in lectus auctor.
              </div>
            <div className={styles.BodyNotificaciones_ContenedorNotificaciones_Notificacion_Link}>
              Leer más
            </div>
          </li>
          {/* Notificacion */}
          <li className={styles.BodyNotificaciones_ContenedorNotificaciones_Notificacion}>
            <div className={styles.BodyNotificaciones_ContenedorNotificaciones_Notificacion_Titulo}>
              Título de notificación
              </div>
            <div className={styles.BodyNotificaciones_ContenedorNotificaciones_Notificacion_Fecha}>
              16/12/2018 10:55hs
              </div>
            <div className={styles.BodyNotificaciones_ContenedorNotificaciones_Notificacion_DescripcionCorta}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra massa in lectus auctor, integer viverra massa in lectus auctor.
              </div>
            <div className={styles.BodyNotificaciones_ContenedorNotificaciones_Notificacion_Link}>
              Leer más
            </div>
          </li>
        </ul>
      </section >
    );
  }
}
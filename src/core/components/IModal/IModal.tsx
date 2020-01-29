import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import styles from "./IModal.module.scss";
import { IItems } from "../../entidades/IItems";
import Tags from "../../components/Tags/Tags";
import { PrimaryButton_Descargar } from '../FormButton/FormButton';
import { DefaultButton_AgregarAlZip } from '../FormButton/FormButton';
import uuid from 'react-uuid';
export interface ModalProps {
  modal: IItems;
}

export interface ModalState {

}

class IModal extends React.Component<ModalProps, any> {
  constructor(props: ModalProps) {
    super(props);
    // this.state = { :  };
  }

  public render() {
    const { img,id, title, category, company, size, type, tags } = this.props.modal;
    return (
      <div key={uuid()} className={styles.IModal}>
        <div className={styles.IModal_ContenedorImagen} style={{ backgroundImage: `url(${img})` }}></div>
        <div className={styles.IModal_ContenedorDescripcion}>
          <div className={styles.IModal_ContenedorDescripcion_NombreArchivo}>{title}</div>
          <ul className={styles.IModal_ContenedorDescripcion_TagContent}>
            <li className={styles.IModal_ContenedorDescripcion_TagContent_Tag + ' ' + styles.MediumBlue}>{company}</li>
            <li className={styles.IModal_ContenedorDescripcion_TagContent_Tag + ' ' + styles.LightBlue}>{category}</li>
            <li>
              <Tags tags={this.props.modal} />
            </li>
          </ul>
          <div className={styles.IModal_Row}>
            <div className={styles.IModal_ContenedorDescripcion_Info}>
              <div className={styles.IModal_ContenedorDescripcion_Info_Titulo}>
                Extención:
            </div>
              <div className={styles.IModal_ContenedorDescripcion_Info_Texto}>
                {type}
              </div>
            </div>
            <div className={styles.IModal_ContenedorDescripcion_Info}>
              <div className={styles.IModal_ContenedorDescripcion_Info_Titulo}>
                Tamaño
            </div>
              <div className={styles.IModal_ContenedorDescripcion_Info_Texto}>
                {size}
              </div>
            </div>
          </div>
          <div className={styles.IModal_ContenedorDescripcion_Botones}>
            <PrimaryButton_Descargar />
            <DefaultButton_AgregarAlZip />
          </div>
        </div>
      </div>
    );
  }
}

export default IModal;
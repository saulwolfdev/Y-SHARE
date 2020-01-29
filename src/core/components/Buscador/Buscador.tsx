import * as React from 'react';
import styles from './Buscador.module.scss';

// Import components
import {FormInputText_Buscador} from '../FormInputText/FormInputText';
import {PrimaryButton_Buscar} from '../FormButton/FormButton';
import {FormSelect_Marcas} from '../FormSelect/FormSelect';
import {FormSelect_Categorias} from '../FormSelect/FormSelect';
import {FormSelect_SubCategorias} from '../FormSelect/FormSelect';
import {FormSelect_Fechas} from '../FormSelect/FormSelect';

export default class Buscador extends React.Component {
  public render() {
    return (
      <section className={styles.Buscador}>
        <div className={styles.Buscador_Titulo}>Buscar</div>
        <div className={styles.Buscador_RowBuscar}>
          <div className={styles.Buscador_RowBuscar_ColLeft}>
            <FormInputText_Buscador />
          </div>
          <div className={styles.Buscador_RowBuscar_ColRight}>
            <PrimaryButton_Buscar />
          </div>
        </div>
        <div className={styles.Buscador_RowFiltros}>
          <div className={styles.Buscador_RowFiltros_ColLeft}>
            <div className={styles.Buscador_RowFiltros_ColLeft_ColMarcas}>
              <FormSelect_Marcas />
            </div>
            <div className={styles.Buscador_RowFiltros_ColLeft_ColCategorias}>
              <FormSelect_Categorias />
            </div>
            <div className={styles.Buscador_RowFiltros_ColLeft_ColSubCategorias}>
              <FormSelect_SubCategorias />
            </div>
          </div>
          <div className={styles.Buscador_RowFiltros_ColRight}>
            <div className={styles.Buscador_RowFiltros_ColRight_ColTexto}>
              Fecha
              </div>
            <div className={styles.Buscador_RowFiltros_ColRight_ColSelect}>
              <FormSelect_Fechas />
            </div>
          </div>
        </div>
        <div className={styles.Buscador_Bottom}></div>
      </section >
    );
  }
}
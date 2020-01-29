import * as React from 'react';
import styles from './FormButton.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { PrimaryButton, DefaultButton, IIconProps } from 'office-ui-fabric-react';

// Boton Buscar
export const PrimaryButton_Buscar: React.FunctionComponent = () => {
  const searchIcon: IIconProps = { iconName: 'Search' };
  return (
    <PrimaryButton
      text="Buscar"
      iconProps={searchIcon}
      className={styles.FormButton_Primary + ' ' + styles.FormButton_Icon}
    />
  );
};

// Boton Descargar
export const PrimaryButton_Descargar: React.FunctionComponent = () => {
  const downloadIcon: IIconProps = { iconName: 'Download' };
  return (
    <PrimaryButton
      text="Descargar Zip"
      iconProps={downloadIcon}
      className={styles.FormButton_Primary + ' ' + styles.FormButton_Icon}
    />
  );
};

// Boton Crear cuenta
export const PrimaryButton_CrearCuenta: React.FunctionComponent = () => {
  const circlePlusIcon: IIconProps = { iconName: 'CirclePlus' };
  return (
    <PrimaryButton
      text="Crear cuenta"
      iconProps={circlePlusIcon}
      className={styles.FormButton_Primary + ' ' + styles.FormButton_Icon}
    />
  );
};

// Boton Crear usuario
export const PrimaryButton_CrearUsuario: React.FunctionComponent = () => {
  const circlePlusIcon: IIconProps = { iconName: 'CirclePlus' };
  return (
    <PrimaryButton
      text="Crear usuario"
      className={styles.FormButton_Primary}
    />
  );
};

// Boton Crear usuario
export const PrimaryButton_GuardarCambios: React.FunctionComponent = () => {
  return (
    <PrimaryButton
      text="Guardar cambios"
      className={styles.FormButton_Primary}
    />
  );
};

// Boton Log Out
export const PrimaryButtonNbackground_LogOut: React.FunctionComponent = () => {
  return (
    <PrimaryButton
      text="Log out"
      className={styles.FormButton_PrimaryNbackground}
    />
  );
};

// Boton Borrar historial
export const PrimaryButtonNbackground_BorrarHistorial: React.FunctionComponent = () => {
  return (
    <PrimaryButton
      text="Borrar historial"
      className={styles.FormButton_PrimaryNbackground}
    />
  );
};

// Boton Filtro: Ordenar por
export const PrimaryButtonNbackground_OrdenarPor: React.FunctionComponent = () => {
  const SortLinesIcon: IIconProps = { iconName: 'SortLines' };
  return (
    <PrimaryButton
      iconProps={SortLinesIcon}
      className={styles.FormButton_PrimaryNbackground + ' ' + styles.FormButton_IconOnly}
    />
  );
};

// Boton Cambiar email
export const DefaultButton_CambiarEmail: React.FunctionComponent = () => {
  return (
    <DefaultButton
      text="Cambiar email"
      className={styles.FormButton_Default}
    />
  );
};

// Boton Cambiar contraseña
export const DefaultButton_CambiarContrasenia: React.FunctionComponent = () => {
  return (
    <DefaultButton
      text="Cambiar contraseña"
      className={styles.FormButton_Default}
    />
  );
};

// Boton Agregar al Zip
export const DefaultButton_AgregarAlZip: React.FunctionComponent = () => {
  const productIcon: IIconProps = { iconName: 'Product' };
  return (
    <DefaultButton
      text="Agregar al Zip"
      iconProps={productIcon}
      className={styles.FormButton_Default + ' ' + styles.FormButton_Icon}
    />
  );
};

// Boton Primary Home Page
export const DefaultButtonSmall_EditarPerfil: React.FunctionComponent = () => {
  return (
    <DefaultButton
      text="Editar perfil"
      className={styles.FormButton_DefaultButtonHomeSmall}
    />
  );
};

// Boton Default Home Page
export const DefaultButtonSmall_LogOut: React.FunctionComponent = () => {
  return (
    <DefaultButton
      text="Log out"
      className={styles.FormButton_DefaultButtonHomeSmall}
    />
  );
};
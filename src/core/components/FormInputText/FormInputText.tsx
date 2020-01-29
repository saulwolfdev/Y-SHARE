import * as React from 'react';
import styles from './FormInputText.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

// Input Buscador
export const FormInputText_Buscador: React.FunctionComponent = () => {
    return (
        <TextField
            placeholder="Ingresá tu búsqueda"
            label=""
            className={styles.FormInputText}
        />
    );
};

// Input Nombre usuario
export const FormInputText_NombreUsuario: React.FunctionComponent = () => {
    return (
        <TextField
            placeholder="Nombre usuario"
            label=""
            className={styles.FormInputText}
        />
    );
};

// Input Email usuario
export const FormInputText_EmailUsuario: React.FunctionComponent = () => {
    return (
        <TextField
            placeholder="Email usuario"
            label=""
            className={styles.FormInputText}
        />
    );
};

// Input Contraseña
export const FormInputText_Contrasenia: React.FunctionComponent = () => {
    return (
        <TextField
            placeholder="Contraseña"
            label=""
            type="password"
            className={styles.FormInputText}
        />
    );
};

// Input Contraseña actual
export const FormInputText_ContraseniaActual: React.FunctionComponent = () => {
    return (
        <TextField
            placeholder="Contraseña actual"
            label=""
            type="password"
            className={styles.FormInputText}
        />
    );
};

// Input Nueva contraseña
export const FormInputText_ContraseniaNueva: React.FunctionComponent = () => {
    return (
        <TextField
            placeholder="Nueva Contraseña"
            label=""
            type="password"
            className={styles.FormInputText}
        />
    );
};

// Input Confirmar nueva contraseña
export const FormInputText_ContraseniaNuevaConfirmar: React.FunctionComponent = () => {
    return (
        <TextField
            placeholder="Confirmar nueva Contraseña"
            label=""
            type="password"
            className={styles.FormInputText}
        />
    );
};

// Input Nuevo Email
export const FormInputText_NuevoEmail: React.FunctionComponent = () => {
    return (
        <TextField
            placeholder="Nuevo Email"
            label=""
            className={styles.FormInputText}
        />
    );
};

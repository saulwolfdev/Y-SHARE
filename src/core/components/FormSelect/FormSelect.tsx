import * as React from 'react';
import styles from './FormSelect.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

// Select Categorias
export const FormSelect_Categorias: React.FunctionComponent = () => {

    const options: IDropdownOption[] = [
        { key: 'Institucional', text: 'Institucional' },
        { key: 'Eventos', text: 'Eventos' },
        { key: 'Patrocinios', text: 'Patrocinios' },
        { key: 'Inst. Industriales', text: 'Inst. Industriales' },
        { key: 'EESS', text: 'EESS' },
        { key: 'Institucional', text: 'Institucional' },
        { key: 'Eventos', text: 'Eventos' },
        { key: 'Patrocinios', text: 'Patrocinios' },
        { key: 'Inst. Industriales', text: 'Inst. Industriales' },
    ];

    return (
        <Dropdown
            placeholder="Categoría"
            label=""
            options={options}
            className={styles.FormSelect}
        />
    );
};

// Select Fechas
export const FormSelect_Fechas: React.FunctionComponent = () => {

    const options: IDropdownOption[] = [
        { key: 'Últimos 6 meses', text: 'Últimos 6 meses' },
        { key: 'Últimos año', text: 'Últimos año' },
        { key: 'Siempre', text: 'Siempre' }
    ];

    return (
        <Dropdown
            placeholder=""
            label=""
            defaultSelectedKey="Últimos 6 meses"
            options={options}
            className={styles.FormSelect}
        />
    );
};

// Select Marcas
export const FormSelect_Marcas: React.FunctionComponent = () => {

    const options: IDropdownOption[] = [
        { key: 'YPF', text: 'YPF' },
        { key: 'EESS', text: 'EESS' },
        { key: 'FULL', text: 'FULL' },
        { key: 'SC', text: 'SC' },
        { key: 'ENRUTA', text: 'ENRUTA' },
        { key: 'YPF AGRO', text: 'YPF AGRO' },
        { key: 'INFINIA', text: 'INFINIA' },
        { key: 'BOXES', text: 'BOXES' },
        { key: 'ELAION', text: 'ELAION' },
        { key: 'FILLER', text: 'FILLER' },
        { key: 'YPF LUZ', text: 'YPF LUZ' },
        { key: 'YTEC', text: 'YTEC' },
        { key: 'FYPF', text: 'FYPF' }
    ];

    return (
        <Dropdown
            placeholder="Marca"
            label=""
            options={options}
            className={styles.FormSelect}
        />
    );
};

// Select Subcategorias
export const FormSelect_SubCategorias: React.FunctionComponent = () => {

    const options: IDropdownOption[] = [
        { key: 'Banners', text: 'Banners' },
        { key: 'Brandbook', text: 'Brandbook' },
        { key: 'Calcos', text: 'Calcos' },
        { key: 'Colores', text: 'Colores' },
        { key: 'Etiquetas', text: 'Etiquetas' },
        { key: 'Invitaciones', text: 'Invitaciones' }
    ];

    return (
        <Dropdown
            placeholder="Subcategoría"
            label=""
            options={options}
            className={styles.FormSelect}
        />
    );
};
import * as React from 'react';
import { Component,Fragment } from 'react';
import styles from './Marcas.module.scss';
import { IMarcasProps } from './IMarcasProps';
import {IItems} from "../../../core/entidades/IItems";
import Results from "./Results/Results";
export default class Marcas extends React.Component<IMarcasProps, {}> {
  public render(): React.ReactElement<IMarcasProps> {
    return (
		<Fragment>
				<h1>RESULTADOS</h1>
				{/* <Results /> */}
		</Fragment>
    );
  }
}

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { Dialog, DialogType } from 'office-ui-fabric-react/lib/Dialog';
import { getId } from 'office-ui-fabric-react/lib/Utilities';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import IModal from "../../../core/components/IModal/IModal";
import styles from "./Item.module.scss";
import { IItems } from "../../entidades/IItems";
import PinNews from '../PinNews/PinNews';
import uuid from 'react-uuid';
export interface ItemProps {
	item: IItems;
}
export interface ItemState {
	hideDialog: boolean;
}
const DownloadIcon = () => <Icon iconName="Download" className="ItemDescarga_Caption_Download_Ico" />;
export class Item extends React.Component<ItemProps, ItemState> {
	constructor(props) {
		super(props);
		this.imageOjo = require("../../../img/ItemsDescargas/icon-ver.svg");
		this.noImg = require("../../../img/ItemsDescargas/noImg.svg");
		this.state = {
			hideDialog: true,
		};

	}
	private imageOjo: string;
	private noImg: string;
	private _showDialog = (): void => {
		this.setState({ hideDialog: false });
	}

	private _closeDialog = (): void => {
		this.setState({ hideDialog: true });
	}
	public render() {
		const { hideDialog } = this.state;
		const { title, size, company, news, type, date, category, img,id } = this.props.item;
		let imgCharge = (img === '') ? <img className={styles.ItemDescarga_FigureContent_Image_NoFotos} src={this.noImg} alt={title} /> : <img className={styles.ItemDescarga_FigureContent_Image_Fotos} src={img} alt={title} />;
		return (
			<div >
				<article key={uuid()} onClick={this._showDialog} className={styles.ItemDescarga}>
					<div className={styles.ItemDescarga_FigureContent}>
						<div className={styles.ItemDescarga_FigureContent_Details}>
							<PinNews news={news} />
							<div className={styles.ItemDescarga_FigureContent_Details_Peso}>
								<p className={styles.ItemDescarga_FigureContent_Details_Peso_Parrafo}><span className={styles.ItemDescarga_FigureContent_Details_Peso_Barra}></span>{type}</p>
							</div>
						</div>
						<a href="#" className={styles.ItemDescarga_FigureContent_Image} type="button" data-toggle="modal" data-target="#modalDescargas">
							{imgCharge}
							<div className={styles.ItemDescarga_FigureContent_Image_Botones} style={{ backgroundImage: `url(${this.imageOjo})` }}></div>
						</a>
					</div>
					<div className={styles.ItemDescarga_Caption}>
						<span className={styles.ItemDescarga_Caption_New}>
							<PinNews news={news} />
						</span>
						<span className={styles.ItemDescarga_Caption_Formato}>{type}</span>
						<h3 className={styles.ItemDescarga_Caption_Title}>{title}</h3>
						<a href="#" className={styles.ItemDescarga_Caption_Download} data-toggle="modal" data-target="#modalDescargas">
							<DownloadIcon />
						</a>
						<p className={styles.ItemDescarga_Caption_Peso}>Tamaño: {size}</p>
						<p className={styles.ItemDescarga_Caption_Fecha}>{date.toLocaleDateString('es-AR')} - {date.toLocaleTimeString('es-AR')}</p>
						<ul className={styles.ItemDescarga_Caption_TagContent}>
							<li className={styles.ItemDescarga_Caption_TagContent_Tag + ' ' + styles.ItemDescarga_Caption_TagContent_Tag_DarkGrey}>
								{company}
							</li>
							<li className={styles.ItemDescarga_Caption_TagContent_Tag + ' ' + styles.ItemDescarga_Caption_TagContent_Tag_LightBlue}>
								{category}
							</li>
						</ul>
					</div>
				</article>
				<Dialog
					hidden={hideDialog}
					onDismiss={this._closeDialog}
					dialogContentProps={{
						type: DialogType.normal,
					}}
					modalProps={{
						isBlocking: false,
						className:styles.DialogDetalleArchivo
					}}
					className={styles.DialogDetalleArchivo}>
					<IModal key={uuid()} modal={this.props.item} />
				</Dialog>
			</div>
		);
	}
}

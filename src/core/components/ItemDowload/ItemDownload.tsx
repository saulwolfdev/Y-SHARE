import * as React from "react";
import styles from "./ItemDownload.module.scss";
import { IItems } from "../../entidades/IItems";
import { escape } from '@microsoft/sp-lodash-subset';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Dialog, DialogType } from 'office-ui-fabric-react/lib/Dialog';
import { getId } from 'office-ui-fabric-react/lib/Utilities';
import IModal from "../IModal/IModal";
export interface ItemDownloadProps {
	item: IItems;
}

export interface ItemDownloadState {
hideDialog: boolean;
}
const ChevronRightIcon = () => <Icon iconName="ChevronRightMed" className={styles.ItemDescarga_Caption_Download_Ico} />;
class ItemDownload extends React.Component<ItemDownloadProps, ItemDownloadState> {
	constructor(props: ItemDownloadProps) {
		super(props);
		this.state = {
			hideDialog: true,
		};
	}
	private _showDialog = (): void => {
		this.setState({ hideDialog: false });
	}

	private _closeDialog = (): void => {
		this.setState({ hideDialog: true });
	}
	public render() {
		const { hideDialog } = this.state;
		const { type, date, title } = this.props.item;
		return (
			<div>
				<article className={styles.ItemDescarga} onClick={this._showDialog}>
					<div className={styles.ItemDescarga_Caption}>
						<span className={styles.ItemDescarga_Caption_Formato}>{type}</span>
						<h3 className={styles.ItemDescarga_Caption_Title}>{title}</h3>
						<span className={styles.ItemDescarga_Caption_Download}>
							<ChevronRightIcon />
						</span>
						<p className={styles.ItemDescarga_Caption_Fecha}>{date.toLocaleDateString('es-AR')} - {date.toLocaleTimeString('es-AR')}</p>
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
					<IModal modal={this.props.item}/>
				</Dialog>
			</div>
		);
	}
}

export default ItemDownload;
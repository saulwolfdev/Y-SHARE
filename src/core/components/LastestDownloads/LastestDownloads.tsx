import * as React from 'react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Dialog, DialogType } from 'office-ui-fabric-react/lib/Dialog';
import { getId } from 'office-ui-fabric-react/lib/Utilities';
import {IItems} from "../../entidades/IItems";
import styles from "./LastestDownloads.module.scss";
import ItemDownload from '../ItemDowload/ItemDownload';
export interface LastestDowloadsProps {
	itemDownloads:IItems[];
}
 
export interface LastestDowloadsState {
	
}
 
class LastestDowloads extends React.Component<LastestDowloadsProps, LastestDowloadsState> {
	constructor(props: LastestDowloadsProps) {
		super(props);
		this.state = {};
	}
	public render() { 
		return ( 
		<div className={styles.UltimasDescargas}>
			<div className={styles.UltimasDescargas_Titulo}>Tus últimas descargas</div>
				{this.props.itemDownloads.map(item=><div key={"Items"+item.id}><ItemDownload item={item}/></div>)}
		</div>
		 );
	}
}
 
export default LastestDowloads;
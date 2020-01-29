import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Images } from "../../entidades/Images";
import styles from "./ItemImg.module.scss";
export interface ImgItemProps {
	image: Images;
}
export interface ImgItemState {
		
}
export class ImgItem extends React.Component<ImgItemProps, ImgItemState> {
	constructor(props) {
		super(props);

		this.state = {};
	}
	public render() {
		const { company, image } = this.props.image;
		return (
			<div className={styles.Item}>
				<a href="#" className={styles.Item_Hiper}>
						<img className={styles.Item_Hiper_Img} src={image} alt={company} />
				</a>
			</div>
		);
	}
}

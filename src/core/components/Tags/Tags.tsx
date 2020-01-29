import * as React from 'react';
import * as ReactDom from 'react-dom';
import styles from "./Tags.module.scss";
import { IItems } from "../../entidades/IItems";
import uuid from 'react-uuid';
export interface TagsProps {
	tags: IItems;
}

export interface TagsState {

}

class Tags extends React.Component<TagsProps, TagsState> {
	constructor(props: TagsProps) {
		super(props);
	}
	public render() {
		const { tags,id } = this.props.tags;
		return (
			<ul key={uuid()}>
				{tags.map(tag => <li key={uuid()} className={styles.Tags_ContenedorDescripcion_TagContent_Tag + ' ' + styles.LightBlue}>{tag}</li>)}
			</ul>
		);
	}
}

export default Tags;
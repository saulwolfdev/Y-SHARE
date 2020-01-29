import * as React from 'react';
import Swiper from 'react-id-swiper';
import {IItems} from "../../entidades/IItems";
import  'swiper/css/swiper.css';
import {Item} from "../Item/Item";
import styles from "./Items.module.scss";
import uuid from 'react-uuid';
export interface ItemsProps {
	items: IItems[];
}
export interface ItemsState {

}
export default class Items extends React.Component<ItemsProps, ItemsState> {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	public render() {
		 const params = {
				breakpoints: {
					320: {slidesPerView: 1,},
					480: {slidesPerView: 1,},
					640: {slidesPerView: 1,},
					1023: {slidesPerView: 2,},
					1024: {slidesPerView: 3,},
					1366: {slidesPerView: 4,},
				},
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		};
		return (
      <div className={styles.UltimasDescargas}>
        <div className={styles.UltimasDescargas_Titulo}>Tus últimas descargas</div>
				<Swiper {...params}>
				{this.props.items.map(item=>
				<div  key={uuid()}>
					<Item  key={uuid()} item={item}/>
				</div>
				)}
      		</Swiper>
		</div>
		);
	}
}
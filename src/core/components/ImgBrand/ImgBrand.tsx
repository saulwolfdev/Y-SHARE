import * as React from 'react';
import Swiper from 'react-id-swiper';
import  'swiper/css/swiper.css';
import {Images} from "../../entidades/Images";
import {ImgItem} from "../ImgItem/ImgItem";
import { mapEnumByName } from '@uifabric/utilities';
import uuid from 'react-uuid';
export interface ImgBrandProps {
	images: Images[];
}
export interface ImgBrandState {

}
export default class ImgBrand extends React.Component<ImgBrandProps, ImgBrandState> {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	public render() {
			const data= this.props.images;
			console.log(data);
		 const params = {
				breakpoints: {
					320: {slidesPerView: 2,
						spaceBetween:10,
					},
					480: {slidesPerView: 2,
						spaceBetween:10,
					},
					640: {slidesPerView: 4,
						spaceBetween:10,
					},
					1023: {slidesPerView: 5,
					spaceBetween:10,
					},
					1024: {slidesPerView: 5,
					spaceBetween:10,
					},
					1366: {slidesPerView: 6,
					spaceBetween:10,
					},
				},
			 spaceBetween: 20,
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
		<Swiper {...params}>
				{this.props.images.map(image=>
				<div key={uuid()}>
					<ImgItem key={uuid()} image={image}/>
				</div>
				)}
      </Swiper>
		);
	}
}
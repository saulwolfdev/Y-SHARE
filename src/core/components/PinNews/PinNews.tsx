import * as React from 'react';
import styles from "./PinNews.module.scss";
interface PinNewsProps {
	news:boolean;
}
 
interface PinNewsState {
	
}
 
class PinNews extends React.Component<PinNewsProps, PinNewsState> {
	constructor(props: PinNewsProps) {
		super(props);
		this.state = {};
	}		
	public render() {
			let pinNew=<span></span>;
			if(this.props.news){
				pinNew=<span className={styles.ItemDescarga_FigureContent_Details_New}>new</span>;
			}
		return ( 
			<div>
				{pinNew}
			</div>

		 );
	}
}
 
export default PinNews;
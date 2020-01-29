import styles from './Home.module.scss';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { IHomeProps } from './IHomeProps';
import {IItems} from "../../../core/entidades/IItems";
import LastestDownloads from "../../../core/components/LastestDownloads/LastestDownloads";
import {Images} from "../../../core/entidades/Images";
import Items from "../../../core/components/Items/Items";
import ImgBrand from "../../../core/components/ImgBrand/ImgBrand";
import UltimasDescargas from '../../../core/components/UltimasDescargas/UltimasDescargas';
import Footer from '../../../core/components/Footer/Footer';
import { BannerPrincipal_Home } from '../../../core/components/BannerPrincipal/BannerPrincipal';
import Menu from '../../../core/components/Menu/Menu';
import Util from "../../../core/utils/Util";

export interface IHometsState {
	// items:IItems[];
	 items: Array<IItems>;
	 images:Array<Images>;
}
export default class Home extends React.Component<IHomeProps,IHometsState> {
	constructor(props) {
		super(props);
		this.state = {
			items:[],
			images:[]
		};
	}

//   changeCategorie=(e)=>{
//       e.preventDefault()
//       this.setState({
//           categoria:e.target.value
//       },()=>{
//            this.props.requestNews(this.state.categoria);
//       });
     
//   }

public componentWillMount(){
		let items = Util.GetItems();
		let images = Util.GetImages();
		this.setState(
			{
				items:items,
				images:images
			
			}
			);
}

  public render(): React.ReactElement<IHomeProps> {
    return (
	<div className={styles.Home}>
		<BannerPrincipal_Home/>
		<Menu/>
        <div className={styles.Home_Container}>
				
				<ImgBrand images={this.state.images}/>
		 		<Items items={this.state.items}/>
				<LastestDownloads itemDownloads={this.state.items}/>
				
        </div>
		<Footer/>
      </div>
    );
  }
}

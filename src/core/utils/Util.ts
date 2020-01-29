import { IItems } from "../../core/entidades/IItems";
import { Images } from "../../core/entidades/Images";
import uuid from 'react-uuid';
export default class Util{
	 public static GetItems():IItems[]{
	return [
	{id:uuid(),
	title:"Banner institucional",type:"PSD",category:"institucional",
	company:"YPF",img:"",news:true,size:"20.40MB",date:new Date(),tags:["banner","flyer","logo","poster"]},
	{id:uuid(),title:"Sistema de identidad 2020",type:"SVG",category:"institucional",company:"EESS",img:"http://www.dhnn.com/wip/ypf/site/images/seccion/home-actualizacion-02.jpg",news:true,size:"30MB",date:new Date(),tags:["banner","flyer","logo","poster"]},
	{id:uuid(),title:"Newsletters",type:"JPG",category:"institucional",company:"ENRUTA",img:"http://www.dhnn.com/wip/ypf/site/images/seccion/home-actualizacion-03.jpg",news:false,size:"20.40MB",date:new Date(),tags:["banner","flyer","logo","poster"]},
	{id:uuid(),title:"Animaciones de identidad de marca",type:"PNG",category:"institucional",company:"INFINIA",img:"http://www.dhnn.com/wip/ypf/site/images/seccion/home-actualizacion-05.jpg",news:false,size:"10MB",date:new Date(),tags:["banner","flyer","logo","poster"]},
	{id:uuid(),title:"Sistema de Signos version 01",type:"AI",category:"institucional",company:"BOXES",img:"http://www.dhnn.com/wip/ypf/site/images/seccion/home-actualizacion-05.jpg",news:true,size:"220.20MB",date:new Date(),tags:["banner","flyer","logo","poster"]},
	{id:uuid(),title:"Mockups app Mobile",type:"PSD",category:"institucional",company:"ELAION",img:"http://www.dhnn.com/wip/ypf/site/images/seccion/home-actualizacion-03.jpg",news:false,size:"30mb",date:new Date(),tags:["logo"]},
	{id:uuid(),title:"Wireframe primera version",type:"AVI",category:"institucional",company:"FILLER",img:"http://www.dhnn.com/wip/ypf/site/images/seccion/home-actualizacion-01.jpg",news:false,size:"390.10MB",date:new Date(),tags:["revista","branding"]},
	{id:uuid(),title:"Branding tv",type:"MP4",category:"institucional",company:"YTEC",img:"http://www.dhnn.com/wip/ypf/site/images/seccion/home-actualizacion-02.jpg",news:true,size:"110MB",date:new Date(),tags:["banner","flyer","logo"]}
	  
  ];
}
public static GetImages():Images[]{
return [
	{id:uuid(),company:"YPF",image:"http://www.dhnn.com/wip/ypf/site/images/seccion/marcas/01-ypf.jpg"},
	{id:uuid(),company:"Y-LUZ",image:"http://www.dhnn.com/wip/ypf/site/images/seccion/marcas/02-ypf_luz.jpg"},
	{id:uuid(),company:"F-YPF",image:"http://www.dhnn.com/wip/ypf/site/images/seccion/marcas/03-fypf.jpg"},
	{id:uuid(),company:"EESS",image:"http://www.dhnn.com/wip/ypf/site/images/seccion/marcas/04_eess.jpg"},
	{id:uuid(),company:"INFINIA",image:"http://www.dhnn.com/wip/ypf/site/images/seccion/marcas/05-infinia.jpg"},
	{id:uuid(),company:"BOXES",image:"http://www.dhnn.com/wip/ypf/site/images/seccion/marcas/06-boxes.jpg"},
	{id:uuid(),company:"ELAION",image:"http://www.dhnn.com/wip/ypf/site/images/seccion/marcas/07-elaion.jpg"},
	{id:uuid(),company:"SERVICLUB",image:"http://www.dhnn.com/wip/ypf/site/images/seccion/marcas/08-serviclub.jpg"},
	{id:uuid(),company:"FILLER",image:"http://www.dhnn.com/wip/ypf/site/images/seccion/marcas/09-filler.jpg"},
	{id:uuid(),company:"Y-FULL",image:"http://www.dhnn.com/wip/ypf/site/images/seccion/marcas/10-full.jpg"},
	{id:uuid(),company:"ENRUTA",image:"http://www.dhnn.com/wip/ypf/site/images/seccion/marcas/11-enruta.jpg"},
	{id:uuid(),company:"Y-AGRO",image:"http://www.dhnn.com/wip/ypf/site/images/seccion/marcas/12-ypfagro.jpg"},
	{id:uuid(),company:"Y-TEC",image:"http://www.dhnn.com/wip/ypf/site/images/seccion/marcas/13-y-tec.jpg"},
	{id:uuid(),company:"OTRAS",image:"http://www.dhnn.com/wip/ypf/site/images/seccion/marcas/14-otras.jpg"}
  ];

}
}
import * as React from 'react';
import { Component,Fragment } from 'react';
import {IItems} from "../../../../core/entidades/IItems";

export interface ResultsProps {
	items:IItems[];
}
 
export interface ResultsState {
	
}
 
class Results extends React.Component<ResultsProps, ResultsState> {
	constructor(props: ResultsProps) {
		super(props);
		this.state = {

		};
	}
	public render() { 
		return (
		<Fragment>
				<h1>RESULT</h1>
				
		</Fragment>);
	}
}
 
export default Results;
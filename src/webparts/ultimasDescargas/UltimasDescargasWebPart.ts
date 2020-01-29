import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'UltimasDescargasWebPartStrings';
import UltimasDescargas from './components/UltimasDescargas';
import { IUltimasDescargasProps } from './components/IUltimasDescargasProps';
import '../../core/css/fix.css';
export interface IUltimasDescargasWebPartProps {
  description: string;
}

export default class UltimasDescargasWebPart extends BaseClientSideWebPart<IUltimasDescargasWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IUltimasDescargasProps > = React.createElement(
      UltimasDescargas,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

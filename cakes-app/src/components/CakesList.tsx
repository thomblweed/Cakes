import * as React from 'react';
import { FocusZone } from 'office-ui-fabric-react/lib/FocusZone';
import { List } from 'office-ui-fabric-react/lib/List';
import { CakesListProps } from '../AppProps';

export default class CakesList extends React.Component<CakesListProps> {
    
    render(): React.ReactElement<CakesListProps> {
      return (
        <FocusZone>
          <List
            items={this.props.cakes}
            onRenderCell={this.onRenderCell}          
          />
        </FocusZone>
      );
    }

    private onRenderCell(item: any, index: number | undefined): JSX.Element {
      return (
        <div
          className="ms-ListGridExample-tile"
          data-is-focusable={true}          
        >
          <div className="ms-ListGridExample-sizer">
            <div className="msListGridExample-padder">
              <img src={item.imageUrl} className="ms-ListGridExample-image" />
              <span className="ms-ListGridExample-label">
                {item.name}
              </span>
            </div>
          </div>
        </div>
      );
    }
  }
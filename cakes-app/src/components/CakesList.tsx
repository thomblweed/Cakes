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
          />
        </FocusZone>
      );
    }
  }
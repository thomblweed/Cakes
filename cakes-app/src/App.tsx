import * as React from 'react';
import { AppProps, AppState, Cake } from './AppProps';
import CakesList from './components/CakesList';
import './App.css';

export default class App extends React.Component<AppProps, AppState> {
  // variables
  private getUrl: string = 'http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes';

  constructor(props: AppProps) {
    super(props);

    this.state = {
      cakes: []
    };
  }

  public componentDidMount(): void {
    this.getCakes();
  }

  render(): React.ReactElement<AppProps> {
    return (      
      this.state && this.state.cakes && (
        <CakesList
          cakes={this.state.cakes}
        />
      )
    );
  }

  private getCakes(): void {
    fetch(this.getUrl).then(response => {
      return response.json();      
    }).then(responseJson => {
      const cakesResult: Cake[] = responseJson;
      this.setState({ cakes: cakesResult });
    }).catch(error => {
      // console.log("Error with getCakes:", error.message);
    });
  }
}
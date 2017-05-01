import React from 'react';
import axios from 'axios';

class FrontPage extends React.Component { 
  constructor() {
    super();
    this.state = {
      networkList: [],
      devicesList: [],
      counter: 0,
      showProgress: false,
    };
    this.fetchNetworkInfo = this.fetchNetworkInfo.bind(this);
    this.getDevices = this.getDevices.bind(this);
    this.showProgress = this.showProgress.bind(this);
  }

  fetchNetworkInfo() {    
    const orgId = 438518;
    const networks = axios.get(`https://n155.meraki.com/api/v0/organizations/${orgId}/networks`, {     
      headers: {
        'X-Cisco-Meraki-API-Key': 'null',
      },
    }).then((response) => {
      this.setState({ networkList: response.data });
    }); 
  }

  getDevices() {
    axios.get(`https://n155.meraki.com/api/v0/networks/${this.state.networkList[this.state.counter].id}/devices`, {     
      headers: {
        'X-Cisco-Meraki-API-Key': 'null',      
      },
    }).then((response) => {       
      const mxDevice = response.data.filter((device) => {       
        /* Only return devices that have wan1Ip or Wan2Ip's as MX devices */
        return (device.model && device.model.indexOf('MX') !== -1);                
      });
      let devicesList = this.state.devicesList;
      let counter = this.state.counter;
      devicesList.push(mxDevice);
      counter++;
      this.setState({ devicesList: devicesList, counter: counter });
    });
  }
  showProgress() {
    console.log(this.state.devicesList);
    this.setState({ showProgress: true });
  }
  render() {
    const prettyData = this.state.devicesList.map((site) => {
      site.map((device) => {
        return (
          `<div>
            <h5>${device.name}</h5>
            <p>${device.wan1Ip}</p>
            <p>${device.wan2Ip}</p>
          </div>`
        );
      });
    });
    return (
        <div>
            <button onClick={this.fetchNetworkInfo}>Get Network list!</button>
            <button onClick={this.getDevices}>Push MX Devices!</button>
            <button onClick={this.showProgress}>Summarize in console</button>
            <div>{this.state.showProgress ? prettyData : '' }</div>
        </div>
    );
  }
}

export default FrontPage;

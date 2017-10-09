import React from 'react';
import RestaurantLogoBanner from './RestaurantLogoBanner.jsx';
import CustomerInfoForm from './CustomerInfoForm.jsx';
import QueueInfo from './QueueInfo.jsx';
import RestaurantInformation from './RestaurantInformation.jsx';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';

class SelectedRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.customerInfoSubmitted = this.customerInfoSubmitted.bind(this);
    this.state = {
      currentRestaurant: {queues: []},
      infoSubmitted: false,
      queueId: 0,
      queuePosition: 0,
      ready: false
    };
    this.socket = io();
  }

  componentDidMount() {
    this.getRestaurant();
  }

  getRestaurant() {
    let windowUrl = window.location.href;
    let id = windowUrl.slice(-1);

    $.ajax({
      method: 'GET',
      url: `/restaurants?restaurantId=${id}`,
      success: (data) => {
        console.log('successfully grabbed current restaurant data', data);
        this.setState({ currentRestaurant: data });
      },
      failure: (error) => {
        console.log('failed to grab current restaurant data', error);
      }
    });
  }

  customerInfoSubmitted(id, position) {
    this.setState({
      infoSubmitted: true,
      queueId: id,
      queuePosition: position
    });
    // report queueId to server socket
    this.socket.emit('customer report', this.state.queueId);
    
    this.socket.on('noti', (message) => {
      console.log(message);
      this.setState({ ready: true });
    });
  }

  render() {
    const restaurantImg = {
      backgroundImage: `url(../${this.state.currentRestaurant.image})`
    };

       // <CustomerInfoForm currentRestaurantId={this.state.currentRestaurant.id} customerInfoSubmitted={this.customerInfoSubmitted} />
    return (
      <div className="selected-restaurant">
        <RestaurantLogoBanner style={restaurantImg} />
        <RestaurantInformation restaurant={this.state.currentRestaurant}/>
        {this.state.ready 
          ? <h3 className="ready-noti">Your table is ready!</h3>
          : []}
        <CustomerInfoForm customerInfoSubmitted={this.customerInfoSubmitted} />
      </div>
    );
  }
}

export default SelectedRestaurant;
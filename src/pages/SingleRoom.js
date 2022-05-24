import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import StyledHero from '../components/StyledHero';
import { RoomContext } from '../context';
import defaultBcg from '../images/room-1.jpeg';

class SingleRoom extends Component {
  constructor(props){
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }
  
  static contextType = RoomContext;

  // componentDidMount() {}

  render() {
    const {getRoom} = this.context;
    const room = getRoom(this.state.slug);
    if(!room) {
      return <div className="error">
        <h3>no such room could be found...</h3>
        <Link to='/rooms' className="btn-primary">
          back to rooms
        </Link>
      </div>
    }

    const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;

    return (
      <StyledHero img={images[0] || this.state.defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className='btn-primary'>
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
    );
  }
}

export default SingleRoom;
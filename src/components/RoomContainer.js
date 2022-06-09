import React from 'react';
import { withRoomConsumer } from '../context';
import Loading from './Loading';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';

function RooomContainer({context}) {
  const {loading, sortedRooms, rooms} = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RooomContainer)


// The following code is commented for demonstration reasons
// It's correct code

// import React from 'react';
// import { RoomConsumer } from '../context';
// import Loading from './Loading';
// import RoomFilter from './RoomFilter';
// import RoomList from './RoomList';

// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         const {loading, sortedRooms, rooms} = value;
//           if(loading) {
//             return <Loading />;
//           }
//           return (
//             <div>
//               Hello from Rooms Container
//               <RoomFilter rooms={rooms} />
//               <RoomList rooms={sortedRooms} />
//             </div>
//           );
//         }
//       }
//     </RoomConsumer>
//   )
// }

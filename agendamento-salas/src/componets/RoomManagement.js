// components/RoomManagement.js
import React, { useState, useEffect } from 'react';
import { useSupabase } from '../contexts/SupabaseContext';

function RoomManagement() {
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState({ name: '', capacity: 0 });
  const { supabase } = useSupabase();

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    const { data, error } = await supabase.from('rooms').select('*');
    if (error) console.error('Error fetching rooms:', error);
    else setRooms(data);
  };

  const addRoom = async () => {
    const { data, error } = await supabase.from('rooms').insert([newRoom]);
    if (error) console.error('Error adding room:', error);
    else {
      setRooms([...rooms, data[0]]);
      setNewRoom({ name: '', capacity: 0 });
    }
  };

  return (
    <div className="room-management">
      <h2>Room Management</h2>
      <div>
        <input
          type="text"
          placeholder="Room Name"
          value={newRoom.name}
          onChange={(e) => setNewRoom({ ...newRoom, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Capacity"
          value={newRoom.capacity}
          onChange={(e) => setNewRoom({ ...newRoom, capacity: parseInt(e.target.value) })}
        />
        <button onClick={addRoom}>Add Room</button>
      </div>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>{room.name} - Capacity: {room.capacity}</li>
        ))}
      </ul>
    </div>
  );
}

export default RoomManagement;
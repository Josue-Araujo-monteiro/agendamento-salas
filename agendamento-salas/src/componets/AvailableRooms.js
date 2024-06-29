// components/AvailableRooms.js
import React, { useState, useEffect } from 'react';
import { useSupabase } from '../contexts/SupabaseContext';

function AvailableRooms() {
  const [availableRooms, setAvailableRooms] = useState([]);
  const { supabase } = useSupabase();

  useEffect(() => {
    fetchAvailableRooms();
  }, []);

  const fetchAvailableRooms = async () => {
    const { data, error } = await supabase
      .from('rooms')
      .select('*')
      .eq('is_available', true);
    if (error) console.error('Error fetching available rooms:', error);
    else setAvailableRooms(data);
  };

  const bookRoom = async (roomId) => {
    // Implement room booking logic here
  };

  return (
    <div className="available-rooms">
      <h2>Available Rooms</h2>
      <ul>
        {availableRooms.map((room) => (
          <li key={room.id}>
            {room.name} - Capacity: {room.capacity}
            <button onClick={() => bookRoom(room.id)}>Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AvailableRooms;
// components/UserProfile.js
import React, { useState, useEffect } from 'react';
import { useSupabase } from '../contexts/SupabaseContext';

function UserProfile() {
  const [user, setUser] = useState(null);
  const { supabase } = useSupabase();

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      {user && (
        <div>
          <p>Email: {user.email}</p>
          <p>Company: {user.user_metadata.company}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
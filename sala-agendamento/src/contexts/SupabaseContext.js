import React, { createContext, useContext, useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Substitua pelos seus valores reais do Supabase
const SUPABASE_URL = 'https://yrsxgpghtqecncdwmxap.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlyc3hncGdodHFlY25jZHdteGFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk2ODc1NDcsImV4cCI6MjAzNTI2MzU0N30.fn7dzxhLYuMycSifE-CLfp0F4h5uONQggdK3diTf_Bg';

const SupabaseContext = createContext();

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const SupabaseProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return (
    <SupabaseContext.Provider value={{ supabase, session }}>
      {children}
    </SupabaseContext.Provider>
  );
};

export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (context === undefined) {
    throw new Error('useSupabase must be used within a SupabaseProvider');
  }
  return context;
};
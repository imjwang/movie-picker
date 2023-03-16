import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://mttywezkcbcxjngmahah.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10dHl3ZXprY2JjeGpuZ21haGFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgwMzkxNDQsImV4cCI6MTk5MzYxNTE0NH0.AfOONUylUbNF8fiLESLrXxeG0WG9V-HKUBpFi-dCGqs",
  {
    realtime: {
      params: {
        eventsPerSecond: 10,
      },
    },
  }
);

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bwsrwwtbqasegtaetkzp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3c3J3d3RicWFzZWd0YWV0a3pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM0MjM2MjMsImV4cCI6MjAwODk5OTYyM30.d3GxOZ_vCEKY0BUdsfLfnXxV6Ez_qSs6_wf-shPmw7I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

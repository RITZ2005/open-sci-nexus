import { createClient } from '@supabase/supabase-js'

// Using public anon key and project URL provided by you
const supabaseUrl = 'https://mikrhsbggtszwjuujjip.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pa3Joc2JnZ3RzendqdXVqamlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2ODEyMTksImV4cCI6MjA3MzI1NzIxOX0.mGe3Nhlq8Cs3Ya_0YEQcnXFsw1VS3G4FypJzPjnpodA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types
export interface User {
  id: string
  email: string
  full_name: string
  avatar_url?: string
  title?: string
  company?: string
  location?: string
  bio?: string
  skills: string[]
  education: any[]
  experience: any[]
  certifications: any[]
  created_at: string
}

export interface Post {
  id: string
  user_id: string
  content: string
  image_url?: string
  likes_count: number
  comments_count: number
  created_at: string
  user: User
}

export interface Connection {
  id: string
  follower_id: string
  following_id: string
  status: 'pending' | 'accepted'
  created_at: string
  follower: User
  following: User
}

export interface Like {
  id: string
  user_id: string
  post_id: string
  created_at: string
}

export interface Comment {
  id: string
  post_id: string
  user_id: string
  content: string
  created_at: string
  user: User
}
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

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
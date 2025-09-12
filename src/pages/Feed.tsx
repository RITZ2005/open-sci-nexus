import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { useAuth } from '@/contexts/AuthContext'
import { supabase, Post, User } from '@/lib/supabase'
import { Heart, MessageCircle, Share2, Send, Camera, Users } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function Feed() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [posts, setPosts] = useState<Post[]>([])
  const [newPost, setNewPost] = useState('')
  const [loading, setLoading] = useState(true)
  const [suggestions, setSuggestions] = useState<User[]>([])

  useEffect(() => {
    if (user) {
      fetchPosts()
      fetchSuggestions()
    }
  }, [user])

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select(`
          *,
          user:users(*)
        `)
        .order('created_at', { ascending: false })
        .limit(20)

      if (error) throw error
      setPosts(data || [])
    } catch (error) {
      console.error('Error fetching posts:', error)
      toast({
        title: "Error",
        description: "Failed to load posts",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const fetchSuggestions = async () => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .neq('id', user?.id)
        .limit(5)

      if (error) throw error
      setSuggestions(data || [])
    } catch (error) {
      console.error('Error fetching suggestions:', error)
    }
  }

  const createPost = async () => {
    if (!newPost.trim() || !user) return

    try {
      const { error } = await supabase
        .from('posts')
        .insert({
          user_id: user.id,
          content: newPost,
          likes_count: 0,
          comments_count: 0,
        })

      if (error) throw error

      setNewPost('')
      fetchPosts()
      toast({
        title: "Success",
        description: "Post created successfully!",
      })
    } catch (error) {
      console.error('Error creating post:', error)
      toast({
        title: "Error",
        description: "Failed to create post",
        variant: "destructive",
      })
    }
  }

  const toggleLike = async (postId: string) => {
    if (!user) return

    try {
      // Check if already liked
      const { data: existingLike } = await supabase
        .from('likes')
        .select('id')
        .eq('post_id', postId)
        .eq('user_id', user.id)
        .single()

      if (existingLike) {
        // Unlike
        await supabase
          .from('likes')
          .delete()
          .eq('post_id', postId)
          .eq('user_id', user.id)

        await supabase.rpc('decrement_likes', { post_id: postId })
      } else {
        // Like
        await supabase
          .from('likes')
          .insert({ post_id: postId, user_id: user.id })

        await supabase.rpc('increment_likes', { post_id: postId })
      }

      fetchPosts()
    } catch (error) {
      console.error('Error toggling like:', error)
    }
  }

  const followUser = async (userId: string) => {
    if (!user) return

    try {
      const { error } = await supabase
        .from('connections')
        .insert({
          follower_id: user.id,
          following_id: userId,
          status: 'accepted'
        })

      if (error) throw error

      toast({
        title: "Success",
        description: "Now following user!",
      })
      fetchSuggestions()
    } catch (error) {
      console.error('Error following user:', error)
      toast({
        title: "Error",
        description: "Failed to follow user",
        variant: "destructive",
      })
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Create Post */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={user?.avatar_url} />
              <AvatarFallback>{user?.full_name?.charAt(0) || 'U'}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{user?.full_name}</h3>
              <p className="text-sm text-muted-foreground">{user?.title}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="What's on your mind?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            rows={3}
          />
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <Camera className="w-4 h-4 mr-2" />
                Photo
              </Button>
            </div>
            <Button onClick={createPost} disabled={!newPost.trim()}>
              <Send className="w-4 h-4 mr-2" />
              Post
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Posts Feed */}
        <div className="lg:col-span-3 space-y-6">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={post.user?.avatar_url} />
                      <AvatarFallback>{post.user?.full_name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold">{post.user?.full_name}</h3>
                      <p className="text-sm text-muted-foreground">{post.user?.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(post.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{post.content}</p>
                  {post.image_url && (
                    <img 
                      src={post.image_url} 
                      alt="Post image" 
                      className="w-full rounded-lg mb-4"
                    />
                  )}
                  <Separator className="my-4" />
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-6">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => toggleLike(post.id)}
                      >
                        <Heart className="w-4 h-4 mr-2" />
                        {post.likes_count}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        {post.comments_count}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Sidebar - People Suggestions */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h3 className="font-semibold flex items-center">
                <Users className="w-4 h-4 mr-2" />
                People you may know
              </h3>
            </CardHeader>
            <CardContent className="space-y-4">
              {suggestions.map((suggestedUser) => (
                <div key={suggestedUser.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={suggestedUser.avatar_url} />
                      <AvatarFallback>{suggestedUser.full_name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{suggestedUser.full_name}</p>
                      <p className="text-xs text-muted-foreground">{suggestedUser.title}</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => followUser(suggestedUser.id)}
                  >
                    Follow
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
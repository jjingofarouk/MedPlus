import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import Badge from './badge.js';
import { MessageCircle, ThumbsUp, Share2, TrendingUp, Users, BarChart, Activity, Users as UsersIcon } from 'lucide-react';
import './Forum.css';

// Component for Doctor Collaboration Hub
const DoctorCollaborationHub = ({ collaborations }) => (
  <div className="space-y-4">
    {collaborations.map(collab => (
      <Card key={collab.id} className="bg-[#dfe4e5]">
        <CardHeader>
          <CardTitle className="text-[#002432]">{collab.title}</CardTitle>
          <CardDescription>{collab.description}</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-[#002432]">
          <p>{collab.details}</p>
        </CardContent>
      </Card>
    ))}
  </div>
);

const ForumThreads = ({ posts }) => (
  <div className="space-y-4">
    {posts.map(post => (
      <Card key={post.id} className="bg-[#dfe4e5]">
        <CardHeader>
          <CardTitle className="text-[#002432]">{post.title}</CardTitle>
          <CardDescription className="flex items-center space-x-2">

            <span>{post.user.username}</span>
            <span>•</span>
            <span>{post.created_at}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-[#002432] space-x-4">
          <span className="flex items-center space-x-1">
            <MessageCircle size={16} />
            <span>{post.replyCount} replies</span>
          </span>
          <span className="flex items-center space-x-1">
            <ThumbsUp size={16} />
            <span>Like</span>
          </span>
          <span className="flex items-center space-x-1">
            <Share2 size={16} />
            <span>Share</span>
          </span>
        </CardContent>
      </Card>
    ))}
  </div>
);

const PopularPosts = ({ posts }) => (
  <div className="space-y-4">
    {posts.map(post => (
      <Card key={post.id} className="bg-[#dfe4e5]">
        <CardHeader>
          <CardTitle className="text-[#002432]">{post.title}</CardTitle>
          <CardDescription>{post.user.username} • {post.created_at}</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-[#002432]">
          <span className="flex items-center space-x-1">
            <TrendingUp size={16} className="text-[#f78837]" />
            <span>Trending</span>
          </span>
        </CardContent>
      </Card>
    ))}
  </div>
);

const UserProfiles = ({ profiles }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {profiles.map(profile => (
      <Card key={profile.id} className="bg-[#dfe4e5]">
        <CardHeader>

          <CardTitle className="text-[#002432]">{profile.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-[#002432]">{profile.bio}</p>
        </CardContent>
      </Card>
    ))}
  </div>
);

const TrendingTags = ({ tags }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((tag, index) => (
      <Badge key={index} variant="secondary" className="bg-[#27c7b8] text-[#002432]">
        #{tag}
      </Badge>
    ))}
  </div>
);

const RecentDiscussions = ({ posts }) => (
  <div className="space-y-4">
    {posts.map(post => (
      <Card key={post.id} className="bg-[#dfe4e5]">
        <CardHeader>
          <CardTitle className="text-[#002432]">{post.title}</CardTitle>
          <CardDescription>{post.user.username} • {post.created_at}</CardDescription>
        </CardHeader>
      </Card>
    ))}
  </div>
);

const ActivityOverview = ({ activities }) => (
  <div className="space-y-4">
    {activities.map(activity => (
      <Card key={activity.id} className="bg-[#dfe4e5]">
        <CardContent className="pt-4">
          <p className="text-sm text-[#002432]">{activity.description}</p>
          <p className="text-xs text-[#002432] mt-1">{new Date(activity.time).toLocaleString()}</p>
        </CardContent>
      </Card>
    ))}
  </div>
);

const ForumPolls = () => (
  <Card className="bg-[#dfe4e5]">
    <CardHeader>
      <CardTitle className="text-[#002432]">Current Poll</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-[#002432]">No active polls at the moment.</p>
    </CardContent>
  </Card>
);

const samplePosts = [
  { id: 1, title: 'Latest Medical Advances', user: { username: 'Dr. Smith' }, created_at: '2024-09-10', replyCount: 5 },
  { id: 2, title: 'COVID-19 Discussion', user: { username: 'Dr. Adams' }, created_at: '2024-09-09', replyCount: 3 },
];

const userProfiles = [
  { id: 1, name: 'Dr. Smith', bio: 'Medical researcher and doctor.', img: 'https://api.dicebear.com/6.x/initials/svg?seed=DrSmith' },
  { id: 2, name: 'Dr. Adams', bio: 'Expert in infectious diseases.', img: 'https://api.dicebear.com/6.x/initials/svg?seed=DrAdams' },
];

const trendingTags = ['COVID-19', 'Medical Research', 'Health Tips', 'Vaccinations'];

const recentActivity = [
  { id: 1, description: 'Dr. Smith started a new discussion on COVID-19.', time: '2024-09-10T12:00:00Z' },
  { id: 2, description: 'Dr. Adams replied to a post on health tips.', time: '2024-09-09T15:30:00Z' },
];

const doctorCollaborations = [
  { id: 1, title: 'Collaborative Research on Vaccines', description: 'Join the ongoing research on new vaccine developments.', details: 'The project involves multiple hospitals and research institutes.' },
  { id: 2, title: 'Case Study Discussions', description: 'Discuss complex cases with other specialists.', details: 'A platform for sharing and analyzing complex case studies.' },
];


const Forum = () => {
  return (
    
    <div className="p-4 bg-[#002432] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-[#dfe4e5]">MedHub Community</h1>
      <Tabs defaultValue="forum-threads" className="w-full">
        <TabsList className="grid w-full grid-cols-5 lg:grid-cols-8 bg-[#27c7b8]">
          <TabsTrigger value="forum-threads" className="data-[state=active]:bg-[#f78837] text-[#002432]">
            <MessageCircle className="w-4 h-4 mr-2" />
            Threads
          </TabsTrigger>
          <TabsTrigger value="popular-posts" className="data-[state=active]:bg-[#f78837] text-[#002432]">
            <ThumbsUp className="w-4 h-4 mr-2" />
            Popular
          </TabsTrigger>
          <TabsTrigger value="user-profiles" className="data-[state=active]:bg-[#f78837] text-[#002432]">
            <UsersIcon className="w-4 h-4 mr-2" />
            Users
          </TabsTrigger>
          <TabsTrigger value="trending-tags" className="data-[state=active]:bg-[#f78837] text-[#002432]">
          <TrendingUp className="w-4 h-4 mr-2" />
            Trending
          </TabsTrigger>
          <TabsTrigger value="recent-discussions" className="data-[state=active]:bg-[#f78837] text-[#002432]">
            <MessageCircle className="w-4 h-4 mr-2" />
            Recent
          </TabsTrigger>
          <TabsTrigger value="activity-overview" className="data-[state=active]:bg-[#f78837] text-[#002432]">
            <Activity className="w-4 h-4 mr-2" />
            Activity
          </TabsTrigger>
          <TabsTrigger value="forum-polls" className="data-[state=active]:bg-[#f78837] text-[#002432]">
            <BarChart className="w-4 h-4 mr-2" />
            Polls
          </TabsTrigger>
          <TabsTrigger value="doctor-collaboration" className="data-[state=active]:bg-[#f78837] text-[#002432]">
            <UsersIcon className="w-4 h-4 mr-2" />
            Collaboration
          </TabsTrigger>
        </TabsList>
        <TabsContent value="forum-threads">
          <ForumThreads posts={samplePosts} />
        </TabsContent>
        <TabsContent value="popular-posts">
          <PopularPosts posts={samplePosts} />
        </TabsContent>
        <TabsContent value="user-profiles">
          <UserProfiles profiles={userProfiles} />
        </TabsContent>
        <TabsContent value="trending-tags">
          <TrendingTags tags={trendingTags} />
        </TabsContent>
        <TabsContent value="recent-discussions">
          <RecentDiscussions posts={samplePosts} />
        </TabsContent>
        <TabsContent value="activity-overview">
          <ActivityOverview activities={recentActivity} />
        </TabsContent>
        <TabsContent value="forum-polls">
          <ForumPolls />
        </TabsContent>
        <TabsContent value="doctor-collaboration">
          <DoctorCollaborationHub collaborations={doctorCollaborations} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Forum;

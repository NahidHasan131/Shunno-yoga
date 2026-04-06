import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';
import { IoTimeOutline } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import BlogCard from '../components/Blog/BlogCard';
import blog1 from '../assets/blog-img-1.jpg';
import blog2 from '../assets/blog-img-2.jpg';
import blog3 from '../assets/blog-img-3.jpg';
import morningYoga from '../assets/morningYoga.jpg';
import meditation from '../assets/meditation.jpg';
import aboutImg from '../assets/about-img.jpg';

const allPosts = [
  {
    id: 1,
    img: blog1,
    tag: 'Yoga Practices',
    date: '25 June 2024',
    readTime: '5 min read',
    author: 'Emily Johnson',
    title: 'Yoga for Stress Relief: Poses and Techniques',
    desc: 'Diam pharetra nulla nullam eget blandit habitasse turpis. Vestibulum odio pulvinar turpis faucibus fermentum nec nunc. Discover how simple poses can transform your daily stress levels.',
    featured: true,
  },
  {
    id: 2,
    img: blog2,
    tag: 'Holistic Wellness',
    date: '20 June 2024',
    readTime: '4 min read',
    author: 'Michael Roberts',
    title: 'The Role of Nutrition in Yoga and Meditation',
    desc: 'Diam pharetra nulla nullam eget blandit habitasse turpis. Vestibulum odio pulvinar turpis faucibus fermentum nec nunc.',
    featured: false,
  },
  {
    id: 3,
    img: blog3,
    tag: 'Meditation Techniques',
    date: '15 June 2024',
    readTime: '6 min read',
    author: 'Sarah Thompson',
    title: 'Introduction to Mindfulness Meditation',
    desc: 'Diam pharetra nulla nullam eget blandit habitasse turpis. Vestibulum odio pulvinar turpis faucibus fermentum nec nunc.',
    featured: false,
  },
  {
    id: 4,
    img: morningYoga,
    tag: 'Yoga Practices',
    date: '10 June 2024',
    readTime: '3 min read',
    author: 'Emily Johnson',
    title: 'Morning Yoga Flow: Start Your Day Right',
    desc: 'A gentle morning routine that energizes your body and clears your mind before the day begins.',
    featured: false,
  },
  {
    id: 5,
    img: meditation,
    tag: 'Meditation Techniques',
    date: '5 June 2024',
    readTime: '7 min read',
    author: 'Sarah Thompson',
    title: 'Breathing Exercises for Deep Relaxation',
    desc: 'Learn pranayama techniques that help calm the nervous system and bring instant peace.',
    featured: false,
  },
  {
    id: 6,
    img: aboutImg,
    tag: 'Holistic Wellness',
    date: '1 June 2024',
    readTime: '5 min read',
    author: 'Michael Roberts',
    title: 'Building a Consistent Yoga Practice at Home',
    desc: 'Tips and strategies to maintain a regular yoga routine without a studio environment.',
    featured: false,
  },
];

const categories = [
  { name: 'All', count: allPosts.length },
  { name: 'Yoga Practices', count: allPosts.filter(p => p.tag === 'Yoga Practices').length },
  { name: 'Meditation Techniques', count: allPosts.filter(p => p.tag === 'Meditation Techniques').length },
  { name: 'Holistic Wellness', count: allPosts.filter(p => p.tag === 'Holistic Wellness').length },
];

const recentPosts = allPosts.slice(0, 3);

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const featured = allPosts.find(p => p.featured);
  const filtered = activeCategory === 'All'
    ? allPosts.filter(p => !p.featured)
    : allPosts.filter(p => p.tag === activeCategory && !p.featured);

  return (
    <div>
      <Breadcrumb />

      <div className="max-w-340 mx-auto px-6 lg:px-12 py-16 lg:py-24">

        {/* Featured post */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-0.5 bg-[#62826B]" />
            <span className="text-sm font-medium text-[#62826B]">Featured Post</span>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center bg-[#F0F7F2] rounded-3xl overflow-hidden">
            <NavLink to="/blog" className="block overflow-hidden h-80 md:h-full">
              <img src={featured.img} alt={featured.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </NavLink>
            <div className="flex flex-col gap-5 p-8 md:pr-12">
              <span className="self-start px-3 py-1 rounded-full bg-[#62826B]/15 text-xs font-medium text-[#62826B]">
                {featured.tag}
              </span>
              <NavLink to="/blog">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#11141B] leading-tight hover:text-[#62826B] transition-colors duration-300">
                  {featured.title}
                </h2>
              </NavLink>
              <p className="text-gray-500 leading-relaxed">{featured.desc}</p>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1"><FaUser size={11} /> {featured.author}</span>
                <span className="flex items-center gap-1"><IoTimeOutline size={13} /> {featured.readTime}</span>
                <span>{featured.date}</span>
              </div>
              <NavLink
                to="/blog"
                className="self-start flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#62826B] text-[#FFEFC5] text-sm font-medium hover:bg-[#11141B] transition-colors duration-300"
              >
                Read More <MdArrowForward size={16} />
              </NavLink>
            </div>
          </div>
        </div>

        {/* Main content + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Posts grid */}
          <div className="flex-1">
            {/* Category filter */}
            <div className="flex flex-wrap gap-3 mb-10">
              {categories.map(cat => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: activeCategory === cat.name ? '#62826B' : 'white',
                    color: activeCategory === cat.name ? '#FFEFC5' : '#11141B',
                    borderColor: activeCategory === cat.name ? '#62826B' : '#e5e7eb',
                  }}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filtered.map(p => <BlogCard key={p.id} post={p} />)}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 flex flex-col gap-8">

            {/* Search */}
            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-bold text-[#11141B]">Search</h4>
              <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                <input
                  type="text"
                  placeholder="Search posts..."
                  className="flex-1 px-4 py-2.5 text-sm outline-none bg-white"
                />
                <button className="px-4 py-2.5 bg-[#62826B] text-white text-sm">
                  Go
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold text-[#11141B]">Categories</h4>
              <ul className="flex flex-col gap-2">
                {categories.filter(c => c.name !== 'All').map(cat => (
                  <li key={cat.name}>
                    <button
                      onClick={() => setActiveCategory(cat.name)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all duration-200 cursor-pointer"
                      style={{
                        backgroundColor: activeCategory === cat.name ? '#62826B' : '#F0F7F2',
                        color: activeCategory === cat.name ? '#FFEFC5' : '#11141B',
                      }}
                    >
                      <span>{cat.name}</span>
                      <span className="text-xs opacity-70">{cat.count}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent posts */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold text-[#11141B]">Recent Posts</h4>
              <ul className="flex flex-col gap-4">
                {recentPosts.map(p => (
                  <li key={p.id} className="flex items-center gap-3">
                    <NavLink to="/blog" className="shrink-0">
                      <img src={p.img} alt={p.title} className="w-16 h-16 rounded-xl object-cover" />
                    </NavLink>
                    <div className="flex flex-col gap-1">
                      <NavLink to="/blog" className="text-sm font-medium text-[#11141B] hover:text-[#62826B] transition-colors duration-200 leading-snug line-clamp-2">
                        {p.title}
                      </NavLink>
                      <span className="text-xs text-gray-400">{p.date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA banner */}
            <div className="bg-[#11141B] rounded-2xl p-6 flex flex-col gap-4">
              <h4 className="text-white font-bold text-lg">Start Your Journey</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Join thousands of members and transform your life with yoga.</p>
              <NavLink
                to="/contact"
                className="text-center py-2.5 rounded-full bg-[#62826B] text-[#FFEFC5] text-sm font-medium hover:opacity-80 transition-opacity duration-300"
              >
                Join Free Class
              </NavLink>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
};

export default Blog;

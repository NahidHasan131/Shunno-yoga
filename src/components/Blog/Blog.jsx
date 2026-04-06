import React from 'react';
import { NavLink } from 'react-router-dom';
import blog1 from '../../assets/blog-img-1.jpg';
import blog2 from '../../assets/blog-img-2.jpg';
import blog3 from '../../assets/blog-img-3.jpg';

const posts = [
  {
    img: blog1,
    tag: 'Yoga Practices',
    date: '25 June 2024',
    title: 'Yoga for Stress Relief: Poses and Techniques',
    desc: 'Diam pharetra nulla nullam eget blandit habitasse turpis. Vestibulum odio pulvinar turpis faucibus fermentum nec nunc.',
    path: '/blog',
  },
  {
    img: blog2,
    tag: 'Holistic Wellness',
    date: '25 June 2024',
    title: 'The Role of Nutrition in Yoga and Meditation',
    desc: 'Diam pharetra nulla nullam eget blandit habitasse turpis. Vestibulum odio pulvinar turpis faucibus fermentum nec nunc.',
    path: '/blog',
  },
  {
    img: blog3,
    tag: 'Meditation Techniques',
    date: '25 June 2024',
    title: 'Introduction to Mindfulness Meditation',
    desc: 'Diam pharetra nulla nullam eget blandit habitasse turpis. Vestibulum odio pulvinar turpis faucibus fermentum nec nunc.',
    path: '/blog',
  },
];

const Blog = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-340 mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-3">
            <span className="self-start px-4 py-1.5 rounded-full border border-gray-300 text-gray-800">
              Blog & News
            </span>
            <h2 className="text-4xl lg:text-5xl font-medium text-[#11141B] leading-tight">
              Explore Our Blog & <br /> Latest News
            </h2>
          </div>
          <NavLink to="/blog" className="self-start md:self-end px-8 py-3 rounded-full font-medium bg-[#62826B] text-[#FFEFC5] hover:bg-[#11141B] hover:scale-110 transition-all duration-300" >
            Read All
          </NavLink>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <NavLink to={p.path} key={p.title} className="flex flex-col gap-4 group bg-gray-50 border border-[#62826B]/15 rounded-2xl">
              {/* Image with tag */}
              <div className="relative rounded-2xl overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"/>
                <span className="absolute bottom-0 left-0 px-4 py-3 rounded-[0px_15px_0px_15px] bg-[#FFEFC5]/30 text-xs font-medium text-[#11141B] backdrop-blur-xl">
                  {p.tag}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-6">
                <span className="text-gray-400">{p.date}</span>
                <h3 className="text-2xl font-semibold text-[#11141B] group-hover:text-[#62826B] transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            </NavLink>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;

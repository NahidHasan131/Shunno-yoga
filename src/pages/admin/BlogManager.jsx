import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MdAdd, MdEdit, MdDelete, MdClose, MdArticle, MdSearch, MdImage } from 'react-icons/md';

const schema = yup.object({
  title:  yup.string().required('Title is required').min(5, 'Min 5 characters'),
  tag:    yup.string().required('Category is required'),
  author: yup.string().required('Author is required'),
  date:   yup.string().required('Date is required'),
  desc:   yup.string().required('Description is required').min(20, 'Min 20 characters'),
});

const TAGS = ['Yoga Practices', 'Meditation Techniques', 'Holistic Wellness'];

const tagColor = {
  'Yoga Practices':        'bg-violet-100 text-violet-700',
  'Meditation Techniques': 'bg-blue-100 text-blue-700',
  'Holistic Wellness':     'bg-emerald-100 text-emerald-700',
};

const initialPosts = [
  { id: 1, title: 'Yoga for Stress Relief: Poses and Techniques', tag: 'Yoga Practices',        author: 'Emily Johnson',   date: '25 June 2024', desc: 'Diam pharetra nulla nullam eget blandit habitasse turpis.', image: null },
  { id: 2, title: 'The Role of Nutrition in Yoga and Meditation',  tag: 'Holistic Wellness',     author: 'Michael Roberts', date: '20 June 2024', desc: 'Diam pharetra nulla nullam eget blandit habitasse turpis.', image: null },
  { id: 3, title: 'Introduction to Mindfulness Meditation',        tag: 'Meditation Techniques', author: 'Sarah Thompson',  date: '15 June 2024', desc: 'Diam pharetra nulla nullam eget blandit habitasse turpis.', image: null },
];

const BlogManager = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.tag.toLowerCase().includes(search.toLowerCase())
  );

  const openCreate = () => {
    setEditingPost(null);
    setImagePreview(null);
    reset({ title: '', tag: '', author: '', date: '', desc: '' });
    setShowForm(true);
  };

  const openEdit = (post) => {
    setEditingPost(post);
    setImagePreview(post.image || null);
    reset(post);
    setShowForm(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImagePreview(URL.createObjectURL(file));
  };

  const onSubmit = (data) => {
    if (editingPost) {
      setPosts(prev => prev.map(p => p.id === editingPost.id ? { ...p, ...data, image: imagePreview } : p));
    } else {
      setPosts(prev => [...prev, { ...data, id: Date.now(), image: imagePreview }]);
    }
    setShowForm(false);
    reset();
    setImagePreview(null);
  };

  const confirmDelete = () => {
    setPosts(prev => prev.filter(p => p.id !== deleteId));
    setDeleteId(null);
  };

  return (
    <div className="flex flex-col gap-6 w-full">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <MdArticle size={30} className="text-[#62826B]" />
            <h1 className="text-3xl font-bold text-[#11141B]">Blog Posts</h1>
          </div>
          <p className="text-sm text-gray-400 mt-1">{posts.length} posts total</p>
        </div>
        <button onClick={openCreate}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#62826B] text-white text-sm font-medium hover:bg-[#11141B] transition-colors duration-200">
          <MdAdd size={18} /> New Post
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <MdSearch size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input type="text" placeholder="Search posts..."
          value={search} onChange={e => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#62826B] transition-colors bg-white" />
      </div>

      {/* Post cards */}
      <div className="flex flex-col gap-3">
        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400 bg-white rounded-2xl border border-gray-100">No posts found.</div>
        )}
        {filtered.map(post => (
          <div key={post.id} className="bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-200 flex items-center gap-4 p-4">

            {/* Thumbnail */}
            <div className="w-20 h-16 rounded-xl overflow-hidden shrink-0 bg-gray-100 flex items-center justify-center">
              {post.image
                ? <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                : <MdImage size={24} className="text-gray-300" />
              }
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${tagColor[post.tag] || 'bg-gray-100 text-gray-600'}`}>
                  {post.tag}
                </span>
                <span className="text-xs text-gray-400">{post.date}</span>
              </div>
              <p className="font-semibold text-[#11141B] mt-1 line-clamp-1">{post.title}</p>
              <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{post.desc}</p>
              <p className="text-xs text-gray-500 mt-1">By {post.author}</p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 shrink-0">
              <button onClick={() => openEdit(post)}
                className="p-2 rounded-lg text-gray-400 hover:text-[#62826B] hover:bg-[#62826B]/10 transition-colors">
                <MdEdit size={18} />
              </button>
              <button onClick={() => setDeleteId(post.id)}
                className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                <MdDelete size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create / Edit modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-xl shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 sticky top-0 bg-white z-10">
              <h2 className="font-bold text-[#11141B] text-lg">{editingPost ? 'Edit Post' : 'New Blog Post'}</h2>
              <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <MdClose size={22} />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-5 flex flex-col gap-4">

              {/* Image upload */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#11141B]">Cover Image</label>
                <label className="cursor-pointer">
                  <div className={`w-full h-40 rounded-xl border-2 border-dashed flex flex-col items-center justify-center gap-2 transition-colors ${imagePreview ? 'border-[#62826B]' : 'border-gray-200 hover:border-[#62826B]'}`}>
                    {imagePreview ? (
                      <img src={imagePreview} alt="preview" className="w-full h-full object-cover rounded-xl" />
                    ) : (
                      <>
                        <MdImage size={28} className="text-gray-300" />
                        <p className="text-sm text-gray-400">Click to upload image</p>
                        <p className="text-xs text-gray-300">PNG, JPG up to 5MB</p>
                      </>
                    )}
                  </div>
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                </label>
                {imagePreview && (
                  <button type="button" onClick={() => setImagePreview(null)}
                    className="self-start text-xs text-red-400 hover:text-red-600 transition-colors">
                    Remove image
                  </button>
                )}
              </div>

              {/* Title */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#11141B]">Title</label>
                <input {...register('title')} placeholder="Post title"
                  className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#62826B] transition-colors" />
                {errors.title && <p className="text-xs text-red-500">{errors.title.message}</p>}
              </div>

              {/* Category + Author */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#11141B]">Category</label>
                  <select {...register('tag')}
                    className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#62826B] transition-colors bg-white">
                    <option value="">Select...</option>
                    {TAGS.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {errors.tag && <p className="text-xs text-red-500">{errors.tag.message}</p>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#11141B]">Author</label>
                  <input {...register('author')} placeholder="Author name"
                    className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#62826B] transition-colors" />
                  {errors.author && <p className="text-xs text-red-500">{errors.author.message}</p>}
                </div>
              </div>

              {/* Date */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#11141B]">Date</label>
                <input {...register('date')} type="date"
                  className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#62826B] transition-colors" />
                {errors.date && <p className="text-xs text-red-500">{errors.date.message}</p>}
              </div>

              {/* Description */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#11141B]">Description</label>
                <textarea {...register('desc')} rows={4} placeholder="Write a short description..."
                  className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#62826B] transition-colors resize-none" />
                {errors.desc && <p className="text-xs text-red-500">{errors.desc.message}</p>}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button type="button" onClick={() => setShowForm(false)}
                  className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#62826B] text-white text-sm font-medium hover:bg-[#11141B] transition-colors">
                  {editingPost ? 'Save Changes' : 'Publish Post'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete confirm */}
      {deleteId && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-xl p-6 flex flex-col gap-5">
            <div>
              <h2 className="font-bold text-[#11141B] text-lg">Delete Post?</h2>
              <p className="text-sm text-gray-500 mt-1">This action cannot be undone.</p>
            </div>
            <div className="flex items-center justify-end gap-3">
              <button onClick={() => setDeleteId(null)}
                className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                Cancel
              </button>
              <button onClick={confirmDelete}
                className="px-5 py-2.5 rounded-xl bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-colors">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default BlogManager;

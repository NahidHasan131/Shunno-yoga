import React from 'react';

const Pagination = ({ page, totalPages, total, label, onPageChange }) => {
  if (totalPages <= 1) return null;
  return (
    <div className="flex items-center justify-between pt-8 mt-4 border-t border-gray-200">
      <span className="text-sm text-gray-400">
        Page {page} of {totalPages} · {total} {label}
      </span>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(Math.max(1, page - 1))}
          disabled={page === 1}
          className="px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:bg-[#62826B] hover:text-[#FFEFC5] hover:border-[#62826B] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
        >
          ← Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className="w-9 h-9 rounded-full text-sm font-medium border transition-all duration-200"
            style={{
              backgroundColor: page === p ? '#62826B' : 'white',
              color: page === p ? '#FFEFC5' : '#11141B',
              borderColor: page === p ? '#62826B' : '#e5e7eb',
            }}
          >
            {p}
          </button>
        ))}
        <button
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          className="px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:bg-[#62826B] hover:text-[#FFEFC5] hover:border-[#62826B] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default Pagination;

interface PaginationProps {
  page: number; // current page (0-indexed)
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, totalPages, onPageChange }) => {
  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 3; // number of pages shown after/before current

    // Always show first page
    pages.push(0);

    // Ellipsis before current window
    if (page - maxVisible > 1) {
      pages.push("...");
    }

    // Middle window
    for (let i = Math.max(1, page - 1); i <= Math.min(totalPages - 2, page + 1); i++) {
      pages.push(i);
    }

    // Ellipsis after current window
    if (page + maxVisible < totalPages - 2) {
      pages.push("...");
    }

    // Always show last page (if more than one)
    if (totalPages > 1) {
      pages.push(totalPages - 1);
    }

    return pages;
  };

  const pages = getVisiblePages();

  return (
    <div className="flex items-center justify-center space-x-2 m-4">
      {/* Prev */}
      <button
        disabled={page <= 0}
        onClick={() => onPageChange(page - 1)}
        className="border px-3 py-1 bg-gray-200 rounded disabled:opacity-50 enabled:hover:bg-gray-300 transition"
      >
        ←
      </button>

      {/* Page Numbers */}
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={i} className="px-2 text-gray-500 select-none">…</span>
        ) : (
          <button
            key={p}
            disabled={p === page}
            onClick={() => onPageChange(p as number)}
            className={`px-3 py-1 rounded border transition 
              ${p === page
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 enabled:hover:bg-gray-300"
              }`}
          >
            {(p as number) + 1}
          </button>
        )
      )}

      {/* Next */}
      <button
        disabled={page >= totalPages - 1}
        onClick={() => onPageChange(page + 1)}
        className="border px-3 py-1 bg-gray-200 rounded disabled:opacity-50 enabled:hover:bg-gray-300 transition"
      >
        →
      </button>
    </div>
  );
};

export default Pagination;


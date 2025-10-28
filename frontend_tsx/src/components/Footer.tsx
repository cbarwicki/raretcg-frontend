export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-400 text-center py-8 ">
        <p>&copy; {new Date().getFullYear()} RareTCG. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </footer>
    </>
  )
}


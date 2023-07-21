import { Home } from 'lucide-react'

interface BackButton {
  onClick: () => void
}

const BackButton: React.FC<BackButton> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='flex gap-2 items-center p-3 md:p-2 bg-white rounded-md border text-gray-700 border-gray-200 shadow-sm focus:bg-cream'
    >
      <Home size={18} />
      <span className='hidden md:block'>Home</span>
    </button>
  )
}

export default BackButton

interface BackButton {
  onClick: () => void
  icon: React.ReactNode
  label: string
}

const BackButton: React.FC<BackButton> = ({ onClick, icon, label }) => {
  return (
    <button
      onClick={onClick}
      className='flex gap-2 items-center p-3 md:p-2 bg-white rounded-md border text-gray-700 border-gray-200 shadow-sm focus:bg-cream'
    >
      {icon}

      <span className='hidden md:block'>{label}</span>
    </button>
  )
}

export default BackButton

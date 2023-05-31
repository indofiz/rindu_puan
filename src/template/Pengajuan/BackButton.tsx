interface BackButton {
  onClick: () => void
}

const BackButton: React.FC<BackButton> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='p-2 bg-white rounded-md border border-gray-200 shadow-sm focus:bg-cream'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        fill='none'
      >
        <path
          fill='#141B17'
          d='m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6L12 20Z'
        />
      </svg>
    </button>
  )
}

export default BackButton

interface PlusButtons {
  label: string
  onClick: () => void
}

const PlusButton: React.FC<PlusButtons> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='flex gap-2 bg-cream w-full py-4 items-center justify-center rounded-md border border-[#D7D4BE] focus:bg-cream/80 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-[#D7D4BE] font-semibold'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        fill='none'
      >
        <path
          fill='#141B17'
          d='M11 13v3c0 .283.096.521.288.713.192.192.43.288.712.287a.968.968 0 0 0 .713-.288A.964.964 0 0 0 13 16v-3h3a.968.968 0 0 0 .713-.288A.964.964 0 0 0 17 12a.968.968 0 0 0-.288-.713A.964.964 0 0 0 16 11h-3V8a.968.968 0 0 0-.288-.713A.964.964 0 0 0 12 7a.968.968 0 0 0-.713.288A.964.964 0 0 0 11 8v3H8a.968.968 0 0 0-.713.288A.964.964 0 0 0 7 12c0 .283.096.521.288.713.192.192.43.288.712.287h3Zm1 9a9.733 9.733 0 0 1-3.9-.788 10.114 10.114 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.755 9.755 0 0 1 2 12c0-1.383.263-2.683.788-3.9a10.114 10.114 0 0 1 2.137-3.175c.9-.9 1.958-1.612 3.175-2.137A9.755 9.755 0 0 1 12 2c1.383 0 2.683.263 3.9.788a10.114 10.114 0 0 1 3.175 2.137c.9.9 1.613 1.958 2.138 3.175A9.72 9.72 0 0 1 22 12a9.733 9.733 0 0 1-.788 3.9 10.114 10.114 0 0 1-2.137 3.175c-.9.9-1.958 1.613-3.175 2.138A9.72 9.72 0 0 1 12 22Z'
        />
      </svg>{' '}
      {label}
    </button>
  )
}

export default PlusButton

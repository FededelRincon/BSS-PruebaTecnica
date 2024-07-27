import thisIsFine from '../../assets/this-is-fine.jpg'

export const Error = () => {
  return (
    <div className="flex justify-center align-center">
      <img 
        className='md:mx-4 md:my-0 w-96'
        src={thisIsFine}
        alt="Logo" 
      />
    </div>
  )
}

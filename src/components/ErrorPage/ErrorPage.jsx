import errorImg from '../../assets/errorPage.png';
export default function ErrorPage() {

  return (

    <>
      <div className='flex flex-col justify-center items-center'>
        
        <img className='w-4/5' src={errorImg} alt="" />
      </div>
    </>
  )
}
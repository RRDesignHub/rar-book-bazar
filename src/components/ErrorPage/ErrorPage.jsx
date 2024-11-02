import { Link } from 'react-router-dom';
import errorImg from '../../assets/errorPage.png';
export default function ErrorPage() {

  return (

    <>
        <Link to='/'>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-4/5' src={errorImg} alt="" />
          </div>
        </Link>
    </>
  )
}
import { FiPlusSquare } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Threads from '../components/Threads';

function HomePage() {
  return (
    <section className="home-page">
      <Threads />
      <section className="w-2/12 flex flex-col gap-6">
        <Link to="/threads/create" className="btn-primary w-full shadow-md shadow-sky-600 py-2 flex justify-center items-center gap-2">
          <FiPlusSquare />
          {' '}
          Buat Thread
        </Link>
        <div className="flex flex-col gap-2">
          <button type="button" className=" text font-medium btn btn-active">All</button>
          <button type="button" className="text font-medium btn">React Js</button>
          <button type="button" className="text font-medium btn">React Js</button>
          <button type="button" className="text font-medium btn">React Js</button>
          <button type="button" className="text font-medium btn">React Js</button>
        </div>
      </section>
    </section>
  );
}

export default HomePage;

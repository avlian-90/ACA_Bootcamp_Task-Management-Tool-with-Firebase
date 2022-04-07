import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        Boards
        <Link to='/boards/JS'>View Board</Link>
    </div>
  )
}

export default Home;

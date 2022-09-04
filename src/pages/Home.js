import HeroBanner from '../components/HeroBanner'
import '../style/Home.css'

function Home () {
    return(
        <div className='homeBackground' id='home'>
            <HeroBanner />
        </div>
    )
}

export default Home
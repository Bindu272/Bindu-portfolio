import './App.css';
// import Banner from './assests/Banner.png'
import Banner from './components/Banner';
import Description from './components/Description';
import Footer from './components/Footer';
import Header from './components/Header';
import ProfileIcon from './components/ProfileIcon';

function App() {
  return (
    <div className='flex items-center  p-10 bg-gray-200 font-mono'>
    <div className="bg-red-100 w-full mx-auto shadow-xl rounded-xl text-center items-center ">
    <Banner/>
    <Header/>
    <div className='flex justify-evenly pt-5'>
    <ProfileIcon/>
    <Description/>
   
    </div>
    <Footer/>
    </div>
    </div>
  );
}

export default App;

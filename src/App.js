// import Carousel from './components/carousel';
import styles from './styles/home.module.css';
import Header from './components/Header';
import Greeting from './components/greeting';
import OurTeam from './components/ourTeam';
import PhotoSlider from './components/photoSlider';
import Calculator from './components/calculator';

function App() {
  return (
    <div>
        <div className={styles.circle}></div>
        <div className={styles.root}>
            <Header/>

            <div className={styles.main}>
                
                <Greeting/>
                <OurTeam/>
                <PhotoSlider/>
                <Calculator/> 
            </div>
        
        </div>
    </div>
    
  );
}

export default App;

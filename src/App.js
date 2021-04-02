// import Carousel from './components/carousel';
import styles from './styles/home.module.css';
import Header from './components/Header';
import Greeting from './components/greeting';
import OurTeam from './components/ourTeam';
import PhotoSlider from './components/photoSlider';
import Calculator from './components/calculator';
import Schedule from './components/schedule';
import Form from './components/form';

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
                <div className={styles.schedule}>
                    <p className={styles.scheduleTitle}>Узнайте расписание занятий!</p>
                    <Schedule/>
                </div>
                <div className={styles.form}>
                    <p className={styles.scheduleTitle}>Есть вопросы? Заполните форму, а потом мы вам перезвоним и всё расскажем!</p>
                    <Form/>
                </div>
                
            </div>
        
        </div>
    </div>
    
  );
}

export default App;

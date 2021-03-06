import {useState, useEffect} from 'react'
import styles from '../styles/componentStyles/calculator.module.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Checkbox from '@material-ui/core/Checkbox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ScrollableAnchor from 'react-scrollable-anchor';



export default function Calculator({light}) {
    const [duration, setDuration]     = useState(1);
    const [anyTime, setAnyTime]       = useState(false);
    const [needTrener, setNeedTrener] = useState(false);

    const [yoga, setYoga]             = useState(false);
    const [pilates, setPilates]       = useState(false);
    const [boxing, setBoxing]         = useState(false);
    const [crossFit, setCrossFit]     = useState(false);
    const [stretching, setStretching] = useState(false);
    

    const [result, setResult]         = useState(2000);
    const [discount, setDiscount]     = useState(null);
    useEffect(() => {
        handleCounter();
    }, [duration,anyTime,needTrener,yoga,pilates,boxing,crossFit,stretching]);

    const handleCounter = () => {
        let step = 2000;
        if(needTrener) step += 3000;
        if(anyTime)    step += 300;
        if(yoga)       step += 1500;
        if(pilates)       step += 1000;
        if(boxing)       step += 1500;
        if(crossFit)       step += 1000;
        if(stretching)       step += 800;
        setResult(step * duration);
        setDiscount(null)
    }

    const handleDiscound = () => {
        let step = 2000;
        if(duration >= 6)  step = 1800;
        if(duration >= 12) step = 1700;
        if(duration >= 18) step = 1600;
        if(needTrener) step += 3000;
        if(anyTime)    step += 300;
        if(yoga)       step += 1500;
        if(pilates)    step += 1000;
        if(boxing)     step += 1500;
        if(crossFit)   step += 1000;
        if(stretching) step += 800;
        setDiscount(step * duration);
    }

    const renderDicsount = () => {
        if(discount === null)   return <p className={styles.resultTitle}>???????????????????? ???????? ????????????!</p>
        if(duration >= 18)      return <p className={styles.resultTitle}>???????? ???? ?????????????? ?? 20% ????????????????: {discount}???</p>
        else if(duration >= 12) return <p className={styles.resultTitle}>???????? ???? ?????????????? ?? 15% ????????????????: {discount}???</p>
        else if(duration >= 6)  return <p className={styles.resultTitle}>???????? ???? ?????????????? ?? 10% ????????????????: {discount}???</p>
        else return <p className={styles.resultTitle}>???? ???????????????? ???????????? ?????????? ?????????????????? ?????????????????????????? ???? ????????????????</p>
    }
    
    return (
        <div className={`${light ? styles.wrapperL : styles.wrapper} ${light ? styles.textL : ""}`}>
            <ScrollableAnchor id={'calculator'}>
				<div></div>
			</ScrollableAnchor>
            <div
                className={styles.description}>
                    <div>
                        <h2 className={styles.title}>POWER CLUB ??? ?????? ????????????, ?????? ????????????! ?????? ?????????? ??????????!?????????????????????? ??????????????????, ???????????????? ?????????? ?????????????????? ????????????????, ???????????????????????? ????????????????????, ?????????????????????????? ???????????? ??? ?? ???????????? POWER CLUB ???????? ?????? ?????? ???????????????????? ?????????? ??????????.</h2>
                    </div>
                    <div>
                        <h1 className={styles.title}>
                            ?????? ??????????????????
                        </h1>
                        <h2 className={styles.title}>
                            ???????????????? ???????? ?????????? ???? ???????? ?????? ?????? ????????
                        </h2>
                        <p className={styles.pInDescription}>???? ???????????????????? ???????????? ???????? ??????????????: ???????????? ???????????? ?????????? ?????????????? ?????????????????????? ?????? ???????? ?????????????? ???? ?????????????????????????????????? ???????????????? ???????????????????? ?? ???????????? ?????? ??????????.<br/>
                        ?????????? ?????????? ???????????????? ???????????? ???? ???????? ???????????????????????????? ????????????-????????????: ???????????????????????? ????????, ????????????????, ?????????? ?????????????????? ???????????????? ?? ???????????? ??????????.</p>
                    </div>
           </div>
            <div>
            <Accordion
                classes={{
                    root: styles.accordion
                }}
            >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
                
                >
                    ?????????????????? ?????????????????? ????????????????????
                </AccordionSummary>
                <AccordionDetails classes={{
                    root: styles.accordionDetails
                }}>

                    <div className={styles.wrapperCalculator}>                    
                        <div className={styles.sliderWrapper}>
                            <p>?????????????????????????????????? ???????????????????? ?? ??????????????: {duration}</p>
                            <div>
                                <Slider
                                    classes={{  
                                        root: styles.slider
                                    }}
                                    value={duration}
                                    min={1}
                                    step={1}
                                    max={24}
                                    onChange={(e,newValue) => setDuration(newValue)}
                                />
                            </div>
                            
                        </div>
                        <div className={styles.switchWrapper}>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={needTrener}
                                        onChange={() => {setNeedTrener(!needTrener)}}
                                        name="needTrener"
                                        classes={{
                                            colorSecondary:styles.switch,
                                            track:styles.switchTrack,
                                        }}
                                    />}
                                label="?????????? ?????????????"
                            />
                            <FormControlLabel
                                control={
                                    <Switch 
                                        checked={anyTime} 
                                        onChange={() => {setAnyTime(!anyTime)}}  
                                        name="anyTime" 
                                        classes={{
                                            colorSecondary:styles.switch,
                                            track:styles.switchTrack,
                                        }}
                                    />}
                                label="?????????????????? ?? ?????????? ??????????"
                            />
                        </div>
                        <div className={styles.checkboxWrapper}>
                    <p className={styles.checkboxTitle}>???????????????? ???????????? ?????? ????????????!</p>
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    checked={yoga} 
                                    onChange={() => {setYoga(!yoga)}}  
                                    name="yoga" 
                                    classes={{
                                        colorSecondary:styles.switch,
                                    }}
                                />}
                            label="????????"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    checked={pilates} 
                                    onChange={() => {setPilates(!pilates)}}  
                                    name="pilates" 
                                    classes={{
                                        colorSecondary:styles.switch,
                                    }}
                                />}
                            label="??????????????"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    checked={boxing} 
                                    onChange={() => {setBoxing(!boxing)}}  
                                    name="boxing" 
                                    classes={{
                                        colorSecondary:styles.switch,
                                    }}
                                />}
                            label="????????"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    checked={crossFit} 
                                    onChange={() => {setCrossFit(!crossFit)}}  
                                    name="crossFit" 
                                    classes={{
                                        colorSecondary:styles.switch,
                                    }}
                                />}
                            label="????????????????"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    checked={stretching} 
                                    onChange={() => {setStretching(!stretching)}}  
                                    name="stretching" 
                                    classes={{
                                        colorSecondary:styles.switch,
                                    }}
                                />}
                            label="????????????????"
                        />
                       
                    </div>
                    </div>
                   
                    <div className={styles.resultWrapper}>
                        <Button  onClick={handleDiscound} size='large' className={styles.UIbutton} variant='contained' endIcon={<AttachMoneyIcon/>}>
                            ???????????????????? ????????????!
                        </Button>
                        <div className={styles.resultTitleWrapper}>
                            <p className={styles.resultTitle}>?????????????????? ?????? ???????????? ????????????????: {result}???</p>
                            {renderDicsount()}
                        </div>
                        <Button size='large' className={styles.UIbutton} variant='contained'>
                            <a style={{color: 'rgba(0, 0, 0, 0.87)', textDecoration:'none'}} href='#form'>
                                ?????????????????? ??????????
                            </a>
                        </Button>
                    </div>
                    
                    <div className={styles.priceInfo}>
                        <div className={styles.priceInfoTitle}>?????????? ???? ?????????????? ?????????????? ???????????????????? ?? ?????????????????? ??????????...</div>
                        <div className={styles.priceInfoDescription}>
                            ???????????? ???????????????? ?????????????????????? ?????? ?????????????? ???????????????????? ?????????????????????????? ???? ????????????????:<br/>
                            - ???????????? 10% ???? 6 ??????????????<br/>
                            - ???????????? 15% ???? 12 ??????????????<br/>
                            - ???????????? 20% ???? 18 ??????????????<br/>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
            </div>
        </div>
    )
}

import React,{useEffect} from 'react';
import styles from '../styles/componentStyles/carousel.module.css';

export default function Carousel({speed = 2, children, id}) {
    let pressed     = false;
    let coord       = null;
    let touchStart  = null;
    let products    = null;
    let points      = [];
    
    useEffect(() => {
        if(children){
            document.querySelector(`.${id}`).addEventListener('wheel', handleWhell)
            products = document.querySelector(`.${id}`).children;
            for(let product of products){
                product.style.position = 'relative';
            }
            coord = getCoords(products[0]);
            points.push(-coord , coord); 
        }
    },[])
    function getCoords(elem) {
        if(elem) {
        let box = elem.getBoundingClientRect();
        let containerBox = document.querySelector(`.${styles.container}`).getBoundingClientRect().left;
        let left = box.left - containerBox;
        return left;
        }
    }
   
    const handlerOut = () => {
        pressed = false;
    }
    
    const handlerPressed = (event) => {
        if(event.type == 'touchstart'){
            touchStart = event.touches[0].pageX;
        }
        pressed = true;
    }

    const handlerMove = (event) => {
        console.log(pressed);
        if(event.type == 'touchmove'){
            let touchMove = event.touches[0].pageX - touchStart;
            for(let product of products){
                if(touchMove > 0){
                    coord += 6;
                }
                else if(touchMove < 0){
                    coord -= 6;
                }
                if(coord > points[0]){
                    coord = points[0];
                }
                else if(coord < points[points.length-1]){
                    coord = points[points.length-1];
                }
                product.style.left = coord + 'px';
            }
        }

        if(pressed && event.movementX && (coord >= points[points.length-1] && coord <= points[0])){
            for(let product of products){
                coord += event.movementX/speed;  // Скорость прокрутки
                if(coord > points[0]){
                    coord = points[0];
                }
                else if(coord < points[points.length-1]){
                    coord = points[points.length-1];
                }
                product.style.left = coord + 'px';
            }
        }
    }

    const handleWhell = (event) => {
        let direction = event.deltaY;
        if(coord >= points[points.length-1] && coord <= points[0]){
            coord += direction; 
            for(let product of products){
                // Скорость прокрутки
                if(coord > points[0]){
                    coord = points[0];
                }
                else if(coord < points[points.length-1]){
                    coord = points[points.length-1];
                }
                product.style.left = coord + 'px';
            }
        }
       event.preventDefault();
    }
    if(children){
        return (
            <div 
                onMouseUp={handlerOut}
                onMouseLeave={handlerOut}
                
                onMouseDown={handlerPressed} 
                onMouseMove={handlerMove}
                
                // onWheel={handleWhell}

                onTouchEnd={handlerOut}
                onTouchCancel={handlerOut}

                onTouchStart={handlerPressed}
                onTouchMove={handlerMove}
                
                className={`${styles.container} ${id}`}
            >
                {children}
            </div>
        )
    }
    else{
        return (
            <div>
                Loading...
            </div>
        )
    }
}

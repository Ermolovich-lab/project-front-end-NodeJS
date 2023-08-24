import React, {useState} from "react";
import { useEffect } from "react";
import { useRef } from "react";

const LR3 = () => {

    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(true);
    var rightPressed = false;
    var leftPressed = false;
    var upPressed = false;
    var downPressed = false;

    let dir = {x: 0, y: 0};
    let pos = {x: 250, y: 200};
    let speed = 1;

    let x1 = null;
    let y1 = null;

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener("touchstart", handleTouchStart, false)
    document.addEventListener("touchmove", handleTouchMove, false)

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.width = '${window.innerWidth}px';
        canvas.style.height = '${window.innerHeight}px';

        const context = canvas.getContext("2d")
        context.scale(1,1)
        context.strokeStyle = "white"
        context.fillStyle =  "white"
        contextRef.current = context;
    }, [])

    function handleTouchStart(e){
        const firstTouch = e.touches[0];
        x1 = firstTouch.clientX;
        y1 = firstTouch.clientY;
    }

    function handleTouchMove(e){
        if(!x1 || !y1){
            return false;
        }

        let x2 = e.touches[0].clientX;
        let y2 = e.touches[0].clientY;
        let xDiff = x2 - x1;
        let yDiff = y2 - y1;

        if(Math.abs(xDiff) > Math.abs(yDiff)){
            if(xDiff > 0){
                rightPressed = true;
                leftPressed = false;
            }
            else{
                rightPressed = false;
                leftPressed = true;  
            }
            upPressed = false;
            downPressed = false;
        }
        else{
            if(yDiff > 0){
                upPressed = false;
                downPressed = true;
            }
            else{
                upPressed = true;
                downPressed = false;
            }
            rightPressed = false;
            leftPressed = false;
        }
        x1 = null;
        y1 = null;
    }

    function keyDownHandler(e) {
        if(e.keyCode == 39) {
            rightPressed = true;
        }
        else if(e.keyCode == 37) {
            leftPressed = true;
        }

        if(e.keyCode == 38){
            upPressed = true;
        }
        else if(e.keyCode == 40){
            downPressed = true;
        }
    }
    function keyUpHandler(e) {
        if(e.keyCode == 39) {
            rightPressed = false;
        }
        else if(e.keyCode == 37) {
            leftPressed = false;
        }

        if(e.keyCode == 38){
            upPressed = false;
        }
        else if(e.keyCode == 40){
            downPressed = false;
        }
    }

    const draw = () => {
        if(!isDrawing){
            return
        }

        if(leftPressed){
            dir = {x: -0.2, y: 0}
        }
        
        if(rightPressed){
            dir = {x: 0.2, y: 0}
        }

        if(upPressed){
            dir = {x: 0, y: -0.2}
        }
        
        if(downPressed){
            dir = {x: 0, y: 0.2}
        }
        
        speed = speed + 0.1

        contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height, false)
        pos = {x: pos.x + dir.x * speed, y: pos.y + dir.y * speed}
        contextRef.current.beginPath()
        contextRef.current.arc(pos.x, pos.y, 25, 0, 2 * Math.PI); 

        contextRef.current.fill();
        contextRef.current.closePath()

        if((pos.x > canvasRef.current.width || pos.x < 0) || (pos.y > canvasRef.current.height || pos.y < 0)){
            pos = {x: 250, y: 200};
            speed = 1;
            window.navigator.vibrate([200,30,200]);
        }
        //requestAnimationFrame(draw);
    }

    setInterval(draw, 10);

    return(
        <canvas ref={canvasRef}/>
    )
}

export default LR3;
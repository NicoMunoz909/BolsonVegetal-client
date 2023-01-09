import React from 'react'
import { FaCircle } from 'react-icons/fa'
import banner1 from '../../Assets/banner1.jpg'
import banner2 from '../../Assets/banner2.jpg'
import banner3 from '../../Assets/banner3.jpg'
import banner4 from '../../Assets/banner4.jpg'
import banner5 from '../../Assets/banner5.jpg'
import './BannerCarousel.css'

const BannerCarousel = () => {

  let translateX = 0
  let pressed = false;
  let dragLeft = false;
  let dragRigth = false;

  const translateCarousel = (p) => {
    translateX = p;
    const imgContainer = document.getElementById('imgContainer');
    imgContainer.style.transform = `translateX(-${p}%)`
    clearInterval(carouselAutoplay);
    changeIndicator()
  }

  function autoplay() {
    translateX += 100
    if (translateX > 400) translateX = 0
    const imgContainer = document.getElementById('imgContainer');
    imgContainer.style.transform = `translateX(-${translateX}%)`;
    changeIndicator()
  }

  function changeIndicator() {
    const indicators = document.getElementsByClassName('indicator');
    for (let i = 0; i < indicators.length; i++) {
      const element = indicators[i];
      element.classList.remove('active')
    }
    switch (translateX) {
      case 0:
        indicators[0].classList.add('active')
        break;
      case 100:
        indicators[1].classList.add('active')
        break;
      case 200:
        indicators[2].classList.add('active')
        break;
      case 300:
        indicators[3].classList.add('active')
        break;
      case 400:
        indicators[4].classList.add('active')
        break;  
      default:
        break;
    }
  }

  function handleMouseDown(e) {
    pressed = true;
  }

  function handleMouseMove(e) {
    if (!pressed) return;
    e.preventDefault();
    e.target.parentNode.style.transform = `translateX(-${translateX - e.movementX}%)`
    if (translateX - e.movementX <= translateX - 25) dragLeft = true
    else if (translateX - e.movementX >= translateX + 25) dragRigth = true
  }

  function handleMouseUp(e) {
    pressed = false;
    if (dragLeft && translateX !== 0) translateX -= 100
    else if (dragRigth && translateX !== 400) translateX += 100
    e.target.parentNode.style.transform = `translateX(-${translateX}%)`
    dragLeft = false;
    dragRigth = false;
    changeIndicator()
  }

  const carouselAutoplay = setInterval(autoplay, 3000);

  return (
    <div className='carouselContainer'>
      <div className='imgContainer' id='imgContainer' onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        <img src={banner1} alt="" />
        <img src={banner2} alt="" />
        <img src={banner3} alt="" />
        <img src={banner4} alt="" />
        <img src={banner5} alt="" />
      </div>
      <div className='indicatorsContainer'>
        <FaCircle className='indicator active' onClick={() => translateCarousel(0)}/>
        <FaCircle className='indicator' onClick={() => translateCarousel(100)}/>
        <FaCircle className='indicator' onClick={() => translateCarousel(200)}/>
        <FaCircle className='indicator' onClick={() => translateCarousel(300)}/>
        <FaCircle className='indicator' onClick={() => translateCarousel(400)}/>
      </div>
    </div>
  )
}

export default BannerCarousel
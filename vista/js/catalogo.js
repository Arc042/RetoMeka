// class MinMaxSlider {
//   constructor(element, { startingMin, startingMax, ResultsElement, MessageHandler } = {}) {
//     // Properties
//     this.values = [];
//     this.minValue = startingMin || 0;
//     this.maxValue = startingMax || 2000;
//     this.slider = null;
//     this.sliderBar = null;
//     this.sliderBarStart = null;
//     this.sliderBarEnd = null;

//     // Event Properties
//     this.startX = 0;
//     this.currentX = 0;
//     this.targetX = 0;
//     this.target = null;
//     this.targetBCR = null;
//     this.sliderBCR = null;
//     this.sliderStartX = null;
//     this.sliderEndX = null;
//     this.draggingBall = false;
    
//     // External Elements
//     this.ResultsElement = ResultsElement || false;
//     this.MessageHandler = MessageHandler || false;
    
//     // Internal Elements
//     this.rootElement = element;
//     this.minControlElement = element.querySelector('#slider-min-control');
//     this.maxControlElement = element.querySelector('#slider-max-control');
//     this.sliderTarget = element.querySelector('#slider-target');
    
//     // Bind methods
//     this.addEventListeners = this.addEventListeners.bind(this);
//     this.onStart = this.onStart.bind(this);
//     this.onMove = this.onMove.bind(this);
//     this.onEnd = this.onEnd.bind(this);
//     this.extractValues = this.extractValues.bind(this);
//     this.hideControlElements = this.hideControlElements.bind(this);
//     this.updateSliderValues = this.updateSliderValues.bind(this);
//     this.updateResults = this.updateResults.bind(this);

//     this.addEventListeners();
//     this.init();
    
//     requestAnimationFrame(this.updateSliderValues);
//   }
  
//   addEventListeners () {
//     document.addEventListener('touchstart', this.onStart);
//     document.addEventListener('touchmove', this.onMove);
//     document.addEventListener('touchend', this.onEnd);
    
//     document.addEventListener('mousedown', this.onStart);
//     document.addEventListener('mousemove', this.onMove);
//     document.addEventListener('mouseup', this.onEnd);
//   }
  
//   init () {
//     this.extractValues();
//     this.hideControlElements();
    
//     this.slider = document.createElement('div');
//     this.sliderBar = document.createElement('div');
//     this.sliderBarStart = document.createElement('span');
//     this.sliderBarEnd = document.createElement('span');
    
//     this.slider.classList.add('slider');
//     this.slider.dataset.min = "";
//     this.slider.dataset.max = "";
    
//     this.sliderBar.classList.add('slider__bar');
//     this.sliderBarStart.classList.add('slider__ball');
//     this.sliderBarEnd.classList.add('slider__ball');
    
//     this.sliderBarStart.id = "min";
//     this.sliderBarEnd.id = "max";
    
//     this.sliderBar.appendChild(this.sliderBarStart);
//     this.sliderBar.appendChild(this.sliderBarEnd);
//     this.slider.appendChild(this.sliderBar);
    
//     this.sliderTarget.appendChild(this.slider);
//     this.updateSliderValues(this.minValue, this.maxValue);
//   }
  
//   onStart (evt) {
//     if (!evt.target.classList.contains('slider__ball')) {
//       return;
//     }
    
//     this.target = evt.target;
//     this.sliderBCR = this.slider.getBoundingClientRect();
//     this.targetBCR = this.target.getBoundingClientRect();
    
//     this.sliderStartX = this.sliderBCR.left;
//     this.sliderEndX = this.sliderBCR.right;

//     console.log(this.targetBCR, this.sliderBCR);
    
//     this.startX = evt.pageX || evt.touches[0].pageX;
//     this.currentX = this.startX;
    
//     this.draggingBall = true;
//     this.target
    
//     this.MessageHandler.addMessage(`onStart`);
//     evt.preventDefault();
//   }
  
//   onMove (evt) {
//     if (!this.draggingBall)
//       return;
    
//     if (!this.target)
//       return;
    
//     this.currentX = evt.pageX || evt.touches[0].pageX;
    
//     if (this.currentX < this.sliderStartX || this.currentX > this.sliderEndX)
//       return;
      
//     if (this.target === this.sliderBarStart)
//       this.minValue = this._calculatePercentage(this.currentX - this.sliderStartX);

//     if (this.target === this.sliderBarEnd)
//       this.maxValue = this._calculatePercentage(this.currentX - this.sliderStartX);
    
//     this.MessageHandler.addMessage(
//       `sliderStart: ${this.sliderStartX}, start: ${this.startX}, current: ${this.currentX}`
//     );
//   }
  
//   onEnd (evt) {
//     if (!this.draggingBall || !this.target)
//       return;

//     this.draggingBall = false;
//     this.MessageHandler.addMessage('onEnd');
//   }
  
//   extractValues () {
//     let minOptions = Array.from(this.minControlElement.querySelectorAll('option'));
//     let maxOptions = Array.from(this.maxControlElement.querySelectorAll('option'));
    
//     minOptions.forEach(el => this.values.push(el.value));
//     maxOptions.forEach(el => {
//       if(this.values.indexOf(el.value) < 0) {
//          this.values.push(el.value);
//       }
//     });
    
//     this.valueCount = this.values.length;
//   }
  
//   hideControlElements () {
//     this.minControlElement.classList.add('hidden');
//     this.maxControlElement.classList.add('hidden');
//   }
  
//   updateSliderValues () {
//     requestAnimationFrame(this.updateSliderValues);
    
//     this.minValue = Math.round(this.minValue);
//     this.maxValue = Math.round(this.maxValue);
    
//     this.slider.dataset.min = this.minValue;
//     this.slider.dataset.max = this.maxValue;
    
//     this.sliderBar.style.left = `${this.minValue}%`;
//     this.sliderBar.style.right = `${2000 - this.maxValue}%`;
    
//     this.updateResults(this.minValue, this.maxValue);
//   }
  
//   updateResults (min, max) {
//     if (!this.ResultsElement) return;

//     const minResultEl = this.ResultsElement.querySelector('span#min-result');
//     const maxResultEl = this.ResultsElement.querySelector('span#max-result');

//     minResultEl.innerHTML = min;
//     maxResultEl.innerHTML = max;
//   }
  
//   _calculatePercentage (positionInSlider) {
//     return positionInSlider / this.sliderBCR.width * 2000;
//   }
  
//   __logElements() {
//     console.log(this.rootElement);
//     console.log(this.slider);
//     console.log(this.ResultsElement);
//   }
// }

// class MessageHandler {
//   constructor(element, {messageLimit} = {}) {
//     this.element = element;
//     this.messageContainer = element.querySelector('.message-container');
//     this.messageCountEl = element.querySelector('.message-count')
//     this.messageCount = 0;
//     this.messageLimit = messageLimit || 10;
//   }
  
//   addMessage(text, type = 'info') {
//     let messageWrapper = document.createElement('p');
//     messageWrapper.classList.add('message');
    
//     let messageType = document.createElement('span');
//     let messageContent = document.createElement('span');
    
//     messageType.classList.add('message__type');
//     messageType.innerText = `[ ${type} ]`;
//     messageContent.innerText = text;

//     messageWrapper.appendChild(messageType);
//     messageWrapper.appendChild(messageContent);
    
//     this._addMessage(messageWrapper);
//   }
  
//   _addMessage(Message) {
//     if (this._getMessageCount() >= this.messageLimit) {
//       let messageToRemove = this.messageContainer.querySelectorAll('.message')[0];
//       this.messageContainer.removeChild(messageToRemove);
//     }
    
//     this.messageContainer.appendChild(Message);
//     this._updateMessageCount();
//   }
  
//   _updateMessageCount() {
//     this.messageCount = this.messageContainer.querySelectorAll('.message').length;
//     this.messageCountEl.innerHTML = `( ${this.messageCount + ' ' + plural(this.messageCount, 'message')} )`
//   }
  
//   _getMessageCount() {
//     return this.messageCount;
//   }
// }

// function plural(count, value) {
//   if (count < 2 && count !== 0) {
//     return value;
//   } 
  
//   return value + 's';
// }

// window.addEventListener('load', () => {
//   const slider = new MinMaxSlider(
//     document.querySelector('#slider'), {
//       startingMin: 0,
//       startingMax: 2000,
//       ResultsElement: document.querySelector('.results'),
//       MessageHandler: new MessageHandler(document.querySelector('.messages'))
//     }
//   );
// });
    
window.onload = function(){
  slideOne();
  slideTwo();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne(){
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
      sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = sliderOne.value;
  fillColor();
}
function slideTwo(){
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
      sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = sliderTwo.value;
  fillColor();
}
function fillColor(){
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}
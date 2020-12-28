//获取用户输入的自定义名字
const customName = document.getElementById('customname');
//对按钮的引用
const randomize = document.querySelector('.randomize');
// 随机产生的笑话的引用
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let storyText = "今天气温 34 摄氏度，:inserta:出去遛弯。当走到:insertb:门前时，突然就:insertc:。人们都惊呆了，李雷全程目睹但并没有慌，因为:inserta:是一个 130 公斤的胖子，天气又辣么热。";
let insertX = ['怪兽威利','大老爹','圣诞老人'];
let insertY = ['肯德基','迪士尼乐园','白宫'];
let insertZ = ['自燃了','在人行道化成了一坨泥','变成一条鼻涕虫爬走了'];
//点击按钮执行result函数
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  newStory = newStory.replace(':inserta:',xItem);
  newStory = newStory.replace(':inserta:',xItem);
  newStory = newStory.replace(':insertb:',yItem);
  newStory = newStory.replace(':insertc:',zItem);
//如果用户输入了自定义名字，则保存改名字至name
  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace("李雷",name);
  }
//如果“美制”按钮被勾选，则····
  if(document.getElementById("american").checked) {
    let weight = Math.round(140*2.20462);
    let temperature = Math.round(35*9/5+32);
    newStory = newStory.replace(' 34 摄氏度',temperature+'华氏度');
    newStory = newStory.replace(' 130 公斤',weight+'磅');
  }
  story.textContent = newStory;
  story.style.visibility = 'visible';
}

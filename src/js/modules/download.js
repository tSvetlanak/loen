export default class Download{
constructor(triggers){
this.btns=document.querySelectorAll(triggers);
this.path='assets/img/mainbg.jpg';
}

downloadItem(path){
const element = document.createElement('a');
element.setAttribute('href', path);
element.setAttribute('download', 'nice_picture');
element.style.display = "none";
document.body.append(element);

element.click();
element.remove();
}

init(){
  this.btns.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
       e.stopPropagation();
      this.downloadItem(this.path);
    });
  });
}

}
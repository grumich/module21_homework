function data(){
    let check = localStorage.getItem('name'); 
    let checkDate = localStorage.getItem('date');
    
    
    if (check != null){
      alert('Добрый день '+check+' давно не виделись, в последний раз вы были у нас '+checkDate)
    }
    else{
      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth()+1;
      let year = date.getFullYear();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let timeCheck = day+'-'+month+'-'+year+'  '+hours+':'+minutes+':'+seconds;
      let yourName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя.', 'Саша');
      localStorage.setItem("name", yourName);
      localStorage.setItem("date", timeCheck);
      
    }
    
  }
  
  data();
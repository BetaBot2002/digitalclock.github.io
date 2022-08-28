var a=document.getElementById('dig')
var hours
var days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var showtime=() =>{
    var date= new Date();
    if(date.getHours()>0 && date.getHours()<12){
        hours=date.getHours();
        var ap="AM"
    }
    else if(date.getHours()>12){
        hours=date.getHours()-12;
        var ap="PM"
    }
    else if(date.getHours()==12){
        hours=date.getHours();
        var ap="PM"
    }
    else{
        hours=12-date.getHours();
        var ap="AM"
    }
    var minutes= date.getMinutes();
    var seconds= date.getSeconds();
    a.innerHTML= (("0"+hours).slice(-2)+":"+("0"+minutes).slice(-2)+":"+("0"+seconds).slice(-2))
    document.getElementById('ap').innerHTML=ap
    document.getElementById('date').innerHTML=(("0"+date.getDate()).slice(-2)+"/"+("0"+(date.getMonth()+1)).slice(-2)+"/"+date.getFullYear()+", "+days[date.getDay()])
}
setInterval(showtime,1000);

//("0" + myNumber).slice(-2) to show two digit
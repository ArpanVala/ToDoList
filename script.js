
// Shorthand for $( document ).ready()
$(function() {

    let btn1=$('#btn1'); 
    let ul=document.getElementById("ul");

    //clear all items
    btn1.click(function(){
        ul.innerHTML='';
        check();
        saveData();
    
    })

    //check if list have any items
    function check(){

        if($('ul li').length >0)
        {
            btn1.css('display','block');
            $('#msg').css('display','none');
        }
        else{
            btn1.css('display','none');
            $('#msg').css('display','block')
        }
    }
    check();

    //on button click
    $('#btn').click(function (e) { 
        e.preventDefault(); //prevents from submitting form

        let inputItem=document.getElementById("inputItem").value;
        if(inputItem.length >0){

            let liTag=$('<li>');   //creating list element
            liTag.text(inputItem); //adding text inside <liTag> tag

            let span=$('<span>');
            span.text("\u00d7");
            liTag.append(span);
            
            $('ul').append(liTag); // adding li in <ul>
            saveData();
        }
        else{alert("please enter data");
        }
       check();
       $('#inputItem').val('');
    });//end of btn click

      $('#inputItem').keypress(function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            $('#btn').click(); // Trigger the button click
        }
    });

    $('ul').on('click',function(e){
        //if user chech or uncheck list item
        if (e.target.tagName==="LI"){
            e.target.classList.toggle("active");
            saveData();
            check();
        } 
        //if user click cross 
        else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
            saveData();
            check();
        }

    });


    
    function saveData()//saving data 
    {
        localStorage.setItem("data1",ul.innerHTML);
    }
    function getData()//retriving data
    {
        ul.innerHTML=localStorage.getItem("data1");
    }
    getData();
    check();
});
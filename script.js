let searching = function (){
    var input, filter, tr ,td, i, txtvalue;
    input = document.getElementById('myInput');
        // console.log('hello')
    filter = input.value.toUpperCase();
    table = document.getElementById('myTable');
    tr = table.getElementsByTagName('tr');
    // console.log('done')
    for(i = 0; i < tr.length; i++){
        console.log('2');
        td = tr[i].getElementsByTagName('td')[0];
        console.log('tr');
        if(td){
            txtvalue = td.textContent || td.innerText;
            if(txtvalue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display =''
                // console.log('hello');
            }
            else{
                tr[i].style.display = 'none';
                console.log('not');
            }
        }
    }
}




// function hello(){
//     display = document.getElementById("menu");

//     if(display.style.display === "none"){
//         display.style.display = "block";
//     }else{
//         display.style.display = "none";
//     }
// }
var names = ["JLS", "OSS", "KFA", "AKL", "SDF", "GKS", "PLA"];
function addguestname(){
    var guestname = document.getElementById("addname").value;
    names.push(guestname);
    console.log(names);
    document.getElementById("new_guest_list").innerHTML = names;
    update();
}
function view(){
document.getElementById("viewlist").innerHTML = names;
console.log(names);
update();
document.getElementById("view").style.display = "none";
document.getElementById("sort").style.display = "inline-block";
}
function update(){
    document.getElementById("viewlist").innerHTML = names;
    console.log(names);
}

function sort(){
 names.sort();
 console.log(names);
 document.getElementById("viewlist").innerHTML = names;

}
function searchnames(){
    var text_search = document.getElementById("find").value;
    var found = 0;
    var j;
    for (j = 0; j < names.length; j++){
        if(text_search == names[j]){
            found = found + 1;
        }
        document.getElementById("found").innerHTML = "name found " + found + " time/s";
        console.log("found name " + found + " time/s");
    }
}
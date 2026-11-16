function postComment(){
  let name = document.getElementById("name").value;
  let comment = document.getElementById("comment").value;
  if(!name || !comment){ alert("Please fill name and comment"); return; }
  
  let div = document.createElement("div");
  div.style.borderTop = "1px solid #ddd";
  div.style.padding = "10px 0";
  div.innerHTML = "<b>" + name + "</b><br>" + comment;
  document.getElementById("comments").prepend(div);
  
  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
}
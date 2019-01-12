$(function(){

    $.getJSON('api',updateForum);

    $('#forum-post').submit((e)=>{
        e.preventDefault();
        $.post('api',{
            name: $('#usersname').val(),
            title: $('#userstitle').val(),
            msg: $('#usersmessage').val()
        }, updateForum);
    });

    $('#feedback-container-message').on('click',(e)=>{
        if (e.target.className == 'x-button'){
            $.ajax({
                url: '/api/'+ e.target.id,
                type:'DELETE',
                success:updateForum
            })
        }
    });

    function updateForum (data){
        var output ="";
        $.each(data, (key,item)=>{
            output +=' <div class = "row first-row m-0 mb-3"  style = "height:auto;max-width:100%;border-radius:10px">';
            output +='   <div class = "col p-0" style = "border-radius:10px">'
            output +='      <div class = "row p-1 d-flex flex-column justify-content-between m-0" style ="background-color:lightblue;border-radius:10px;max-width:100%;">'
            output +='          <div class ="container-fluid d-flex flex-row justify-content-between pt-1" style = "border-bottom:solid 1px grey;padding-right:0; padding-bottom:1vh; padding-left:0">'
            output +=`              <div class = "col m-0 p-0 d-flex align-items-center" style = "width:auto">${item.name}: ${item.title} </div>`
            output +='                  <div class = "col-1 m-0 p-0 d-flex justify-content-center align-items-center" style = "height:5vh">'
            output +='                      <button type="button" class="btn btn-danger p-0 x-button" style = "width:3vw">'
            output +=`                          <img id = '${key}' src="/images/misc/x-mark.png" class="x-button" style ="width:1vw" alt="">`
            output +='                      </button>'
            output +='                  </div>'
            output +='              </div>'
            output +=`           <div class = "col-12 " style = "height:auto"> ${item.msg}`
            output +='        </div>'
            output +='    </div>'
            output +='</div>'
            output += '</div>'
        });
        $('#feedback-container-message').html(output)
    }

}) //end of document ready


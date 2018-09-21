

$(document).ready(function() {
$(function(){
    $("form[name='reg']").validate({
      rules:{
          username:"required",
          email:{
                 required:true,
                 email:true
          },
          password:{
                 required:true,
                 minlength:5
          },
          password2:{
                 required:true,
                 minlength:5,
                 minlength:5,
          }
         }, 
       messages:{
              username:"please enter username",
              email:"please enter email",
              password:{
                    required:"please enter paswd",
                    minlength:"minimum 5 char"
                   },
              password2:{
                    required:"please enter retype paswd",
                    minlength:"minimum 5 char"
                   }
            
             },      
              submitHandler:function(form){
                            form.submit();      
                        }    
          
    });
  });
});
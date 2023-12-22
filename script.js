$(document).ready(function(){
    let checkBill = false;
    let checkTip = false;
    let checkPeople = false;

    let billAmount = 0;
    let tipPercent = 0;
    let noPeople = 0;
    
    $(".tip-container>*").on("click input", function(e){
        e.preventDefault();
        var bill = $("#bill").val();
        var people = $("#noOfPeople").val();
        

        $('.tip-container').children('*').each(function () {
            $(this).removeClass('active');
            
        });
        $(this).addClass('active');



        tipPercent = $(this).val();
        checkTip = true;

        validate();

    });
    

    $("#bill").on("keyup", function(e){
        e.preventDefault();

        if($(this).val()!=0){
            $('.error.bill').removeClass('show');
            $("#bill").removeClass('input-error');
            billAmount = $(this).val();
            checkBill = true;
            
        }else{
            $('.error.bill').addClass('show');
            $("#bill").addClass('input-error');
            checkBill = false;
        }

        validate();
    });

    $("#noOfPeople").on("keyup", function(e){
        e.preventDefault();

        if($(this).val()!=0){
            $('.error.noofpeople').removeClass('show');
            $("#noOfPeople").removeClass('input-error');
            noPeople = $(this).val();
            checkPeople = true;
        }else{
            $('.error.noofpeople').addClass('show');
            $("#noOfPeople").addClass('input-error');
            checkPeople = false;
        }

        validate();
    });


    function validate(){
        var flag = 3;
        
        
        checkBill == true?flag--: flag = flag;
        checkTip == true?flag--: flag = flag;
        checkPeople == true?flag--: flag = flag;

        if(flag==0){
            $("#reset").prop('disabled', false);
            var total = Math.round((billAmount / noPeople)*100)/100;
            $(".total>span").html(total);
            var tip = Math.round(((billAmount*tipPercent/100) / noPeople) *100)/100;
            $(".tip-amount>span").html(tip);
            return true;
        }
        else{
            $(".tip-amount>span").html("0.00");
            $(".total>span").html("0.00");
            $("#reset").prop('disabled', true);
            return false;
        }
        
    }
});
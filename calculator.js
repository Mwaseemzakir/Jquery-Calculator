function display(numb)
{
    if(numb=="C")
   {
        $('#answerbox').val('');
   }
    else
    {
        $('#answerbox').val($('#answerbox').val() + numb);
    }
}
function Result()
{
    var result =  $('#answerbox').val();
    var answer = eval(result);
    $('#answerbox').val(answer);

}


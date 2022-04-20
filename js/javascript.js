$(document).ready(function(){
    const dataPetugas=
    $('.btn-navigasi').click(function(e){
        e.preventDefault();
        $('.btn-navigasi').removeClass('active');
        $(this).addClass('active');
        const myId = $(this).attr('id');
        if (myId =="hub"){
            $('.data-petugas').addClass('d-none');
            $('.data-csts').addClass('d-none');
            $('.data-idr').addClass('d-none');
            $('.data-hubhx').removeClass('d-none');
        }else if(myId =="csts"){
            $('.data-petugas').addClass('d-none');
            $('.data-hubhx').addClass('d-none');
            $('.data-idr').addClass('d-none');
            $('.data-csts').removeClass('d-none');
        }
        else if(myId =="idr"){
            $('.data-petugas').addClass('d-none');
            $('.data-hubhx').addClass('d-none');
            $('.data-csts').addClass('d-none');
            $('.data-idr').removeClass('d-none');
        }else{
            $('.data-idr').addClass('d-none');
            $('.data-hubhx').addClass('d-none');
            $('.data-csts').addClass('d-none');
            $('.data-petugas').removeClass('d-none');
        }
    });

  
});
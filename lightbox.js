$(function(){
    let photoSrc = '';

    // 監聽我們要點擊的元素：每張圖片容器
    $('.portfolio__items__container').click(function() {
    console.log('點擊')
        // 取得點擊的圖片路徑
        photoSrc = $(this).children('img')[0].src;
        console.log(photoSrc);
    
        // 顯示燈箱 UI
        $('.portfolio__lightbox').css({display: 'flex'});
    
        // 將燈箱中的圖片路徑換成我們存好的路徑
        $('.portfolio__lightbox > img').attr('src', photoSrc);
    
        // 鎖定 body 捲軸
        $('body').css({overflow: 'hidden'});
        
    });
    $('.portfolio__lightbox__close').click(function() {
console.log('成功');
        // 把自己隱藏起來
        $('.portfolio__lightbox').css({display: 'none'});
    
        // 開啟 body 捲軸
        $('body').css({position: 'relative', overflow: 'auto'});
    
    });
});


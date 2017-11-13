$(document).ready(function () {

    var countHidenCard = 0;
    var container = $(".container");
    container.on("click", ".flip-container", function () {
        var elem = $(this);
        if (elem.hasClass('hover') || elem.hasClass('deleted')){
            return;
        }
        elem.toggleClass('hover');
        elem.toggleClass('chosen')
    });

    container.html($(".container .flip-container").sort(function () {
        return Math.random() - 0.5;
    }));
    $('li').addClass('hide-list');

    container.on('click', function () {
        var chosens = $('.chosen');
        var chosenLength = chosens.length;

        if (chosenLength === 2 && checkMatch(chosens)) {
            setTimeout(function () {
                chosens.removeClass('chosen');
                chosens.toggleClass('hover');
                chosens.addClass('deleted');
                chosens.find('.flipper').hide();
                countHidenCard += 2;
            },700);
        } else if (chosenLength > 2 ) {
            chosens.removeClass('chosen');
            chosens.toggleClass('hover');
        }
    });

    var checkMatch = function (divs) {
        var firstImg = null;
        var result = false;
        divs.each(function (index, element) {
            if (firstImg === null) {
                firstImg = $(element).find('.picture').first().attr('src');
            } else {
                var secondImg = $(element).find('.picture').first().attr('src');
                result = firstImg === secondImg;
            }
        });
        firstImg = null;
        return result;
    };

    container.on('click', function (e) {
        console.log(countHidevCard);
        if (countHidevCard > 10) {
            alert('Поздравляем вы победитель');
            $('.flip-container').removeClass('hover');
            $('.flip-container').find('.flipper').show();
            $('.flip-container').removeClass('deleted');
            container.html($(".container .flip-container").sort(function () {
                return Math.random() - 0.5;
            }));
            $('li').addClass('hide-list');
            countHidenCard = 0;
        }
    });
});

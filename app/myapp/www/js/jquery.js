$(function () {
    $("#conteudo").html("Aguarde...");
    function update() {
        $.ajax({
            url: "http://127.0.0.1:5502/js/content.txt",
            success: function (data) {
                $("#conteudo").html(data);
            }
        });
    }


    //setInterval(update, 5000);


    $('.cpf').mask('000.000.000-00');

    $(".icon-shopping").on("click", function () {

        $.ajax({
            url: "/js/content.txt",
            success: function (data) {
                $("#conteudo").html(data);
            }
        });
    })


    const seletor = "div.faq div p";
    $(seletor).hide();


    $("div.faq div").each(function (i) {

        $(this).on("click", function () {
            $(this).toggleClass("formatar");
            //$(this).AddClass("formatar");
            //$(this).removeClass("formatar");
        })

        $("h3", $(this)).on({
            click: function () {
                $("p", $(this).parent()).slideDown("slow", function () {
                    console.log("ok");
                });
            },
            mouseout: function () {
                $("p", $(this).parent()).slideUp();
            }
        });
    });


    /*
    const seletor = "div.faq div p";
    $().hide(seletor);

    $("div.faq div h3").on("click", () => {
        $(seletor).slideDown();
    });

    $("div.faq div h3").on("mouseout", () => {
        $(seletor).slideUp();
    })
    */

    /*
    $(".card").on("mouseover", function () {
        $(this).fadeOut("slow").slideDown("slow").css("");
    });


    $(".card").on({
        mouseover: function () {
            $(this).fadeOut("slow")
        },
        mouseout: function () {
            $(this).fadeIn("slow")
        },
        click: function () {
            alert("funcionou");
        },
    });
    */

    /*

    $( "#book" ).fadeIn( "slow", function() {
        // Animation complete
      });
*/


    /*
    
        $(".webdev").on({
            mouseover: function () {
                $(this).css("color", "red");
            },
            mouseout: function () {
                $(this).css("color", "black");
            },
            click: function () {
                alert("funcionou");
            },
        });
    */
    /*
    function greet( event ) {
        alert( "Hello " + event.data.name );
      }
      $( "button" ).on( "click", {
        name: "Karl"
      }, greet );

      $( "button" ).on( "click", {
        name: "Addy"
      }, greet );
*/
    /*
    $(".webdev").on("click", function () {
        alert("ok");
    });
    */

    /*
    $(".webdev").click(function () {
        alert("ok");
    });
    */

    //$(".webdev").html("<a hre='#'>Meu novo link</a>");

    /*
    let attr = $(".webdev").attr("class");
    console.log(attr);
    /*

    //let valor = $(".login").val();

    //let text = $(".webdev").text();
    //console.log(text);

    // let html = $(".webdev").html();
    //console.log(html);





    /*
    $("a", $(".card")).css({
        "color": "red",
        "font-size": "25px",
        "display": "block",
        "background-color": "blue"
    });
    */

});
$(document).ready(function () {

    var fn = "";
    $(document).on("focusin", "#txt", function () {
        $("#btnAlrt").hide();


    })

    $(document).on("focusout", "#txt", function () {
        fn = $(this).val();
        if ($(this).val() != "") {
            $("#btnAlrt").show();
        } else {
            $("#btnAlrt").hide();
        }

    })

    $(document).on("keyup", "#txt", function () {

        if ($(this).val() == $("#btn").val()) {
            $("#btnAlrt").show();
        } else {
            $("#btnAlrt").hide();
        }

    })
    $("#btnAlrt").hover(function () {
        $(this).css("background-color", "yellow")
    }, function () {
        $(this).css("background-color", "red");
    }

    )

    $("#txt").mouseleave(function () {
        $(this).css("background-color", "orange")
    }
    )
    $("#txt").mouseenter(function () {
        $(this).css("background-color", "yellow")
    }

    )

    $("#txt").focus(function () {
        $("#btnAlrt").hide();
        $(this).css("background-color", "orange")
    }

    )

    $("#txt").focusout(function () {
        $(this).css("background-color", "orange")
    }

    )

    $("#btn").click(function () {
        $(".HidCls").fadeOut(2000);
    })

    $("#btnfin").click(function () {
        $(".HidCls").delay(1000).fadeIn(2000);
    })

    $("#btntc").click(function () {
        $(".HidCls").text("changed");
    })

    $("#btntcol").click(function () {
        $(".HidCls").css("color", "Green");
    })
    $("#btnapnd").click(function () {
        $(".HidCls").append("<br>1");
    })
    $("#btnaddcls").click(function () {
        $(".HidCls").addClass("dem");
    })
    $("#btnremcls").click(function () {
        $(".HidCls").removeClass("dem");
    })

    $("#btnimg").click(function () {
        $("img").attr("width", "100");
        $("img").attr("height", "100");
    })
    $("#btnAlrt").click(function () {
        var value = $("#txt").val();
        // alert($("#txt").val());
        $(this).attr("Value", value);
        $(this).css("color", "red");

    })



});
$(window).on("load", start);

function start() {
    console.log("Start");

    $("#dreng_sprite").addClass("dreng_danser");
    $("#pige_sprite").addClass("pige_danser");
    $("#weeknd_sprite").addClass("synger");
    setTimeout(drengDrikker, 5000);
}

function drengDrikker() {
    console.log("drengDrikker");

    $("#dreng_sprite").removeClass("dreng_danser");
    $("#dreng_sprite").addClass("dreng_drikker");
    $("#dreng_sprite").on("animationend", drengMisterBukserne);
}

function drengMisterBukserne() {
    console.log("drengMisterBukserne");

    $("#dreng_sprite").off("animationend", drengMisterBukserne);
    $("#dreng_sprite").removeClass("dreng_drikker");
    $("#dreng_sprite").addClass("dreng_mister_bukser");
    $("#dreng_sprite").on("animationend", drengStaarStille);
}

function drengStaarStille() {
    console.log("drengStaarStille");

    $("#dreng_sprite").off("animationend", drengStaarStille);
    $("#dreng_sprite").removeClass("dreng_mister_bukser");
    $("#dreng_sprite").addClass("dreng_stille");
}

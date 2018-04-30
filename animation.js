$(window).on("load", start);

function start() {
    console.log("Start");

    $("#baggrund_lyd")[0].play();
    $("#dreng_sprite").addClass("dreng_danser");
    $("#pige_sprite").addClass("pige_danser");
    $("#weeknd_sprite").addClass("synger");
    $("#mellemgrund").addClass("mellem_puls");
    $("#forgrund").addClass("for_puls");
    setTimeout(startFuldesnak, 7000);
    setTimeout(drengDrikker, 500);
}

function startFuldesnak() {
    $("#dreng_fuldesnak")[0].play();
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
    $("#dreng_sprite").on("animationend", pigeTagerBillede);
}

function pigeTagerBillede() {
    console.log("pigeTagerBillede");

    $("#grin_pige")[0].play();
    $("#dreng_sprite").off("animationend", pigeTagerBillede);
    $("#pige_sprite").removeClass("pige_danser");
    $("#pige_sprite").addClass("pige_tager_billede");
    $("#pige_sprite").on("animationend", raaber);
}


function raaber() {
    console.log("theWeekndRaaber");

    $("#baggrund_lyd")[0].pause();
    $("#pige_sprite").off("animationend", raaber);
    $("#weeknd_sprite").removeClass("synger");
    $("#weeknd_sprite").addClass("raaber");
    $("#mellemgrund").removeClass("mellem_puls");
    $("#forgrund").removeClass("for_puls");
    $("#theweknd")[0].play();
    setTimeout(snapchat, 3000);
}

function snapchat() {
    console.log("snapchatStarter")

    $("#dreng_sprite").removeClass("dreng_mister_bukser");
    $("#dreng_sprite").addClass("dreng_stille");
    $("#pige_sprite").removeClass("pige_tager_billede");
    $("#pige_sprite").addClass("pige_taenker");
    $("#mobil_container").addClass("slide");
    $("#mobil_container").on("animationend", vaelg);
}

function vaelg() {
    console.log("vaelg")

    $("#mobil_container").off("animationend", vaelg);
    $("#send").addClass("puls");
    $("#slet").addClass("puls");
}

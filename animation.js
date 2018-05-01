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
    setTimeout(drengDrikker, 10000);
}

function startFuldesnak() {
    $("#dreng_fuldesnak")[0].play();
    $("#dreng_fuldesnak")[0].volume = 0.7;
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
    $("#kliklyd")[0].play();
    $("#dreng_sprite").off("animationend", pigeTagerBillede);
    $("#pige_sprite").removeClass("pige_danser");
    $("#pige_sprite").addClass("pige_tager_billede");
    $("#pige_sprite").on("animationend", raaber);
}


function raaber() {
    console.log("theWeekndRaaber");

    $("#baggrund_lyd")[0].pause();
    $("#baggrund_snak")[0].play();
    $("#baggrund_snak")[0].volume = 0.2;
    $("#scratch")[0].play();
    $("#pige_sprite").off("animationend", raaber);
    $("#weeknd_sprite").removeClass("synger");
    $("#boble_sprite").addClass("talebobbel_class");
    $("#weeknd_sprite").addClass("raaber_stop");
    $("#mellemgrund").removeClass("mellem_puls");
    $("#forgrund").removeClass("for_puls");
    setTimeout(raaberLyd, 2000);
    setTimeout(snapchat, 6000);
}

function raaberLyd() {
    $("#theweknd")[0].play();
    $("#weeknd_sprite").removeClass("raaber_stop");
    $("#weeknd_sprite").addClass("raaber");
    $("#dreng_sprite").removeClass("dreng_mister_bukser");
    $("#dreng_sprite").addClass("dreng_stille");
}

function snapchat() {
    console.log("snapchatStarter")

    $("#pige_sprite").removeClass("pige_tager_billede");
    $("#pige_sprite").addClass("pige_taenker");
    $("#boble_sprite").removeClass("talebobbel_class");
    $("#mobil_container").addClass("slide");
    $("#mobil_container").on("animationend", vaelg);
}

function vaelg() {
    console.log("vaelg")

    $("#mobil_container").off("animationend", vaelg);
    $("#send").addClass("puls");
    $("#slet").addClass("puls");
    $("#send").on("click", thumbsDown);
    $("#slet").on("click", thumbsUp);
}

function thumbsDown() {
    console.log("thumbsDown")

    $("#booo")[0].play();
    $("#send").off("click", thumbsDown);
    $("#slet").off("click", thumbsUp);
    $("#send").removeClass("puls");
    $("#slet").removeClass("puls");
    $("#weeknd_sprite").removeClass("raaber");
    $("#weeknd_sprite").addClass("thumbs_down");
    setTimeout(slut, 4000);
}

function thumbsUp() {
    console.log("thumbsUp")

    $("#jubel")[0].play();
    $("#send").off("click", thumbsDown);
    $("#slet").off("click", thumbsUp);
    $("#send").removeClass("puls");
    $("#slet").removeClass("puls");
    $("#weeknd_sprite").removeClass("raaber");
    $("#weeknd_sprite").addClass("thumbs_up");
    $("#mellemgrund").addClass("mellem_puls");
    $("#forgrund").addClass("for_puls");
    $("#pige_sprite").removeClass("pige_taenker");
    $("#pige_sprite").addClass("pige_danser");
    $("#dreng_sprite").removeClass("dreng_stille");
    $("#dreng_sprite").addClass("dreng_danser");
    setTimeout(startMusik, 4000);
    setTimeout(slut, 4000);
}

function startMusik() {
    $("#baggrund_lyd")[0].play();
    $("#jubel")[0].volume = 0.4;
    $("#weeknd_sprite").removeClass("thumbs_up");
    $("#weeknd_sprite").addClass("synger");
    $("#baggrund_snak")[0].pause();
}

function slut() {
    console.log("slut")

    $("#slut").addClass("slut_slide");
    $('#logo').click(function () {
        window.location = "http://privatsnak.dk/13-15/";
    });
    setTimeout(tekst, 1000);
}

function tekst() {
    $("#tekst").addClass("tekst_slide");
    $('#tekst').click(function () {
        window.location = "http://privatsnak.dk/13-15/";
    });
}

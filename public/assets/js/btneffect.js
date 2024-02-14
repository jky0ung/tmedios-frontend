var interTime = 2000;

$("button[name='btndisableFalse1']").click(function() {
    fbtndisableFalse(1);    
    var refreshId = function(){
        fbtndisableTrue(1);
    }
    setTimeout(refreshId, interTime);
});

$("button[name='btndisableFalse2']").click(function() {
    fbtndisableFalse(2);    
    var refreshId = function(){
        fbtndisableTrue(2);
    }
    setTimeout(refreshId, interTime);
});

function doc_sbutChk(e) {
    var e;
    fbtndisableFalse(e);    
    var refreshId = function(){
        fbtndisableTrue(e);
    }
    setTimeout(refreshId, interTime);
};

function fbtndisableFalse(e) {
    console.log('False'+e);
    if(e == 1) {
        $("button[name='btndisableFalse1']").css({"opacity": "0.5"});
        $("button[name='btndisableFalse1']").attr("disabled", true);
    } else if(e == 2) {
        $("button[name='btndisableFalse2']").css({"opacity": "0.5"});
        $("button[name='btndisableFalse2']").attr("disabled", true);
    } else if(e == 3) {  // accept_reserve_select.html
        $(".accept_reserve_select_doc_sbut").css({"opacity": "0.5"});
        $(".accept_reserve_select_doc_sbut").attr("disabled", true);
        $(".doc_btn_up").attr("disabled", true);
        $(".doc_btn_up").css({"opacity": "0"});
        $(".doc_btn_down").attr("disabled", true);
        $(".doc_btn_down").css({"opacity": "0"});        
    } else if(e == 4) {  // accept_search_phone_list.html
        $(".accept_search_phone_list_doc_sbut").css({"opacity": "0.5"});
        $(".accept_search_phone_list_doc_sbut").attr("disabled", true);
        $(".doc_btn_up").attr("disabled", true);
        $(".doc_btn_up").css({"opacity": "0"});
        $(".doc_btn_down").attr("disabled", true);
        $(".doc_btn_down").css({"opacity": "0"});   
    } else if(e == 5) {  // accept_select.html
        $(".select_re_btn, .select_re_but, .select_to_btn, .select_to_but").css({"opacity": "0.5"});
        $(".select_re_btn, .select_re_but, .select_to_btn, .select_to_but").attr("disabled", true); 
    } else if(e == 6) {  // accept_today_select.html
        $(".accept_today_select_doc_sbut").css({"opacity": "0.5"});
        $(".accept_today_select_doc_sbut").attr("disabled", true);
        $(".doc_btn_up").attr("disabled", true);
        $(".doc_btn_up").css({"opacity": "0"});
        $(".doc_btn_down").attr("disabled", true);
        $(".doc_btn_down").css({"opacity": "0"});   
    } else if(e == 7) {  // pay_cardchk.html
        $(".pay_cardChk_btn_ok, .pay_cardChk_btn_no").css({"opacity": "0.5"});
        $(".pay_cardChk_btn_ok, .pay_cardChk_btn_no").attr("disabled", true); 
    } else if(e == 8) {  // pay_list.html
        $(".pay_list_doc_sbut").css({"opacity": "0.5"});
        $(".pay_list_doc_sbut").attr("disabled", true);
        $(".doc_btn_up").attr("disabled", true);
        $(".doc_btn_up").css({"opacity": "0"});
        $(".doc_btn_down").attr("disabled", true);
        $(".doc_btn_down").css({"opacity": "0"});   
    } else if(e == 9) {  // pay_search_phone_list.html
        $(".pay_search_phone_list_doc_sbut").css({"opacity": "0.5"});
        $(".pay_search_phone_list_doc_sbut").attr("disabled", true);
        $(".doc_btn_up").attr("disabled", true);
        $(".doc_btn_up").css({"opacity": "0"});
        $(".doc_btn_down").attr("disabled", true);
        $(".doc_btn_down").css({"opacity": "0"});   
    } else if(e == 10) {  // prescription_list.html
        $(".prescription_list_doc_sbut").css({"opacity": "0.5"});
        $(".prescription_list_doc_sbut").attr("disabled", true);
        $(".doc_btn_up").attr("disabled", true);
        $(".doc_btn_up").css({"opacity": "0"});
        $(".doc_btn_down").attr("disabled", true);
        $(".doc_btn_down").css({"opacity": "0"});   
    } else if(e == 11) {  // prescription_search_phone_list.html
        $(".prescription_search_phone_list_doc_sbut").css({"opacity": "0.5"});
        $(".prescription_search_phone_list_doc_sbut").attr("disabled", true);
        $(".doc_btn_up").attr("disabled", true);
        $(".doc_btn_up").css({"opacity": "0"});
        $(".doc_btn_down").attr("disabled", true);
        $(".doc_btn_down").css({"opacity": "0"});   
    }
    $(".ph_btnChk").css({"opacity": "0.5"});
    $(".ph_btnChk").attr("disabled", true); 
    $(".pay_search_phone_num_pad_del, .pay_search_phone_num_pad_dall").css({"opacity": "0.5"});
    $(".pay_search_phone_num_pad_del, .pay_search_phone_num_pad_dall").attr("disabled", true); 
    $(".pay_search_num_pad_del, .pay_search_num_pad_dall").css({"opacity": "0.5"});
    $(".pay_search_num_pad_del, .pay_search_num_pad_dall").attr("disabled", true);
    $(".prescription_search_phone_num_pad_del, .prescription_search_phone_num_pad_dall").css({"opacity": "0.5"});
    $(".prescription_search_phone_num_pad_del, .prescription_search_phone_num_pad_dall").attr("disabled", true); 
    $(".prescription_search_num_pad_del, .prescription_search_num_pad_dall").css({"opacity": "0.5"});
    $(".prescription_search_num_pad_del, .prescription_search_num_pad_dall").attr("disabled", true); 
}

function fbtndisableTrue(e) {
    console.log('True'+e);
    if(e == 1) {
        $("button[name='btndisableFalse1']").css({"opacity": "1"});
        $("button[name='btndisableFalse1']").attr("disabled", false);
    } else if(e == 2) {
        $("button[name='btndisableFalse2']").css({"opacity": "1"});
        $("button[name='btndisableFalse2']").attr("disabled", false);
    } else if(e == 3) {  // accept_reserve_select.html
        $(".accept_reserve_select_doc_sbut").css({"opacity": "1"});
        $(".accept_reserve_select_doc_sbut").attr("disabled", false);
        $(".doc_btn_up").attr("disabled", false);
        $(".doc_btn_up").css({"opacity": "1"});
        $(".doc_btn_down").attr("disabled", false);
        $(".doc_btn_down").css({"opacity": "1"});
    } else if(e == 4) {  // accept_search_phone_list.html
        $(".accept_search_phone_list_doc_sbut").css({"opacity": "1"});
        $(".accept_search_phone_list_doc_sbut").attr("disabled", false);
        $(".doc_btn_up").attr("disabled", false);
        $(".doc_btn_up").css({"opacity": "1"});
        $(".doc_btn_down").attr("disabled", false);
        $(".doc_btn_down").css({"opacity": "1"});
    } else if(e == 5) {  // accept_select.html
        $(".select_re_btn, .select_re_but, .select_to_btn, .select_to_but").css({"opacity": "1"});
        $(".select_re_btn, .select_re_but, .select_to_btn, .select_to_but").attr("disabled", false); 
    } else if(e == 6) {  // accept_today_select.html
        $(".accept_today_select_doc_sbut").css({"opacity": "1"});
        $(".accept_today_select_doc_sbut").attr("disabled", false);
        $(".doc_btn_up").attr("disabled", false);
        $(".doc_btn_up").css({"opacity": "1"});
        $(".doc_btn_down").attr("disabled", false);
        $(".doc_btn_down").css({"opacity": "1"});
    } else if(e == 7) {  // pay_cardchk.html
        $(".pay_cardChk_btn_ok, .pay_cardChk_btn_no").css({"opacity": "1"});
        $(".pay_cardChk_btn_ok, .pay_cardChk_btn_no").attr("disabled", false); 
    } else if(e == 8) {  // pay_list.html
        $(".pay_list_doc_sbut").css({"opacity": "1"});
        $(".pay_list_doc_sbut").attr("disabled", false);
        $(".doc_btn_up").attr("disabled", false);
        $(".doc_btn_up").css({"opacity": "1"});
        $(".doc_btn_down").attr("disabled", false);
        $(".doc_btn_down").css({"opacity": "1"});
    } else if(e == 9) {  // pay_search_phone_list.html
        $(".pay_search_phone_list_doc_sbut").css({"opacity": "1"});
        $(".pay_search_phone_list_doc_sbut").attr("disabled", false);
        $(".doc_btn_up").attr("disabled", false);
        $(".doc_btn_up").css({"opacity": "1"});
        $(".doc_btn_down").attr("disabled", false);
        $(".doc_btn_down").css({"opacity": "1"});
    } else if(e == 10) {  // pay_search_phone_list.html
        $(".prescription_list_doc_sbut").css({"opacity": "1"});
        $(".prescription_list_doc_sbut").attr("disabled", false);
        $(".doc_btn_up").attr("disabled", false);
        $(".doc_btn_up").css({"opacity": "1"});
        $(".doc_btn_down").attr("disabled", false);
        $(".doc_btn_down").css({"opacity": "1"});
    } else if(e == 11) {  // prescription_search_phone_list.html
        $(".prescription_search_phone_list_doc_sbut").css({"opacity": "1"});
        $(".prescription_search_phone_list_doc_sbut").attr("disabled", false);
        $(".doc_btn_up").attr("disabled", false);
        $(".doc_btn_up").css({"opacity": "1"});
        $(".doc_btn_down").attr("disabled", false);
        $(".doc_btn_down").css({"opacity": "1"});
    }
    $(".ph_btnChk").css({"opacity": "1"});
    $(".ph_btnChk").attr("disabled", false); 
    $(".pay_search_phone_num_pad_del, .pay_search_phone_num_pad_dall").css({"opacity": "1"});
    $(".pay_search_phone_num_pad_del, .pay_search_phone_num_pad_dall").attr("disabled", false); 
    $(".pay_search_num_pad_del, .pay_search_num_pad_dall").css({"opacity": "1"});
    $(".pay_search_num_pad_del, .pay_search_num_pad_dall").attr("disabled", false); 
    $(".prescription_search_phone_num_pad_del, .prescription_search_phone_num_pad_dall").css({"opacity": "1"});
    $(".prescription_search_phone_num_pad_del, .prescription_search_phone_num_pad_dall").attr("disabled", false); 
    $(".prescription_search_num_pad_del, .prescription_search_num_pad_dall").css({"opacity": "1"});
    $(".prescription_search_num_pad_del, .prescription_search_num_pad_dall").attr("disabled", false); 
}
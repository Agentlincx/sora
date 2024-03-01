function nav() {
    var a = document.querySelector("#snav #a1");
    var b = document.querySelector("#snav #a2");
    var c = document.querySelector("#navl");

    a.classList.toggle("a1");
    b.classList.toggle("a2");
    c.classList.toggle("navl");
}


(function(){
    var a = document.querySelector("#navl>div");
    
    var c = [["Home", "index.html"], ["About Us", "#p2"], ["Partners", "#p3"], ["Tokenomics", "#p4"], ["RoadMap", "#road"]];
    
    for (let i of c){
        var t = document.createElement("a");
        t.onclick = function(){
            nav();
        }
        t.href = i[1];
        t.innerText = i[0];
        a.appendChild(t);
    }
})();


hd1();
function hd1() {

    var a = document.querySelector("#p1");
    var aa = document.querySelector("#p1>div>div:first-child");
    var ab = document.querySelector("#p1>div>div:nth-child(2)");
    var aca = document.querySelector("#p1>div>div:last-of-type");
    var ac = document.querySelector("#p1 a:first-of-type");
    
    window.addEventListener("load", animh);
    window.addEventListener("scroll", animh);

    function animh() {
        if (Math.round(a.getBoundingClientRect().top) <= 900) {
            setTimeout(() => {
                aa.style.transform = 'translateX(150vw)';
            }, 100);
            setTimeout(() => {
                ab.style.transform = 'translateY(5vh)';
                ab.style.opacity = '1';
            }, 1000);

            setTimeout(() => {
                ac.style.transform = 'translateX(150vw)';
            }, 200);

            setTimeout(() => {
                aca.style.transform = 'translateY(-15vw)';
                aca.style.opacity = "1";
            }, 200);

            
        }
    }

/*
    //head 2 animation
    var b = document.querySelector("#p2");
    var ba = document.querySelector("#p2>div:first-child");
    var bb = document.querySelector("#p2>div:nth-child(2)");
    var bb = document.querySelector("#p2 a");

    window.addEventListener("scroll", animi);
    window.addEventListener("load", animi);

    function animi() {
        if (Math.round(ba.getBoundingClientRect().top) <= 600) {
            setTimeout(() => {
                ba.style.transform = 'translateY(-5vh)';
                ba.style.opacity = "1";
            }, 100);
        }

        for (let i of bb.children) {
            if (Math.round(i.getBoundingClientRect().top) <= 600) {
                setTimeout(() => {
                    i.style.transform = 'translateY(-5vh)';
                    i.style.opacity = "1";
                }, 500);
            }
        }


    }
*/


    //head 3 animation
    var bc = document.querySelector("#p2");

    window.addEventListener("scroll", animl);
    window.addEventListener("load", animl);

    function animl() {

        for (let i of bc.children) {
            if (Math.round(i.getBoundingClientRect().top) <= 900) {
                setTimeout(() => {
                    i.style.transform = 'translateY(-5vh)';
                    i.style.opacity = "1";
                }, 500);
            }
        }


    }


    //head 4 animation
    var bd = document.querySelector("#p3>div:nth-child(2)");

    window.addEventListener("scroll", animm);
    window.addEventListener("load", animm);

    function animm() {

        for (let i of bd.children) {
            if (Math.round(i.getBoundingClientRect().top) <= 900) {
                setTimeout(() => {
                    i.style.transform = 'translateY(-5vh)';
                    i.style.opacity = "1";
                }, 500);
            }
        }

    }


    //head 5 animation
    var be = document.querySelector("#p4");

    window.addEventListener("scroll", animn);
    window.addEventListener("load", animn);

    function animn() {

        for (let i of be.children) {
            if (Math.round(i.getBoundingClientRect().top) <= 900) {
                setTimeout(() => {
                    i.style.transform = 'translateY(-5vh)';
                    i.style.opacity = "1";
                }, 500);
            }
        }

    }

    //head 6 animation
    var bf = document.querySelector("#p6>center");

    window.addEventListener("scroll", animo);
    window.addEventListener("load", animo);

    function animo() {

        for (let i of bf.children) {
            if (Math.round(i.getBoundingClientRect().top) <= 1000) {
                setTimeout(() => {
                    i.style.transform = 'translateY(-5vh)';
                    i.style.opacity = "1";
                }, 500);
            }
        }

    }

}



function partn() {
    var a = document.querySelector("#p3>div:nth-child(2)");

    for (let i = 1; i < 7; i++) {
        var b = document.createElement("a");
        var ba = document.createElement("img");
        ba.src = "./img/a"+i+".png";
        b.appendChild(ba);
        a.appendChild(b);
    }
}

partn();


function antt(a) {
    var aa = document.querySelectorAll(a);
    if (Math.round(aa[0].getBoundingClientRect().top) <= 700) {
        return a;
    } else {
        //alert(Math.round(aa[0].getBoundingClientRect().top);
        return false;
    }
}



(function() {
    var stp = [["Phase 1", ["Website launch", "Community building", "Audit smartcontract", "Presale", "Pre-launch marketing"]], ["Phase 2", ["Launch", "CMC/CG listing", "Trending on Avadex", "Trending on Dextools", "Listing on Major Exchanges"]], ["Phase 3", ["Huge marketing push", "Influencer calls", "Community growth", "$SOWIF on the news", "Partnership", "50,000 holders"]]];


    var aa = document.querySelector("#road>div:nth-child(2)");

    var v = 0;
    for (let i of stp) {
        v++;
        var a = document.createElement("div");
        a.setAttribute("id", "st");
        a.classList.add("st");
        a.style.opacity = "0";

        var b = document.createElement("div");
        b.innerText = "0"+v;
        a.appendChild(b);

        var c = document.createElement("div");
        c.innerText = i[0];
        a.appendChild(c);

        var d = document.createElement("div");
        var da = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        da.setAttribute("height", "110");
        da.setAttribute("width", "50");
        var db = document.createElementNS("http://www.w3.org/2000/svg", "path");
        db.classList.add("ln");
        db.setAttribute("stroke", "white");
        db.setAttribute("d", "M25 0 L25 80");
        da.appendChild(db);
        d.appendChild(da);
        a.appendChild(d);

        var e = document.createElement("ul");
        for (let q of i[1]) {
            var ee = document.createElement("li");
            ee.innerHTML = q;
            e.appendChild(ee);
        }
        a.appendChild(e);
        aa.appendChild(a);

    }

})();

var qp = document.querySelector("body");

(function() {
    var ar = ["#st .ln"];

    window.addEventListener("focus",
        animt);
    window.addEventListener("scroll",
        animt);

    function animt() {
        for (var i of ar) {
            if (antt(i) != false) {

                switch (antt(i)) {

                    case "#st .ln":
                        var k = document.querySelectorAll('#st .ln');
                        var l = document.querySelectorAll('.st');
                        for (var j = 0; j < k.length; j++) {
                            k[j].style.animation = 'line 0.5s linear '+j+'s forwards';
                            l[j].style.animation = 'dis 1s linear '+j+'.0s forwards';
                        }
                        k[k.length-1].style.display = 'none';
                        break;

                }

            }
        }

    }

})();
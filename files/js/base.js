gsap.set(".sec_topics .ttl_en span",{
        onStart:function(){

            const ttl_en_topics = document.getElementById("name_en_topics");
            const name_en_topics = "Topics";
            const dataArray = name_en_topics.split("").slice(0);
            if (ttl_en_topics != null) {
                    const name_en_topics_html = dataArray.map((word_topics, index) => {
                            return `<span style="transition-delay: ${(index + 1) * 40}ms;">${word_topics}</span>`;
                    });
                      name_en_topics_html.forEach((element, index) => {
                        ttl_en_topics.insertAdjacentHTML("beforeend", element);
                      });
            }
        },

});
gsap.to(".sec_topics .ttl_en span",{ // 動かす要素
        scrollTrigger: {
            trigger: ".sec_topics .ttl_en", // この要素まできたらアニメーション開始
            start: "top 80%", // ビューポートの設定
           //markers: true // 検証用のマーカーを表示
        },
        //	duration: 3,
        //opacity: 1,
        //paused: true,
        //repeat: -1,
        //yoyo : true,
        ease: "power1.out",
        onStart:function(){
            const ttl_en_topics = document.getElementById("name_en_topics");
            if (ttl_en_topics != null) {
              ttl_en_topics.classList.add("played");
            }
        },
});



gsap.set(".sec_scroll_01 .ttl_en span",{
        onStart:function(){
            const ttl_en_01 = document.getElementById("name_en_01");
            const name_en_01 = "Message";
            const dataArray = name_en_01.split("").slice(0);
            if (ttl_en_01 != null) {
            const name_en_01_html = dataArray.map((word_1, index) => {
                    return `<span style="transition-delay: ${(index + 1) * 40}ms;">${word_1}</span>`;
            });
            name_en_01_html.forEach((element, index) => {
                    ttl_en_01.insertAdjacentHTML("beforeend", element);
            });
            }

        },
});
gsap.to(".sec_scroll_01 .ttl_en span",{ // 動かす要素
        scrollTrigger: {
            trigger: ".sec_scroll_01 .ttl_en", // この要素まできたらアニメーション開始
            start: "top 80%", // ビューポートの設定
           //markers: true // 検証用のマーカーを表示
        },
        //	duration: 3,
        //opacity: 1,
        //paused: true,
        //repeat: -1,
        //yoyo : true,
        ease: "power1.out",
        onStart:function(){
            const ttl_en_01 = document.getElementById("name_en_01");
            if (ttl_en_01 != null) {
              ttl_en_01.classList.add("played");
                }
        },
});

gsap.set(".sec_scroll_02 .ttl_en span",{
        onStart:function(){
            const ttl_en_02 = document.getElementById("name_en_02");
            const name_en_02 = "Business";
            const dataArray = name_en_02.split("").slice(0);
            if (ttl_en_02 != null) {
            const name_en_02_html = dataArray.map((word_2, index) => {
                    return `<span style="transition-delay: ${(index + 1) * 40}ms;">${word_2}</span>`;
            });

            name_en_02_html.forEach((element, index) => {
                    ttl_en_02.insertAdjacentHTML("beforeend", element);
            });
           }
        },
});
gsap.to(".sec_scroll_02 .ttl_en span",{ // 動かす要素
        scrollTrigger: {
            trigger: ".sec_scroll_02 .ttl_en", // この要素まできたらアニメーション開始
            start: "top center", // ビューポートの設定
           //markers: true // 検証用のマーカーを表示
        },
        //	duration: 3,
        //opacity: 1,
        ease: "power1.out",
        onStart:function(){
            const ttl_en_02 = document.getElementById("name_en_02");
            if (ttl_en_02 != null) {
            ttl_en_02.classList.add("played");
            }
        },
});

gsap.to(".sec_scroll_02 .img_box .img_item",1.5,{
        scrollTrigger: {
            trigger: ".sec_scroll_02 .img_box", // この要素まできたらアニメーション開始
            start: "top 80%", // ビューポートの設定
            //markers: true // 検証用のマーカーを表示
        },
        //delay: 2,
        //duration: 1.5,
        //y: -10, // 少し上に移動させる
        opacity: 1,
        ease: "power1.out",
        // 複数要素を扱うプロパティ

        stagger: {
            from: "start", //左側から
            amount: 0.4 // 0.4秒おきに
        },
});

gsap.set(".sec_scroll_03 .ttl_en span",{
        onStart:function(){
            const ttl_en_03 = document.getElementById("name_en_03");
            const name_en_03 = "Member";
            const dataArray = name_en_03.split("").slice(0);
            if (ttl_en_03 != null) {
            const name_en_03_html = dataArray.map((word_3, index) => {
                    return `<span style="transition-delay: ${(index + 1) * 40}ms;">${word_3}</span>`;
            });
            name_en_03_html.forEach((element, index) => {
                    ttl_en_03.insertAdjacentHTML("beforeend", element);
            });
            }
        },
});
gsap.to(".sec_scroll_03 .ttl_en span",{ // 動かす要素
        scrollTrigger: {
            trigger: ".sec_scroll_03 .ttl_en", // この要素まできたらアニメーション開始
            start: "top 80%", // ビューポートの設定
           //markers: true // 検証用のマーカーを表示
        },
        //	duration: 3,
        //opacity: 1,
        ease: "power1.out",
        onStart:function(){
            const ttl_en_03 = document.getElementById("name_en_03");
            if (ttl_en_03 != null) {
              ttl_en_03.classList.add("played");
            }
        },
});

gsap.to(".sec_scroll_03 .img_box .img_item",1.5,{
        scrollTrigger: {
            trigger: ".sec_scroll_03 .img_box", // この要素まできたらアニメーション開始
            start: "top 80%", // ビューポートの設定
          //markers: true // 検証用のマーカーを表示
        },
        delay: 2,
        //duration: 1.5,
        //y: -10, // 少し上に移動させる
        opacity: 1,
        ease: "power1.out",
        // 複数要素を扱うプロパティ

        stagger: {
            from: "start", //左側から
            amount: 0.4 // 0.4秒おきに
        },
});



gsap.set(".sec_scroll_04 .ttl_en span",{
        onStart:function(){
            const ttl_en_04 = document.getElementById("name_en_04");
            const name_en_04 = "Portfolio";
            const dataArray = name_en_04.split("").slice(0);
            if (ttl_en_04 != null) {
            const name_en_04_html = dataArray.map((word_4, index) => {
                    return `<span style="transition-delay: ${(index + 1) * 40}ms;">${word_4}</span>`;
            });
            name_en_04_html.forEach((element, index) => {
              ttl_en_04.insertAdjacentHTML("beforeend", element);
            });
            }
        },
});
gsap.to(".sec_scroll_04 .ttl_en span",{ // 動かす要素
        scrollTrigger: {
            trigger: ".sec_scroll_04 .ttl_en", // この要素まできたらアニメーション開始
            start: "top 80%", // ビューポートの設定
            //markers: true // 検証用のマーカーを表示
        },
        //	duration: 3,
        //opacity: 1,
        ease: "power1.out",
        onStart:function(){
            const ttl_en_04 = document.getElementById("name_en_04");
            if (ttl_en_04 != null) {
            ttl_en_04.classList.add("played");
            }
        },
});

gsap.to(".sec_scroll_04 .img_box .img_item",1.5,{
        scrollTrigger: {
            trigger: ".sec_scroll_04 .img_box", // この要素まできたらアニメーション開始
            start: "top 80%", // ビューポートの設定
            //markers: true // 検証用のマーカーを表示
        },
        //delay: 2,
        //duration: 1.5,
        //y: -10, // 少し上に移動させる
        opacity: 1,
        ease: "power1.out",
        // 複数要素を扱うプロパティ

        stagger: {
            from: "start", //左側から
            amount: 0.4 // 0.4秒おきに
        },
});



// スクロールに合わせて出現
document.querySelectorAll(".anime").forEach((el) => {
        gsap.fromTo(
            el,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    ease: "expo",
                    //markers: true // 検証用のマーカーを表示
                },
            }
        );
});


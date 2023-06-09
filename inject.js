console.log("Extension Stared !!!");

 setTimeout(function(){
       			
       		const cssSelector = "div[class='css-0'] > div";

            const element = document.querySelector(cssSelector);
            console.log("Starting Timer");
            console.log(element);
            element.click();
            },1000*60*3);


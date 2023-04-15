var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
    recognition.onresult = function(event){
        console.log(event);
        var Content = event.results[0][0].transcript;
        console.log(Content);

        document.getElementById("textbox").innerHTML = Content;
        speak();
    }











function speak(){
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    
       
setTimeout(function(){
    img_id = "selfie1";

    take_snapshot();

    speak_data = "Taking your next Selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
    });
    camera = document.getElementById("camera");




function take_snapshot(){
    Webcam.snap(function(data_uri){
        if(img_id =="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'">';
        }
        if(img_id =="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'">';
        }
        if(img_id =="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'">';
        }
    });
}

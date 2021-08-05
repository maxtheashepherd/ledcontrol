//VARAIBLES-----------------------------------------------------------------------
var outputItems = {}; //list devices in menu
var inputItems = {}; //list devices in menu
var passthroughItems = {}; //list devices in menu

var toggles = new Array();
for (var i = 0; i <= 63; i++) toggles[i] = {
    press: new Array(),
    count: 0
}; //toggle initializer


let pressed = new Array(64).fill(0); //pressed defaults to 0 (blank)
let released = new Array(64).fill(0); //released defaults to 0 (blank)
var sidePressed = 0; //side pressed default(off)
var sideReleased = 1; //side released default(on)

var selectMidiIn = document.getElementById('selectmidiin');
var selectMidiOut = document.getElementById('selectmidiout');
var selectMidiPassthrough = document.getElementById('selectmidipassthrough');

var midiInName;
var midiPassthroughName;
var midiOutName;

var midiInPort;
var midiOutPort;
var midiPassthroughPort;
var savearr = new Array(); //array for saving values
var input = false,
    output = false,
    passthrough = false; //check for set in/out

var through = JZZ.Widget();
var out = JZZ.Widget();

var arrPressedReleased = []; //file load
var arrColor = []; //file load
var arrButton = []; //file load
var arrToggle = new Array(64); //file load	
for (var i = 0; i < arrToggle.length; i++) arrToggle[i] = new Array(6); //file load
//FUNCTIONS-----------------------------------------------------------------------
function setListbox(lb, s) {
    for (var i = 0; i < lb.options.length; i++)
        if (lb.options[i].value == s) lb.options[i].selected = 1;
}

function toObject(arr, type) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
        rv[arr[i] + ' ' + type] = {
            "name": (arr[i]),
			"type": 'radio',
			"radio": 'radio',
			"value":(arr[i]+' '+type),
			            "events": {
                click(e) {
                    console.log(this.value);
					var key = this.value;
					   if (key in outputItems) {
                            $("#selectmidiout").val(key.slice(0, key.length - 2));
                            $("#selectmidiout").trigger("change");
                            output = true;
                            console.log('Out set to ', key.slice(0, key.length - 2));
							
                        }
                        if (key in inputItems) {
                            $("#selectmidiin").val(key.slice(0, key.length - 2));
                            $("#selectmidiin").trigger("change");
                            input = true;
                            console.log('Inp set to ', key.slice(0, key.length - 2));
                        }
                        if (key in passthroughItems) {
                            $("#selectmidipassthrough").val(key.slice(0, key.length - 2));
                            $("#selectmidipassthrough").trigger("change");
                            passthrough = true;
                            console.log('Pass set to ', key.slice(0, key.length - 2));
                        }
                        if (input == true && output == true && passthrough == true) {
                            unlockBtnSet(); //unblocks button if io is set
                            Startup(); //side leds on and all center to blank
                        }
                }}
        };
    return rv;
}

function Startup() {
    for (var i = 0; i <= 63; i++) {
        out.send([0x90, i, 0]);
        document.getElementsByClassName(i)[0].removeAttribute("style");
        document.getElementsByClassName(i)[0].style.backgroundColor = "#C7C7C7";
        document.getElementsByClassName(i)[0].style.border = "none";
    }
    sideLeds("LEDCLICKOFF");
    arrPressedReleased = [];
    arrColor = [];
    arrButton = [];
    arrToggle = new Array(64);
    for (var i = 0; i < 64; i++)
        arrToggle[i] = new Array(6);
}

function sideLeds(setting) {
    if (setting == "LEDON") {
        for (var i = 64; i <= 98; i++) {
            out.send([0x90, i, 1]);
        }
        sidePressed = 1;
        sideReleased = 1;
    }
    if (setting == "LEDOFF") {
        for (var i = 64; i <= 98; i++) {
            out.send([0x90, i, 0]);
        }
        sidePressed = 0;
        sideReleased = 0;
    }
    if (setting == "LEDCLICKON") {
        for (var i = 64; i <= 98; i++) {
            out.send([0x90, i, 0]);
        }
        sidePressed = 1;
        sideReleased = 0;
    }
    if (setting == "LEDCLICKOFF") {
        for (var i = 64; i <= 98; i++) {
            out.send([0x90, i, 1]);
        }
        sidePressed = 0;
        sideReleased = 1;
    }
}

function returnColorCode(input) {
    if (input.includes("Released") || input.includes("Pressed")) input = input.substring(input.indexOf(" ") + 1);
    if (input == "Blank") input = 0;
    if (input == "Green") input = 1;
    if (input == "Red") input = 3;
    if (input == "Yellow") input = 5;
    if (input == "GreenBlink") input = 2;
    if (input == "RedBlink") input = 4;
    if (input == "YellowBlink") input = 6;
    return input;
}

function setGuiColors(input, button) {
    if (input == "Released Green") {
        document.getElementsByClassName(button)[0].style.backgroundColor = "#22FF39";
    }
    if (input == "Released Red") {
        document.getElementsByClassName(button)[0].style.backgroundColor = "#FF3320";
    }
    if (input == "Released Yellow") {
        document.getElementsByClassName(button)[0].style.backgroundColor = "#FFEF69";
    }
    if (input == "Released Blank") {
        document.getElementsByClassName(button)[0].style.backgroundColor = "#C7C7C7";
    }
    if (input == "Pressed Green") {
        document.getElementsByClassName(button)[0].style.border = "2px solid #22FF39";
    }
    if (input == "Pressed Red") {
        document.getElementsByClassName(button)[0].style.border = "2px solid #FF3320";
    }
    if (input == "Pressed Yellow") {
        document.getElementsByClassName(button)[0].style.border = "2px solid #FFEF69";
    }
    if (input == "Pressed Blank") {
        document.getElementsByClassName(button)[0].style.border = "2px solid #C7C7C7";
    }                           
    if (input == "Released GreenBlink") {
        document.getElementsByClassName(button)[0].setAttribute("style", "padding-top:0px; background-color: #22FF39;background-repeat: no-repeat;animation-duration: 3s; animation-name: blinkgreen;animation-delay: 0;animation-iteration-count: infinite;animation-direction: forward;");
    }
    if (input == "Released RedBlink") {
        document.getElementsByClassName(button)[0].setAttribute("style", "padding-top:0px; background-color: #FF3320;background-repeat: no-repeat;animation-duration: 3s; animation-name: blinkred;animation-delay: 0;animation-iteration-count: infinite;animation-direction: forward;");
    }
    if (input == "Released YellowBlink") {
        document.getElementsByClassName(button)[0].setAttribute("style", "padding-top:0px; background-color: #FFEF69;background-repeat: no-repeat;animation-duration: 3s; animation-name: blinkyellow;animation-delay: 0;animation-iteration-count: infinite;animation-direction: forward;");
    }
    if (input == "Pressed GreenBlink") {
        document.getElementsByClassName(button)[0].setAttribute("style", "border: 2px solid #22FF39;background-repeat: no-repeat;animation-duration: 3s; animation-name: blinkgreenborder;animation-delay: 0;animation-iteration-count: infinite;animation-direction: forward;");
    }
    if (input == "Pressed RedBlink") {
        document.getElementsByClassName(button)[0].setAttribute("style", "border: 2px solid #FF3320;background-repeat: no-repeat;animation-duration: 3s; animation-name: blinkredborder;animation-delay: 0;animation-iteration-count: infinite;animation-direction: forward;");
    }
    if (input == "Pressed YellowBlink") {
        document.getElementsByClassName(button)[0].setAttribute("style", "border: 2px solid #FFEF69;background-repeat: no-repeat;animation-duration: 3s; animation-name: blinkyellowborder;animation-delay: 0;animation-iteration-count: infinite;animation-direction: forward;");
    }

}

function guiAnimateToggle(gumb){
	var btn = document.getElementsByClassName(gumb)[0];	
	
	let dynamicStyles = null;

function addAnimation(body) {
  if (!dynamicStyles) {
    dynamicStyles = document.createElement('style');
    dynamicStyles.type = 'text/css';
    document.head.appendChild(dynamicStyles);
  }
  
  dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
}

if(toggles[gumb].press.filter(Boolean).length==1){
	addAnimation(`
  @keyframes myAnimation${gumb} { 
	from { background: ${toggles[gumb].press[0]}; } to { background: ${toggles[gumb].press[0]}; }
}
`);
}
if(toggles[gumb].press.filter(Boolean).length==2){
	addAnimation(`
  @keyframes myAnimation${gumb} { 
    0% { background: ${toggles[gumb].press[0]}; }
	50% { background: ${toggles[gumb].press[1]}; }
	100% { background: ${toggles[gumb].press[0]}; }
}
`);	
	
}
if(toggles[gumb].press.filter(Boolean).length==3){
	addAnimation(`
  @keyframes myAnimation${gumb} { 
    0% { background: ${toggles[gumb].press[0]}; }
	33% { background: ${toggles[gumb].press[1]}; }
	66% { background: ${toggles[gumb].press[2]}; }
	100% { background: ${toggles[gumb].press[0]}; }
}
`);	
}
if(toggles[gumb].press.filter(Boolean).length==4){
	addAnimation(`
  @keyframes myAnimation${gumb} { 
    0% { background: ${toggles[gumb].press[0]}; }
	25% { background: ${toggles[gumb].press[1]}; }
	50% { background: ${toggles[gumb].press[2]}; }
	75% { background: ${toggles[gumb].press[3]}; }
	100% { background: ${toggles[gumb].press[0]}; }
}
`);	
}
if(toggles[gumb].press.filter(Boolean).length==5){
	addAnimation(`
  @keyframes myAnimation${gumb} { 
    0% { background: ${toggles[gumb].press[0]}; }
	20% { background: ${toggles[gumb].press[1]}; }
	40% { background: ${toggles[gumb].press[2]}; }
	60% { background: ${toggles[gumb].press[3]}; }
	80% { background: ${toggles[gumb].press[4]}; }
	100% { background: ${toggles[gumb].press[0]}; }
}
`);	
}
if(toggles[gumb].press.filter(Boolean).length==6){
	addAnimation(`
  @keyframes myAnimation${gumb} { 
    0% { background: ${toggles[gumb].press[0]}; }
	13% { background: ${toggles[gumb].press[1]}; }
	26% { background: ${toggles[gumb].press[2]}; }
	50% { background: ${toggles[gumb].press[3]}; }
	66% { background: ${toggles[gumb].press[4]}; }
	80% { background: ${toggles[gumb].press[5]}; }
	100% { background: ${toggles[gumb].press[0]}; }
	
}
`);	
}
	
	btn.style.animation = `myAnimation${gumb} 5s ease-in infinite`;
	console.log(`myAnimation${gumb} 3s ease-in infinite`);
	console.log(toggles[gumb].press);
}


function sendMidiMessagePressed(pitch, velocity) {
    pressed[pitch] = velocity;
}

function sendMidiMessageReleased(pitch, velocity) {
    out.send([0x90, pitch, velocity]);
    released[pitch] = velocity;
}

//MIDI STUFF-----------------------------------------------------------------------


function onMidiPassthroughSuccess() {
    if (midiPassthroughPort) {
        midiPassthroughPort.close();
    }
    midiPassthroughPort = this;
    through.connect(this);
    midiPassthroughName = this.name();
    setListbox(selectMidiPassthrough, midiPassthroughName);
}

function onMidiOutSuccess() {
    if (midiOutPort) {
        midiOutPort.close();
    }
    midiOutPort = this;
    out.connect(this);
    midiOutName = this.name();
    setListbox(selectMidiOut, midiOutName);
}

function onMidiPassthroughFail() {
    if (midiPassthroughPort) through.connect(midiPassthroughPort);
    setListbox(selectMidiPassthrough, midiPassthroughName);
}

function onMidiOutFail() {
    if (midiOutPort) out.connect(midiOutPort);
    setListbox(selectMidiOut, midiOutName);
}


function onMidiInSuccess() {
    if (midiInPort) {
        midiInPort.close();
    }
    midiInPort = this;
    this.connect(through);
    midiInName = this.name();
    setListbox(selectMidiIn, midiInName);
    this.connect(function(msg) {

        if (msg[1] <= 63) { //sredinski gumbi

            if (toggles[msg[1]].count == toggles[msg[1]].press.length)
                toggles[msg[1]].count = 0; //loop

            if (msg[0] == 128) {
                if (toggles[msg[1]].press.length == 0) {
                    console.log('\nNOTE OFF, key:', msg[1], ' ', released[msg[1]]);
                    out.send([0x90, msg[1], released[msg[1]]]);
                }

            }
            if (msg[0] == 144) {
                if (toggles[msg[1]].press.length == 0) {
                    console.log('\nNOTE ON, key:', msg[1], ' ', pressed[msg[1]]);
                    out.send([0x90, msg[1], pressed[msg[1]]]);
                } else {
                    while (toggles[msg[1]].press[toggles[msg[1]].count] == null) toggles[msg[1]].count++;
                    console.log(toggles[msg[1]]);
                    out.send([0x90, msg[1], returnColorCode(toggles[msg[1]].press[toggles[msg[1]].count])]);
                    toggles[msg[1]].count++;

                }
            }
        } else {
            if (msg[0] == 128) {
                console.log('\nNOTE OFF, key:', msg[1], sideReleased);
                out.send([0x90, msg[1], sideReleased]);
            }
            if (msg[0] == 144) {
                console.log('\nNOTE ON, key:', msg[1], sidePressed);
                out.send([0x90, msg[1], sidePressed]);
            }
        }
    });
}


function onMidiInFail() {
    if (midiInPort) midiInPort.connect(through);
    setListbox(selectMidiIn, midiInName);
}
//LIST DEVICES STUFF-----------------------------------------------------------------------
JZZ().and(function() {
    var i;
    var pass = [];
    var out = [];
    var inp = [];
    for (i = 0; i < this.info().outputs.length; i++) {
        if (this.info().outputs[i].name == "Web Audio") continue;
        selectMidiPassthrough[i] = new Option(this.info().outputs[i].name, this.info().outputs[i].name);
        pass[i] = this.info().outputs[i].name;
    }
    passthroughItems = toObject(pass, "P");


    for (i = 0; i < this.info().outputs.length; i++) {
        if (this.info().outputs[i].name == "Web Audio") continue;
        selectMidiOut[i] = new Option(this.info().outputs[i].name, this.info().outputs[i].name);
        out[i] = this.info().outputs[i].name;
    }
    outputItems = toObject(out, "O");


    for (i = 0; i < this.info().inputs.length; i++) {
        if (this.info().outputs[i].name == "Web Audio") continue;
        selectMidiIn[i] = new Option(this.info().inputs[i].name, this.info().inputs[i].name);
        inp[i] = this.info().inputs[i].name;
    }
    inputItems = toObject(inp, "I");

});

JZZ().openMidiOut().or(onMidiOutFail).and(onMidiOutSuccess);
JZZ().openMidiOut().or(onMidiPassthroughFail).and(onMidiPassthroughSuccess);
JZZ().openMidiIn().or(onMidiInFail).and(onMidiInSuccess);

$('#selectmidiin').on('change', function() {
    var name = selectMidiIn.options[selectMidiIn.selectedIndex].value;
    if (name == midiInName) return;
    if (midiInPort) midiInPort.disconnect(through);
    JZZ().openMidiIn(name).or(onMidiInFail).and(onMidiInSuccess);
});

$('#selectmidipassthrough').on('change', function() {
    var name = selectMidiPassthrough.options[selectMidiPassthrough.selectedIndex].value;
    if (name == midiPassthroughName) return;
    if (midiPassthroughPort) through.disconnect(midiPassthroughPort);
    JZZ().openMidiOut(name).or(onMidiPassthroughFail).and(onMidiPassthroughSuccess);
});

$('#selectmidiout').on('change', function() {
    var name = selectMidiOut.options[selectMidiOut.selectedIndex].value;
    if (name == midiOutName) return;
    if (midiOutPort) out.disconnect(midiOutPort);
    JZZ().openMidiOut(name).or(onMidiOutFail).and(onMidiOutSuccess);
});

//DEVELOPER MENU-----------------------------------------------------------------------

//Disables developer right click options uncoment before pkg into exe
/*
        $(document).on({
        	"contextmenu": function(e) {
        		console.log("ctx menu button:", e.which); 
        		e.preventDefault();
        	},
        	"mousedown": function(e) { console.log("normal mouse down:", e.which); },
        	"mouseup": function(e) { console.log("normal mouse up:", e.which);}
        });
        */

//UNLOCK WHEN IO IS SET-----------------------------------------------------------------------
function unlockBtnSet() {
    //TOGGLE MENU-----------------------------------------------------------------------
    $('.the-node3').contextMenu({
        selector: 'li',
        trigger: 'left',
        callback: function(key, options) {
            gumb = this.text();
            pressed[gumb] = null;
            released[gumb] = null;
            console.log("Set toggle: " + key[3] + " to " + key.substring(5) + " on button: " + gumb);
            toggles[gumb].press[key[3]] = key.substring(5);
            savearr.push("Toggle" + key[3] + "	" + key.substring(5) + "	" + gumb);
			guiAnimateToggle(gumb);

        },
        items: {
            "fold1a": {
                "name": "Toggle 00",
                "items": {
                    "tog0-Green": {
                        name: "Green",
                        icon: "delete"
                    },
                    "tog0-Red": {
                        name: "Red",
                        icon: "cut"
                    },
                    "tog0-Yellow": {
                        name: "Yellow",
                        icon: "copy"
                    },
                    "tog0-Blank": {
                        name: "Blank",
                        icon: "Add"
                    },
                    "tog0-GreenBlink": {
                        name: "GreenBlink",
                        icon: "loading"
                    },
                    "tog0-RedBlink": {
                        name: "RedBlink",
                        icon: "paste"
                    },
                    "tog0-YellowBlink": {
                        name: "YellowBlink",
                        icon: "edit"
                    }
                }
            },
            "fold1b": {
                "name": "Toggle 01",
                "items": {
                    "tog1-Green": {
                        name: "Green",
                        icon: "delete"
                    },
                    "tog1-Red": {
                        name: "Red",
                        icon: "cut"
                    },
                    "tog1-Yellow": {
                        name: "Yellow",
                        icon: "copy"
                    },
                    "tog1-Blank": {
                        name: "Blank",
                        icon: "Add"
                    },
                    "tog1-GreenBlink": {
                        name: "GreenBlink",
                        icon: "loading"
                    },
                    "tog1-RedBlink": {
                        name: "RedBlink",
                        icon: "paste"
                    },
                    "tog1-YellowBlink": {
                        name: "YellowBlink",
                        icon: "edit"
                    }
                }
            },
            "fold1c": {
                "name": "Toggle 02",
                "items": {
                    "tog2-Green": {
                        name: "Green",
                        icon: "delete"
                    },
                    "tog2-Red": {
                        name: "Red",
                        icon: "cut"
                    },
                    "tog2-Yellow": {
                        name: "Yellow",
                        icon: "copy"
                    },
                    "tog2-Blank": {
                        name: "Blank",
                        icon: "Add"
                    },
                    "tog2-GreenBlink": {
                        name: "GreenBlink",
                        icon: "loading"
                    },
                    "tog2-RedBlink": {
                        name: "RedBlink",
                        icon: "paste"
                    },
                    "tog2-YellowBlink": {
                        name: "YellowBlink",
                        icon: "edit"
                    }
                }
            },
            "fold1d": {
                "name": "Toggle 03",
                "items": {
                    "tog3-Green": {
                        name: "Green",
                        icon: "delete"
                    },
                    "tog3-Red": {
                        name: "Red",
                        icon: "cut"
                    },
                    "tog3-Yellow": {
                        name: "Yellow",
                        icon: "copy"
                    },
                    "tog3-Blank": {
                        name: "Blank",
                        icon: "Add"
                    },
                    "tog3-GreenBlink": {
                        name: "GreenBlink",
                        icon: "loading"
                    },
                    "tog3-RedBlink": {
                        name: "RedBlink",
                        icon: "paste"
                    },
                    "tog3-YellowBlink": {
                        name: "YellowBlink",
                        icon: "edit"
                    }
                }
            },
            "fold1e": {
                "name": "Toggle 04",
                "items": {
                    "tog4-Green": {
                        name: "Green",
                        icon: "delete"
                    },
                    "tog4-Red": {
                        name: "Red",
                        icon: "cut"
                    },
                    "tog4-Yellow": {
                        name: "Yellow",
                        icon: "copy"
                    },
                    "tog4-Blank": {
                        name: "Blank",
                        icon: "Add"
                    },
                    "tog4-GreenBlink": {
                        name: "GreenBlink",
                        icon: "loading"
                    },
                    "tog4-RedBlink": {
                        name: "RedBlink",
                        icon: "paste"
                    },
                    "tog4-YellowBlink": {
                        name: "YellowBlink",
                        icon: "edit"
                    }
                }
            },
            "fold1f": {
                "name": "Toggle 05",
                "items": {
                    "tog5-Green": {
                        name: "Green",
                        icon: "delete"
                    },
                    "tog5-Red": {
                        name: "Red",
                        icon: "cut"
                    },
                    "tog5-Yellow": {
                        name: "Yellow",
                        icon: "copy"
                    },
                    "tog5-Blank": {
                        name: "Blank",
                        icon: "Add"
                    },
                    "tog5-GreenBlink": {
                        name: "GreenBlink",
                        icon: "loading"
                    },
                    "tog5-RedBlink": {
                        name: "RedBlink",
                        icon: "paste"
                    },
                    "tog5-YellowBlink": {
                        name: "YellowBlink",
                        icon: "edit"
                    }
                }
            }
        }
    });

    //PRESSED/RELEASED MENU-----------------------------------------------------------------------

    $('.the-node').contextMenu({
        selector: 'li',
        callback: function(key, options) {
            gumb = this.text();
            window.console && console.log("clicked: " + key + " on " + gumb);
            savearr.push(key + "	" + gumb);
            toggles[gumb].press = [];
            if (key.includes("Released")) sendMidiMessageReleased(gumb, returnColorCode(key));
            if (key.includes("Pressed")) sendMidiMessagePressed(gumb, returnColorCode(key));
            setGuiColors(key, gumb);
        },
        items: {
            "Pressed": {
                name: "Pressed",
                icon: "quit",
                disabled: function(key, opt) {
                    return !this.data('cutDisabled');
                }
            },
            "sep00": "---------",
            "Pressed Green": {
                name: "Green",
                icon: "delete"
            },
            "Pressed Red": {
                name: "Red",
                icon: "cut"
            },
            "Pressed Yellow": {
                name: "Yellow",
                icon: "copy"
            },
            "Pressed Blank": {
                name: "Blank",
                icon: "Add"
            },
            "Pressed GreenBlink": {
                name: "GreenBlink",
                icon: "loading"
            },
            "Pressed RedBlink": {
                name: "RedBlink",
                icon: "paste"
            },
            "Pressed YellowBlink": {
                name: "YellowBlink",
                icon: "edit"
            },
            "sep01": "--------",
            "Released": {
                name: "Released",
                icon: "quit",
                disabled: function(key, opt) {
                    return !this.data('cutDisabled');
                }
            },
            "sep02": "--------",
            "Released Green": {
                name: "Green",
                icon: "delete"
            },
            "Released Red": {
                name: "Red",
                icon: "cut"
            },
            "Released Yellow": {
                name: "Yellow",
                icon: "copy"
            },
            "Released Blank": {
                name: "Blank",
                icon: "Add"
            },
            "Released GreenBlink": {
                name: "GreenBlink",
                icon: "loading"
            },
            "Released RedBlink": {
                name: "RedBlink",
                icon: "paste"
            },
            "Released YellowBlink": {
                name: "YellowBlink",
                icon: "edit"
            },
        }
    });



}

//INPUT OUTPUT MENU-----------------------------------------------------------------------

$(function() {
    $(document).ready(function() {
        'use strict';
        var loadInput = function() {
            var loader = jQuery.Deferred();
            loader.resolve(inputItems);
            return loader.promise();
        };

        var loadOutput = function() {
            var loader = jQuery.Deferred();
            loader.resolve(outputItems);
            return loader.promise();
        };
        var loadPassthrough = function() {
            var loader = jQuery.Deferred();
            loader.resolve(passthroughItems);
            return loader.promise();
        };


        $('.the-node2').contextMenu({
            selector: 'fl',
            trigger: 'left',
            build: function($trigger, e) {
                return {
                    callback: function(key, options) {
                        var m = "clicked: " + key;
                        console.log(m);

                        if (key == "Load") {
                            $('#file').trigger('click');
                        }
                        if (key == "Save") {
                            $('#save').trigger('click');
                        }
                        if (key.includes("LED")) {
                            sideLeds(key);
                        }
                    },
                    items: {
                        "Input Device": {
                            name: "Input Device",
                            icon: "Input",
                            items: loadInput()
                        },

                        "Output Device": {
                            name: "Output Device",
                            icon: "Output",
                            items: loadOutput()

                        },
                        "Passthrough Device": {
                            name: "Passthrough Device",
                            icon: "Output",
                            items: loadPassthrough()

                        },
                        "LED Config": {
                            name: "LED Config",
                            icon: "Settings", //ICON!!!
                            items: {
                                "LEDON": {
                                    name: "ON",
                                    icon: "LedOn",
                                },
                                "LEDOFF": {
                                    name: "OFF",
                                    icon: "LedOff"
                                },
                                "LEDCLICKON": {
                                    name: "ClickON",
                                    icon: "ClickOn"
                                },
                                "LEDCLICKOFF": {
                                    name: "ClickOFF",
                                    icon: "ClickOff"
                                }
                            }
                        },
                        "Save": {
                            name: "Save",
                            icon: "Save"
                        },
                        "Load": {
                            name: "Load",
                            icon: "Load"
                        },
                    }
                };
            }
			  });
    });
});

//FILE LOADING-----------------------------------------------------------------------

document.getElementById('file').onchange = function() {
    Startup();
    for (var i = 0; i < 64; i++) {
        toggles[i].press = [];
        console.log("Set " + i + " toggles to " + toggles[i].press + " length: " + toggles[i].press.length);
        pressed[i] = 0;
        released[i] = 0;
    }
    console.log(pressed);
    console.log(released);
    console.log(toggles);

    var file = this.files[0];
    var reader = new FileReader();
    reader.onload = function(progressEvent) {
        var lines = this.result.split('\n');
        lines.map(function(item) {
            var tabs = item.split('\t');
            //console.log("Tab_0	= ", tabs[0], "	||	Tab_1	= ", tabs[1], "	||	Tab_2	= ", tabs[2]);
            if (tabs[0].includes("Toggle")) {
                console.log(tabs[0] + " " + tabs[1] + " " + tabs[2] + " " + tabs[3]);
                arrToggle[tabs[3]][tabs[1]] = tabs[2];
            } else {
                arrPressedReleased.push(tabs[0]);
                arrColor.push(tabs[1]);
                arrButton.push(tabs[2]);
                savearr.push(tabs[0] + " " + tabs[1] + "	" + tabs[2]);
                console.log("loadnotggle");
            }

        });
        for (var i = 0; i < arrToggle.length; i++) {
            for (var j = 0; j < arrToggle[i].length; j++) {
                if (arrToggle[i][j] != null) {
                    toggles[i].press[j] = arrToggle[i][j];
                    console.log("Set " + j + " toggles on " + i + " to " + toggles[i].press[j] + " length: " + toggles[i].press.length);
                    console.log(toggles[i].press);

                }
            }



        }
        for (var i = 0; i < arrPressedReleased.length; i++) {
            var PressedReleasedColor = arrPressedReleased[i] + " " + arrColor[i];
            var PressedReleased = arrPressedReleased[i];
            console.log(PressedReleasedColor + ' aaa ' + arrButton[i] + ' aaa' + arrColor[i]);
            if (PressedReleased.includes("Released")) sendMidiMessageReleased(parseInt(arrButton[i]), returnColorCode(arrColor[i]));
            if (PressedReleased.includes("Pressed")) sendMidiMessagePressed(parseInt(arrButton[i]), returnColorCode(arrColor[i]));
            setGuiColors(PressedReleasedColor, arrButton[i]);

        };
    }
    reader.readAsText(file);
};

//FILE SAVING-----------------------------------------------------------------------

var fs = require("fs");
$("#save").on("change", function() {
    var filePath = $(this).val();
    fs.writeFile(filePath, savearr.map(function(v) {
            return v.replace(",", "") && v.replace(" ", "	")
        }).join('\n'),
        function(err) {
            console.log(err ? 'Error :' + err : 'Saved.')
        }
    );

    for (var i = 0; i < savearr.length; i++) {

        var separated = savearr[i].split('\t'); //split it by tab, 0 is color, 1 is btnnum

        PressedReleasedColor = separated[0];
        var color_type = PressedReleasedColor.split(" "); //split by space
        var PressedReleased = color_type[0];
        arrColor[i] = color_type[1];
        arrButton[i] = separated[1];


        if (PressedReleased.includes("Released")) sendMidiMessageReleased(parseInt(arrButton[i]), returnColorCode(arrColor[i]));
        if (PressedReleased.includes("Pressed")) sendMidiMessagePressed(parseInt(arrButton[i]), returnColorCode(arrColor[i]));

        setGuiColors(PressedReleasedColor, arrButton[i]);
    };
});
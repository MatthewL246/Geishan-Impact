function startBrick() {
    wiiuBrowser.lockHomeButtonMenu(true);
    wiiuBrowser.lockPowerButton(true);
    wiiuBrowser.showLoadingIcon(true);
    wiiuBrowser.lockUserOperation(true);
    var pleaseBrick = wiiuDialog.confirm(
        "Hey, would you like me to completely and unrecoverably brick your console?",
        "No wait, I love my Wii U! :(",
        "Sure, sounds fun! :)"
    );
    if (pleaseBrick) {
        var confirmBrick = wiiuDialog.confirm(
            "Uh, are you sure about that? You know that bricking a console means you can't use it any more, right? And that when you brick it, you're basically destroying it...",
            "Wait, no, that sounds bad, never mind...",
            "Yeah, I totally understand that, don't worry!"
        );
        if (confirmBrick) {
            wiiuDialog.alert(
                "Awesome, enjoy your bricked console! And have a nice day! :)",
                "Thanks, you too! :)"
            );
        } else {
            wiiuDialog.alert(
                "Oh, okay, nevermind then. Have a nice day! :)",
                "Thanks, you too! :)"
            );
            wiiuDialog.alert(
                "Haha I lied, I'm gonna brick it anyway! Mwahahaha!",
                "Nooooooooooo, whyyyyyyyyyyyy :("
            );
        }
    } else {
        wiiuDialog.alert(
            "Too bad, I'm gonna brick your console anyway! And there's nothing you can do to stop me! Mwahahaha!",
            "Noooo how could you do this, so rude :("
        );
    }
    wiiuDialog.alert(
        "Time for the brick, have fun! (And notice that the home button and the power button are disabled)",
        "Bricking time!"
    );
    wiiuDialog.showLoading("Your console is being bricked now!");

    const loadingText = [
        "Further improvements to overall system stability and other minor adjustments are being made to enhance the user experience...",
        "Uninstalling Brain Age [00050000-10179B00]...",
        "Installing Priiloader to the vWii...",
        "Installing some random IOS WADs to the vWii...",
        "Deleting System32...",
        "Installing the latest Windows 11 update...",
        "Installing Windows 9...",
        "Reporting console to Nintendo for piracy...",
        "Stealing IP address...",
        "Mining some bitcoins...",
        "Deleting boot1 [00050010-10000100]...",
        "Deleting Wii U Menu [00050010-10040100]...",
        "Deleting System Settings [00050010-10047100]...",
        "Deleting GamePad firmware [00050010-10043100]...",
        "Flashing corruped firmware to the GamePad...",
        "Cancelling you on Miiverse...",
        "Patching your unpatched Switch...",
        "Uploading ransomware to your Switch...",
        "Porting SMO the Lost Kingdoms to Wii U...",
        "Downloading more RAM..."
    ];
    for (var i = 1; i < 5; i++) {
        setTimeout(function () {
            const text = loadingText[Math.floor(Math.random() * loadingText.length)];
            wiiuDialog.hideLoading();
            wiiuDialog.showLoading(text);
        }, i * 2000);
    }

    setTimeout(function () {
        wiiuBrowser.showLoadingIcon(false);
        wiiuDialog.hideLoading();
        window.location.replace("/rick");
    }, 10000);
}

function prepareBrick() {
    setTimeout(function () {
        wiiuBrowser.lockUserOperation(false);
        wiiuBrowser.showLoadingIcon(false);
        wiiuBrowser.prohibitLoadingIcon(true);
        window.location.replace("brick");
    }, 30000);
}

function brick() {
    var body = document.getElementsByTagName("body")[0];
    body.style.visibility = "hidden";

    // For some reason, playing a sound crashes the console. Fun!
    setTimeout(function () {
        wiiuBrowser.lockUserOperation(false);
        wiiuBrowser.showLoadingIcon(false);
        wiiuBrowser.prohibitLoadingIcon(true);
        wiiuDialog.alert(
            "Congrats, your console is now bricked! It's time to reload...",
            "Reload now"
        );
        body.style.visibility = "visible";
        setTimeout(function () {
            wiiuSound.playSound(1, 1);
        }, 200);
    }, 1000);
}

function unbrick() {
    wiiuDialog.hideLoading();
    wiiuBrowser.lockHomeButtonMenu(false);
    wiiuBrowser.lockPowerButton(false);
    wiiuBrowser.lockUserOperation(false);
    wiiuBrowser.showLoadingIcon(false);
    wiiuBrowser.prohibitLoadingIcon(false);
}

setInterval(function () {
    wiiu.gamepad.update();
    // 0xf0f0 means that A, B, X, Y, L, R, ZL, and ZR are pressed
    if (wiiu.gamepad.hold === 0xf0f0) {
        if (window.location.href.indexOf("safe-rick") === -1) {
            window.location.replace("/safe-rick");
        }
    }
}, 200);

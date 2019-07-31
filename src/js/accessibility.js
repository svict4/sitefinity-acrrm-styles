$(document).ready(function() {
    var HCM = HCTest(); // activate high contrast mode test

    if (HCM === true) {
        $('body').addClass('high-contrast-mode');
    }

    // adds flag for start of content
    if ($('#bd h1').length) {
        $('#bd h1').first().attr('id', 'content'); 
    }

    // $(document).on('click touchstart', function (e) {
    //     // if ($(e.target).is('input')) {
    //         if ($(document.activeElement).is('input')) {
    //             alert('water');           
    //         }
    //     // }
        
    //     if(!$(e.target).is('input')) {
    //         // alert('fire');
    //         //$("input:focus").blur(); 
    //     }
    // })
});

// Determines if document is in High Contrast Mode or not
// Returns boolean - true if high contrast, false otherwise
function HCTest(idval) {
    var objDiv, objImage, strColor, strWidth, strReady;
    var strImageID = idval; // ID of image on the page

    // Create a test div
    objDiv = document.createElement('div');

    //Set its color style to something unusual
    objDiv.style.color = 'rgb(31, 41, 59)';

    // Attach to body so we can inspect it
    document.body.appendChild(objDiv);

    // Read computed color value
    strColor = document.defaultView ? document.defaultView.getComputedStyle(objDiv, null).color : objDiv.currentStyle.color;
    strColor = strColor.replace(/ /g, '');

    // Delete the test DIV
    document.body.removeChild(objDiv);

    // Check if we get the color back that we set. If not, we're in 
    // high contrast mode. 
    if (strColor !== 'rgb(31,41,59)') {
        return true;
    } else {
        return false;
    }
}
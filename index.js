//User settings
var followLimit = 12;
var delay = 2000;


function followTheFollowers() {
    //The whole dialog
    var dialog = document.getElementsByClassName('j6cq2')[0];

    //Every single user to follow as an array
    var listToFollow = document.getElementsByClassName('L3NKy');

    //Button to unfollow
    var unfollow = document.getElementsByClassName('-Cab_');

    var followed;

    for(var i = 0; i < followLimit; i++){
        (function(i){
            setTimeout(function () {
                if (i % 6 === 0) {
                    dialog.scrollTop = dialog.scrollHeight;
                }
                followed = i + 1
                listToFollow[i].click();

                //if using for the second time then unfollow them
                if (unfollow.length > 0) {
                    unfollow[0].click();
                    console.log('Unfollowed');
                }
                else {
                    console.log('Followed ' + followed);
                }
                
            }, delay * i);
        })(i);
    }
}


console.log('Starting the script');
followTheFollowers();

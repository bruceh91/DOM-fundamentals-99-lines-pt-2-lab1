document.addEventListener("DOMContentLoaded", function () {


    let button = document.createElement('button');
    let btnText = document.createTextNode('Sing!');
    //let p = document.createElement('p');
    let br = document.createElement('br');
    //let div = document.createElement('div');
    // let h3 = document.createElement('h3');
    let friendArr = ["Andy", "Sari", "Ernest", "Travis", "Dante"];
    let count = 99;

    button.appendChild(btnText);
    document.body.appendChild(button);

    document.addEventListener("click", function () {
        let text = singSong(friendArr);
    })


    function singSong(friendArr) {
        let name = "";
        let z = 0;
        nameWithColon = "";
        topLoop(friendArr);

    }



    function topLoop(friendArr) {
        for (let i = 0; i < friendArr.length+1; i++) {
            let h3 = document.createElement('h3');
            div = document.createElement('div');
            document.body.appendChild(div);
            name = friendArr[i];
            nameWithColon = friendArr[i] + ": "
            tempVal = document.createTextNode(nameWithColon.toUpperCase());
            h3.appendChild(tempVal);
            div.appendChild(h3);
            document.body.appendChild(div);
            bottomLoop(friendArr);
        }
    }

    function bottomLoop(friendArr) {
        for (let j = count; j > 0; j--) {
            let p = document.createElement('p');
            if (j > 1) {
                z = j - 1;
                x = document.createTextNode(name + " saw " + j + " aliens in the sky, " + nameWithColon + " saw " + j + " aliens. Shoot one down. Take one to a secret base in Nevada, and deny it's existance. " + z + " aliens in the sky.");
                p.appendChild(x);
                div.appendChild(p);
            } else {
                y = document.createTextNode(name + " saw " + j + " alien in the sky. " + nameWithColon + " saw " + j + " alien. Shoot one down. Take it to a secret base in Nevada, and deny it's existance. No more aliens in the sky.");
                p.appendChild(y);
                div.appendChild(p);
            }
        }
    }

})
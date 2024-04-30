let img_arr = [
    img1 = document.getElementById('a1'),
    img2 = document.getElementById('a2'),
    img3 = document.getElementById('a3'),
    img4 = document.getElementById('a4'),
    img5 = document.getElementById('a5'),
    img6 = document.getElementById('a6'),
];
let background = document.querySelector('.background')

let even = true


for (let i = 0; i < img_arr.length; i++) {
    img_arr[i].onclick = function () {
        if (even) {
            img_arr[i].style.position = 'fixed';
            img_arr[i].style.left = '0' + 'px';
            img_arr[i].style.top = '0' + 'px';
            img_arr[i].style.bottom = '0' + 'px';
            img_arr[i].style.width = '100%';
            img_arr[i].style.height = '100%';
            img_arr[i].style.borderRadius = '0' + 'px';
            background.style.display = 'unset';
            even = false;
        }
        else {
            img_arr[i].style.position = 'unset';
            img_arr[i].style.left = 'unset';
            img_arr[i].style.top = 'unset';
            img_arr[i].style.bottom = 'unset';
            img_arr[i].style.width = '580' + 'px';
            img_arr[i].style.height = '500' + 'px';
            img_arr[i].style.borderRadius = '25' + 'px';
            background.style.display = 'none';
            even = true;
        }
    };
}
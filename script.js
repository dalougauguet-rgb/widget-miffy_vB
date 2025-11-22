const robes = [
    "images/pull1.jpeg",
    "images/pull2.jpeg",
    "images/pull3.jpeg",
    "images/pull4.jpeg",
];

// chaque pull a ses accessoires spécifiques
const accessoiresParPull = {
    0: [ "images/pull1_acc1.jpeg", "images/pull1_acc2.jpeg", "images/pull1_acc3.jpeg", "images/pull1_acc4.jpeg" ],
    1: [ "images/pull2_acc1.jpeg", "images/pull2_acc2.jpeg", "images/pull2_acc3.jpeg", "images/pull2_acc4.jpeg" ],
    2: [ "images/pull3_acc1.jpeg", "images/pull3_acc2.jpeg", "images/pull3_acc3.jpeg", "images/pull3_acc4.jpeg" ],
    3: [ "images/pull4_acc1.jpeg", "images/pull4_acc2.jpeg", "images/pull4_acc3.jpeg", "images/pull4_acc4.jpeg" ]
};
let index = 0;
let currentSet = robes; // par défaut = robes
let currentPullIndex = 0; // index du pull sélectionné

const imageMiffy = document.getElementById("miffyImg");

function updateImage() {
    imageMiffy.src = currentSet[index];
}

// navigation
document.getElementById("right").onclick = () => {
    index = (index + 1) % currentSet.length;
    updateImage();
};

document.getElementById("left").onclick = () => {
    index = (index - 1 + currentSet.length) % currentSet.length;
    updateImage();
};

// bouton robes
document.getElementById("robe").onclick = () => {
    currentSet = robes;
    index = currentPullIndex; // rester sur le pull actuel
    updateImage();
};

// bouton accessoires
document.getElementById("acc").onclick = () => {
    currentSet = accessoiresParPull[currentPullIndex]; // prend les accessoires du pull choisi
    index = 0; // recommence au premier accessoire
    updateImage();
};

// mise à jour du pull sélectionné
document.getElementById("right").onclick = () => {
    if(currentSet === robes) {
        currentPullIndex = (currentPullIndex + 1) % robes.length;
        index = currentPullIndex;
    } else {
        index = (index + 1) % currentSet.length;
    }
    updateImage();
};

document.getElementById("left").onclick = () => {
    if(currentSet === robes) {
        currentPullIndex = (currentPullIndex - 1 + robes.length) % robes.length;
        index = currentPullIndex;
    } else {
        index = (index - 1 + currentSet.length) % currentSet.length;
    }
    updateImage();
};

// première image au chargement
updateImage();

const robes = [
    "pull1.jpeg",
    "pull2.jpeg",
    "pull3.jpeg",
    "pull4.jpeg",
];

// chaque pull a ses accessoires spécifiques
const accessoiresParPull = {
    0: [ "pull1_acc1.jpeg", "pull1_acc2.jpeg", "pull1_acc3.jpeg", "pull1_acc4.jpeg" ],
    1: [ "pull2_acc1.jpeg", "pull2_acc2.jpeg", "pull2_acc3.jpeg", "pull2_acc4.jpeg" ],
    2: [ "pull3_acc1.jpeg", "pull3_acc2.jpeg", "pull3_acc3.jpeg", "pull3_acc4.jpeg" ],
    3: [ "pull4_acc1.jpeg", "pull4_acc2.jpeg", "pull4_acc3.jpeg", "pull4_acc4.jpeg" ]
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


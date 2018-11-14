const Adagrams = {
  drawLetters() {
    let allLetters = "A A A A A A A A A B B C C D D D D E E E E E E E E E E E E F F G G G H H I I I I I I I I I J K L L L L M M N N N N N N O O O O O O O O P P Q R R R R R R S S S S T T T T T T U U U U V V W W X Y Y Z";
    allLetters = allLetters.split(" ");

    let indices = [];
    while (indices.length < 10) {
      let randomIndex = Math.floor((Math.random() * allLetters.length))
      if (!indices.includes(randomIndex)) {
          indices.push(randomIndex);
      }
    }

    const drawnLetters = indices.map((index) => allLetters[index]);

    return drawnLetters;

    // Implement this method for wave 1
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;

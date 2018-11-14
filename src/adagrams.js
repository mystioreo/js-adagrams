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
  },

  usesAvailableLetters(input, lettersInHand) {
    let valid = true;
  //   alue = true
    let inputLetters = input.toUpperCase().split("");
  //   input_letters = (input.upcase).split('')
    let handCopy = lettersInHand.map(letter => letter);
  //   hand_copy = letters_in_hand.map do |letter|
  //     letter
  //   end

    inputLetters.forEach((letter) => {
      if((handCopy).includes(letter)) {
        let i = handCopy.indexOf(letter);
        handCopy.splice(i, 1);
      } else {
        valid = false;
      }
    });

    return valid;
  //
  //   input_letters.each do |alphabet|
  //     if hand_copy.include?(alphabet)
  //       hand_copy.delete_at(hand_copy.index(alphabet))
  //     else
  //       value = false
  //     end
  //   end
  //
  // return value

  },
};



// Do not remove this line or your tests will break!
export default Adagrams;

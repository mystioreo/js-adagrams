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
    let inputLetters = input.toUpperCase().split("");
    let handCopy = lettersInHand.map(letter => letter);

    inputLetters.forEach((letter) => {
      if((handCopy).includes(letter)) {
        let i = handCopy.indexOf(letter);
        handCopy.splice(i, 1);
      } else {
        valid = false;
      }
    });
    return valid;
  },

  scoreWord(word) {
    if (word != "") {

      let letterValue = {
        "A": 1, "E": 1, "I": 1,"O": 1,"U": 1,"L": 1,"N": 1,"R": 1,"S": 1,"T": 1,
       "D": 2, "G": 2, "B": 3, "C": 3,"M": 3,"P": 3, "F": 4, "H": 4,"V": 4,"W": 4,"Y": 4,
       "K": 5, "J": 8, "X": 8, "Q": 10,"Z": 10}

      let wordArray = word.toUpperCase().split("");
      let scores = wordArray.map(letter => letterValue[letter]);
      let score = scores.reduce((sum, element) => sum + element);

      if (word.length > 6) {
        score += 8;
      }

      return score;

    } else {
      return 0;
    }
  },

  highestScoreFrom(words) {

    // def highest_score_from(words)
    let wordsWithScores = {};
    //
    //   words.each do |word|
    //     words_with_scores["#{word}"] = score_word(word)
    //   end
    //
    words.forEach((word) => {
      wordsWithScores[word] = Adagrams.scoreWord(word)
    });

    let bestScore = Math.max(...Object.values(wordsWithScores));

    //   best_score_array = words_with_scores.max_by {|word, score| score}
    //
    //   best_score = best_score_array[1]
    //
    //   best_word_list = words_with_scores.select{|word, score| score == best_score}
    //
    //   best_word = 'reallybigtestword'
    //
    //   best_word_list.each do |word, score|
    //     if word.length == 10
    //       best_word = word
    //       return {word: best_word, score: best_score}
    //     elsif word.length < best_word.length
    //       best_word = word
    //     end
    //   end
    //
    //   return {word: best_word, score: best_score}
    // end
    //
  },
};



// Do not remove this line or your tests will break!
export default Adagrams;

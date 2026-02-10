const message = 'To my safe haven,\n\nWhenever this song plays, it feels like my heart is speaking in a language only you understand.\n\nOut of all the people in this world, you are the one I feel peaceful with.\n\nNot the kind of feeling that is loud and temporary, but the kind that stays — soft, constant, and sure.\n\nThe kind of love that doesn’t fade when things get hard,\n\ndoesn’t disappear when days are quiet,\n\nand doesn’t change even when time keeps moving.\n\nIf life gives us libu-libong buwan, I don’t want a single one without you in it.\n\nBecause you are not just part of my present — you are someone I see in my tomorrows,\n\nin my plans, in the simple dreams I keep to myself.\n\nWhen I think about where I want to be,\n\nwho I want beside me,\n\nmy heart doesn’t hesitate.\n\nIt chooses you.\n\nYou are my comfort after long days, my calm in the middle of overthinking,\n\nmy happiness in the smallest moments.\n\nWith you, love feels safe.\n\nIt feels like I don’t have to pretend, don’t have to be afraid,\n\ndon’t have to question where I stand.\n\nEven if the world changes, even if seasons come and go,\n\neven if time stretches far beyond what we can imagine — my heart already knows where it belongs.\n\nIt belongs with you.\n\nYou are not just someone I love.\n\nYou are the one my heart will always come home to. 🌙💛;
  
function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;


    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

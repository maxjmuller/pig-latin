// For words that start with a vowel, add "ay" to the end.
// For words that start with one or more consonants, move all of the first consecutive consonants to the end and add "ay". (If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where the "qu" doesn't come first!)
// For words that start with "y", treat the "y" as a consonant.


describe('addAy', function() {
  it("adds 'ay' to the end of the word", function() {
    expect(addAy("egg")).to.equal("eggay");
  });
});

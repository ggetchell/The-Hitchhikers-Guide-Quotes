$( document ).ready(function() {
	generate();

  function generate() {
    var quotes = ["The Encyclopedia Galactica in its chapter on Love states that it is far too complicated to define. The Hitchhiker's Guide to the Galaxy has this to say on the subject of love: Avoid if at all possible. Unfortunately, Arthur Dent has never read the Hitchhiker's Guide to the Galaxy .@Narator", " If you want to survive out here, you've got to know where your towel is .@Ford Prefect", " The best drink in existance is the Pan-Galactic Gargle Blaster, the effect of which, is like having your brains smashed out with a slice of lemon... wrapped around a large gold brick .@Narator", " We just hit that button and whoo! Magrathea. I think, I mean we've hit it twice and we're still not there .@Zaphod", " If there's anything around here more important than my ego, I want it caught and shot now! .@Zaphod", " [to Trillian] Hey slim, are you wearing my underwear? 'Cause I'm wearing yours, and they're not doing the trick .@Zaphod", " Here I was thinking I was the only one who considered your boyfriend a narcissistic moron, when apparently the whole galaxy does .@Arthur Dent", " [voice-over while Arthur and Ford are being tortured by being read Vogon poetry] Vogon poetry is the third worst in the Universe. The second worst is that of the Azgoths of Kria. During a recitation by their poetmaster, Grunthos the Flatulent, of his poem 'Ode to a Small Lump of Green Putty I Found in My Armpit One Midsummer Morning' four of his audience members died of internal hemorrhaging, and the President of the Mid-Galactic Arts Nobbling Council survived by gnawing one of his own legs off. The absolute worst poetry in the universe was written by Paula Nancy Millstone Jennings of Sussex. Thankfully it was destroyed when the earth was .@Narator", " Ford? Yeah? I think I'm a sofa... [pause] I know how you feel ...@Aurthur Dent, Ford Prefect", " Perhaps I'm old and tired, but I think that the chances of finding out what's actually going on are so absurdly remote that the only thing to do is to say, 'Hang the sense of it,' and keep yourself busy. I'd much rather be happy than right any day. And are you?  Ah, no. [laughs, snorts]... Well, that's where it all falls down, of course .@Slartibartfast,  Arthur Dent", " You're looking for the Ultimate Question. Yep.  You.  Me.  Why?  No, I tried that: Why? 42. Doesn't work .@Ford Prefect, Zaphod","All my life I've had this strange feeling that there's something big and sinister going on in the world.No that's perfectly normal paranoia. Everyone in the universe gets that .@Arthur Dent, Slartibartfast","In the beginning the universe was created. This made a lot of people angry and has widely been considered as a bad move .@Narrator."," What to do if you find yourself stuck with no hope of rescue: Consider yourself lucky that life has been good to you so far. Alternatively, if life hasn't been good to you so far, which given your present circumstances seems more likely, consider yourself lucky that it won't be troubling you much longer.@Narrator","Slartibartfast: I must warn you, we're going to pass through, well, a sort of gateway thing. Arthur Dent: What?       Slartibartfast: It may disturb you. It scares the willies out of me.@Slartibartfast, Arthur Dent"
];

   randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    quoteAuthor=randomQuote.split("@");
		$('.saying').text(quoteAuthor[0]);
    $('.author').text(quoteAuthor[1]);
  }
  
  
$(".button").on( "click", function() {
    generate();
});  
  
});
const signs = [
    {
        name: 'Moon in Aries',
        date: 'Mar 21 to Apr 19',
        description: 'With the Moon in Aries, the underlying evolutionary intention is to teach the heart courage. Thus, with the Moon in this sign, there is a reigning need for adventure. In order to feel comfortable and nourished, the individual requires challenge, newness, and some degree of tension. The ambient mood is one of urgency, edginess, and often of competitiveness.  Closeness and intimacy are frequently expressed through teasing. The domestic environment tends towards explosiveness and hair-on-fire pressure, yet there is a fierce sense of protectiveness toward it. Gone sour, the Aries Moon degenerates into an attitude of rage and resentment.',
        image: 'https://www.jessicaadams.com/wp-content/uploads/2017/12/aries-fancy-600x600.jpg?resolution=1280,1'
    },
    {
        name: 'Moon in Taurus',
        date: 'Apr 20 to May 20',
        description: 'With the Moon in Taurus, the underlying evolutionary intention is to teach the heart earthiness, peace, and acceptance of the animal nature. Thus, with the Moon in this sign, there is a reigning need for naturalness and ease. In order to feel comfortable and nourished, the individual requires the presence of Mother Nature, creature comforts, and unchallenged serenity. The ambient mood is one of earthy physicality.  Closeness and intimacy are frequently expressed through touch. The domestic environment tends towards predictability and steadiness, and there is a deep love toward it. Gone sour, the Taurus Moon degenerates into an attitude of stubborn rigidity.',
        image: 'https://www.jessicaadams.com/wp-content/uploads/2016/10/taurus-fancy-600x600.jpg'
    },
    {
        name: 'Moon in Gemini',
        date: 'May 21 to Jun 20',
        description: 'With the Moon in Gemini, the underlying evolutionary intention is to teach the heart curiosity and communication skills. Thus, with the Moon in this sign, there is a reigning need for stimulus, conversation, and change. In order to feel comfortable and nourished, the individual requires variety and unpredictability. The ambient mood is one of scattered fascination.  Closeness and intimacy are expressed through words and the sharing of ideas and perceptions. The domestic environment tends towards chaos, change, and the intrusion of media. Gone sour, the Gemini Moon degenerates into shallowness and running around in circles.',
        image: 'https://www.jessicaadams.com/wp-content/uploads/2016/10/gemini-fancy-600x600.jpg'
    },
    {
        name: 'Moon in Cancer',
        date: 'Jun 21 to Jul 22',
        description: 'With the Moon in Cancer, the underlying evolutionary intention is to heal the heart. Thus, with the Moon in this sign, there is a reigning need for loving home life and quiet time. In order to feel comfortable and nourished, the individual requires soulful, familiar intimacy. The ambient mood is one of guarded tenderness and vulnerability.  Closeness and intimacy are expressed through concern and nurture. The domestic environment tends towards the simple pleasures of the Hobbit-hole. Gone sour, the Cancer Moon degenerates into self-protective defensiveness, hypochondria, and endless fearfulness.',
        image: 'https://www.jessicaadams.com/wp-content/uploads/2016/10/cancer-fancy-600x600.jpg'
    },
    {
        name: 'Moon in Leo',
        date: 'Jul 23 to Aug 22',
        description: 'With the Moon in Leo, the underlying evolutionary intention is to teach the heart to feel safe enough to sing and roar. Thus, with the Moon in this sign, there is a reigning need for attention and opportunity for creative self-expression. In order to feel comfortable and nourished, the individual requires a sincerely appreciative audience, even if it is only one person. The ambient mood is one of dignified playfulness.  Closeness and intimacy are expressed through praise. The domestic environment tends towards grandness. Gone sour, the Leo Moon degenerates into pomposity, presumption and self-importance, driven by insecurity.',
        image: 'https://www.jessicaadams.com/wp-content/uploads/2016/10/leo-fancy-600x600.jpg'
    },
    {
        name: 'Moon in Virgo',
        date: 'Aug 23 to Sep 22',
        description: 'With the Moon in Virgo, the underlying evolutionary intention is to teach the heart accurate self-assessment and discrimination. Thus, with the Moon in this sign, there is a reigning need for clarity, precision and truth, and also for a set of skills which others value. In order to feel comfortable and nourished, the individual requires a feeling of growth, change, progress, along with finding the “right work.” The ambient mood is one of humility, driven by “Divine discontent.”  Closeness and intimacy are frequently expressed through service and helpfulness. The domestic environment tends towards precision and order. Gone sour, the Virgo Moon degenerates into an attitude of self- criticism, which leaks out as criticism of everything—and everyone—else.',
        image: 'https://www.jessicaadams.com/wp-content/uploads/2016/10/virgo-fancy-600x600.jpg?resolution=1280,1'
    },
    {
        name: 'Moon in Libra',
        date: 'Sep 23 to Oct 22',
        description: 'With the Moon in Libra, the underlying evolutionary intention is to teach the heart trust and serenity. Thus, with the Moon in this sign, there is a reigning need for harmonious  intimacy and aesthetic experience. In order to feel comfortable and nourished, the individual requires graceful companionship and beautiful surroundings. The ambient mood is one of diplomacy, civilized virtues, and balanced perspective  Closeness and intimacy are frequently expressed through touching attentiveness to the uniqueness of the other person. The domestic environment tends towards loveliness and taste. Gone sour, the Libran Moon degenerates into an attitude of cloying “niceness,” indecision, and numbing courtesy.',
        image: 'https://www.jessicaadams.com/wp-content/uploads/2016/10/libra-fancy-600x600.jpg?resolution=1280,1'
    },
    {
        name: 'Moon in Scorpio',
        date: 'Oct 23 to Nov 21',
        description: 'With the Moon in Scorpio the underlying evolutionary intention is to probe down into most wounded places in the heart . Thus, with the Moon in this sign, there is a reigning need for honesty, self-scrutiny, and a sense of intimate process. In order to feel comfortable and nourished, the individual requires emotional authenticity and contact with the Shadow in the Self and Other. The ambient mood is one of intensity.  Closeness and intimacy are frequently expressed through revelation and penetrating insight, solicited or otherwise The domestic environment tends towards privacy, and there is a fierce sense of boundaries about it. Gone sour, the Scorpio Moon degenerates into an attitude of fear, paranoia, suspicion, and brooding heaviness.',
        image: 'https://www.jessicaadams.com/wp-content/uploads/2016/10/scorpio-fancy-600x600.jpg?resolution=1280,1'
    },
    {
        name: 'Moon in Sagittarius',
        date: 'Nov 22 to Dec 21',
        description: 'With the Moon in Sagittarius, the underlying evolutionary intention is to teach the heart faith. Thus, with the Moon in this sign, there is a reigning need for a sense of meaning. In order to feel comfortable and nourished, the individual requires expansive, novel experiences that feed the mind and soul. The ambient mood is one of being ready for anything, along with emotional resilience, humor, and a focus on the big picture. Closeness and intimacy are frequently expressed through extravagant praise and generosity. The domestic environment tends towards the exotic and the chaotic. Gone sour, the Sagittarian Moon degenerates into a know-it-all attitude.',
        image: 'https://www.jessicaadams.com/wp-content/uploads/2016/10/sagittarius-fancy-600x600.jpg?resolution=1280,1'
    },
    {
        name: 'Moon in Capricorn',
        date: 'Dec 22 to Jan 19',
        description: 'With the Moon in Capricorn, the underlying evolutionary intention is to teach the heart self-discipline, maturity and integrity. Thus, with the Moon in this sign, there is a reigning need to climb to the moral high ground—or toward stratospheric accomplishments, inwardly or outwardly. In order to feel comfortable and nourished, the individual requires the challenge of a Great Work, and some degree of solitude. The ambient mood is one of austerity and seriousness. Closeness and intimacy are  expressed through helpful action and self-sacrifice. The domestic environment tends towards sparseness, security, and dignity. Gone sour, the Capricorn Moon degenerates into control issues, nagging fear, and grief.',
        image: 'https://www.jessicaadams.com/wp-content/uploads/2016/10/capricorn-fancy-600x600.jpg?resolution=1280,1'
    },
    {
        name: 'Moon in Aquarius',
        date: 'Jan 20 to Feb 18',
        description: 'With the Moon in Aquarius, the underlying evolutionary intention is to teach the heart freedom and authenticity. Thus, with the Moon in this sign, there is a reigning need for individuation. In order to feel comfortable and nourished, the individual requires freedom from external control and a sense of  “making it up as s/he goes along.” The ambient mood is one of almost anthropological detachment from “normal” concerns and at least some degree of eccentricity or zaniness.  Closeness and intimacy are frequently expressed through the exchange of ideas, along with the granting of differences and the right to independent action The domestic environment tends towards uniqueness and, generally, toward modernity. Gone sour, the Aquarian Moon degenerates into an attitude of distance, stubborn eccentricity, and coolness.',
        image: 'https://www.jessicaadams.com/wp-content/uploads/2016/10/aquarius-fancy-600x600.jpg?resolution=1280,1'
    },
    {
        name: 'Moon in Pisces',
        date: 'Feb 19 to Mar 20',
        description: 'With the Moon in Pisces, the underlying evolutionary intention is to teach the heart to identify itself with the larger framework of consciousness—with the soul, in essence.  Thus, with the Moon in this sign, there is a reigning need for meditation and contemplative pursuits, including the “trance” generated by engagement in creative or imaginative activities. In order to feel comfortable and nourished, the individual requires unstructured time. The ambient mood is one of reflectiveness and whimsy, usually with a good sense of “the cosmic joke.” Closeness and intimacy are frequently expressed through soulful eye-contact and shared secret humor The domestic environment tends towards dreaminess and fluidity. Gone sour, the Pisces Moon degenerates into an attitude of woolgathering and spaciness, and perhaps escapism.',
        image: 'https://www.jessicaadams.com/wp-content/uploads/2016/10/pisces-fancy-600x600.jpg?resolution=1280,1'
    },
];

export default signs;
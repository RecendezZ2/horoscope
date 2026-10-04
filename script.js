const horoscopeData = {
    horoscopes: {
        date: "2023-11-30",
        astroSigns: [
            {
                sign: "Aries",
                dateRange: "March 21 - April 19",
                dailyHoroscope:
                    " Fresh professional ideas emerge, helping you develop exploratory plans. Arranging capital or resources for a dream venture feels manageable if you double-check paperwork and details.Venus retrograde shifts focus toward deep emotional reflection and shared bonds. Letting others take the lead for a change brings unexpected support and harmony.",
                luckyNumbers: [3, 17, 21],
                key: 0,
                icon: "images/Screenshot 2026-10-01 at 1.55.43 PM.png"
            },
            {
                sign: "Taurus",
                dateRange: "April 20 - May 20",
                dailyHoroscope:
                    "Venus, your ruler, begins its retrograde phase in the partnership area of your chart this weekend, so where friendships and affairs of the heart are concerned you will need to tread carefully. Don’t promise now what you may not be able to deliver later on.",
                luckyNumbers: [5, 14, 29],
                key: 1,
                icon: "images/Screenshot 2026-10-01 at 1.55.43 PM.png"
            },
            {
                sign: "Gemini",
                dateRange: "May 21 - June 20",
                dailyHoroscope:
                    "The fact that you have been working extremely hard of late has not gone unnoticed, but there are no guarantees you will be rewarded for it. That’s okay. Since when did you go looking for applause? A job well done is its own reward.",
                luckyNumbers: [2, 16, 23],
                key: 2,
                icon: "images/gemini.png"
            },
            {
                sign: "Cancer",
                dateRange: "June 21 - July 22",
                dailyHoroscope:
                    "Cosmic activity in the most dynamic area of your chart will make it easy for you to express yourself this weekend, but you must make sure every word you say is backed up by facts. If you tell even the smallest of lies you will be found out..",
                luckyNumbers: [7, 19, 25],
                key: 3,
                icon: "images/cancer.png"
            },
            {
                sign: "Leo",
                dateRange: "July 23 - August 22",
                dailyHoroscope:
                    "If someone you love is feeling a bit down this weekend make it your business to cheer them up. You don’t have to crack jokes or turn somersaults but if you point out to them how much life is worth living they will soon be smiling again.",
                luckyNumbers: [1, 8, 22],
                key: 4,
                icon: "images/leo.png"
            },
            {
                sign: "Virgo",
                dateRange: "August 23 - September 22",
                dailyHoroscope:
                    "If someone you love is feeling a bit down this weekend make it your business to cheer them up. You don’t have to crack jokes or turn somersaults but if you point out to them how much life is worth living they will soon be smiling again..",
                luckyNumbers: [4, 11, 26],
                key: 5,
                icon: "images/virg.png"
            },
            {
                sign: "Libra",
                dateRange: "September 23 - October 22",
                dailyHoroscope:
                    "A Mars-Pluto link on your birthday will make it hard for you to get along with certain people, but maybe you have been depending too much on them and need to put some distance between you. Focus more on what you can do for yourself this year. You may be tempted to cash in your gains and walk away with a handsome profit but the planets urge you to wait a bit. With your ruling planet Venus beginning its retrograde phase you may not be as financially secure as you think you are.",


              luckyNumbers: [6, 15, 24],
                key: 6,
                icon: "images/libra.png"
            },
            {
                sign: "Scorpio",
                dateRange: "October 23 - November 21",
                dailyHoroscope:
                    "You won’t see eye-to-eye with a friend or loved one over the next 48 hours but that does not mean you have to fall out with each other. You are still on the same overall wavelength, so focus on what you agree on and ignore the rest.",
                luckyNumbers: [9, 18, 27],
                key: 7,
                icon: "images/scorp.png"
            },
            {
                sign: "Sagittarius",
                dateRange: "November 22 - December 21",
                dailyHoroscope:
                    "It’s not like you to get emotional about things that don’t affect you personally but something you see or hear today could reduce you to a sobbing wreck. If nothing else, it will remind those who doubt it that you are human like everyone else.",
                luckyNumbers: [3, 12, 21],
                key: 8,
                icon: "images/sag.png"
            },
            {
                sign: "Capricorn",
                dateRange: "December 22 - January 19",
                dailyHoroscope:
                    "You may not enjoy being the centre of attention this weekend but that’s too bad because all eyes will be on you. The best thing you can do is put on a show and then walk away leaving them wanting more. They’ll think it’s part of the act.",
                luckyNumbers: [8, 16, 23],
                key: 9,
                icon: "images/cap.png"
            },
            {
                sign: "Aquarius",
                dateRange: "January 20 - February 18",
                dailyHoroscope:
                    "Upheavals on the work front are likely this weekend but they will be minor in nature, so don’t make a big issue of them. People in positions of power will be watching you closely and will be mightily impressed if you take it all in stride.",
                luckyNumbers: [5, 13, 20],
                key: 10,
                icon: "images/aqua.png"
            },
            {
                sign: "Pisces",
                dateRange: "February 19 - March 20",
                dailyHoroscope:
                    "You are in no mood to care what other people think about your words and deeds, and that’s good, but don’t take it too far and be so provocative that you turn even friends against you. Make controlling your feelings your number one priority.",
                luckyNumbers: [2, 10, 22],
                key: 11,
                icon: "images/pisces.png"
            }
        ]
    }
};

const element = document.getElementById("zsElementForBackground");

const zodiacForm = document.querySelector("#zodiacForm");
const zodiacSelect = document.querySelector("#zodiacSelect");
const resultSection = document.querySelector("#resultCard");
const resultImage = document.querySelector("#signIcon");
const resultText = document.querySelector("#signText");
const resultDate = document.querySelector("#dateRangeText");
const resultHoroscope = document.querySelector("#horoscopeText");

const zodiacData = horoscopeData.horoscopes.astroSigns;

zodiacForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const userSign = zodiacSelect.value;

    const signData = zodiacData.find(function (item) {
        return item.sign === userSign;
    });

    if (!signData) {
        resultText.textContent = "Please choose a zodiac sign.";
        resultSection.classList.remove("hidden");
        return;
    }

    // Variables taken from your horoscopeData collection
    const sign = signData.sign;
    const dateRange = signData.dateRange;
    const horoscope = signData.dailyHoroscope;
    const luckyNumbers = signData.luckyNumbers.join(", ");

    // Template literal saved in a variable
    const outputMessage = `${sign}'s date range is ${dateRange}. Today's horoscope is: ${horoscope} Your lucky numbers are ${luckyNumbers}.`;

    // Log the completed sentence in the browser console
    console.log(outputMessage);

    // Display the selected zodiac image
    resultImage.src = signData.icon;
    resultImage.alt = `${sign} zodiac sign icon`;

    // Render the sentence and other details on the page
    resultText.textContent = outputMessage;
    resultDate.textContent = `Date range: ${dateRange}`;
    resultHoroscope.textContent = `Horoscope: ${horoscope}`;

    resultSection.classList.remove("hidden");
});


document.body.style.backgroundImage = "url('https://t4.ftcdn.net/jpg/08/18/00/95/360_F_818009576_SAO7gRlsxTdmBgh5fI9DzFUMvP8xOL1Q.jpg')"
 
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundAttachment = "fixed";
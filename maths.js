//load in the csv, making n Fetishes

//function that gets 2 2d array of [('name', 0-2 rating)]), then creates 1 2d array of the merged ratings
    //doesn't add any that's rating is 0 so that no irreleavnt fetishes are drawn

// function that builds the the basic plot

//colourCode(String code, int rating){
    //dict??? could i make 8 dicts(4C, 4S) each with a code, then each that has goes 1:#FFFFFF, 2:#FFF666

//}

//function(colour code, 2d array of[('name', rating)])
    //when drawing it calls colourCode(code, rating)
    //then draw the list
const kinks = [
    '69 (position)', 'thighs', 'lips', 'light spanking', 'hair pulling', 'facesitting', 'jawlines', 'tearing clothes off', 'cheerleaders', 'being submissive', 'facials', 'light bondage (receiving)', 'cameltoe', 'maids', 'missionary (position)', 'glasses (clothing)', 'squirting', 'blindfolds', 'anal sex', 'breast implants', 'necks', 'shoulders', 'eager service', 'being dominant', 'light bondage (giving)', 'receiving sexual worship', 'pubic hair', 'tongues', 'hair (head)', 'hands', 'multiple partners', 'teachers/professors', 'calves (body part)', 'wardrobe malfunctions', 'bellies', 'breeding/impregnation', 'doctors', 'ASMR', 'tickling', 'eager begging (other)', 'sexual partners fighting over you', 'facefucking', 'escorts/prostitutes', 'exhibitionism (other)', 'gags', 'giving sexual worship', 'noses', 'babysitters', 'saliva', 'sexual cartoons', 'begging (self)', 'latex', 'knees', 'medium bondage (giving)', 'feet', 'slave/master (as master)', 'double penetration', 'causing mild pain', 'androgyny', 'medium bondage (receiving)', 'choking', 'vampires', 'nuns', 'women without breasts', 'voyeurism (other)', 'pregnancy', 'unused condoms', 'sensory deprivation', 'voyeurism (self)', 'ass-to-mouth', 'slut humiliation', 'students', 'insults', 'very short people', 'sexual frustration?', 'slave/master (as slave)', 'armpits', 'oversized body parts', 'teeth', 'excessive body hair', 'partner swapping', 'bukkake', 'sexual obedience training (as trainer)', 'body swapping', 'gynecologists', 'scary people/creatures', 'hypnotism', 'ugliness', 'exhibitionism (self)', 'sexual obedience training (as trainee)', 'animal-esque clothing', 'struggling', 'drunkenness', 'breast milk', 'pain (receiving)', 'angels/demons', 'old people', 'full time power dynamics', 'pegging', 'blowjobs', 'age gap (as younger)', 'pumps (toy)', 'sploshing', 'dirty clothes', 'extreme bondage (giving)', 'women with a penis', 'stuffing', 'age gap (as older)', 'hotwifing', 'defilement', 'extreme bondage (receiving)', 'food', 'public humiliation (receiving)', 'transforming (size)', 'crossdressing', 'sleeping sex', 'transforming (gender)', 'cheating', 'freeuse society', 'pain (giving)', 'penile implants', 'hermaphrodites', 'ghosts', 'horns/fangs', 'men with breasts', 'small penis humiliation', 'women with penis and vagina', 'cuckoldry', 'anal pregnancy', 'violating consent (receiving)', 'rapeplay (receiving)', 'wings', 'very tiny people', 'anal hooks', 'men with vaginas', 'inflatables', 'werewolves', 'rapeplay (giving)', 'aliens', 'electricity (painful)', 'kidnapping', 'plushies', 'sissification', 'statues/mannequins', 'fingering vaginas', 'doggystyle (position)', 'humans with animal body parts', 'creepy people/creatures', 'men with penis and vagina', 'transforming (inanimate objects)', 'urine', 'rapid age progression', 'used condoms', 'belches', 'non-gratifying pain (receiving)', 'CGL', 'guns', 'dolls', 'dragons', 'menstrual blood', 'extreme plastic surgery', 'buildings', 'airplanes/cars', 'sister-sister incest', 'pony play', 'orcs/ogres/golems', 'extreme pain', 'slime/goo people', 'farts', 'furries', 'toothlessness', 'deformations', 'rapid age regression', 'cunnilingus', 'enthusiastic consent', 'non-gratifying pain (giving)', 'transforming (animals)', 'bad ends', 'sister-brother incest', 'meth', 'mother-daughter incest', 'burning', 'blood', 'heroin', 'oviposition', 'mother-son incest', 'zombies', 'severe obesity', 'violating consent (giving)', 'dirtiness', 'scarification', 'smegma', 'diapers', 'vore (soft)', 'amputations', 'branding', 'MLP', 'father-daughter incest', 'nazis', 'romance', 'strip teases', 'octopi/squid', 'vomit', 'damaging impalement', 'medical horror', 'mental disabilities', 'body horror', 'brother-brother incest', 'castration', 'under-18 teens', 'catching diseases', 'destructive pregnancies', 'scat', 'horses', 'infibulation', 'woundfucking', 'bears/lions', 'fish/sharks', 'sex with your dead body', 'father-son incest', 'dolphins/whales', 'insects/spiders', 'reptiles/amphibians', 'parasites/leeches', 'gross insects', 'slugs/snails/worms', 'living insertions', 'receiving penetration from animal', 'vore (hard)', 'receiving oral sex from animal', 'cats', 'grandparent/grandchild incest', 'monkeys/apes', 'cuddling', 'rodents', 'dogs', 'goats/sheep', 'performing oral sex on animal', 'crushing (live creatures)', 'penetrating an animal', 'pigs', 'executions', 'cannibalism/meatslaves', 'rotting dead bodies', 'babies/toddlers', 'pre-puberty children'
];
const taboo = [
    10.77, 12.14, 12.65, 13.41, 17.05, 17.44, 17.56, 18.22, 18.86, 19.52, 19.86, 19.89, 19.96, 19.99, 2.34, 20.05, 20.50, 20.55, 20.93, 23.50, 23.60, 23.82, 23.95, 24.26, 24.36, 24.70, 25.18, 26.25, 26.28, 26.60, 26.97, 27.29, 27.45, 27.82, 27.97, 28.04, 29.30, 30.55, 31.39, 31.41, 32.39, 32.58, 32.89, 33.27, 33.68, 33.76, 34.00, 34.28, 34.81, 34.83, 35.02, 35.09, 35.65, 36.29, 36.60, 37.66, 38.00, 38.04, 38.42, 38.99, 39.17, 39.19, 40.04, 40.23, 40.45, 40.75, 40.97, 41.25, 41.93, 42.61, 42.77, 43.53, 43.91, 44.39, 44.39, 44.42, 44.44, 44.71, 44.91, 44.93, 45.52, 45.64, 45.68, 46.37, 46.57, 46.60, 46.89, 46.99, 47.17, 47.26, 47.38, 47.64, 47.80, 47.94, 48.08, 48.25, 49.45, 49.50, 49.94, 5.95, 50.99, 51.11, 51.22, 52.00, 52.30, 52.30, 52.81, 53.33, 53.52, 53.60, 53.97, 53.99, 54.03, 54.17, 54.22, 54.91, 55.12, 55.49, 55.68, 56.16, 56.18, 56.23, 56.28, 56.58, 56.83, 57.22, 57.30, 57.50, 57.56, 57.76, 57.80, 57.99, 58.07, 58.42, 58.63, 58.78, 58.89, 58.97, 59.12, 59.29, 59.47, 59.79,
    59.86, 59.94, 6.22, 6.59, 60.69, 60.72, 61.12, 61.94, 62.03, 62.07, 62.53, 62.66, 62.77, 62.88, 62.90, 63.01, 65.58, 65.80, 65.86, 65.92, 66.00, 66.28, 66.57, 66.72, 67.20, 67.22,
    67.24, 67.33, 67.63, 69.00, 69.81, 7.03, 7.96, 70.10, 70.15, 70.22, 71.18, 71.90, 72.14, 72.17, 72.36, 72.42, 73.19, 73.80, 74.24, 74.45, 74.48, 74.52, 74.71, 74.80, 75.80, 75.85,
    75.94, 76.15, 77.27, 79.11, 79.39, 8.15, 8.63, 81.55, 81.65, 82.10, 82.80, 82.98, 83.12, 83.42, 83.44, 83.68, 84.11, 84.18, 84.77, 86.72, 86.72, 87.32, 87.61, 87.72, 87.85, 87.89,
    87.90, 87.92, 88.17, 88.38, 88.53, 88.68, 88.71, 88.99, 89.04, 89.13, 89.77, 89.87, 89.99, 9.55, 90.21, 90.25, 91.36, 91.71, 91.77, 91.87, 92.01, 92.18, 93.05, 96.12, 98.02, 98.11
  ];
const popularity = [
    50.14313062, 32.44555384, 33.36962358, 65.1444572, 68.18202205, 58.31112682, 21.06071597, 16.66571292, 18.70986879, 
41.1472175, 51.20248454, 37.85483646, 30.19257473, 23.88153771, 73.05313116, 18.93539541, 50.68352299, 55.06554273, 
78.40694025, 9.516697749, 27.47164706, 21.78434646, 36.35858505, 28.18147306, 23.93745011, 69.41407718, 12.24888988, 25.70677713, 22.83479747, 25.13834077, 53.69550122, 28.83149201, 10.4644421, 19.83640633, 21.01702673, 21.69367341, 18.05895893, 10.2853727, 8.915639245, 70.12237664, 14.34631379, 62.39626145, 16.78774104, 50.30141188, 39.81604782, 66.96544109, 9.245235553, 19.1920078, 14.54437347, 12.1770434, 60.91836334, 18.65937669, 3.904509198, 24.22850653, 
10.32921619, 10.10120292, 36.12889228, 12.11863398, 12.43203292, 37.78925259, 42.6196842, 17.79916852, 10.39432229, 
3.508070669, 44.62262728, 13.80958412, 4.418361052, 14.07794039, 45.74695002, 30.26258821, 25.53510267, 22.67641241, 19.33270898, 15.14301216, 63.33275787, 24.16165079, 8.860375243, 5.324932113, 11.17637001, 1.746905494, 23.55231885, 18.64002609, 22.65600848, 6.706045678, 6.053006773, 5.386188516, 21.7883848, 1.607343552, 50.84006378, 41.27408346, 13.73516687, 44.15293388, 15.98438715, 8.810294832, 37.15447221, 13.8571487, 17.33134492, 40.25475758, 35.74108211, 91.21391328, 18.52864392, 11.64845755, 1.585399052, 1.323959937, 18.67004652, 8.665978261, 5.44782747, 9.541461743, 19.07743289, 16.75814356, 30.30090701, 2.841801381, 9.16865, 3.10645, 18.10228949, 16.73429907, 7.77, 15.33043806, 30.66309091, 33.28335446, 1.243238032, 7.777673531, 7.41106333, 9.3, 3.517411857, 5.358618696, 6.718646436, 12.319, 4.46808805, 26.97854324, 19.53565829, 7.393238728, 4.170816191, 12.78009111, 4.638674938, 1.272519945, 12.57255131, 11.3734106, 10.74928052, 12.34938444, 25.20257362, 3.272063773, 13.4414745, 1.876719665, 80.46118199, 78.27314091, 
5.62345376, 3.631218206, 4.102908624, 2.14380723, 15.23221582, 1.157921007, 3.909923492, 0.6770172191, 4.614112509, 
22.281204, 4.779834073, 1.733405807, 9.246271761, 3.476719796, 0.3693147941, 1.10160713, 2.504733834, 7.423401545, 4.184954063, 6.704475971, 6.061000395, 8.174465473, 1.932169761, 4.907376818, 0.3672518414, 0.7738035701, 2.946776911, 92.33534023, 72.09934544, 5.275489888, 5.47978649, 7.927037315, 15.5424375, 1.004034198, 7.871304098, 5.847653387, 8.668178493, 0.9038433369, 7.082081177, 9.01485563, 2.727060057, 0.8733948459, 16.04531749, 4.2052096, 4.071602359, 0.8763155724, 2.484594099, 2.435804629, 2.114118734, 6.948126531, 2.056323466, 10.69946686, 1.988379852, 45.35954223, 47.06562949, 1.515882277, 1.514528704, 2.275960566, 0.9584476748, 1.449215035, 2.39629717, 4.155316184, 2.110064022, 27.14073653, 0.5915252149, 0.4704852388, 1.879821378, 8.652513721, 1.558631283, 2.973735129, 1.643298106, 0.7950978681, 1.289409572, 3.452982547, 0.7127521859, 0.7288758097, 1.60635796, 1.226998607, 0.3936130275, 0.6028486171, 2.001214767, 9.909590283, 0.9383791327, 22.933935, 1.523715489, 2.69547758, 0.8455702926, 46.97459117, 0.5719904054, 
9.936823812, 0.7542634203, 6.564284404, 0.5463778667, 14.29450402, 1.393708315, 2.310831751, 2.21158788, 0.1718151973, 0.6655418851, 2.38,
];
function maths(){
    const fs = require("fs");
    const { parse } = require("csv-parse");

    fs.createReadStream("data.csv")
        .pipe(parse({ delimiter: ",", from_line: 2 }))
        .on("data", function (row) {
            console.log(row);
        })
        .on("error", function (error) {
            console.log(error.message);
        })
        .on("end", function () {
            console.log("finished");
        });

}


function getCoords(){
    const dataArray = [];
    for (let i = 0; i < taboo.length; i++) {
        dataArray.push({ x: taboo[i], y: popularity[i], value: kinks[i]});
    }
    const data = [
        { x: 10, y: 14 },
        { x: 25, y: 35 },
        { x: 21, y: 20 },
        { x: 35, y: 28 },
        { x: 15, y: 10 },
        { x: 19, y: 30 },
    ];
    //const  newD = loadCSV();
    //
    
    return dataArray;
}

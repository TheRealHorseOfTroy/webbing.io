function buildQuiz() {
    const radioForm = document.createElement('form');
    radioForm.id = 'myForm'; // Set a unique ID for the form

    const lines = ['69 (position)', 'thighs', 'lips', 'light spanking', 'hair pulling', 'facesitting', 'jawlines', 'tearing clothes off', 'cheerleaders', 'being submissive', 'facials', 'light bondage (receiving)', 'cameltoe', 'maids', 'missionary (position)', 'glasses (clothing)', 'squirting', 'blindfolds', 'anal sex', 'breast implants', 'necks', 'shoulders', 'eager service', 'being dominant', 'light bondage (giving)', 'receiving sexual worship', 'pubic hair', 'tongues', 'hair (head)', 'hands', 'multiple partners', 'teachers/professors', 'calves (body part)', 'wardrobe malfunctions', 'bellies', 'breeding/impregnation', 'doctors', 'ASMR', 'tickling', 'eager begging (other)', 'sexual partners fighting over you', 'facefucking', 'escorts/prostitutes', 'exhibitionism (other)', 'gags', 'giving sexual worship', 'noses', 'babysitters', 'saliva', 'sexual cartoons', 'begging (self)', 'latex', 'knees', 'medium bondage (giving)', 'feet', 'slave/master (as master)', 'double penetration', 'causing mild pain', 'androgyny', 'medium bondage (receiving)', 'choking', 'vampires', 'nuns', 'women without breasts', 'voyeurism (other)', 'pregnancy', 'unused condoms', 'sensory deprivation', 'voyeurism (self)', 'ass-to-mouth', 'slut humiliation', 'students', 'insults', 'very short people', 'sexual frustration?', 'slave/master (as slave)', 'armpits', 'oversized body parts', 'teeth', 'excessive body hair', 'partner swapping', 'bukkake', 'sexual obedience training (as trainer)', 'body swapping', 'gynecologists', 'scary people/creatures', 'hypnotism', 'ugliness', 'exhibitionism (self)', 'sexual obedience training (as trainee)', 'animal-esque clothing', 'struggling', 'drunkenness', 'breast milk', 'pain (receiving)', 'angels/demons', 'old people', 'full time power dynamics', 'pegging', 'blowjobs', 'age gap (as younger)', 'pumps (toy)', 'sploshing', 'dirty clothes', 'extreme bondage (giving)', 'women with a penis', 'stuffing', 'age gap (as older)', 'hotwifing', 'defilement', 'extreme bondage (receiving)', 'food', 'public humiliation (receiving)', 'transforming (size)', 'crossdressing', 'sleeping sex', 'transforming (gender)', 'cheating', 'freeuse society', 'pain (giving)', 'penile implants', 'hermaphrodites', 'ghosts', 'horns/fangs', 'men with breasts', 'small penis humiliation', 'women with penis and vagina', 'cuckoldry', 'anal pregnancy', 'violating consent (receiving)', 'rapeplay (receiving)', 'wings', 'very tiny people', 'anal hooks', 'men with vaginas', 'inflatables', 'werewolves', 'rapeplay (giving)', 'aliens', 'electricity (painful)', 'kidnapping', 'plushies', 'sissification', 'statues/mannequins', 'fingering vaginas', 'doggystyle (position)', 'humans with animal body parts', 'creepy people/creatures', 'men with penis and vagina', 'transforming (inanimate objects)', 'urine', 'rapid age progression', 'used condoms', 'belches', 'non-gratifying pain (receiving)', 'CGL', 'guns', 'dolls', 'dragons', 'menstrual blood', 'extreme plastic surgery', 'buildings', 'airplanes/cars', 'sister-sister incest', 'pony play', 'orcs/ogres/golems', 'extreme pain', 'slime/goo people', 'farts', 'furries', 'toothlessness', 'deformations', 'rapid age regression', 'cunnilingus', 'enthusiastic consent', 'non-gratifying pain (giving)', 'transforming (animals)', 'bad ends', 'sister-brother incest', 'meth', 'mother-daughter incest', 'burning', 'blood', 'heroin', 'oviposition', 'mother-son incest', 'zombies', 'severe obesity', 'violating consent (giving)', 'dirtiness', 'scarification', 'smegma', 'diapers', 'vore (soft)', 'amputations', 'branding', 'MLP', 'father-daughter incest', 'nazis', 'romance', 'strip teases', 'octopi/squid', 'vomit', 'damaging impalement', 'medical horror', 'mental disabilities', 'body horror', 'brother-brother incest', 'castration', 'under-18 teens', 'catching diseases', 'destructive pregnancies', 'scat', 'horses', 'infibulation', 'woundfucking', 'bears/lions', 'fish/sharks', 'sex with your dead body', 'father-son incest', 'dolphins/whales', 'insects/spiders', 'reptiles/amphibians', 'parasites/leeches', 'gross insects', 'slugs/snails/worms', 'living insertions', 'receiving penetration from animal', 'vore (hard)', 'receiving oral sex from animal', 'cats', 'grandparent/grandchild incest', 'monkeys/apes', 'cuddling', 'rodents', 'dogs', 'goats/sheep', 'performing oral sex on animal', 'crushing (live creatures)', 'penetrating an animal', 'pigs', 'executions', 'cannibalism/meatslaves', 'rotting dead bodies', 'babies/toddlers', 'pre-puberty children']
    let i = 0;
    // Create radio buttons for each animal
    lines.forEach(l => {
        const lineContainer = document.createElement('div');
        lineContainer.className = 'line-container'; // Add a class for styling
        
        const label = document.createElement('label');
        label.textContent = l;
        
        const likeRadio = document.createElement('input');
        likeRadio.type = 'radio';
        likeRadio.name = 'kink' + i; // Use a unique name for each line
        likeRadio.value = 'like ' + l;
        
        const loveRadio = document.createElement('input');
        loveRadio.type = 'radio';
        loveRadio.name = 'kink' + i; // Use the same name for grouping
        loveRadio.value = 'love ' + l;
        
        label.appendChild(document.createTextNode(" "));
        label.appendChild(likeRadio);
        label.appendChild(document.createTextNode("like"));
        label.appendChild(loveRadio);
        label.appendChild(document.createTextNode("love"));
        
        lineContainer.appendChild(label);
        radioForm.appendChild(lineContainer);
        radioForm.appendChild(document.createElement('br'));
        i++;
    });

    return radioForm;
}

//function getHelp(){ 
    // creats a list of all the strings that's help for the hover over buttons
    // read or write ?!!?!?!?!??!?!?!
    // }
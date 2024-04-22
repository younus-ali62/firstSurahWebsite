

export class SurahModel{

    constructor(id,videoUrl,lecture,ayat){
        this.id=id;
        this.videoUrl=videoUrl;
        this.lecture=lecture;
        this.ayat=ayat;
    }

    static getAll(){
        return surahYaseen;
    }
}

const surahYaseen=[
    new SurahModel(1,"https://www.shiatv.net/embed.php?viewkey=640757011&autoplay=0","Lecture 1","Ayat : 1-12"),
    new SurahModel(2,"https://www.shiatv.net/embed.php?viewkey=193419969&autoplay=0","Lecture 2","Ayat : 13-27"),
    new SurahModel(3,"https://www.shiatv.net/embed.php?viewkey=858535502&autoplay=0","Lecture 3","Ayat : 28-36"),
    new SurahModel(4,"https://www.shiatv.net/embed.php?viewkey=186078732&autoplay=0","Lecture 4","Ayat : 37-47"),
    new SurahModel(5,"https://www.shiatv.net/embed.php?viewkey=1256959860&autoplay=0","Lecture 5","Ayat : 48-61"),
    new SurahModel(6,"https://www.shiatv.net/embed.php?viewkey=640543592&autoplay=0","Lecture 6","Ayat : 62-70"),
    new SurahModel(7,"https://www.shiatv.net/embed.php?viewkey=1322573827&autoplay=0","Lecture 7","Ayat : 71-83")
]
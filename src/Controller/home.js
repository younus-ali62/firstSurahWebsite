import {SurahModel} from "../Model/surahYaseen.js"

export const getHomeInterface=(req,res)=>{
  
    res.render("home",{
        surahYaseen:SurahModel.getAll()
    });
}